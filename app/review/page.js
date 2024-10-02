"use client";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaStar } from "react-icons/fa"; // Importing star icon

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
    totalReviews: 4379,
    overallHotelScore: 9.0,
    overallSummary: "Excellent",
    valueForMoney: 8.5,
    staff: 9.0,
    cleanliness: 9.0,
    comfort: 9.5,
    facilities: 9.5,
    location: 8.5,
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
    totalReviews: 3127,
    overallHotelScore: 8.7,
    overallSummary: "Very Good",
    valueForMoney: 8.0,
    staff: 8.5,
    cleanliness: 8.7,
    comfort: 9.0,
    facilities: 8.8,
    location: 8.2,
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
    totalReviews: 5264,
    overallHotelScore: 9.2,
    overallSummary: "Outstanding",
    valueForMoney: 9.0,
    staff: 9.3,
    cleanliness: 9.5,
    comfort: 9.8,
    facilities: 9.4,
    location: 9.0,
  },
];

// Function to render stars based on rating
const renderStars = (rating) => {
  const stars = [];
  const roundedRating = Math.round(rating); // Round to the nearest whole number for full stars
  for (let i = 0; i < roundedRating; i++) {
    stars.push(<FaStar key={i} className="text-yellow-500" />); // Render stars
  }
  return stars;
};

export default function ReviewPage() {
  const [reviewsData, setReviewsData] = useState(initialReviewsData);
  // Set the first review as the default highlighted review
  const [highlightedReview, setHighlightedReview] = useState(
    initialReviewsData[0]
  );

  const handleClick = (review) => {
    setHighlightedReview(review);
  };

  return (
    <div className="flex">
      <Sidebar /> {/* Sidebar on the left */}
      <div className="flex-grow min-h-screen p-6">
        <div className="min-h-screen flex flex-col mt-20 mb-4 mx-2 rounded-xl md:m-8 sm:m-2 p-2">
          {/* Always Visible Section for Summary Details */}
          <div className="">
            <div className="border-[#1f5453] bg-[#f8f9fa] rounded-lg border-2 p-4 mb-6">
              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col">
                  <label className="mb-1">Total Reviews</label>
                  <input
                    type="text"
                    value={
                      highlightedReview ? highlightedReview.totalReviews : ""
                    }
                    className="border p-2 rounded-md"
                    readOnly
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1">Overall hotel Score</label>
                  <input
                    type="text"
                    value={
                      highlightedReview
                        ? highlightedReview.overallHotelScore
                        : ""
                    }
                    className="border p-2 rounded-md"
                    readOnly
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1">Overall Rating</label>
                  <input
                    type="text"
                    value={
                      highlightedReview ? highlightedReview.overallSummary : ""
                    }
                    className="border p-2 rounded-md"
                    readOnly
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1">Value For Money</label>
                  <input
                    type="text"
                    value={
                      highlightedReview ? highlightedReview.valueForMoney : ""
                    }
                    className="border p-2 rounded-md"
                    readOnly
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1">Staff </label>
                  <input
                    type="text"
                    value={highlightedReview ? highlightedReview.staff : ""}
                    className="border p-2 rounded-md"
                    readOnly
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1"> Cleanliness</label>
                  <input
                    type="text"
                    value={
                      highlightedReview ? highlightedReview.cleanliness : ""
                    }
                    className="border p-2 rounded-md"
                    readOnly
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1">Comfort</label>
                  <input
                    type="text"
                    value={highlightedReview ? highlightedReview.comfort : ""}
                    className="border p-2 rounded-md"
                    readOnly
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1">Facilities</label>
                  <input
                    type="text"
                    value={
                      highlightedReview ? highlightedReview.facilities : ""
                    }
                    className="border p-2 rounded-md"
                    readOnly
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1">Location</label>
                  <input
                    type="text"
                    value={highlightedReview ? highlightedReview.location : ""}
                    className="border p-2 rounded-md"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Review List */}
          <div className="border-[#1f5453] p-1 border-2 rounded-lg mb-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase">
                    Guest Name
                  </th>
                  <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap">
                    Review Score {/* Ensures it stays on one line */}
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
                    <td className="p-2">{review.score}</td>{" "}
                    {/* Removed stars here */}
                    <td className="p-2">{review.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Conditionally Render Full Details and Reply Section */}
          {highlightedReview && (
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div className="border-[#1f5453] bg-[#f8f9fa] rounded-lg border-2 p-4">
                <h3 className="mb-4">Review Details</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="mb-1">Review Score</label>
                    <input
                      type="text"
                      value={highlightedReview.score}
                      className="border p-2 rounded-md"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1">Guest Name</label>
                    <input
                      type="text"
                      value={highlightedReview.guestName}
                      className="border p-2 rounded-md"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1">Date of Stay</label>
                    <input
                      type="text"
                      value={highlightedReview.dateOfStay}
                      className="border p-2 rounded-md"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1"># of Nights</label>
                    <input
                      type="text"
                      value={highlightedReview.nights}
                      className="border p-2 rounded-md"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1">Reservation #</label>
                    <input
                      type="text"
                      value={highlightedReview.reservationNumber}
                      className="border p-2 rounded-md"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1">Room Type</label>
                    <input
                      type="text"
                      value={highlightedReview.roomType}
                      className="border p-2 rounded-md"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1">Room #</label>
                    <input
                      type="text"
                      value={highlightedReview.roomNumber}
                      className="border p-2 rounded-md"
                      readOnly
                    />
                  </div>
                  {/* Add the Rating Section Here */}
                  <div className="flex flex-col">
                    <label className="mb-1">Rating</label>
                    <div className="flex items-center space-x-2">
                      {renderStars(highlightedReview.score)}
                      <span>{highlightedReview.score}</span>
                    </div>{" "}
                    {/* Added flex here for stars and score */}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="mb-1">Review Highlight</label>
                  <textarea
                    className="w-full border rounded-md p-2"
                    value={highlightedReview.text}
                    readOnly
                  ></textarea>
                </div>
              </div>

              {/* Hotel's response */}
              <div className="border-[#1f5453] bg-[#f8f9fa] rounded-lg border-2 p-4">
                <h2 className="text-lg font-bold mb-2">Hotel's Response</h2>
                <textarea
                  rows="6"
                  className="w-full p-2 border rounded-md"
                  placeholder="Write your response here..."
                />
                <button className="bg-[#1f5453] text-white px-4 py-2 rounded mt-2">
                  Submit Response
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
