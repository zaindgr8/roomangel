"use client";
import React, { useState } from "react";
import RoomForm from "../components/RoomForm";
import ImageUploadRoom from "../components/ImageUploadRoom";

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <div className="container mx-auto  ">
      {/* Top bar with buttons */}
      <div className="flex  bg-white  pt-2 pb-2 border-[#1f5453] border-1 mx-6 shadow-lg rounded-lg mt-20 px-6  justify-between items-center ">
        <button
          className={`px-4 py-2 text-white rounded-md ${
            step === 1 ? "btn btn-primary btn-lg " : "bg-gray-400"
          }`}
          onClick={() => setStep(1)}
        >
          Room Details
        </button>
        <button
          className={`px-4 py-2 text-white rounded-md ${
            step === 2 ? "btn btn-primary btn-lg  " : "bg-gray-400"
          }`}
          onClick={() => setStep(2)}
        >
          Room Images
        </button>
      </div>

      {/* Display the corresponding section based on the selected button */}
      {step === 1 && <RoomForm />}
      {step === 2 && <ImageUploadRoom />}
    </div>
  );
}
