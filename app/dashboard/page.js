"use client";
import React, { useState } from "react";
import Navbar from "../components/bookingNav";
import ChartsSection from "../components/ChartsSection";
import TableSection from "../components/TableSection";
import Sidebar from "../components/Sidebar";

export default function page() {
  // Initial bookings data
  const initialBookingsData = [
    {
      id: 1,
      date: "2023-09-15", // Future date
      roomType: "Suite",
      rate: "$200",
      offer: "No Offer",
      loyalty: "Yes",
      other: "Additional info",
    },
    {
      id: 2,
      date: "2023-08-05", // Past date
      roomType: "Standard",
      rate: "$150",
      offer: "10% Off",
      loyalty: "No",
      other: "Special request",
    },
    {
      id: 3,
      date: "2024-011-05", // Past date
      roomType: "Standard",
      rate: "$150",
      offer: "10% Off",
      loyalty: "No",
      other: "Special request",
    },
  ];

  // State to manage filtered bookings
  const [filteredBookings, setFilteredBookings] = useState(initialBookingsData);

  return (
    <div className="flex">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-grow min-h-screen bg-white rounded-lg shadow-md m-4 border-[#1f5453] border-2">
        {/* Navbar (Future and Historic Bookings) */}
        <Navbar
          bookings={initialBookingsData}
          setFilteredBookings={setFilteredBookings}
        />

        {/* Charts Section */}
        <div className="mt-8 px-4">
          <ChartsSection />
        </div>

        {/* Table Section */}
        <div className="mt-8 px-4">
          <TableSection bookings={filteredBookings} />
        </div>
      </div>
    </div>
  );
}
