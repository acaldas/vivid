import React, { useMemo, useRef } from "react";
import Image from "next/image";
import VImg from "../public/images/vivid_loader.png";
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
    if (!ref.current || !mousePos || loading) {
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
  }, [ref, mousePos, loading]);

  return (
    <div
      ref={ref}
      className={`pointer-events-none fixed top-0 bottom-0 z-0 flex-col justify-center items-center left-0 right-0 overflow-hidden transition-opacity flex ${
        loading ? "" : "lg:opacity-100 opacity-0"
      }`}
    >
      <h2 className="h-[86px] mb-[40px]"></h2>
      <div
        className={loading ? "max-w-[90%]" : "duration-1000"}
        style={{
          transition:
            "opacity 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 6s ease-out",
          opacity: loading ? 1 : 0.5,
          transform: `translate(${target[0]}px,0px)`,
          paddingLeft: "70px",
        }}
      >
        <Image src={VImg} width="600" height="400" alt="V" priority />
      </div>
      <h2
        className="loading-text overflow-hidden px-[40px] h-[86px] mt-[40px] lg:text-[56px] text-[40px] font-bold leading-[0.95em] transition-opacity duration-700"
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
