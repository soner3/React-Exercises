import { QuestionTypes } from "./Interfaces";

interface PropTypes {
  faq: QuestionTypes;
  active: number | null;
  handleActive: (id: number) => void;
}

export default function Item({ faq, active, handleActive }: PropTypes) {
  const isClicked = active === faq.id;
  function handleClick(id: number): void {
    handleActive(id);
  }

  return (
    <div
      className={`p-4 shadow-2xl m-5 rounded-xl gap-5 font-sans border ${
        isClicked ? "border-t-green-500 border-t-4" : ""
      }`}
    >
      <div className="flex justify-between">
        <div
          className={`text-gray-400 font-bold text-xl ${
            isClicked ? "text-green-500" : ""
          }`}
        >
          0{faq.id}
        </div>
        <div
          className={`text-xl font-medium mx-5 ${
            isClicked ? "text-green-500" : ""
          }`}
        >
          {faq.title}
        </div>
        <button
          className="text-2xl"
          onClick={() => {
            handleClick(faq.id);
          }}
        >
          +
        </button>
      </div>
      <p className="text-center p-2">{isClicked && faq.text}</p>
    </div>
  );
}
