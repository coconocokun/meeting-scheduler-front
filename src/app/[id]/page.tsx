import Timetable from "@/helper/timetable";
import { Table } from "../../components/Timetable";
import "../timetable.css";

async function getData(meetingId: string) {
  // FIXME URL
  const res = await fetch(`${process.env.MY_URL}/api/meeting/${meetingId}`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed...");
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getData(params.id);

  return (
    <main className="bg-gray-100 pb-8 pt-24">
      <div className="container mx-auto px-4">
        <h1 className="font-bold text-4xl text-center mt-8 mb-4">Meeting Information</h1>
        <section
          className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md border-gray-200"
        >
          <div className="grid grid-cols-2 gap-2 break-words">
            <div className="bg-gray-100 p-2">
              <p className="text-lg font-semibold">Title:</p>
              <p className="text-sm">{data.title}</p>
            </div>
            <div className="bg-gray-100 p-2">
              <p className="text-lg font-semibold">Description:</p>
              <p className="text-sm">{data.description}</p>
            </div>
            <div className="bg-gray-100 p-2">
              <p className="text-lg font-semibold">Timezone:</p>
              <p className="text-sm">{data.timezone}</p>
            </div>
            <div className="bg-gray-100 p-2">
              <p className="text-lg font-semibold">Host Name:</p>
              <p className="text-sm">{data.host.name}</p>
            </div>
            <div className="bg-gray-100 p-2 col-span-2 mb-8">
              <p className="text-lg font-semibold">Preferred Time:</p>
              <p className="text-sm">{Timetable.toArray(data.host.preferred_time)}</p>
              <Table value={Timetable.toArray(data.host.preferred_time)} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
