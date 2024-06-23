import { useState } from "react";
import { FormProps, ItemType } from "./interfaces";

export default function Form({ onAddItems }: FormProps) {
  const [description, setDescrpition] = useState<string>("TEST");
  const [quantity, setQuantity] = useState<number>(4);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!description) {
      return;
    }
    const newItem: ItemType = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    onAddItems(newItem);
    setDescrpition("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item.."
        value={description}
        onChange={(e) => setDescrpition(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
