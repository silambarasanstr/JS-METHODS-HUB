import React from "react";

const ReverseView = ({ input, reversed, onChange }) => {
  return (
    <div className="min-h-screen bg-gray-100 ">
      
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
        
        <h2 className="mb-4 text-2xl font-semibold text-center text-gray-800">
          🔄 Reverse String
        </h2>

        <input
          type="text"
          value={input}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type something..."
          className="w-full p-3 transition border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <div className="p-3 mt-4 border rounded-lg bg-gray-50">
         
          <p className="text-lg font-medium text-gray-800 break-words">
            {reversed || "😊"}
          </p>
        </div>

      </div>

    </div>
  );
};

export default ReverseView;