import React, { useState } from "react";

const Palindrome = () => {
  const [text, setText] = useState("");

  const PalindromeChecker = (str) => {
    return str === str.split("").reverse().join("");
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-2xl">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Palindrome Check
        </h1>

        <input
          type="text"
          placeholder="Enter text..."
          className="w-full p-3 mt-5 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
          onChange={(e) => setText(e.target.value)}
        />

        <div className="mt-4 text-center">
          {text && PalindromeChecker(text) && (
            <p className="font-semibold text-green-500">
              ✅ It's a palindrome!
            </p>
          )}

          {text && !PalindromeChecker(text) && (
            <p className="font-semibold text-red-500">
              ❌ It's not a palindrome.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Palindrome;
