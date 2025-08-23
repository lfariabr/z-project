"use client";
import { useEffect, useState } from "react";

export default function TimerDisplay() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 59));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatted = `00:${seconds.toString().padStart(2, "0")}`;

  return (
    <div className="relative flex justify-center items-center w-40 h-40">
      {/* animated ring */}
      <div className="absolute w-full h-full rounded-full border-[6px] border-red-500 animate-spin-slow opacity-70" />
      
      
      {/* timer text */}
      <div className="text-white text-4xl font-mono z-10">
        {formatted}
      </div>
    </div>
  );
}
