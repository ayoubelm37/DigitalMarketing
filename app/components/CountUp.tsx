"use client";
import { useEffect, useState } from "react";

type CountUpProps = {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
};

export default function CountUp({ end, duration = 1200, prefix = "", suffix = "" }: CountUpProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setValue(Math.round(progress * end));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}