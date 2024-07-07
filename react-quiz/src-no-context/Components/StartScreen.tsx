interface StartScreenPropTypes {
  numQuestions: number;
  dispatch: React.Dispatch<ActionType>;
}

interface ActionType {
  type: string;
  payload?: QuestionType[];
}

interface QuestionType {
  id: string;
  question: string;
  options: Array<string>;
  correctOption: number;
  points: number;
}

export default function StartScreen({
  numQuestions,
  dispatch,
}: StartScreenPropTypes) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="btn btn-ui"
      >
        Let's Start
      </button>
    </div>
  );
}
