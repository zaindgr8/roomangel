"use client";
import React from "react";

export default function FormComponent({ onNext }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md m-4 border-[#1f5453] border-2">
      <h2 className="text-xl font-semibold mb-4">Hotel Details Form</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Hotel Name</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location/Address</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Star Rating</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Facilities</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Check-in/Check-out Time</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Number of Rooms</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contact Information</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Hotel Description</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <button type="submit" className="btn btn-primary btn-lg w-100">
          Submit
        </button>
      </form>
    </div>
  );
}
