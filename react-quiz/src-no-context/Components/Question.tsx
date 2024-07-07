import { ActionType, QuestionType } from "../App";
import Options from "./Options";

interface QuestionPropTypes {
  question: QuestionType;
  dispatch: React.Dispatch<ActionType>;
  answer: number | null;
}

export default function Question({
  question,
  dispatch,
  answer,
}: QuestionPropTypes) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}
