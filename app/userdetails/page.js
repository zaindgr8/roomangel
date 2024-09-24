"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar"; // If you have a sidebar, otherwise remove this import

export default function UserList() {
  const [users, setUsers] = useState([
    {
      id: "001",
      name: "John Doe",
      email: "john@example.com",
      contact: "123-456-7890",
    },
    {
      id: "002",
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "098-765-4321",
    },
    {
      id: "003",
      name: "Mike Johnson",
      email: "mike@example.com",
      contact: "456-123-7890",
    },
  ]);

  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleRowClick = (id) => {
    setSelectedUserId(id); // Highlight the selected row
  };

  const handleAddUser = () => {
    const newUserId = (users.length + 1).toString().padStart(3, "0");
    const newUser = {
      id: newUserId,
      name: `New User ${newUserId}`,
      email: `newuser${newUserId}@example.com`,
      contact: "000-000-0000",
    };
    setUsers([...users, newUser]); // Add the new user to the users list
  };

  return (
    <div className="flex">
      <Sidebar />{" "}
      <div className="flex flex-col items-center justify-center m-8">
        <div className="bg-white shadow-md border-[#1f5453] border-1 rounded-lg p-8 w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-6 text-center">User List</h2>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">User ID</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">
                  Contact Number
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  onClick={() => handleRowClick(user.id)}
                  className={`cursor-pointer ${
                    selectedUserId === user.id ? "bg-gray-300" : ""
                  }`}
                >
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.contact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {selectedUserId && (
            <div className="mt-4 text-center">
              <p className="mb-4">
                Highlight Row:{" "}
                {users.find((user) => user.id === selectedUserId)?.name}
              </p>
              <div className="space-x-4">
                <button className="btn mt-2 btn-primary btn-lg md:w-100">
                  Update
                </button>
                <button className="btn mt-2 btn-primary btn-lg md:w-100">
                  Delete
                </button>
              </div>
            </div>
          )}

          {/* Add New User Button */}
          <div className="mt-8 text-center">
            <button onClick={handleAddUser} className="btn btn-primary btn-lg">
              Add New User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
