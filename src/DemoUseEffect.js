import { useEffect, useState } from "react";

function DemoUseEffect() {
  const [time, setTime] = useState(1000);
  useEffect(() => {
    const timeid = setTimeout(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearTimeout(timeid);
  }, [time]);
  console.log(time);
  return (
    <div>
      <h3>{time}</h3>
    </div>
  );
}
export default DemoUseEffect;
