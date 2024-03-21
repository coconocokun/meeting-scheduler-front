import { Meeting } from "@/types";



export namespace API {
  export async function getMeeting(meetingId: string) {
    // FIXME URL
    const res = await fetch(`${process.env.MY_URL}/api/meeting/${meetingId}`, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error("Failed...");
    }

    return res.json() as any as Meeting;
  }
}