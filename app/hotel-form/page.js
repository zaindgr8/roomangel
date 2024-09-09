"use client";
import React, { useState } from "react";
import FormComponent from "../components/HotelForm";
import ImageUploadComponent from "../components/ImageUploadHotel";

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <div className="container mx-auto">
      {/* Top bar with buttons */}
      <div className="flex pt-20 justify-evenly items-center">
        <button
          className={`px-4 py-2 text-white rounded-md ${
            step === 1 ? "bg-blue-500" : "bg-gray-400"
          }`}
          onClick={() => setStep(1)}
        >
          Fill Hotel Form
        </button>
        <button
          className={`px-4 py-2 text-white rounded-md ${
            step === 2 ? "bg-blue-500" : "bg-gray-400"
          }`}
          onClick={() => setStep(2)}
        >
          Upload Hotel Images
        </button>
      </div>

      {/* Display the corresponding section based on the selected button */}
      {step === 1 && <FormComponent />}
      {step === 2 && <ImageUploadComponent />}
    </div>
  );
}
