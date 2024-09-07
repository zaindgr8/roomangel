"use client";
import React, { useState } from "react";

export default function ImageUploadComponent() {
  const [images, setImages] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const fileInputRef = React.useRef(null);

  // Image validation function
  const validateImage = (file) => {
    const validFormats = ["image/jpeg", "image/png", "image/bmp", "image/jpg"];
    const isValidFormat = validFormats.includes(file.type);
    const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB limit
    return isValidFormat && isValidSize;
  };

  // Handle image upload via file input or drag and drop
  const handleImageUpload = (file) => {
    if (!validateImage(file)) {
      alert(
        "Please upload a valid image file (jpg, jpeg, png, bmp) smaller than 5MB."
      );
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImages([...images, { src: reader.result, name: file.name }]);
    };
    reader.readAsDataURL(file);
  };

  // Handle file input change
  const handleInputChange = (event) => {
    const file = event.target.files[0];
    if (file) handleImageUpload(file);
  };

  // Handle drag and drop image upload
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) handleImageUpload(file);
  };

  // Function to trigger file input click
  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Remove selected image
  const removeImage = () => {
    if (highlightedIndex !== null) {
      const updatedImages = [...images];
      updatedImages.splice(highlightedIndex, 1); // Move to deleted folder logic goes here
      setImages(updatedImages);
      setHighlightedIndex(null);
    }
  };

  return (
    <div
      className="p-6 bg-white rounded-lg shadow-md mt-10 md:m-20 border-[#1f5453] border-2"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <h2 className="text-xl font-semibold mb-4">Image Upload Section</h2>

      {/* Image grid */}
      <div className="grid grid-cols-3 gap-4 overflow-auto h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative border-2 rounded-md ${
              highlightedIndex === index ? "border-red-500" : "border-gray-300"
            }`}
            onClick={() => setHighlightedIndex(index)}
          >
            <img
              src={image.src}
              alt={`Uploaded ${image.name}`}
              className="w-full h-32 object-cover rounded-md"
            />
          </div>
        ))}

        {/* Add image placeholder */}
        <div
          className="flex items-center justify-center border-dashed border-2 border-gray-300 rounded-md cursor-pointer"
          onClick={triggerFileInput}
        >
          <input
            type="file"
            className="hidden"
            ref={fileInputRef}
            onChange={handleInputChange}
          />
          <span className="text-gray-500">Add Image</span>
        </div>
      </div>

      {/* Add and Remove buttons */}
      <div className="mt-6 flex justify-between">
        <button
          type="button"
          className="btn btn-primary"
          onClick={triggerFileInput}
        >
          Add Image
        </button>

        <button
          type="button"
          className={`btn btn-danger ${
            highlightedIndex === null ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={removeImage}
          disabled={highlightedIndex === null}
        >
          Remove Image
        </button>
      </div>
    </div>
  );
}
