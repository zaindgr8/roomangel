"use client";
import Link from "next/link";
import { useState } from "react";

export default function Page({ onNext }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock validation success
    onNext({ email, password });
  };

  return (
    <div className="flex m-4">
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

            {/* Links positioned side by side */}
            <div className="flex justify-between">
              <Link
                href={""}
                className="text-sm font-medium underline text-green-500"
              >
                Forgot Password
              </Link>

              <Link
                href={"/"}
                className="text-sm font-medium underline text-green-500"
              >
                About Room Angel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
