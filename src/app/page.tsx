"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Bell, Grid } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="flex items-center justify-between p-3 bg-white shadow-md dark:bg-gray-900">
     
      <div className="flex items-center">
        <Image src="/mainlogo.png" alt="Logo" width={30} height={30} />
        <span className="ml-2 text-xl font-semibold text-gray-700 dark:text-gray-200">
          phoenix
        </span>
      </div>

      
<div className="relative w-1/3">
  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
  <input
    type="text"
    placeholder="     Search"
    className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
  />
</div>




      <div className="flex items-center space-x-4">
       
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

       
        <Bell className="text-gray-600 dark:text-gray-300" />

   
        <Grid className="text-gray-600 dark:text-gray-300" />


        <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={30} height={30} />
         </div>
      </div>
    </nav>
  );
}
