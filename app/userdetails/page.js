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
  const [isAddingUser, setIsAddingUser] = useState(false); // Toggle form visibility
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const handleRowClick = (id) => {
    setSelectedUserId(id); // Highlight the selected row
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddUser = () => {
    setIsAddingUser(true); // Show the form for adding a user
  };

  const handleSaveUser = () => {
    if (newUser.name && newUser.email && newUser.contact) {
      const newUserId = (users.length + 1).toString().padStart(3, "0");
      const userToAdd = { id: newUserId, ...newUser };
      setUsers([...users, userToAdd]); // Add the new user to the list
      setNewUser({ name: "", email: "", contact: "" }); // Clear input fields
      setIsAddingUser(false); // Hide the form after adding
    } else {
      alert("All fields must be filled!");
    }
  };

  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex flex-col w-full max-w-4xl m-8">
        <div className="bg-white shadow-md border-[#1f5453] border-1 rounded-lg p-8 w-full">
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

          {/* Form for Adding New User */}
          {isAddingUser && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Add New User</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={newUser.name}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={newUser.email}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  name="contact"
                  placeholder="Enter contact number"
                  value={newUser.contact}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
              </div>
              <div className="mt-4 space-x-4">
                <button
                  onClick={handleSaveUser}
                  className="btn btn-primary btn-lg"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsAddingUser(false)}
                  className="btn btn-secondary btn-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Add New User Button */}
          {!isAddingUser && (
            <div className="mt-8 text-center">
              <button
                onClick={handleAddUser}
                className="btn btn-primary btn-lg"
              >
                Add New User
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
