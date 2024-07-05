import BankAccount from "./Components/BankAccount";

function App() {
  return (
    <main className="flex flex-col items-center p-3">
      <h1 className="text-3xl font-bold mb-6">useReducer Bank Account</h1>
      <BankAccount />
    </main>
  );
}

export default App;
