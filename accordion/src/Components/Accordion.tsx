import { QuestionTypes } from "./Interfaces";
import Item from "./Item";

interface PropTypes {
  faqs: QuestionTypes[];
}

export default function Accordion({ faqs }: PropTypes) {
  return (
    <div className="flex flex-col">
      {faqs.map((faq) => (
        <Item key={faq.id} faq={faq} />
      ))}
    </div>
  );
}
