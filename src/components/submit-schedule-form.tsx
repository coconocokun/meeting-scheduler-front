"use client";

import Timetable from "@/helper/timetable";
import type { Meeting } from "@/types";
import type { ClassValue } from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useTableDragSelect } from "use-table-drag-select";
import { Table } from "./Timetable";



type SubmitScheduleFormProps = {
  className?: ClassValue;
  meeting: Meeting;
}


export default function SubmitScheduleForm(props: SubmitScheduleFormProps) {

  const router = useRouter();

  const [name, setName] = useState("");

  const [ref, tableValue] = useTableDragSelect(Timetable.createTable());

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (/^([a-zA-Z0-9 ])$/.test(name)) {
      alert("Host name not acceptable. Use alphabets and numbers only.");
      return;
    }
    const usernameLength = name.trim().length;
    if (usernameLength < 2) {
      alert("Host name is too short");
      return;
    }
    if (usernameLength > 200) {
      alert("Host name is too long");
      return;
    }

    const preferredTime = Timetable.toString(tableValue);
    if (preferredTime.length === 0) {
      alert("Please select preffered time");
      return;
    }

    const dataToSend = {
      name: name,
      preferredTime,
    };

    const res = await fetch(`/api/meeting/${props.meeting.id}`, {
      method: "POST",
      headers: {
        accept: "*/*",
        "content-type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });
    const resJson = (await res.json()) as { meetingId: `${number}` };
    router.push(`/${resJson.meetingId}`);
  };

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  return (
    <main className="bg-gray-100 pb-8 pt-24">
      <div className="container mx-auto px-4">
        <h1 className="font-bold text-4xl text-center mt-8 mb-4">Submit my schedule</h1>
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md border-gray-200"
          autoComplete="off"
        >
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600"
              >
                Your Name
              </label>
              <input
                required
                type="text"
                name="username"
                id="username"
                placeholder="ex) gavin"
                className="block w-full mt-1 border border-gray-300 rounded-md py-1 px-2 shadow-sm"
                autoComplete="off"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div>
              <label
                htmlFor="preferredtime"
                className="block text-sm font-medium text-gray-600"
              >
                Preferred time
              </label>
              <Table ref={ref} value={tableValue} meeting={props.meeting} editMode />
            </div>
          </div>
          <footer className="flex justify-end mt-4 gap-5">
            <Link
              href="."
              className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-900 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-900 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </footer>
        </form>
      </div>
    </main>
  );
}