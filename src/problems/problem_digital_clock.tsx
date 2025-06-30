import { useEffect, useState } from "react";

export function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let clockTimer = setTimeout(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearTimeout(clockTimer);
    };
  }, [time]);

  const formattedTime = `${time.toTimeString().split(" ")[0]}`;

  return <div>{formattedTime}</div>;
}
