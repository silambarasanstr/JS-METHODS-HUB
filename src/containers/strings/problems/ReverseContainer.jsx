import React, { useState, useMemo } from "react";
import ReverseView from "../../../components/strings/ReverseView";

const ReverseContainer = () => {
  const [input, setInput] = useState("");

  // 🔥 Optimized: avoid recalculating on every render
  const reversed = useMemo(() => {
    return input.split("").reverse().join("");
  }, [input]);

  return (
    <div className="min-h-screen bg-gray-100 ">
      <ReverseView
        input={input}
        reversed={reversed}
        onChange={setInput}
      />
    </div>
  );
};

export default ReverseContainer;