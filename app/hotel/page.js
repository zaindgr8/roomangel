// pages/hotel.js

export default function HotelForm() {
  return (
    <div className="flex items-center justify-center m-5 min-h-screen ">
      <div className="bg-white  p-4 border-[#1f5453] border-1  shadow-lg rounded-lg w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Update Hotel Details
        </h2>
        <form>
          <div className="mb-4">
            <label className="block font-medium mb-2">Hotel Name</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="Enter Hotel Name"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2">Hotel Main Contact</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="Enter Hotel Main Contact"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2">Booking Engine</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="Enter Booking Engine"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2">
              Booking Engine Contact Email
            </label>
            <input
              type="email"
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="Enter Booking Engine Contact Email"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2">
              Booking Engine Contact Phone
            </label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="Enter Booking Engine Contact Phone"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2">
              Hotel Finance Contact
            </label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="Enter Hotel Finance Contact"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2">
              Hotel Brand Program
            </label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="Enter Hotel Brand Program"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2">
              Hotel Brand Contact Email
            </label>
            <input
              type="email"
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="Enter Hotel Brand Contact Email"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2">
              Room Angel Membership Renewal Date
            </label>
            <input
              type="date"
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>

          <div className="flex justify-center mt-4">
            <button className="btn mt-2 btn-primary btn-lg md:w-100">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
