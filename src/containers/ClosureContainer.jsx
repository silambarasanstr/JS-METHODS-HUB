import React from "react";
import Greeting from "../components/closure/Greeting";
import DynamicGreeting from "../components/closure/DynamicGreeting";
import ProductPriceAlert from "../components/closure/ProductPriceAlert";
import ThemeSwitch from "../components/closure/ThemeSwitch";
import DelayMessage from "../components/closure/DelayMessage";

const ClosureContainer = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <Greeting />
      <DynamicGreeting />
      <ProductPriceAlert />
      <ThemeSwitch />
      <DelayMessage />
    </div>
  );
};

export default ClosureContainer;
