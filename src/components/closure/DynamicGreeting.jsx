import React from "react";

const createGreeting = (name) => {
  return () => {
    alert(`Hello ${name}`);
  };
};

const DynamicGreeting = () => {
  const users = ["Simbu", "Raj", "Kumar"];

  return (
    <div className="w-full max-w-md p-6 bg-white shadow-md rounded-2xl ">
      <div className="text-center ">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">
          Closure Example (Users)
        </h1>

        <p className="mb-6 text-gray-500">
          Click any user to see closure working
        </p>

        <div className="flex justify-center gap-4">
          {users.map((user) => (
            <button
              key={user}
              onClick={createGreeting(user)}
              className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-xl"
            >
              {user}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicGreeting;
