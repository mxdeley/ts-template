"use client";

import { useState } from "react";

const BasicEmail = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  async function sendEmail() {
    try {
      await fetch("/api/basic-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subject, body }),
      });
      setSubject("");
      setBody("");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 p-4 bg-gray-900">
      <div className="w-full max-w-md">
        <h1 className="text-xl font-semibold mb-2">Subject</h1>
        <input
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="w-full max-w-md">
        <h1 className="text-xl font-semibold mb-2">Body</h1>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          value={body}
          onChange={(e) => setBody(e.target.value)}
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
