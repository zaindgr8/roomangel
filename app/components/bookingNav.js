import React, { useState } from "react";
import { format, isAfter, isBefore } from "date-fns"; // Use date-fns to manipulate dates

export default function Navbar({ bookings, setFilteredBookings }) {
  const [activeTab, setActiveTab] = useState("Future Bookings");

  // Function to filter future bookings
  const handleFutureBookings = () => {
    setActiveTab("Future Bookings");
    const filtered = bookings.filter((booking) =>
      isAfter(new Date(booking.date), new Date())
    );
    setFilteredBookings(filtered);
  };

  // Function to filter historic bookings
  const handleHistoricBookings = () => {
    setActiveTab("Historic Bookings");
    const filtered = bookings.filter((booking) =>
      isBefore(new Date(booking.date), new Date())
    );
    setFilteredBookings(filtered);
  };

  return (
    <div className="flex space-x-4 bg-white rounded-lg shadow-md m-4 border-[#1f5453] border-2 p-2">
      <button
        onClick={handleFutureBookings}
        className={`py-2 px-4 border ${
          activeTab === "Future Bookings"
            ? "bg-blue-500 text-white"
            : "bg-white text-blue-500"
        } rounded-md`}
      >
        Future Bookings
      </button>
      <button
        onClick={handleHistoricBookings}
        className={`py-2 px-4 border ${
          activeTab === "Historic Bookings"
            ? "bg-blue-500 text-white"
            : "bg-white text-blue-500"
        } rounded-md`}
      >
        Historic Bookings
      </button>
    </div>
  );
}
