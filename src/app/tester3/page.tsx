"use client";

import { Table } from "../../components/Timetable";
import { useTableDragSelect } from "use-table-drag-select";
import "./index.css";

export default function Page() {
  const convertor = (value: boolean[][]) => {
    let str = "";
    for (let i = 0; i < value.length; i++) {
      for (let j = 0; j < value[i].length; j++) {
        const element = value[i][j];
        if (element == true) {
          const num = 6 * j + i;
          str = str + num + ",";
        }
      }
    }
    str = str.slice(0, -1);
    console.log(str);
  };

  const [ref, value] = useTableDragSelect([
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
  ]);

  convertor(value);

  return (
    <div>
      <Table ref={ref} value={value} />
    </div>
  );
}
