"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
export default function page({ onNext }) {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock validation success
    onNext({ email, token });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              password
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Forgot Password
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-lg w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
