"use client";
import React, { useState } from "react";
import one from "../../public/room/pexels-digitalbuggu-172872.jpg";
import two from "../../public/room/pexels-enginakyurt-1579253.jpg";
import three from "../../public/room/pexels-fotoaibe-1743231.jpg";
import four from "../../public/room/pexels-pixabay-164595.jpg";
import five from "../../public/room/pexels-pixabay-237371.jpg";
import six from "../../public/room/pexels-pixabay-262048.jpg";
import seven from "../../public/room/pexels-pixabay-271624.jpg";
import eight from "../../public/room/pexels-pixabay-271639.jpg";

export default function ImageUploadRoom() {
  // Pre-load the predefined images in the initial state
  const [images, setImages] = useState([
    { src: one.src, name: "pexels-digitalbuggu-172872" },
    { src: two.src, name: "pexels-enginakyurt-1579253" },
    { src: three.src, name: "pexels-fotoaibe-1743231" },
    { src: four.src, name: "pexels-pixabay-164595" },
    { src: five.src, name: "pexels-pixabay-237371" },
    { src: six.src, name: "pexels-pixabay-262048" },
    { src: seven.src, name: "pexels-pixabay-271624" },
    { src: eight.src, name: "pexels-pixabay-271639" },
  ]);
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
      updatedImages.splice(highlightedIndex, 1); // Remove the image at the highlighted index
      setImages(updatedImages);
      setHighlightedIndex(null); // Reset highlighted index after removal
    }
  };

  return (
    <div
      className="p-6 bg-white rounded-lg shadow-md m-4 border-[#1f5453] border-2"
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
              highlightedIndex === index
                ? "btn btn-primary btn-lg"
                : "border-[#1f5453]"
            }`}
            onClick={() => setHighlightedIndex(index)}
          >
            <img
              src={image.src}
              alt={`Uploaded ${image.name}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}

        {/* Add image placeholder */}
        <div
          className="flex items-center justify-center border-dashed border-2 border-[#1f5453] rounded-md cursor-pointer"
          onClick={triggerFileInput}
        >
          <input
            type="file"
            className="hidden"
            ref={fileInputRef}
            onChange={handleInputChange}
          />
          <span className="border-[#1f5453]">Add Image</span>
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
