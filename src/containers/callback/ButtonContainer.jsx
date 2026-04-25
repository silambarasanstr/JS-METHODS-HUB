import React from "react";
import Button from "../../components/callback/Button";
const ButtonContainer = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <Button onClick={handleClick} />
    </div>
  );
};

export default ButtonContainer;
