import { useQuizContext } from "../contexts/QuizContext";
import Options from "./Options";

export default function Question() {
  const { questions, answer, dispatch, index } = useQuizContext();
  const question = questions[index];

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}
