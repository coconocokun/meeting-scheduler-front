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
  const hrows = await db.query(
    "SELECT name, preferred_time FROM host WHERE meeting_id = ?",
    [id]
  );
  const host = (hrows as any)[0];

  return {
    ...meeting,
    host: {
      ...host,
    },
  };
}

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
  const hrows = await db.query(
    "INSERT INTO host (name, password, meeting_id, preferred_time) VALUES (?, ?, ?, ?)",
    [hostName, hostPassword, meetingId, preferredTime]
  );

  return meetingId;
}
