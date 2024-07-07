import { useQuizContext } from "../contexts/QuizContext";
import ErrorText from "./ErrorText";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Loader from "./Loader";
import NextButton from "./NextButton";
import Progress from "./Progress";
import Question from "./Question";
import StartScreen from "./StartScreen";
import Timer from "./Timer";

export default function Main() {
  const { status } = useQuizContext();

  return (
    <main className="main">
      {status === "loading" && <Loader />}
      {status === "error" && <ErrorText />}
      {status === "ready" && <StartScreen />}
      {status === "active" && (
        <>
          <Progress />
          <Question />
          <Footer>
            <Timer />
            <NextButton />
          </Footer>
        </>
      )}
      {status === "finished" && <FinishScreen />}
    </main>
  );
}
