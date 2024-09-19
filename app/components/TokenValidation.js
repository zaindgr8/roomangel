import { useState } from "react";
import Link from "next/link";
export default function TokenValidation({ onNext }) {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock validation success
    onNext({ email, token });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Token</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary btn-lg w-100">
        Register
      </button>
      <div className="flex justify-center">
        <Link
          href={"/signin"}
          className="block text-sm font-medium underline text-green-500"
        >
          Already a member? Sign in
        </Link>
      </div>
    </form>
  );
}
