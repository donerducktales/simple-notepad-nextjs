import { useEffect, useState } from "react";

const useViewPortSize = () => {
   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

   const handleSize = () => {
      setWindowSize({
         width: window.innerWidth,
         height: window.innerHeight
      });
   };

   useEffect(() => {
      handleSize();

      window.addEventListener("resize", handleSize);

      return () => window.removeEventListener("resize", handleSize);
   }, []);

   return windowSize;
};

export default useViewPortSize;