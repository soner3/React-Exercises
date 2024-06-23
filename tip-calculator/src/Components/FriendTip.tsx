interface PropTypes {
  children: React.ReactNode;
  friendService: number;
  handleFriendServiceChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

export default function FriendTip({
  children,
  friendService,
  handleFriendServiceChange,
}: PropTypes) {
  return (
    <div className="flex gap-2 justify-center items-center m-2">
      <p className="text-lg">{children}</p>
      <select
        name="select2"
        id="select2"
        value={friendService}
        onChange={(e) => handleFriendServiceChange(e)}
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
