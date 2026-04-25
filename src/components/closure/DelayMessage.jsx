import React from "react";

const delayedMessage = (msg) => {
  return () => {
    setTimeout(() => {
      alert(msg);
    }, 2000);
  };
};

const DelayMessage = () => {
  return (
    <div className="w-full max-w-md p-6 bg-white shadow-md rounded-2xl ">
      <div className="text-center ">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">Delay Closure</h1>

        <button
          onClick={delayedMessage("Waited 2 seconds 😎")}
          className="px-6 py-2 text-white bg-purple-500 rounded-xl"
        >
          Show After 2s
        </button>
      </div>
    </div>
  );
};

export default DelayMessage;
