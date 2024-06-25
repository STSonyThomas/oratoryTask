"use client";

import { useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaSuitcase } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
import { PiHandCoinsThin } from "react-icons/pi";

export default function TogglePane() {
  const [activePane, setActivePane] = useState("jobs");

  return (
    <div className="flex justify-between items-center bg-white mx-4">
      <div className="flex h-10 w-20 bg-gray-200 text-orange-500 justify-center items-center">Logo</div>
      <div className="flex justify-between items-center bg-white space-x-4 text-xs max-w-md rounded-full border border-gray-200 p-2 mb-4">
        <button
          className={`flex flex-row gap-x-1 items-center px-4 py-2 rounded-full transition-colors duration-300 ${
            activePane === "jobs" ? "bg-orange-600 border-solid border-orange-500 outline outline-orange-400 text-white" : "text-gray-600"
          }`}
          onClick={() => setActivePane("jobs")}
        >
          <FaSuitcase className={`${
            activePane === "jobs" ? " text-white" : "text-gray-500"
          }`}/>Jobs
        </button>
        <button
          className={`flex flex-row gap-x-1 px-4 py-2 rounded-full transition-colors duration-300 ${
            activePane === "messages"
              ? "bg-orange-600 text-white outline outline-orange-400"
              : "text-gray-600"
          }`}
          onClick={() => setActivePane("messages")}
        >
          <LuMessageSquare className={`${
            activePane === "messages" ? " text-white bg-orange-600" : "text-gray-500"
          } h-4 w-4`}/> Messages
        </button>
        <button
          className={`flex flex-row gap-x-1 px-4 py-2 rounded-full transition-colors duration-300 ${
            activePane === "payments"
              ? "bg-orange-600 text-white outline outline-orange-400"
              : "text-gray-600"
          }`}
          onClick={() => setActivePane("payments")}
        >
          <PiHandCoinsThin className={`${
            activePane === "payments" ? " text-white" : "text-gray-500"
          } h-4 w-4`}/> Payments
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-600" />
        <img src="/atlassian-logo.png" alt="atlassian" className="h-6 w-6 rounded-full" />
        <IoIosArrowDown className="h-3 w-3"/>
      </div>
    </div>
  );
}
