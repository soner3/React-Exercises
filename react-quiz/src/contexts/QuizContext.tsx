import { createContext, useContext, useEffect, useReducer } from "react";

interface QuizContextProviderPropType {
  children: React.ReactNode;
}

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
  highscore: number;
  secondsRemaining: number | null;
}

const SECS_PER_QUESTION = 30;

const initialState: StateType = {
  questions: [],

  // Loading, error, ready, active, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
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
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };

    case "newAnswer": {
      const question = state.questions[state.index];

      return {
        ...state,
        answer: action.answer ?? null,
        points:
          (action.answer ?? null) === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case "restart":
      return {
        ...state,
        status: "ready",
        index: 0,
        answer: null,
        points: 0,
        secondsRemaining: 10,
      };

    case "tick":
      return {
        ...state,
        secondsRemaining: (state.secondsRemaining ?? 1) - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Action unknown");
  }
}

interface ContextType {
  questions: QuestionType[];
  status: string;
  index: number;
  answer: number | null;
  points: number;
  highscore: number;
  secondsRemaining: number | null;
  dispatch: React.Dispatch<ActionType>;
  maxPossiblePoints: number;
  numQuestions: number;
}

const QuizContext = createContext<ContextType | null>(null);

function QuizContextProvider({ children }: QuizContextProviderPropType) {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

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
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        dispatch,
        maxPossiblePoints,
        numQuestions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuizContext() {
  const context = useContext(QuizContext);
  if (context === null) {
    throw new Error("QuizContext used outside its Provider");
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { QuizContextProvider, useQuizContext };
