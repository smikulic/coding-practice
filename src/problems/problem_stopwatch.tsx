import { useEffect, useState, useRef } from "react";

export function Stopwatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [stopwatchRunning, setStopwatchRunning] = useState(false);
  const timeRef = useRef(0);

  useEffect(() => {
    console.log({ stopwatchRunning });
    if (stopwatchRunning) {
      const start = Date.now() - elapsedTime;
      console.log(Date.now());
      console.log(elapsedTime);
      console.log({ start });

      timeRef.current = setTimeout(() => {
        setElapsedTime(Date.now() - start);
      }, 10);
    }

    return () => {
      if (timeRef.current) clearTimeout(timeRef.current);
    };
  }, [stopwatchRunning, elapsedTime]);

  const toggleStopwatch = () => {
    setStopwatchRunning(!stopwatchRunning);
  };

  const handleReset = () => {
    setStopwatchRunning(false);
    setElapsedTime(0);
  };

  const format = (ms: number) => {
    const milliseconds = Math.floor((ms % 1000) / 10);
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 60000) % 60);
    const hours = Math.floor(ms / 3600000);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div>
      <p>{format(elapsedTime)}</p>
      <div>
        <button onClick={toggleStopwatch}>
          {stopwatchRunning ? "Pause" : "Start"}
        </button>{" "}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
