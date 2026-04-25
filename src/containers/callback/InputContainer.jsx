import React, { useState } from "react";
import InputBox from "../../components/callback/InputBox";

const InputContainer = () => {
  const [text, setText] = useState("");

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <div>
      <InputBox onChange={handleChange} />
      <p className="mt-2">You typed: {text}</p>
    </div>
  );
};

export default InputContainer;
