import Timetable from "@/helper/timetable";
import { Meeting } from "@/types";
import { forwardRef } from "react";
import ParticipantsView from "./participants-view";


function parseMeetingRoom(meeting: Meeting) {
  const table = Timetable.createTable<{ name: string, index: number }[]>(() => []);

  const participants = [{
    name: meeting.host.name,
    preferred_time: Timetable.toArray(meeting.host.preferred_time),
    index: 0
  }];

  for (let i = 0; i < meeting.guest.length; i++) {
    const guest = meeting.guest[i];
    participants.push({
      name: guest.name,
      preferred_time: Timetable.toArray(guest.preferred_time),
      index: i + 1,
    });
  }

  for (let row = 0; row < table.length; row++) {
    for (let col = 0; col < table[row].length; col++) {
      table[row][col] = participants.filter(p => p.preferred_time[row][col]);
    }
  }

  return table;
}


interface Props {
  value: boolean[][];
  meeting: Meeting;
  editMode?: boolean;
}

export const Table = forwardRef<HTMLTableElement, Props>(({ value, meeting, editMode }, ref) => {
  const meetingRoom = parseMeetingRoom(meeting);
  return (
    <table ref={ref} className="timetable">
      <thead>
        <tr>
          <th></th>
          <th className="text-rose-600">Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th className="text-blue-700">Sat</th>
        </tr>
      </thead>
      <tbody>
        {value.map((row, rowIndex) => (
          <tr key={rowIndex} className="group/row">
            <th>
              <div className={rowIndex % 4 ? 'opacity-0 group-hover/row:opacity-100' : 'contents'}>
                <span>{rowIndex >> 1}</span>
                :
                <span>{((rowIndex % 2) * 30).toString().padStart(2, '0')}</span>
              </div>
            </th>
            {row.map((_, columnIndex) => (
              <td
                key={columnIndex}
                className={value[rowIndex][columnIndex] ? "selected group" : "group"}
                style={{
                  "--num-participants": meetingRoom[rowIndex][columnIndex].length
                } as any}>
                {meetingRoom[rowIndex][columnIndex].length > 0 &&
                  <ParticipantsView
                    participants={meetingRoom[rowIndex][columnIndex]}
                    animated={!editMode} />
                }
              </td>
            ))}
          </tr>
        ))}
        <tr>
          <th>
            <div>
              <span>24</span>:<span>00</span>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
  );
});
