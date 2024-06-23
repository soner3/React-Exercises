interface PropTypes {
  children: React.ReactNode;
  bill: number;
  handleBillChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Bill({ children, bill, handleBillChange }: PropTypes) {
  return (
    <div className="flex gap-2 justify-center items-center m-2">
      <p className="text-lg">{children}</p>
      <input
        type="text"
        onChange={(e) => handleBillChange(e)}
        value={bill}
        placeholder="Bill..."
        className="border focus:ring-2 outline-none p-1 rounded"
      />
    </div>
  );
}
