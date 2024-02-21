"use client";

import { Table } from "../../components/Timetable";
import { useTableDragSelect } from "use-table-drag-select";
import "./index.css";

export default function Page() {
  const convertor = (value: boolean[][]) => {
    for (let i = 0; i < value.length; i++) {
      for (let j = 0; j < value[i].length; j++) {
        const element = value[i][j];
        if (element == true) {
          const num = 6 * j + i;
          console.log(num);
        }
      }
    }
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
      <h1>
        <a href="https://github.com/jeonbyeongmin/use-table-drag-select">useTableDragSelect </a>
      </h1>

      <Table ref={ref} value={value} />
    </div>
  );
}
