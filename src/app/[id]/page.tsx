async function getData(meetingId: string) {
  const res = await fetch(`http://localhost:5000/${meetingId}/meetingInfo`);

  if (!res.ok) {
    throw new Error("Failed...");
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getData(params.id);

  return (
    <div className="container mx-auto px-4">
      <h1 className="font-bold text-4xl text-center mt-8 mb-4">Meeting Information</h1>
      <div className="grid grid-cols-2 gap-2">
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
        <div className="bg-gray-100 p-2">
          <p className="text-lg font-semibold">Preferred Time:</p>
          <p className="text-sm">{data.host.preferred_time}</p>
        </div>
      </div>
    </div>
  );
}
