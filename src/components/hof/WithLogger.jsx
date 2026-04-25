// components/hof/WithLogger.jsx
import React, { useEffect } from "react";

const WithLogger = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log("Component Mounted:", WrappedComponent.name);
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default WithLogger;
