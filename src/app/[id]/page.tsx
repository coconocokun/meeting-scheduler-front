import { Table } from "../../components/Timetable";
import "../create/create.css";

async function getData(meetingId: string) {
  const res = await fetch(`http://localhost:5000/${meetingId}/meetingInfo`);

  if (!res.ok) {
    throw new Error("Failed...");
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getData(params.id);

  // TODO Complete the function below
  // NOTE (This is your homework)
  const convertor = (preferredTime: string) => {
    // "0,1,2,3,32,33"
    let strArray = preferredTime.split(",");
    // strArray --> ["0","1","2","3","32","33"]
    let numArray = strArray.map(Number);
    // numArray --> [0,1,2,3,32,33]
    // 6 rows, 7 columns
    let booleanArray: boolean[][] = [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ];
    for (let i = 0; i < numArray.length; i++) {
      const element = numArray[i];
      // element --> 0
      let j = Math.floor(element / 6);
      let k = element % 6;
      booleanArray[k][j] = true;
    }
    return booleanArray;
  };

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
        <div className="bg-gray-100 p-2 col-span-2 mb-8">
          <p className="text-lg font-semibold">Preferred Time:</p>
          <p className="text-sm">{convertor(data.host.preferred_time)}</p>
          <Table value={convertor(data.host.preferred_time)} />
        </div>
      </div>
    </div>
  );
}
