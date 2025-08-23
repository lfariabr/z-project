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
  const isCritical = seconds <= 10;
  const progressPercent = ((60 - seconds) / 60) * 100; // 0% -> 100%

  return (
    <div className="relative flex justify-center items-center w-40 h-40">
      {/* progress ring: fills from black to red as time elapses */}
      <div
        className="absolute inset-0 rounded-full progress-ring"
        style={{ ['--p' as any]: `${progressPercent}%` }}
        aria-hidden="true"
      />

      {/* inner disc to create ring cutout */}
      <div className="absolute inset-[6px] rounded-full bg-black/90 ring-1 ring-white/10" aria-hidden="true" />

      {/* urgent pulse overlay in last 10s */}
      {isCritical && (
        <div className="absolute inset-0 rounded-full critical-pulse" aria-hidden="true" />
      )}

      {/* timer text */}
      <div className="text-white text-4xl font-mono z-10 select-none">
        {formatted}
      </div>
    </div>
  );
}
