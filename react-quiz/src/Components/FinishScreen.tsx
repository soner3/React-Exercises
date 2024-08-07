import { useQuizContext } from "../contexts/QuizContext";

export default function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuizContext();

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
