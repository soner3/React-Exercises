import { useState } from "react";
import DateCounter2 from "./Components/DateCounter2";

function App() {
  const [step, setStep] = useState<number>(1);
  const [count, setCount] = useState<number>(0);
  const [date, setDate] = useState<Date>(new Date());
  const format: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const daysOfWeek: string[] = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  function handleStepMinus() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  function handleStepPlus() {
    setStep(step + 1);
  }

  function handleCountMinus() {
    setCount(count - step);
    setDate(new Date(date.setDate(date.getDate() - step)));
  }

  function handleCountPlus() {
    setCount(count + step);
    setDate(new Date(date.setDate(date.getDate() + step)));
  }

  return (
    <main className="flex flex-col justify-center text-xl text-center font-medium font-sans">
      <h1 className="m-2 text-3xl font-bold">Date Counter</h1>
      <div className="flex justify-center items-center m-2 gap-5">
        <button
          className="border-2 border-black w-9 bg-red-500 text-2xl font-bold hover:bg-red-600"
          onClick={handleStepMinus}
        >
          -
        </button>
        <h2>Step: {step}</h2>

        <button
          className="border-2 border-black w-9 bg-green-500 text-2xl font-bold hover:bg-green-600"
          onClick={handleStepPlus}
        >
          +
        </button>
      </div>
      <div className="flex justify-center items-center m-2 gap-5">
        <button
          className="border-2 border-black w-9 bg-red-500 text-2xl font-bold hover:bg-red-600"
          onClick={handleCountMinus}
        >
          -
        </button>
        <h2>Count: {count}</h2>
        <button
          className="border-2 border-black w-9 bg-green-500 text-2xl font-bold hover:bg-green-600"
          onClick={handleCountPlus}
        >
          +
        </button>
      </div>
      <div className="flex justify-center items-center m-2 ">
        <h2 className="text-2xl">
          {count === 0
            ? "Today is"
            : `${count} day${
                count === 1 || count === -1 ? "" : "s"
              } from today is`}{" "}
          {daysOfWeek[date.getDay()]} {date.toLocaleDateString("en-US", format)}
        </h2>
      </div>
      <br />
      <DateCounter2 />
    </main>
  );
}

export default App;
