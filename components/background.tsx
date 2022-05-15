import React, { useMemo, useRef } from "react";
import Image from "next/image";
import VImg from "../public/images/v.png";
import Text from "./text";
import useMouseMove from "../hooks/useMouseMove";

interface IProps {
  loading: boolean;
}

const MAX_DELTA = 10;

const Background: React.FC<IProps> = ({ loading }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mousePos = useMouseMove();

  const target = useMemo(() => {
    if (!ref.current || !mousePos) {
      return [0, 0];
    }

    function parse(delta: number) {
      return delta > 0
        ? Math.min(delta, MAX_DELTA)
        : Math.max(delta, -MAX_DELTA);
    }
    return [
      parse(mousePos[0] - ref.current.clientWidth / 2),
      parse(mousePos[1] - ref.current.clientHeight / 2),
    ];
  }, [ref, mousePos]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute top-0 bottom-0 z-0 flex flex-col justify-center items-center left-0 right-0 overflow-hidden transition-opacity"
    >
      <h2 className="h-[86px] mb-[40px]"></h2>
      <div
        className={loading ? "" : "duration-1000"}
        style={{
          transition:
            "opacity 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 2s ease-out",
          opacity: loading ? 1 : 0.5,
          transform: `translate(${target[0]}px,${target[1]}px)`,
        }}
      >
        <Image src={VImg} width="600" height="400" alt="V" />
      </div>
      <h2
        className="h-[86px] mt-[40px] text-[64px] leading-[0.95em] transition-opacity duration-700"
        style={{ opacity: loading ? 1 : 0 }}
      >
        <Text delay={0} finishClassName="loading">
          Loading
        </Text>
      </h2>
    </div>
  );
};

export default Background;
