import React from 'react'

const createGreeting = (name) => {
  console.log("function created");

  return () => {
    alert(`Hello ${name}`);
  };
};

const Greeting = () => {

  const greet = createGreeting("Simbu");


  return (
     <div className="w-full max-w-md p-6 bg-white shadow-md rounded-2xl ">
      <div className="text-center ">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">
          Closure Example
        </h1>

        <p className="mb-6 text-gray-500">
          Click the button to see closure in action
        </p>

        <button
          onClick={greet}
          className="px-6 py-2 text-white transition duration-300 bg-blue-500 hover:bg-blue-600 rounded-xl"
        >
          Click Closure
        </button>
      </div>
    </div>
  )
}

export default Greeting
