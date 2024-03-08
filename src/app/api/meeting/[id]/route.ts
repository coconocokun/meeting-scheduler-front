import {
  changeMeeting,
  connectDB,
  createPreferredTime,
  getMeetingInfo,
} from "@/helper/db";
import { NextResponse } from "next/server";

// For all
export async function GET(request: Request, context: { params: any }) {
  try {
    const db = await connectDB();
    const res = await getMeetingInfo(db, parseInt(context.params.id));

    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err }, { status: 400 });
  }
}

// Only for guest (guest submits preferred time)
export async function POST(request: Request, context: { params: any }) {
  try {
    const db = await connectDB();
    const data = await request.json();
    await createPreferredTime(
      db,
      parseInt(context.params.id),
      data.name,
      data.preferredTime
    );
    return NextResponse.json({ meetingId: context.params.id }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err }, { status: 400 });
  }
}
