import ClipboardButton from "@/components/clipboard-button";
import { API } from "@/helper/api";
import Timetable from "@/helper/timetable";
import { Table } from "../../components/Timetable";
import "../timetable.css";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await API.getMeeting(params.id);

  return (
    <main className="bg-gray-100 pb-8 pt-24">
      <div className="container mx-auto px-4">
        <section
          className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md border-gray-200"
        >
          <h1 className="text-3xl font-bold text-center my-5">{data.title}</h1>
          <p className="text-sm break-words my-10">{data.description}</p>
          <dl className="flex justify-center items-center gap-1 text-lg my-10">
            <dt className="after:content-[':']">Host</dt>
            <dd className="font-bold">{data.host.name}</dd>
          </dl>
          <dl className="flex justify-center items-center gap-1 text-sm my-10">
            <dt className="after:content-[':']">Meeting duration</dt>
            <dd className="break-words">{Math.floor(data.meeting_length / 60)}:{(data.meeting_length % 60).toString().padStart(2, '0')}</dd>
          </dl>
          <dl className="flex justify-center items-center gap-1 text-sm my-10">
            <dt className="after:content-[':']">Timezone</dt>
            <dd>{data.timezone}</dd>
          </dl>
          <Table value={Timetable.toArray(data.host.preferred_time)} />
          <button className="bg-indigo-600 text-white font-bold px-3 py-2 rounded hover:bg-indigo-500 active:bg-indigo-500 active:shadow-inner active:shadow-black my-10 mx-auto block">Submit my schedule</button>
        </section>
        <ClipboardButton className="block my-20 mx-auto border px-12 py-2 border-indigo-600 rounded text-indigo-600 hover:bg-indigo-50 active:shadow-inner active:shadow-indigo-300"
          content={`/${params.id}`}
          successMessage="URL copied"
          asAbsoluteURL
        >Copy the meeting link</ClipboardButton>
      </div>
    </main>
  );
}
