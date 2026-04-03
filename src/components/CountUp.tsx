"use client";

import { useInView } from "motion/react";
import { useCallback, useEffect, useMemo, useRef } from "react";

const getDecimalPlaces = (num: number): number => {
  const str = num.toString();
  if (str.includes(".")) {
    const decimals = str.split(".")[1];
    if (parseInt(decimals) !== 0) {
      return decimals.length;
    }
  }
  return 0;
};

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);

  const isInView = useInView(ref, { once: true, margin: "0px" });

  const maxDecimals = useMemo(
    () => Math.max(getDecimalPlaces(from), getDecimalPlaces(to)),
    [from, to],
  );

  const formatValue = useCallback(
    (latest: number) => {
      const hasDecimals = maxDecimals > 0;

      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0,
      };

      const formattedNumber = Intl.NumberFormat("en-US", options).format(
        latest,
      );

      return separator ?
          formattedNumber.replace(/,/g, separator)
        : formattedNumber;
    },
    [maxDecimals, separator],
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === "down" ? to : from);
    }
  }, [from, to, direction, formatValue]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === "function") {
        onStart();
      }

      const startValue = direction === "down" ? to : from;
      const endValue = direction === "down" ? from : to;
      const durationMs = Math.max(duration * 1000, 1);

      const timeoutId = setTimeout(() => {
        const startTime = performance.now();

        const animate = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / durationMs, 1);
          const currentValue = startValue + (endValue - startValue) * progress;

          if (ref.current) {
            ref.current.textContent = formatValue(currentValue);
          }

          if (progress < 1) {
            frameRef.current = requestAnimationFrame(animate);
            return;
          }

          if (typeof onEnd === "function") {
            onEnd();
          }
        };

        frameRef.current = requestAnimationFrame(animate);
      }, delay * 1000);

      return () => {
        clearTimeout(timeoutId);
        if (frameRef.current !== null) {
          cancelAnimationFrame(frameRef.current);
          frameRef.current = null;
        }
      };
    }
  }, [
    isInView,
    startWhen,
    direction,
    from,
    to,
    delay,
    onStart,
    onEnd,
    duration,
    formatValue,
  ]);

  return (
    <span
      aria-live="polite"
      className={className}
      ref={ref}
    />
  );
}
