import { ActionType } from "../App";

interface NextButtonPropTypes {
  dispatch: React.Dispatch<ActionType>;
  answer: number | null;
}

export default function NextButton({ dispatch, answer }: NextButtonPropTypes) {
  if (answer === null) {
    return;
  }

  return (
    <button
      onClick={() => dispatch({ type: "nextQuestion" })}
      className="btn btn-ui"
    >
      Next
    </button>
  );
}
