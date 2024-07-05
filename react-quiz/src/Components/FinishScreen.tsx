import { ActionType } from "../App";

interface FinishScreenPropTypes {
  points: number;
  maxPossiblePoints: number;
  highscore: number;
  dispatch: React.Dispatch<ActionType>;
}

export default function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}: FinishScreenPropTypes) {
  const percantage = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percantage)}%)
      </p>
      <p className="highscore">Highscore: {highscore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}
