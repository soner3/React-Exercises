import { useState } from "react";

export default function DateCounter2() {
  const [step, setStep] = useState<number>(1);
  const [changed, setChanged] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [date, setDate] = useState<Date>(new Date());
  const today: Date = new Date();

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

  function handleCountMinus() {
    setCount(count - step);
    setChanged(true);
  }

  function handleCountPlus() {
    setCount(count + step);
    setChanged(true);
  }

  function handleChangeSlider(event: React.ChangeEvent<HTMLInputElement>) {
    setStep(Number(event.target.value));
    setChanged(true);
  }

  function handleReset() {
    setChanged(false);
    setDate(new Date());
    setCount(0);
    setStep(1);
  }

  function handleCountSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      elements: { text: HTMLInputElement };
    };
    const inputValue = target.elements.text.value;
    setCount(Number(inputValue));
    setDate(new Date(today.setDate(today.getDate() + Number(inputValue))));
    setChanged(true);
  }

  function handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCount(Number(event.target.value));
    setChanged(true);
  }

  return (
    <div className="border rounded-2xl shadow-2xl">
      <form onSubmit={handleCountSubmit}>
        <h1 className="m-2 text-3xl font-bold">Date Counter 2</h1>
        <div className="flex justify-center items-center m-2 gap-5 ">
          <input
            type="range"
            name="slider"
            id="slider"
            min={0}
            max={10}
            value={step}
            onChange={handleChangeSlider}
          />
          <label htmlFor="slider">Step: {step}</label>
        </div>
        <div className="flex justify-center items-center m-2 gap-5">
          <button
            className="border-2 border-black w-9 bg-red-500 text-2xl font-bold hover:bg-red-600"
            onClick={handleCountMinus}
          >
            -
          </button>
          <input
            type="text"
            className="border-2 border-black p-1"
            placeholder="Count"
            name="text"
            onChange={handleTextChange}
            value={count}
          />
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
            {daysOfWeek[date.getDay()]}{" "}
            {date.toLocaleDateString("en-US", format)}
          </h2>
        </div>
      </form>
      <button
        className={`border rounded bg-slate-800 text-white hover:bg-black p-2 m-2 ${
          !changed ? "hidden" : ""
        }`}
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}
