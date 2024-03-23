import { Table } from "@/components/Timetable";
import ClipboardButton from "@/components/clipboard-button";
import { API } from "@/helper/api";
import Timetable from "@/helper/timetable";
import "@/styles/timetable.css";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const meeting = await API.getMeeting(params.id);
  return (
    <main className="bg-gray-100 pb-8 pt-24">
      <div className="container mx-auto px-4">
        <section
          className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md border-gray-200"
        >
          <h1 className="text-3xl font-bold text-center my-5">{meeting.title}</h1>
          <p className="text-sm break-words my-10">{meeting.description}</p>
          <dl className="flex justify-center items-center gap-1 text-lg my-10">
            <dt className="after:content-[':']">Host</dt>
            <dd className="font-bold">{meeting.host.name}</dd>
          </dl>
          <dl className="flex justify-center items-center gap-1 text-sm my-10">
            <dt className="after:content-[':']">Meeting duration</dt>
            <dd className="break-words">{Math.floor(meeting.meeting_length / 60)}:{(meeting.meeting_length % 60).toString().padStart(2, '0')}</dd>
          </dl>
          <dl className="flex justify-center items-center gap-1 text-sm my-10">
            <dt className="after:content-[':']">Timezone</dt>
            <dd>{meeting.timezone}</dd>
          </dl>
          <dl className="flex justify-center items-center gap-1 text-sm my-10">
            <dt className="after:content-[':']">Participants</dt>
            <dd>
              <ul className="flex flex-wrap gap-1 items-center">
                <li className="px-2 py-1 rounded-full bg-slate-600 text-white">{meeting.host.name}</li>
                {meeting.guest.map((guest, idx) => <li
                  key={idx}
                  className="px-2 py-1 rounded-full bg-slate-600 text-white">
                  {guest.name}
                </li>)}
              </ul>
            </dd>
          </dl>
          <Table value={Timetable.createTable()} meeting={meeting} />
          <Link href={`/${params.id}/join`} className="mx-auto block w-fit bg-indigo-600 text-white font-bold py-2 px-5 rounded-md hover:bg-indigo-900 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50">Submit my schedule</Link>
        </section>
        <ClipboardButton className="block my-20 mx-auto border px-12 py-2 border-indigo-600 rounded text-indigo-600 hover:bg-indigo-50 active:shadow-inner active:shadow-indigo-300 focus:ring-opacity-50 focus:ring-4 focus:ring-indigo-500"
          content={`/${meeting.id}`}
          successMessage="URL copied"
          asAbsoluteURL
        >Copy the meeting link</ClipboardButton>
      </div>
    </main>
  )
}
