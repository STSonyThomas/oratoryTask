"use client"
import { useState } from 'react';


export default function NavBar() {
    const [activePane,setActivePane] = useState("jobs");
  return (
    <nav className="bg-white shadow py-4 px-16 flex justify-between items-center">
      <div className='flex flex-row space-x-16'>
      <h1 
      className={`text-md  transition-colors duration-300 cursor-pointer ${activePane==="jobs"?"text-orange-400":"text-gray-600"}`}
      onClick={() => setActivePane('jobs')}
      >Job Listing</h1>
      <h1 
      className={`text-md  transition-colors duration-300 cursor-pointer ${activePane==="applicants"?"text-orange-400":"text-gray-600"}`}
      onClick={() => setActivePane('applicants')}
      >Applicants</h1>
      <h1 
      className={`text-md  transition-colors duration-300 cursor-pointer ${activePane==="match"?"text-orange-400":"text-gray-600"}`}
      onClick={() => setActivePane('match')}
      >Match</h1>
      <h1 
      className={`text-md  transition-colors duration-300 cursor-pointer ${activePane==="messages"?"text-orange-400":"text-gray-600"}`}
      onClick={() => setActivePane('messages')}
      >Messages</h1>
      </div>
      
    </nav>
  );
}
