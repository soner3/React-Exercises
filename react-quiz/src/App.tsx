import { useEffect, useReducer } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Loader from "./Components/Loader";
import StartScreen from "./Components/StartScreen";
import ErrorText from "./Components/ErrorText";
import Question from "./Components/Question";
import NextButton from "./Components/NextButton";
import Progress from "./Components/Progress";

export interface QuestionType {
  id: string;
  question: string;
  options: Array<string>;
  correctOption: number;
  points: number;
}

export interface ActionType {
  type: string;
  payload?: QuestionType[];
  answer?: number | null;
}

interface StateType {
  questions: Array<QuestionType>;
  status: string;
  index: number;
  answer: null | number;
  points: number;
}

const initialState: StateType = {
  questions: [],

  // Loading, error, ready, active, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload ?? [],
        status: "ready",
      };

    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      return { ...state, status: "active" };

    case "newAnswer": {
      const question = state.questions[state.index];

      return {
        ...state,
        answer: action.answer ?? null,
        points:
          action.payload ?? null === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(() => {
    async function getQuestions() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data: QuestionType[] = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed" });
      }
    }

    getQuestions();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <ErrorText />}
        {status === "ready" && (
          <StartScreen dispatch={dispatch} numQuestions={numQuestions} />
        )}
        {status === "active" && (
          <>
            <Progress
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              numQuestions={numQuestions}
              index={index}
              answer={answer}
            />
            <Question
              answer={answer}
              dispatch={dispatch}
              question={questions[index]}
            />
            <NextButton dispatch={dispatch} answer={answer} />
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
