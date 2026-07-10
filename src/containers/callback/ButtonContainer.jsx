// ButtonContainer.jsx

import React from "react";
import Button from "../../components/callback/Button";

const ButtonContainer = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="mt-5">
      <Button onClick={handleClick} title="Click Me" />
    </div>
  );
};

export default ButtonContainer;
