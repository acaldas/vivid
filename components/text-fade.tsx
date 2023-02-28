import React, { ReactNode, useEffect, useMemo, useRef, useState } from "react";

const ANIMATION_DURATION = 3600;
const MAX_DELAY_TIME = 2000;

export interface IProps extends React.HTMLProps<HTMLParagraphElement> {}

const TextFade: React.FC<IProps> = ({ className, children, ...props }) => {
  const letters: ReactNode[] = useMemo(() => {
    if (typeof children !== "string") {
      return [];
    } else {
      return children.split("").map((l, i) => {
        const delay = 200 + Math.floor(Math.random() * MAX_DELAY_TIME);
        return (
          <span
            key={i}
            className="transition-opacity opacity-0 animate-fadeIn"
            style={{
              animationDelay: `${delay}ms`,
            }}
          >
            {l}
          </span>
        );
      });
    }
  }, [children]);
  return (
    <p className={className} {...props}>
      {letters}
    </p>
  );
};

export default TextFade;
