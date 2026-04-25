// components/recursion/Factorial.jsx
import React, { useState } from "react";

const Factorial = () => {
  const [num, setNum] = useState(5);

  const factorial = (n) => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  };

  return (
    <div className="max-w-md p-6 space-y-3 bg-white shadow-md rounded-2xl">
      <div className="font-bold uppercase text-md">Factorial</div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
        className="p-2 text-gray-600 border border-gray-300 rounded"
      />
      <p className="text-gray-600">Result: {factorial(num)}</p>
    </div>
  );
};

export default Factorial;
