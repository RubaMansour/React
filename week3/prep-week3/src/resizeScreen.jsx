import { useState, useEffect, useDebugValue } from "react";

function useResizeScreen() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
return () => window.removeEventListener("resize", handleResize);
  }, []);

  useDebugValue(`Width: ${size.width}, Height: ${size.height}`);

  return size;
}


export default useResizeScreen;
