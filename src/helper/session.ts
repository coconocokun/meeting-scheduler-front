import { cookies } from "next/headers";

export async function getSessionData() {
  const encrypedSession = cookies().get("session")?.value;
}
