import mysql, { ServerlessMysql } from "serverless-mysql";

export async function connectDB() {
  const db = mysql({
    config: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USERNAME,
      database: process.env.DATABASE_NAME,
      password: process.env.DATABASE_PASSWORD,
      ssl: {
        rejectUnauthorized: true,
      },
    },
  });
  await db.connect();
  return db;
}

export async function getMeetingInfo(db: ServerlessMysql, id: number) {
  // 1. Get meeting info from meeting table
  const rows = await db.query("SELECT * FROM meeting WHERE id = ?", [id]);
  const meeting = (rows as any)[0];

  // 2. Get host info from host table
  const hrows = await db.query("SELECT name, preferred_time FROM host WHERE meeting_id = ?", [id]);
  const host = (hrows as any)[0];

  return {
    ...meeting,
    host: {
      ...host,
    },
  };
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
  db: ServerlessMysql,
  title: string,
  description: string,
  timezone: string,
  meetingLength: number,
  hostName: string,
  hostPassword: string,
  preferredTime: string
) {
  // 1. Insert meeting
  const rows = await db.query(
    "INSERT INTO meeting (title, description, timezone, meeting_length) VALUES (?, ?, ?, ?)",
    [title, description, timezone, meetingLength]
  );
  const meetingId = (rows as any).insertId;

  // 2. Insert host
  const hrows = await db.query("INSERT INTO host (name, password, meeting_id, preferred_time) VALUES (?, ?, ?, ?)", [
    hostName,
    hostPassword,
    meetingId,
    preferredTime,
  ]);

  return meetingId;
}

export async function changeMeeting(
  db: ServerlessMysql,
  meetingId: number,
  title: string,
  description: string,
  timezone: string,
  meetingLength: number,
  hostName: string,
  preferredTime: string
) {
  const morws = await db.query(
    "UPDATE meeting SET title = ?, description = ?, timezone = ?, meeting_length = ? WHERE id = ?",
    [title, description, timezone, meetingLength, meetingId]
  );

  // host --> id, name, password, preferred_time, meeting_id
  const hrows = await db.query("UPDATE host SET name = ?, preferred_time = ? WHERE meeting_id = ?", [
    hostName,
    preferredTime,
    meetingId,
  ]);

  return;
}

export async function createPreferredTime(db: ServerlessMysql, meetingId: number, name: string, preferredTime: string) {
  // 1. Insert guest data into guest table
  const rows = await db.query("INSERT INTO guest (name, meeting_id, preferred_time) VALUES (?, ?, ?)", [
    name,
    meetingId,
    preferredTime,
  ]);
  return;
}

export async function checkLogin(db: ServerlessMysql, meetingId: number, user: string, password: string) {
  const rows = await db.query("SELECT * FROM host WHERE name = ? AND password = ? AND meeting_id = ?", [
    user,
    password,
    meetingId,
  ]);

  if ((rows as any).length > 0) {
    return true;
  } else {
    return false;
  }
}
