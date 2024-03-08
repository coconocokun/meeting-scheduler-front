import { connectDB, createMeeting, getMeetingInfo } from "@/helper/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const db = await connectDB();
    const data = await request.json();
    const res = await createMeeting(
      db,
      data.title,
      data.description,
      data.timezone,
      data.meetingLength,
      data.hostName,
      data.hostPassword,
      data.preferredTime
    );
    return NextResponse.json({ meetingId: res }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err }, { status: 400 });
  }
}
