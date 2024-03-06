import { connectDB, getMeetingInfo } from "@/helper/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const db = await connectDB();
  const res = await getMeetingInfo(db, 14);
  return NextResponse.json(res, { status: 200 });
}
