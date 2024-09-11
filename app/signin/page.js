"use client";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Page({ onNext }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock validation success
    onNext({ email, password });
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar /> {/* Sidebar remains on the left */}
      {/* Form Container */}
      <div className="flex-grow flex items-center justify-center">
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
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg w-full">
              Login
            </button>
            <div className="flex justify-center">
              <Link
                href={""}
                className="block text-sm font-medium underline text-green-500"
              >
                Forgot Password
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
