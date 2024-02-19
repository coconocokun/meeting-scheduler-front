"use client";
import React, { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";

// Define the page component
const Page: NextPage = () => {
  // Define the state variables for the input fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingDescription, setMeetingDescription] = useState("");
  const [meetingDuration, setMeetingDuration] = useState("");
  const [timezone, setTimezone] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  // Define the handler function for the form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default browser behavior
    event.preventDefault();

    // Do something with the input values, such as sending them to an API
    console.log(username, password, meetingTitle, meetingDescription, meetingDuration, timezone, preferredTime);

    // Clear the input fields
    setUsername("");
    setPassword("");
    setMeetingTitle("");
    setMeetingDescription("");
    setMeetingDuration("");
    setTimezone("");
    setPreferredTime("");
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Tester 1</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="meetingTitle" className="block text-sm font-medium text-gray-700">
              Meeting Title
            </label>
            <input
              type="text"
              id="meetingTitle"
              name="meetingTitle"
              value={meetingTitle}
              onChange={(e) => setMeetingTitle(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="meetingDescription" className="block text-sm font-medium text-gray-700">
              Meeting Description
            </label>
            <textarea
              id="meetingDescription"
              name="meetingDescription"
              value={meetingDescription}
              onChange={(e) => setMeetingDescription(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              rows={4}
            ></textarea>
          </div>
          <div className="col-span-1">
            <label htmlFor="meetingDuration" className="block text-sm font-medium text-gray-700">
              Meeting Duration (minutes)
            </label>
            <input
              type="number"
              id="meetingDuration"
              name="meetingDuration"
              value={meetingDuration}
              onChange={(e) => setMeetingDuration(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
              Timezone
            </label>
            <select
              id="timezone"
              name="timezone"
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select a timezone</option>
              <option value="UTC">UTC</option>
              <option value="KST">KST</option>
              <option value="EST">EST</option>
              <option value="PST">PST</option>
              <option value="CET">CET</option>
            </select>
          </div>
          <div className="col-span-2">
            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700">
              Preferred Time
            </label>
            <input
              type="time"
              id="preferredTime"
              name="preferredTime"
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

// Export the page component
export default Page;
