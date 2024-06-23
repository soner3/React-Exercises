import { useState } from "react";
import Bill from "./Components/Bill";
import FriendTip from "./Components/FriendTip";
import OwnTip from "./Components/OwnTip";

function App() {
  const [bill, setBill] = useState(0);
  const [ownService, setOwnService] = useState(0);
  const [friendService, setFriendService] = useState(0);
  const change = bill !== ownService;
  const tip: number = (bill * ((ownService + friendService) / 2)) / 100;

  function handleBillChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBill(Number(event.target.value));
  }

  function handleOwnServiceChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setOwnService(Number(event.target.value));
  }

  function handleFriendServiceChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    setFriendService(Number(event.target.value));
  }

  function handleReset() {
    setBill(0);
    setOwnService(0);
    setFriendService(0);
  }

  return (
    <main className="flex flex-col h-screen justify-center items-center">
      <Bill bill={bill} handleBillChange={handleBillChange}>
        How much was the bill?
      </Bill>
      <OwnTip
        ownService={ownService}
        handleOwnServiceChange={handleOwnServiceChange}
      >
        How did you like the service?
      </OwnTip>
      <FriendTip
        friendService={friendService}
        handleFriendServiceChange={handleFriendServiceChange}
      >
        How did your friend like the service?
      </FriendTip>
      <div>
        {change ? (
          <p className="text-2xl font-bold m-2">
            You Pay ${bill} (${bill} + ${tip} tip)
          </p>
        ) : null}
        {change ? (
          <button className="border p-2 bg-slate-200" onClick={handleReset}>
            Reset
          </button>
        ) : null}
      </div>
    </main>
  );
}

export default App;
