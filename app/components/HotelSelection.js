import { useState } from "react";

export default function HotelSelection({ onNext, onBack }) {
  const [selectedHotels, setSelectedHotels] = useState([""]);

  const addHotel = () => setSelectedHotels([...selectedHotels, ""]);

  const handleHotelChange = (index, value) => {
    const updatedHotels = [...selectedHotels];
    updatedHotels[index] = value;
    setSelectedHotels(updatedHotels);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ selectedHotels });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {selectedHotels.map((hotel, index) => (
        <div key={index}>
          <label className="block text-sm font-medium text-gray-700">
            Choose Hotel
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={hotel}
            onChange={(e) => handleHotelChange(index, e.target.value)}
            required
          >
            <option value="">Select Hotel</option>
            <option value="Hotel A">Hotel A</option>
            <option value="Hotel B">Hotel B</option>
            <option value="Hotel C">Hotel C</option>
          </select>
        </div>
      ))}

      <button
        type="button"
        className="btn btn-primary btn-lg w-100"
        onClick={addHotel}
      >
        Add Another Hotel
      </button>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Membership Fees
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md"
          value={`An annual fee of $0000 per hotel will apply`}
          readOnly
        ></textarea>
      </div>

      <div className="flex space-x-4">
        <button
          type="button"
          className="btn btn-primary btn-lg w-100"
          onClick={onBack}
        >
          Back
        </button>
        <button type="submit" className="btn btn-primary btn-lg w-100">
          Next
        </button>
      </div>
    </form>
  );
}
