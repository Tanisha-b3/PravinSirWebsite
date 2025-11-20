import { useEffect, useState } from "react";

export default function CounterK({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200; // 1.2 sec
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [end]);

  // ➤ Convert 33000 → 33K+
  const formatK = (num) => {
    if (num >= 1000) return Math.round(num / 1000) + "K+";
    return num + "+";
  };

  return <span>{formatK(count)}</span>;
}
