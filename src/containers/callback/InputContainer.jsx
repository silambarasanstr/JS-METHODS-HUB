// InputContainer.jsx

import React, { useState } from "react";
import InputBox from "../../components/callback/InputBox";

const InputContainer = () => {
  const [text, setText] = useState("");

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <div className="min-h-screen mt-5 bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Input Component
        </h1>

        <InputBox value={text} onChange={handleChange} />

        <div className="p-3 mt-4 border rounded-lg bg-gray-50">
          <p className="text-gray-700">
            <span className="font-semibold">You typed:</span>{" "}
            {text || "Nothing yet..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InputContainer;
