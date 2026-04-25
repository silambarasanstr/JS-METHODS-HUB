// components/recursion/ReverseString.jsx
import React, { useState } from "react";

const ReverseString = () => {
  const [text, setText] = useState("");

  const reverse = (str) => {
    if (str === "") return "";
    return reverse(str.slice(1)) + str[0];
  };

  return (
    <div className="max-w-md p-6 space-y-3 bg-white shadow-md rounded-2xl">
      <div className="font-bold uppercase text-md">
        Recursion Reverse String
      </div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a text"
        className="p-2 text-gray-600 border border-gray-300 rounded"
      />
      <p className="text-gray-600">Result : {reverse(text)}</p>
    </div>
  );
};

export default ReverseString;
