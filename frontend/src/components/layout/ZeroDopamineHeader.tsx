'use client';

import { useEffect, useState } from 'react';
import { Timer } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ZeroDopamineHeader({ className }: { className?: string }) {
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 59));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatted = `00:${seconds.toString().padStart(2, '0')}`;

  return (
    <header
      className={cn(
        'flex justify-between items-center w-full px-4 py-3 text-white bg-black',
        className
      )}
    >
      <h1 className="text-xl font-light tracking-wide">zero dopamine</h1>
      <div className="flex items-center gap-2 text-sm bg-zinc-900 px-3 py-1 rounded-full shadow-sm">
        <Timer className="h-4 w-4 text-red-500" />
        <span className="tabular-nums font-mono">{formatted}</span>
      </div>
    </header>
  );
}
