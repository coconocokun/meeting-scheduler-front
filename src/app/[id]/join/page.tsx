import SubmitScheduleForm from "@/components/submit-schedule-form";
import { API } from "@/helper/api";
import "@/styles/timetable.css";

export default async function Page({ params }: { params: { id: string } }) {
  const meeting = await API.getMeeting(params.id);
  return <SubmitScheduleForm meeting={meeting} />
}
