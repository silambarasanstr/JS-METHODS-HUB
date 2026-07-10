import React, { useState } from "react";

const changeTheme = (color, setBg) => {
  return () => {
    setBg(color);
  };
};

const ThemeSwitch = () => {
  const [bg, setBg] = useState("bg-gray-100");

  return (
    <div
      className={`w-full max-w-md p-6 shadow-md rounded-2xl ${
        bg === "red"
          ? "bg-red-200"
          : bg === "blue"
            ? "bg-blue-200"
            : "bg-gray-100"
      }`}
    >
      <div className="p-8 text-center bg-white shadow-lg rounded-2xl">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">Theme Closure</h1>

        <div className="flex justify-center gap-4">
          <button
            onClick={changeTheme("red", setBg)}
            className="px-4 py-2 text-white bg-red-500 rounded-xl"
          >
            Red
          </button>

          <button
            onClick={changeTheme("blue", setBg)}
            className="px-4 py-2 text-white bg-blue-500 rounded-xl"
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitch;
