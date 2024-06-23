import { ItemType } from "./interfaces";

interface PropTypes {
  item: ItemType;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

export default function Item({ item, onDeleteItem, onToggleItem }: PropTypes) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        name="checkbox"
        id="checkbox"
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => onDeleteItem(item.id)}
        style={{ color: "red", fontWeight: "bolder" }}
      >
        X
      </button>
    </li>
  );
}
