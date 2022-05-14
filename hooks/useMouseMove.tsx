import { useEffect, useState } from "react";

const useMouseMove = () => {
  const [pos, setPos] = useState<[number, number]>();

  useEffect(() => {
    if (typeof window === undefined) {
      return;
    }

    const update = (e: MouseEvent) => {
      setPos([e.x, e.y]);
    };
    window.addEventListener("mousemove", update);
    return () => {
      window.removeEventListener("mousemove", update);
    };
  }, []);

  return pos;
};

export default useMouseMove;
