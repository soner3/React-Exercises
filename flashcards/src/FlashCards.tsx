import { useState } from "react";
import QuestionType from "./Interfaces";

const questions: QuestionType[] = [
  { id: 1, question: "What Language is React based on?", answer: "JavaScript" },
  {
    id: 2,
    question: "What are the building Blocks of React apps?",
    answer: "Components",
  },
  {
    id: 3,
    question:
      "What is the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 4,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 5,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 6,
    question:
      "What do we call an input element that is completely synchronized with React?",
    answer: "Controlled element",
  },
];

export default function FlashCards() {
  const [clickedId, setClickedId] = useState<number | null>(null);

  function handleClick(id: number) {
    if (id === clickedId) {
      setClickedId(null);
    } else {
      setClickedId(id);
    }
  }
  return (
    <>
      {questions.map((item: QuestionType) => {
        return (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`flex justify-center font-bold items-center border-2 rounded-xl shadow-xl w-80 p-20 ${
              item.id === clickedId ? "bg-blue-500 text-white" : ""
            }`}
          >
            <p>{item.id === clickedId ? item.answer : item.question}</p>
          </button>
        );
      })}
    </>
  );
}
