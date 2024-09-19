// pages/invalid-token.js

import Link from "next/link";

export default function InvalidToken() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-500">
          This email and token combination are not valid.
        </h2>
        <p className="text-gray-600 mb-6">
          Please contact Room Angel for support.
        </p>
        <Link
          href="mailto:registrationsupport@roomangel.org"
          className="btn btn-primary btn-lg w-100"
        >
          Contact Now
        </Link>
      </div>
    </div>
  );
}
