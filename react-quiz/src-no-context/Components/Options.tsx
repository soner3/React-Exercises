interface OptionsPropTypes {
  question: QuestionType;
  dispatch: React.Dispatch<ActionType>;
  answer: number | null;
}

interface QuestionType {
  id: string;
  question: string;
  options: Array<string>;
  correctOption: number;
  points: number;
}

interface ActionType {
  type: string;
  payload?: QuestionType[];
  answer?: number | null;
}
export default function Options({
  question,
  dispatch,
  answer,
}: OptionsPropTypes) {
  const hasAnwered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          onClick={() => dispatch({ type: "newAnswer", answer: index })}
          key={option}
          disabled={hasAnwered}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            answer !== null
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
