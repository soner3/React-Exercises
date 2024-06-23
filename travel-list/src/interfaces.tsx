export interface ItemType {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

export interface FormProps {
  onAddItems: (item: ItemType) => void;
}

export interface PackingListProps {
  items: ItemType[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
  onClearList: () => void;
}
