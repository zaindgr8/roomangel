"use client";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar"; // If you have a sidebar, otherwise remove this import

export default function HotelDropdownPage() {
  const [selectedHotel, setSelectedHotel] = useState("Hotel 1");

  // Handle the change of the dropdown selection
  const handleChange = (event) => {
    setSelectedHotel(event.target.value);
  };

  return (
    <div className="flex">
      <Sidebar />{" "}
      {/* Optional: Sidebar, you can remove this line if not needed */}
      <div className="container mx-auto mt-20">
        <div className="bg-white p-4 shadow-lg rounded-lg mx-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Hotel
          </label>
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
            value={selectedHotel}
            onChange={handleChange}
          >
            <option value="Hotel 1">Hotel 1</option>
            <option value="Hotel 2">Hotel 2</option>
            <option value="Hotel 3">Hotel 3</option>
            <option value="Hotel 4">Hotel 4</option>
          </select>
        </div>
      </div>
    </div>
  );
}
