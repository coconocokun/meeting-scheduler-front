"use client";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [timezone, setTimezone] = useState("");
  const [duration, setDuration] = useState("");
  const [preferredtime, setPreferredtime] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const dataToSend = {
      title: title,
      description: desc,
      timezone: timezone,
      meetingLength: duration,
      hostName: username,
      hostPassword: password,
      hostPreferredTime: preferredtime,
    };
    const res = await fetch("http://localhost:5000/createMeeting", {
      method: "POST",
      headers: {
        accept: "*/*",
        "content-type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });
    const resJson = await res.json();
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

  const handlePreferredTime = (e: any) => {
    setPreferredtime(e.target.value);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="font-bold text-4xl text-center mt-8 mb-4">Create Page</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Host name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="ex) gavin"
              className="block w-full mt-1 border border-gray-300 rounded-md py-1 px-2 shadow-sm "
              value={username}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Host password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePwChange}
              className="block w-full mt-1 border border-gray-300 rounded-md py-1 px-2 shadow-sm"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="title" className="block text-sm font-medium text-gray-600">
              Meeting title
            </label>
            <input
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
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Meeting description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="ex) This meeting is for only private"
              className="block w-full mt-1 border border-gray-300 rounded-md py-1 px-2 shadow-sm"
              value={desc}
              onChange={handleDescription}
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="timezone" className="block text-sm font-medium text-gray-600">
              Timezone
            </label>
            <input
              type="text"
              name="timezone"
              id="timezone"
              placeholder="ex) UTS"
              className="block w-full mt-1 border border-gray-300 rounded-md py-1 px-2 shadow-sm"
              value={timezone}
              onChange={handleTimezone}
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="duration" className="block text-sm font-medium text-gray-600">
              Meeting duration
            </label>
            <input
              type="text"
              name="duration"
              id="duration"
              placeholder="ex) 30"
              className="block w-full mt-1 border border-gray-300 rounded-md py-1 px-2 shadow-sm"
              value={duration}
              onChange={handleDuration}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="preferredtime" className="block text-sm font-medium text-gray-600">
              Preferred time
            </label>
            <input
              type="text"
              name="preferredtime"
              id="preferredtime"
              placeholder="ex) 1,2,3,4,5"
              className="block w-full mt-1 border border-gray-300 rounded-md py-1 px-2 shadow-sm"
              value={preferredtime}
              onChange={handlePreferredTime}
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-900 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
