import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ target, suffix = '', duration = 1400 }) => {
  const [count, setCount] = useState(0);
  const startedRef = useRef<boolean>(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      const current = Math.floor(ease * target);
      setCount(current);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return <span>{count.toLocaleString('en-IN')}{suffix}</span>;
};

export default Counter;
