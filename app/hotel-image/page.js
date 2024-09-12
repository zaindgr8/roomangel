"use client";
import React, { useState } from "react";
import FormComponent from "../components/HotelForm";
import ImageUploadComponent from "../components/ImageUploadHotel";
import Sidebar from "../components/Sidebar";
export default function Home() {
  const [step, setStep] = useState(2);

  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto">
        {/* Top bar with buttons */}
        <div className="flex  bg-white  p-1 pt-2 pb-2 border-[#1f5453] border-1 mx-6 shadow-lg rounded-lg mt-20 md:px-6  justify-between items-center ">
          <button
            className={`md:px-4 p-2.5 md:py-2 text-white rounded-md ${
              step === 1 ? "btn btn-primary btn-lg " : "bg-gray-400"
            }`}
            onClick={() => setStep(1)}
          >
            Hotel Details
          </button>
          <button
            className={`md:px-4 p-2.5 md:py-2 text-white rounded-md ${
              step === 2 ? "btn btn-primary btn-lg " : "bg-gray-400"
            }`}
            onClick={() => setStep(2)}
          >
            Hotel Images
          </button>
        </div>

        {/* Display the corresponding section based on the selected button */}
        {step === 1 && <FormComponent />}
        {step === 2 && <ImageUploadComponent />}
      </div>
    </div>
  );
}
