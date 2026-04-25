import React from "react";

const Button = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="px-4 py-2 text-white bg-blue-500 rounded"
      >
        Click Me
      </button>
    </div>
  );
};

export default Button;
