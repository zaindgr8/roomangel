"use client";
import React, { useState } from "react";

export default function FormComponent({ onNext }) {
  // Dummy data object with updated field names
  const [formData, setFormData] = useState({
    dayPrice: "100",
    dublinInformation: "Located in central Dublin",
    fileInformation: "No files attached",
    hotelInformation: "Grand Plaza Hotel",
    hotelRateInformation: "5-star rating",
    marketRateDayInformation: "$200 per day",
    marketRateInformation: "Average market rate for similar hotels",
    marketRateOtherInformation: "Special rates during holidays",
    placeInformation: "City Center, Dublin",
    placeRateDayInformation: "$250 per day",
    placeRateInformation: "Special rates available",
    rateInformation: "High season rates apply",
    reviewInformation: "Excellent service, 4.5/5 reviews",
    roomDayRateInformation: "$150 per room per day",
    roomInformation: "Deluxe Suite, 2 beds",
    roomRateInformation: "$170 per night",
    roomAmenities: {
      freeWifi: false,
      airConditioning: false,
      miniBar: false,
      coffeeTea: false,
      bathrobe: false,
      flatScreenTV: false,
      privateBathroom: false,
      safe: false,
    },
  });

  // Handling form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      roomAmenities: {
        ...prevState.roomAmenities,
        [name]: checked,
      },
    }));
  };
  return (
    <div className="bg-white rounded-lg shadow-md m-4 border-[#1f5453] border-2">
      <div className=" p-2 justify-between gap-4 flex ">
        {/* Hotel Details Section */}
        <div className="p-3 bg-white rounded-lg w-full shadow-md">
          <h2 className="text-xl font-semibold mb-4">Room Details</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Day Price</label>
              <input
                type="text"
                name="dayPrice"
                value={formData.dayPrice}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md hover:border-[#1f5453]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Dublin Information</label>
              <input
                type="text"
                name="dublinInformation"
                value={formData.dublinInformation}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md hover:border-[#1f5453]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">File Information</label>
              <input
                type="text"
                name="fileInformation"
                value={formData.fileInformation}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md hover:border-[#1f5453]"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">
                Market Rate Day Information
              </label>
              <input
                type="text"
                name="marketRateDayInformation"
                value={formData.marketRateDayInformation}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md hover:border-[#1f5453]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Market Rate Information
              </label>
              <input
                type="text"
                name="marketRateInformation"
                value={formData.marketRateInformation}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md hover:border-[#1f5453]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Market Rate Other Information
              </label>
              <input
                type="text"
                name="marketRateOtherInformation"
                value={formData.marketRateOtherInformation}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md hover:border-[#1f5453]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Place Information</label>
              <input
                type="text"
                name="placeInformation"
                value={formData.placeInformation}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md hover:border-[#1f5453]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Place Rate Day Information
              </label>
              <input
                type="text"
                name="placeRateDayInformation"
                value={formData.placeRateDayInformation}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md hover:border-[#1f5453]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Place Rate Information
              </label>
              <input
                type="text"
                name="placeRateInformation"
                value={formData.placeRateInformation}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md hover:border-[#1f5453]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Rate Information</label>
              <input
                type="text"
                name="rateInformation"
                value={formData.rateInformation}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md hover:border-[#1f5453]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Review Information</label>
              <input
                type="text"
                name="reviewInformation"
                value={formData.reviewInformation}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md hover:border-[#1f5453]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Room Per Day Rate Information
              </label>
              <input
                type="text"
                name="roomDayRateInformation"
                value={formData.roomDayRateInformation}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md hover:border-[#1f5453]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Room Information</label>
              <input
                type="text"
                name="roomInformation"
                value={formData.roomInformation}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md hover:border-[#1f5453]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Room Rate Information
              </label>
              <input
                type="text"
                name="roomRateInformation"
                value={formData.roomRateInformation}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md hover:border-[#1f5453]"
              />
            </div>
          </form>
        </div>

        {/* Amenities Section */}
        <div className="p-3 bg-white rounded-lg shadow-md w-full">
          <h2 className="text-xl font-semibold mb-4">Room Amenities</h2>
          <form>
            <div className="mb-2">
              <label className="block">
                <input
                  type="checkbox"
                  name="freeWifi"
                  checked={formData.roomAmenities.freeWifi}
                  onChange={handleCheckboxChange}
                />{" "}
                Free Wifi
              </label>
            </div>
            <div className="mb-2">
              <label className="block">
                <input
                  type="checkbox"
                  name="airConditioning"
                  checked={formData.roomAmenities.airConditioning}
                  onChange={handleCheckboxChange}
                />{" "}
                Air Conditioning
              </label>
            </div>
            <div className="mb-2">
              <label className="block">
                <input
                  type="checkbox"
                  name="miniBar"
                  checked={formData.roomAmenities.miniBar}
                  onChange={handleCheckboxChange}
                />{" "}
                Mini Bar
              </label>
            </div>
            <div className="mb-2">
              <label className="block">
                <input
                  type="checkbox"
                  name="coffeeTea"
                  checked={formData.roomAmenities.coffeeTea}
                  onChange={handleCheckboxChange}
                />{" "}
                Coffee/Tea
              </label>
            </div>
            <div className="mb-2">
              <label className="block">
                <input
                  type="checkbox"
                  name="bathrobe"
                  checked={formData.roomAmenities.bathrobe}
                  onChange={handleCheckboxChange}
                />{" "}
                Bathrobe
              </label>
            </div>
            <div className="mb-2">
              <label className="block">
                <input
                  type="checkbox"
                  name="flatScreenTV"
                  checked={formData.roomAmenities.flatScreenTV}
                  onChange={handleCheckboxChange}
                />{" "}
                Flat Screen TV
              </label>
            </div>
            <div className="mb-2">
              <label className="block">
                <input
                  type="checkbox"
                  name="privateBathroom"
                  checked={formData.roomAmenities.privateBathroom}
                  onChange={handleCheckboxChange}
                />{" "}
                Private Bathroom
              </label>
            </div>
            <div className="mb-2">
              <label className="block">
                <input
                  type="checkbox"
                  name="safe"
                  checked={formData.roomAmenities.safe}
                  onChange={handleCheckboxChange}
                />{" "}
                Safe
              </label>
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-around p-2">
        <button type="submit" className="btn btn-primary btn-lg w-30">
          Save Changes
        </button>
        <button type="reset" className="btn btn-primary btn-lg w-30">
          Ignore Changes
        </button>
      </div>
    </div>
  );
}
