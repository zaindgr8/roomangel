export default function TableSection({ bookings }) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md m-4 border-[#1f5453] border-2 p-2">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Room Type</th>
            <th className="border border-gray-300 px-4 py-2">Rate</th>
            <th className="border border-gray-300 px-4 py-2">Offer</th>
            <th className="border border-gray-300 px-4 py-2">Loyalty Y/N</th>
            <th className="border border-gray-300 px-4 py-2">Other</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td className="border border-gray-300 px-4 py-2">
                {booking.date}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {booking.roomType}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {booking.rate}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {booking.offer}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {booking.loyalty}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {booking.other}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center mt-4">
        <p>
          {bookings.length > 0
            ? "List of all Active or Historic bookings"
            : "No bookings available for the selected period"}
        </p>
      </div>
    </div>
  );
}
