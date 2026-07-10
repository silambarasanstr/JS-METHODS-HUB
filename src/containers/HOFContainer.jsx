import React from "react";
import WithLogger from "../components/hof/WithLogger";
import UseLogger from "../components/hof/useLogger";

//  <div>function takes another function as argument</div>
// <div>function returns another function</div>

// Base Components
const Display = ({ text }) => <h2>{text}</h2>;

const LoggedComponent = WithLogger(Display);

const HOFContainer = () => {
  UseLogger("HooksContainer");
  return (
    <div>
      <LoggedComponent text="Logger Example" />
    </div>
  );
};

export default HOFContainer;
