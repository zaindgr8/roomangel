import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const userData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager" },
];

const UserTable = () => {
  const [users, setUsers] = useState(userData);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleRowClick = (user) => {
    setSelectedUser(user.id === selectedUser ? null : user.id);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setSelectedUser(null);
  };

  const handleUpdate = (id) => {
    // Placeholder for update functionality
    console.log(`Update user with id: ${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              className={`cursor-pointer ${
                selectedUser === user.id ? "bg-blue-100" : ""
              }`}
              onClick={() => handleRowClick(user)}
            >
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedUser && (
        <div className="mt-4 flex justify-end space-x-2">
          <Button
            onClick={() => handleUpdate(selectedUser)}
            className="bg-blue-500 hover:bg-blue-700"
          >
            Update
          </Button>
          <Button
            onClick={() => handleDelete(selectedUser)}
            className="bg-red-500 hover:bg-red-700"
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserTable;
