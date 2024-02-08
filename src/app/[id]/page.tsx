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
    <div>
      <h1>Data is {JSON.stringify(data)}</h1>
    </div>
  );
}
