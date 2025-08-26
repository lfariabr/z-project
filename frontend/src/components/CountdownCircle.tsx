"use client";
import { useCountdown } from "@/lib/countdown";

export default function TimerDisplay() {
  const { formatted, isCritical, progressPercent } = useCountdown();

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
