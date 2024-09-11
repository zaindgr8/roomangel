"use client";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

// Initial reviews data
const initialReviewsData = [
  {
    id: 1,
    score: 4.5,
    guestName: "John Doe",
    dateOfStay: "2023-07-15",
    nights: 3,
    reservationNumber: "12345",
    roomType: "Suite",
    roomNumber: "101",
    description: "Amazing experience, will come again!",
    text: "The staff was very friendly, and the room was spacious and clean. Highly recommend this place!",
  },
  {
    id: 2,
    score: 3.0,
    guestName: "Jane Smith",
    dateOfStay: "2023-08-02",
    nights: 2,
    reservationNumber: "12346",
    roomType: "Standard",
    roomNumber: "202",
    description: "Good stay, but could improve cleanliness.",
    text: "The hotel was in a great location, but the room wasn't cleaned properly. Other than that, the stay was comfortable.",
  },
  {
    id: 3,
    score: 5.0,
    guestName: "Alex Johnson",
    dateOfStay: "2023-06-25",
    nights: 5,
    reservationNumber: "12347",
    roomType: "Deluxe",
    roomNumber: "303",
    description: "Fantastic stay, exceeded expectations!",
    text: "Everything was perfect, from check-in to the amenities. Highly recommend the deluxe room for an amazing experience.",
  },
];

export default function ReviewPage() {
  const [reviewsData, setReviewsData] = useState(initialReviewsData);
  const [highlightedReview, setHighlightedReview] = useState(null);

  // Handle review click
  const handleClick = (review) => {
    setHighlightedReview(review);
  };

  return (
    <div className="flex">
      <Sidebar /> {/* Sidebar on the left */}
      <div className="flex-grow min-h-screen p-6">
        <div className="min-h-screen flex flex-col mt-20 mb-4 mx-2 border-[#1f5453] border-2 rounded-xl md:m-8 sm:m-2 p-2">
          {/* Review List */}
          <div className="border-[#1f5453] p-1 border-2 rounded-lg mb-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase">
                    Guest Name
                  </th>
                  <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase">
                    Review Score
                  </th>
                  <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase">
                    Rating
                  </th>
                  <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase">
                    Review Highlight
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reviewsData.map((review) => (
                  <tr
                    key={review.id}
                    className={`cursor-pointer ${
                      highlightedReview?.id === review.id
                        ? "bg-[#1f5453] text-white"
                        : ""
                    }`}
                    onClick={() => handleClick(review)}
                  >
                    <td className="p-2">{review.guestName}</td>
                    <td className="p-2">{review.score}</td>
                    <td className="p-2">{review.nights}</td>
                    <td className="p-2">{review.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Conditionally Render Full Details and Reply Section */}
          {highlightedReview && (
            <div className="grid grid-cols-2 gap-4 mt-3">
              {/* Full Details Section */}
              <div className="border-[#1f5453] bg-[#f8f9fa] rounded-lg border-2 p-4">
                <h3 className="font-semibold mb-4">Review Details</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="font-semibold mb-1">Review Score</label>
                    <input
                      type="text"
                      value={highlightedReview.score}
                      className="border p-2 rounded-md"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-semibold mb-1">Guest Name</label>
                    <input
                      type="text"
                      value={highlightedReview.guestName}
                      className="border p-2 rounded-md"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-semibold mb-1">Date of Stay</label>
                    <input
                      type="text"
                      value={highlightedReview.dateOfStay}
                      className="border p-2 rounded-md"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-semibold mb-1"># of Nights</label>
                    <input
                      type="text"
                      value={highlightedReview.nights}
                      className="border p-2 rounded-md"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-semibold mb-1">Reservation #</label>
                    <input
                      type="text"
                      value={highlightedReview.reservationNumber}
                      className="border p-2 rounded-md"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-semibold mb-1">Room Type</label>
                    <input
                      type="text"
                      value={highlightedReview.roomType}
                      className="border p-2 rounded-md"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-semibold mb-1">Room #</label>
                    <input
                      type="text"
                      value={highlightedReview.roomNumber}
                      className="border p-2 rounded-md"
                      readOnly
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="font-semibold mb-1">Review Highlight</label>
                  <textarea
                    className="w-full border rounded-md p-2"
                    value={highlightedReview.text}
                    readOnly
                  ></textarea>
                </div>
              </div>

              {/* Reply Section */}
              <div className="p-2 border-[#1f5453] rounded-lg border-2 md:p-4">
                <h3 className="p-2 md:font-semibold">
                  Reply to Highlighted Review
                </h3>
                <textarea
                  className="w-full border rounded-md p-2"
                  rows="4"
                  placeholder="Write your reply..."
                ></textarea>
                <button
                  type="submit"
                  className="btn mt-2 btn-primary btn-lg md:w-100"
                >
                  Submit Reply
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
