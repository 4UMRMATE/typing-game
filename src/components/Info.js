import { useState, useEffect } from "react";
import Blocks from "./Blocks";

function Info() {
  let timer = null;
  const [timeLeft, setTimeLeft] = useState(10);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const countDown = () => {
    if (timeLeft > 0) {
      setTimeLeft(timeLeft - 1);
      setTimeElapsed(timeElapsed + 1);
      console.log("timeLeft: ", timeLeft, "timeElapsed: ", timeElapsed);
    } else {
      clearInterval(timer);
      console.log("finish");
    }
  };

  useEffect(() => {
    if (timeLeft > 0) {
      let timer = setInterval(() => {
        countDown();
      }, 1000);

      return () => clearInterval(timer);
    }
  });

  return (
    <div className="Info">
      <h1>Typing Game</h1>
      <Blocks title="Errors" value="0" />
      <Blocks title="Time" value={`${timeLeft}s`} />
      <Blocks title="Accuracy" value="0" />
    </div>
  );
}

export default Info;
