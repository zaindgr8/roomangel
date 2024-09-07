import { useState } from "react";

export default function BasicDetails({ onNext, onBack }) {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("<prepopulated with the email>");
  const [mobile, setMobile] = useState("");
  const [fixed, setFixed] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ firstName, surname, mobile, fixed, company });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          First Name
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Surname
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={email}
          readOnly
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Mobile
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Fixed</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={fixed}
          onChange={(e) => setFixed(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Company
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="flex space-x-4">
        <button
          type="button"
          className="btn btn-primary btn-lg w-100"
          onClick={onBack}
        >
          Back
        </button>
        <button type="submit" className="btn btn-primary btn-lg w-100">
          Next
        </button>
      </div>
    </form>
  );
}
