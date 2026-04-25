import { useEffect } from "react";

const useLogger = (name) => {
  useEffect(() => {
    console.log("Component Mounted:", name);
  }, [name]);

  return <div>useLogger 
    Components</div>;
};

export default useLogger;
