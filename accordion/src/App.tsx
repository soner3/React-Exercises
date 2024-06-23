import Accordion from "./Components/Accordion";
import { QuestionTypes } from "./Components/Interfaces";

const faqs: QuestionTypes[] = [
  {
    id: 1,
    title: "Where are thesse chairs assabled?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, rem! Qui neque culpa, ipsam dicta molestiae laudantium. Quis dignissimos quaerat, error neque vitae fugit, magnam accusantium, enim ducimus minus ipsum.",
  },
  {
    id: 2,
    title: "How long do I have to return my chairs?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, rem! Qui neque culpa, ipsam dicta molestiae laudantium. Quis dignissimos quaerat, error neque vitae fugit, magnam accusantium, enim ducimus minus ipsum.",
  },
  {
    id: 3,
    title: "Do you ship to countries outside the EU?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, rem! Qui neque culpa, ipsam dicta molestiae laudantium. Quis dignissimos quaerat, error neque vitae fugit, magnam accusantium, enim ducimus minus ipsum.",
  },
];

function App() {
  return (
    <main className="h-screen flex justify-center items-center">
      <Accordion faqs={faqs} />
    </main>
  );
}

export default App;
