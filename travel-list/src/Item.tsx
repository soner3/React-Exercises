import ItemType from "./interfaces";

interface PropTypes {
  item: ItemType;
}

export default function Item({ item }: PropTypes) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button style={{ color: "red", fontWeight: "bolder" }}>X</button>
    </li>
  );
}
