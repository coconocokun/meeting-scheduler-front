"use client";

import React, { useState } from "react";

interface MeetingInfo {
  username: string;
  password: string;
  title: string;
  description: string;
  duration: number;
  timezone: string;
  preferredTime: string;
}

const NewMeetingPage: React.FC = () => {
  const [meetingInfo, setMeetingInfo] = useState<MeetingInfo>({
    username: "",
    password: "",
    title: "",
    description: "",
    duration: 0,
    timezone: "",
    preferredTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMeetingInfo({ ...meetingInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    // e.g., send data to an API using fetch or axios
    console.log("Meeting information:", meetingInfo);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Create Meeting</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="username" className="block text-md font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={meetingInfo.username}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-md font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={meetingInfo.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-md font-medium mb-2">
              Meeting Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={meetingInfo.title}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-md font-medium mb-2">
              Meeting Description
            </label>
            <textarea
              name="description"
              id="description"
              value={meetingInfo.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="duration" className="block text-md font-medium mb-2">
              Meeting Duration (Minutes)
            </label>
            <input
              type="number"
              name="duration"
              id="duration"
              value={meetingInfo.duration}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <input
              type="text"
              name="timezone"
              id="timezone"
              value={meetingInfo.timezone}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="preferredTime" className="block text-md font-medium mb-2">
              Preferred Meeting Time
            </label>
            <input
              type="text"
              name="preferredTime"
              id="preferredTime"
              value={meetingInfo.preferredTime}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter a specific time or a timeframe (e.g., Monday morning)"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right focus:outline-none focus:shadow-outline"
        >
          Create Meeting
        </button>
      </form>
    </div>
  );
};

export default NewMeetingPage;
