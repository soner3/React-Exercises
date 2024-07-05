import { ActionType } from "../App";

interface NextButtonPropTypes {
  dispatch: React.Dispatch<ActionType>;
  answer: number | null;
  index: number;
  numQuestions: number;
}

export default function NextButton({
  dispatch,
  answer,
  index,
  numQuestions,
}: NextButtonPropTypes) {
  if (answer === null) {
    return;
  }

  if (index < numQuestions - 1) {
    return (
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="btn btn-ui"
      >
        Next
      </button>
    );
  }
  if (index === numQuestions - 1) {
    return (
      <button
        onClick={() => dispatch({ type: "finish" })}
        className="btn btn-ui"
      >
        Finish
      </button>
    );
  }
}
