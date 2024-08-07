import { useQuizContext } from "../contexts/QuizContext";

export default function NextButton() {
  const { answer, index, numQuestions, dispatch } = useQuizContext();

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
