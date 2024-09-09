"use client";
import React from "react";

export default function RoomForm({ onNext }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md  m-4 border-[#1f5453] border-2">
      <h2 className="text-xl font-semibold mb-4">Room Details Form</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Room Type</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Number of Beds</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Room Size (in square meters)
          </label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Amenities</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">View</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Occupancy</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price per Night</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Availability</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <button type="submit" className="btn btn-primary btn-lg w-100">
          Submit
        </button>
      </form>
    </div>
  );
}
