import { useEffect, useRef, useState } from "react";

const useProgress = (duration: number, maxValue: number = 100): number => {
  const [progress, setProgress] = useState(0);
  const startTime = useRef(Date.now());

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      const elapsedTime = Date.now() - startTime.current;
      const updatedProgress = (maxValue * elapsedTime) / duration;

      setProgress(Math.min(updatedProgress, maxValue));
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [duration, maxValue, progress]);

  return progress;
};

export default useProgress;
