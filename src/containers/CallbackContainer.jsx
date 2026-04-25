import React from "react";
import Callback from "../components/callback/Callback";
import ButtonContainer from "./callback/ButtonContainer";
import InputContainer from "./callback/InputContainer";

const CallbackContainer = () => {
  return (
    <div>
      <Callback />
      <ButtonContainer />
      <InputContainer />
    </div>
  );
};

export default CallbackContainer;
