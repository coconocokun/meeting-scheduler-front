import { createClient, Client } from "@libsql/client";

export async function connectDB() {
  try {
    const client = await createClient({
      url: process.env.DB_URL || "",
      authToken: process.env.DB_TOKEN,
    });
    return client;
  } catch (err) {
    throw Error("Failed to connect DB");
  }
}

export async function getMeetingInfo(db: Client, id: number) {
  try {
    // 1. Get meeting info from meeting table
    const mrs = await db.execute({
      sql: "SELECT * FROM meeting WHERE id = ?",
      args: [id],
    });
    const meeting = mrs.rows[0];

    // 2. Get host info from host table
    const hrs = await db.execute({
      sql: "SELECT name, preferred_time FROM host WHERE meeting_id = ?",
      args: [id],
    });
    const host = hrs.rows[0];

    // 3. Get guest info from guest table
    const { rows } = await db.execute({
      sql: "SELECT name, preferred_time FROM guest WHERE meeting_id = ?",
      args: [id],
    });

    return {
      ...meeting,
      host: {
        ...host,
      },
      guest: rows,
    };
  } catch (err) {
    throw Error(`Cannot get the meeting id ${id.toString()}`);
  }
}

/**
 * Create a new meeting by a new host
 * @param db Serverless MySQL database
 * @param title Meeting title
 * @param description (Optional) Description of the meeting
 * @param timezone Timezone. Default UTC
 * @param meetingLength Duration of the meeting in minutes
 * @param hostName Host name
 * @param hostPassword Host password
 * @param preferredTime Number array in string separated by ","
 * @returns meetingId number
 */
export async function createMeeting(
  db: Client,
  title: string,
  description: string,
  timezone: string,
  meetingLength: number,
  hostName: string,
  hostPassword: string,
  preferredTime: string
) {
  try {
    // 1. Insert meeting
    const rs = await db.execute({
      sql: "INSERT INTO meeting (title, description, timezone, meeting_length) VALUES (?, ?, ?, ?)",
      args: [title, description, timezone, meetingLength],
    });
    const meetingId = Number(rs.lastInsertRowid);

    // 2. Insert host
    await db.execute({
      sql: "INSERT INTO host (name, password, meeting_id, preferred_time) VALUES (?, ?, ?, ?)",
      args: [hostName, hostPassword, meetingId, preferredTime],
    });

    return meetingId;
  } catch (err) {
    throw Error("Cannot create a new meeting");
  }
}

export async function changeMeeting(
  db: Client,
  meetingId: number,
  title: string,
  description: string,
  timezone: string,
  meetingLength: number,
  hostName: string,
  preferredTime: string
) {
  try {
    await db.execute({
      sql: "UPDATE meeting SET title = ?, description = ?, timezone = ?, meeting_length = ? WHERE id = ?",
      args: [title, description, timezone, meetingLength, meetingId],
    });

    // host --> id, name, password, preferred_time, meeting_id
    await db.execute({
      sql: "UPDATE host SET name = ?, preferred_time = ? WHERE meeting_id = ?",
      args: [hostName, preferredTime, meetingId],
    });

    return;
  } catch (err) {
    throw Error("Cannot update the meeting");
  }
}

export async function createPreferredTime(
  db: Client,
  meetingId: number,
  name: string,
  preferredTime: string
) {
  try {
    // 1. Insert guest data into guest table
    await db.execute({
      sql: "INSERT INTO guest (name, meeting_id, preferred_time) VALUES (?, ?, ?)",
      args: [name, meetingId, preferredTime],
    });
    return;
  } catch (err) {
    throw Error("Failed to insert a new guest info");
  }
}

export async function checkLogin(
  db: Client,
  meetingId: number,
  user: string,
  password: string
) {
  try {
    const { rows } = await db.execute({
      sql: "SELECT * FROM host WHERE name = ? AND password = ? AND meeting_id = ?",
      args: [user, password, meetingId],
    });

    if (rows.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    throw Error("Login error");
  }
}
