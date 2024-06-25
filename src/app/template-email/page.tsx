"use client";

import { useState } from "react";

const BasicEmail = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const sendEmail = () => {
    console.log(name, age);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 p-4 bg-gray-900">
      <div className="w-full max-w-md">
        <h1 className="text-xl font-semibold mb-2">Name</h1>
        <input
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="w-full max-w-md">
        <h1 className="text-xl font-semibold mb-2">Age</h1>
        <input
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={sendEmail}
      >
        Send Email
      </button>
    </div>
  );
};

export default BasicEmail;
