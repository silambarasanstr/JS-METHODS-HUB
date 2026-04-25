import React from "react";

const InputBox = ({ onChange }) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border"
        placeholder="Type something"
      />
    </div>
  );
};

export default InputBox;
