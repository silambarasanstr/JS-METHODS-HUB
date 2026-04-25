// components/recursion/FlattenArray.jsx
import React from "react";

const FlattenArray = () => {
  const data = [1, [2, [3, 4]], 5];

  const flatten = (arr) => {
    let result = [];
    for (let item of arr) {
      if (Array.isArray(item)) {
        result = result.concat(flatten(item));
      } else {
        result.push(item);
      }
    }
    return result;
  };

  return (
    <div className="max-w-md p-6 space-y-3 bg-white shadow-md rounded-2xl">
      <div className="font-bold uppercase text-md">Recursion Flatten Array</div>

      <div className="text-gray-600">
        <p>Orginal Array : {JSON.stringify(data)}</p>
        <p>Flatten Array : {JSON.stringify(flatten(data))}</p>
      </div>
    </div>
  );
};

export default FlattenArray;
