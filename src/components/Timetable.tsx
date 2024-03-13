import { forwardRef } from "react";

interface Props {
  value: boolean[][];
}

export const Table = forwardRef<HTMLTableElement, Props>(({ value }, ref) => {
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
          <tr key={rowIndex} className="group">
            <th>
              <div className={rowIndex % 4 ? 'opacity-0 group-hover:opacity-100' : 'contents'}>
                <span>{rowIndex >> 1}</span>
                :
                <span>{((rowIndex % 2) * 30).toString().padStart(2, '0')}</span>
              </div>
            </th>
            {row.map((_, columnIndex) => (
              <td key={columnIndex} className={value[rowIndex][columnIndex] ? "selected" : ""} />
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
