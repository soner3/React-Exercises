import { useState } from "react";

const initialFriends: FriendTypes[] = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

interface FriendTypes {
  id: number;
  name: string;
  image: string;
  balance: number;
}

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
  const [friends, setFriends] = useState<FriendTypes[]>(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState<FriendTypes | null>(
    null
  );

  function handleShowAddFriendChange() {
    setShowAddFriend(!showAddFriend);
  }

  function handleAddFriend(friend: FriendTypes) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(!showAddFriend);
  }

  function handleSelection(friend: FriendTypes) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <FormAddFriend handleAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriendChange}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplittBill
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          handleSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

interface FriendsListType {
  friends: FriendTypes[];
  onSelection: (friend: FriendTypes) => void;
  selectedFriend: FriendTypes | null;
}

function FriendsList({
  friends,
  onSelection,
  selectedFriend,
}: FriendsListType) {
  return (
    <ul>
      {friends.map((friend: FriendTypes) => {
        return (
          <Friend
            key={friend.id}
            friend={friend}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
}

interface FriendType {
  friend: FriendTypes;
  onSelection: (friend: FriendTypes) => void;
  selectedFriend: FriendTypes | null;
}

function Friend({ friend, onSelection, selectedFriend }: FriendType) {
  const isFriend = friend === selectedFriend;
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name} </h3>
      {friend.balance < 0 && (
        <p className="red">
          You Owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          Your friend owes {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={() => onSelection(friend)}>
        {isFriend ? "Close" : "Select"}
      </Button>
    </li>
  );
}

interface ButtonType {
  children: React.ReactNode;
  onClick: () => void;
}

function Button({ children, onClick }: ButtonType) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

interface FormAddFriendType {
  handleAddFriend: (friend: FriendTypes) => void;
}

function FormAddFriend({ handleAddFriend }: FormAddFriendType) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name || !image) {
      return;
    }

    const id = Math.round(Math.random() * 1000);
    const newFriend = {
      id: id,
      name: name,
      image: `${image}?=sfsf`,
      balance: 0,
    };
    handleAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="friendName">Friend Name</label>
      <input
        type="text"
        id="friendName"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="image">Image URL</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button onClick={() => {}}>Add</Button>
    </form>
  );
}

interface FormSplitBillType {
  selectedFriend: FriendTypes;
}

function FormSplittBill({
  selectedFriend,
  handleSplitBill,
}: FormSplitBillType) {
  const [bill, setBill] = useState(0);
  const [paidByUser, setPaidByUser] = useState(0);
  const paidByFriend = bill - paidByUser;
  const [whoIsPaying, setWhoIsPaying] = useState("");

  function handleSubmit(event: React.FormEvent<SubmitEvent>) {
    event.preventDefault();
    if (!bill || !paidByUser) return;
    handleSplitBill(whoIsPaying === "user" ? -paidByUser : paidByFriend);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label htmlFor="bill"> Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        id="bill"
      />
      <label htmlFor="your">Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
        id="your"
      />
      <label htmlFor="friend">{selectedFriend.name}'s expense</label>
      <input type="text" id="friend" value={paidByFriend} disabled />

      <label htmlFor="pay">Who is paying the bill</label>
      <select
        name="pay"
        id="pay"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button onClick={() => {}}>Split Bill</Button>
    </form>
  );
}
