import { changeMeeting, connectDB } from "@/helper/db";
import { NextResponse } from "next/server";

// TODO Check session for host logged in
export async function PUT(request: Request, context: { params: any }) {
  const db = await connectDB();
  const data = await request.json();
  await changeMeeting(
    db,
    parseInt(context.params.id),
    data.title,
    data.description,
    data.timezone,
    data.meetingLength,
    data.hostName,
    data.preferredTime
  );
  return NextResponse.json({ meetingId: context.params.id }, { status: 200 });
}
