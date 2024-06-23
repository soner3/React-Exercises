import { ItemType } from "./interfaces";

interface PropTypes {
  items: ItemType[];
}

export default function Stats({ items }: PropTypes) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  }
  const numItems: number = items.length;
  const numPacked: number = items.filter((item) => item.packed === true).length;
  const numPackedPercent = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {numPackedPercent === 100
          ? "You got everything! Ready to go"
          : `You have ${numItems} items on your list, and you already packed
        ${numPacked} (${numPackedPercent}%)`}
      </em>
    </footer>
  );
}
