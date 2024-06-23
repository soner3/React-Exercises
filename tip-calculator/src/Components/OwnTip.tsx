interface PropTypes {
  children: React.ReactNode;
  ownService: number;
  handleOwnServiceChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function OwnTip({
  children,
  ownService,
  handleOwnServiceChange,
}: PropTypes) {
  return (
    <div className="flex gap-2 justify-center items-center m-2">
      <p className="text-lg">{children}</p>
      <select
        name="select1"
        id="select1"
        value={ownService}
        onChange={(e) => handleOwnServiceChange(e)}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>Good (5%)</option>
        <option value={10}>Great (10%)</option>
        <option value={15}>Awesome (15%)</option>
        <option value={20}>Amazing (20%)</option>
      </select>
    </div>
  );
}
