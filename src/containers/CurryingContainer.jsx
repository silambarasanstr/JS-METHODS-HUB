import React from "react";

const CurryingContainer = () => {
  const greet = (name) => () => {
    alert(`Hello ${name}! 👋`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="mb-2 text-2xl font-bold text-center text-gray-800">
          Currying Example
        </h2>

        <p className="mb-6 text-sm text-center text-gray-500">
          Click a button to see how currying works in React.
        </p>

        <div className="flex gap-4">
          <button
            onClick={greet("Vijay")}
            className="flex-1 px-4 py-3 font-medium text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Greet Vijay
          </button>

          <button
            onClick={greet("Ajith")}
            className="flex-1 px-4 py-3 font-medium text-white transition bg-green-600 rounded-lg hover:bg-green-700"
          >
            Greet Ajith
          </button>
        </div>

        <div className="p-3 mt-6 text-sm border border-blue-100 rounded-lg bg-blue-50">
          <p className="font-medium text-blue-700">Currying Function</p>
          <code className="block mt-2 text-xs text-gray-700">
            {`const greet = (name) => () => alert(\`Hello \${name}\`);`}
          </code>
        </div>
      </div>
    </div>
  );
};

export default CurryingContainer;