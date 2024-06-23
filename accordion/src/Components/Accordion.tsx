import { useState } from "react";
import { QuestionTypes } from "./Interfaces";
import Item from "./Item";

interface PropTypes {
  faqs: QuestionTypes[];
}

export default function Accordion({ faqs }: PropTypes): JSX.Element {
  const [active, setActive] = useState<number | null>(null);

  function handleActive(id: number): void {
    setActive(id);
  }

  return (
    <div className="flex flex-col">
      {faqs.map((faq) => (
        <Item
          key={faq.id}
          faq={faq}
          active={active}
          handleActive={handleActive}
        />
      ))}
    </div>
  );
}
