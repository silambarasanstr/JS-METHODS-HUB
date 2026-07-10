import { useEffect } from "react";

const useLogger = (name) => {
  useEffect(() => {
    console.log("Component Mounted:", name);

    return () => {
      console.log("Component Unmounted:", name);
    };
  }, [name]);
};

export default useLogger;
