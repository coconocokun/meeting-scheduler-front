"use client";
import { useState } from "react";

export default function Test() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    console.log(`Increase button clicked ${counter}`);
    setCounter(counter + 1);
  };

  const decrease = () => {
    console.log(`Decrease button clicked ${counter}`);
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Counter page</h1>
      <h2>The count is {counter}</h2>
      <button
        type="button"
        className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={increase}
      >
        Increase
      </button>
      <button
        type="button"
        className="rounded bg-red-400 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
        onClick={decrease}
      >
        Decrease
      </button>
    </div>
  );
}
