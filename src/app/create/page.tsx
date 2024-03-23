"use client";
import { Table } from "@/components/Timetable";
import Timetable from "@/helper/timetable";
import "@/styles/timetable.css";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import timezones from "timezones.json";
import { useTableDragSelect } from "use-table-drag-select";


const durations = (() => {
  const durations = [];
  for (let i = 30; i <= 240; i += 30) {
    durations.push(i);
  }
  return durations;
})();

export default function Page() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [timezone, setTimezone] = useState("Korea Standard Time");
  const [duration, setDuration] = useState(durations[0].toFixed());

  const [ref, tableValue] = useTableDragSelect(Timetable.createTable());

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (/^([a-zA-Z0-9 ])$/.test(username)) {
      alert("Host name not acceptable. Use alphabets and numbers only.");
      return;
    }
    const usernameLength = username.trim().length;
    if (usernameLength < 2) {
      alert("Host name is too short");
      return;
    }
    if (usernameLength > 200) {
      alert("Host name is too long");
      return;
    }
    if (!/^\d{4,4}$/.test(password)) {
      console.log(password)
      alert("Acceptable password is only four digit numbers");
      return;
    }

    if (/^([a-zA-Z0-9 ])$/.test(title)) {
      alert("Meeting title not acceptable. Use alphabets and numbers only.");
      return;
    }
    const titleLength = title.trim().length;
    if (titleLength < 3) {
      alert("Title is too short");
      return;
    }
    if (titleLength > 200) {
      alert("Title is too long");
      return;
    }

    const preferredTime = Timetable.toString(tableValue);
    if (preferredTime.length === 0) {
      alert("Please select preffered time");
      return;
    }

    const dataToSend = {
      title: title,
      description: desc,
      timezone: timezone,
      meetingLength: parseInt(duration),
      hostName: username,
      hostPassword: password,
      preferredTime,
    };

    const res = await fetch("/api/meeting/create", {
      method: "POST",
      headers: {
        accept: "*/*",
        "content-type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });
    const resJson = await res.json();
    router.push(`/${resJson.meetingId}`);
  };

  const handleNameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePwChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e: any) => {
    setDesc(e.target.value);
  };

  const handleTimezone = (e: any) => {
    setTimezone(e.target.value);
  };

  const handleDuration = (e: any) => {
    setDuration(e.target.value);
  };

  return (
    <main className="bg-gray-100 pb-8 pt-24">
      <div className="container mx-auto">
        <h1 className="font-bold text-4xl text-center mt-8 mb-4">Create Page</h1>
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md border-gray-200"
          autoComplete="off"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600"
              >
                Host name
              </label>
              <input
                required
                type="text"
                name="username"
                id="username"
                placeholder="ex) gavin"
                className="block w-full mt-1 border border-gray-300 rounded-md py-1 px-2 shadow-sm"
                autoComplete="off"
                value={username}
                onChange={handleNameChange}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Host password (4 digits)
              </label>
              <input
                required
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handlePwChange}
                className="block w-full mt-1 border border-gray-300 rounded-md py-1 px-2 shadow-sm"
                autoComplete="new-password"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-600"
              >
                Meeting title
              </label>
              <input
                required
                type="text"
                name="title"
                id="title"
                placeholder="ex) My meeting1"
                className="block w-full mt-1 border border-gray-300 rounded-md py-1 px-2 shadow-sm"
                value={title}
                onChange={handleTitle}
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-600"
              >
                Meeting description
              </label>
              <textarea
                required
                id="description"
                name="description"
                placeholder="ex) This meeting is for only private"
                className="block w-full mt-1 border border-gray-300 rounded-md py-1 px-2 shadow-sm"
                value={desc}
                onChange={handleDescription}
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="timezone"
                className="block text-sm font-medium text-gray-600"
              >
                Timezone
              </label>
              <select
                required
                name="timezone"
                id="timezone"
                className="block w-full mt-1 border border-gray-300 rounded-md py-1 px-2 shadow-sm"
                value={timezone}
                onChange={handleTimezone}
              >
                {timezones.map(({ value, text }, index) => <option key={index} value={value}>{text}</option>)}
              </select>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="duration"
                className="block text-sm font-medium text-gray-600"
              >
                Meeting duration
              </label>
              <select
                required
                name="duration"
                id="duration"
                className="block w-full mt-1 border border-gray-300 rounded-md py-1 px-2 shadow-sm"
                value={duration}
                onChange={handleDuration}
              >
                {durations.map(duration => <option key={duration} value={duration}>{Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}</option>)}
              </select>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="preferredtime"
                className="block text-sm font-medium text-gray-600"
              >
                Preferred time
              </label>
              <Table ref={ref} value={tableValue} />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-900 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
