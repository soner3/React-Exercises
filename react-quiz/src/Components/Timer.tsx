import { useEffect } from "react";
import { ActionType } from "../App";

interface TimerPropTypes {
  dispatch: React.Dispatch<ActionType>;
  secondsRemaining: number | null;
}

export default function Timer({ dispatch, secondsRemaining }: TimerPropTypes) {
  const mins = Math.floor((secondsRemaining ?? 0) / 60);
  const seconds = (secondsRemaining ?? 0) % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
