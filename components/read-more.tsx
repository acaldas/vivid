"use client";
import { useState } from "react";

interface IProps {
  small: string;
  large: string;
  className?: string;
}

export default function ReadMore({ small, large, className }: IProps) {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className={className}>
      <p>{small}</p>
      {readMore ? (
        <p>{large}</p>
      ) : (
        <button onClick={() => setReadMore(true)} className="text-red block">
          Read more
        </button>
      )}
    </div>
  );
}