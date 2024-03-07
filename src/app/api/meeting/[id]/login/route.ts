import { checkLogin, connectDB } from "@/helper/db";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// NOTE Currently only works for host, but guest login later maybe?
// FIXME Session
export async function POST(request: NextRequest, context: { params: any }) {
  const session = request.cookies.get("session")?.value;
  if (session) {
    const sessionData = await JSON.parse(session);
    if (sessionData.role == "host" && sessionData.meetingId == context.params.id) {
      return NextResponse.json({ status: "Logged in already" }, { status: 200 });
    }
  }

  const db = await connectDB();
  const data = await request.json();

  const res = await checkLogin(db, parseInt(context.params.id), data.name, data.password);
  if (res == true) {
    const sessionData = {
      user: data.name,
      meetingId: context.params.id,
      role: "host",
      httpOnly: true,
    };
    cookies().set("session", JSON.stringify(sessionData), {
      maxAge: 60 * 60, // 1 hour
      secure: false,
      path: "/",
    });
    return NextResponse.json({ stats: "Logged in" }, { status: 200 });
  } else {
    return NextResponse.json({ stats: "Bad authentication" }, { status: 200 });
  }
}
