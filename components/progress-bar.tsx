"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState(progress);
  useEffect(() => {
    setProgress(100);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setProgressText((t) => {
        if (t === progress) {
          clearInterval(id);
          return t;
        } else {
          return t + 1;
        }
      });
    }, 16);
  }, [progress]);

  return (
    <div className="w-[560px] max-w-[90%] h-[30px] rounded-2xl border-2 border-white overflow-hidden p-[5px]">
      <div className="relative h-full">
        <div
          className="absolute left-0 h-full bg-red rounded-2xl transition-[width] duration-[2s]"
          style={{ width: `${progress}%` }}
        ></div>
        <p className="relative text-center">{progressText}%</p>
      </div>
    </div>
  );
}
