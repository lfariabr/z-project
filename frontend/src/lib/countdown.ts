"use client";

import { useEffect, useState } from "react";

let seconds = 60;
const listeners = new Set<(s: number) => void>();
let started = false;
let interval: any = null;

function notify() {
  for (const l of listeners) l(seconds);
}

function tick() {
  seconds = seconds > 0 ? seconds - 1 : 59;
  notify();
}

function start() {
  if (started || typeof window === "undefined") return;
  started = true;
  interval = setInterval(tick, 1000);
}

export function getSeconds() {
  return seconds;
}

export function subscribe(cb: (s: number) => void): () => void {
  listeners.add(cb);
  return () => {
    listeners.delete(cb); 
  };
}

export function useCountdown() {
  const [s, setS] = useState<number>(getSeconds());
  useEffect(() => {
    start();
    const unsub = subscribe(setS);
    return () => unsub();
  }, []);
  const formatted = `00:${s.toString().padStart(2, "0")}`;
  const progressPercent = ((60 - s) / 60) * 100;
  const isCritical = s <= 10;
  return { seconds: s, formatted, progressPercent, isCritical };
}
