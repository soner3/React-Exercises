import { useReducer } from "react";

interface StateType {
  balance: number;
  loan: number;
  open: boolean;
}

export interface ActionType {
  type: string;
}

const initialState: StateType = {
  balance: 0,
  loan: 0,
  open: false,
};

const DEPOSIT = 150;
const WITHDRAW = 50;
const REQUEST_LOAN = 5000;

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "openAccount":
      return { ...state, open: true };

    case "closeAccount":
      if (state.loan === 0 && state.balance === 0) {
        return { ...state, open: false };
      }
      return { ...state, open: true };

    case "deposit":
      return { ...state, balance: state.balance + DEPOSIT };

    case "withdraw":
      return { ...state, balance: state.balance - WITHDRAW };

    case "requestLoan":
      return {
        ...state,
        balance: state.balance + REQUEST_LOAN,
        loan: state.loan + REQUEST_LOAN,
      };

    case "payLoan":
      return {
        ...state,

        balance: state.loan <= 0 ? state.balance : state.balance - REQUEST_LOAN,
        loan: state.loan <= 0 ? (state.loan = 0) : state.loan - REQUEST_LOAN,
      };

    default:
      throw new Error("Unknown Action");
  }
}

export default function BankAccount() {
  const [{ balance, loan, open }, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p className="font-medium mb-2">Balance: {balance}</p>
      <p className="font-medium mb-2">Loan: {loan}</p>
      <button
        disabled={open}
        className="border-2 rounded p-1 mb-2 bg-slate-100 hover:bg-slate-200"
        onClick={() => dispatch({ type: "openAccount" })}
      >
        Open Account
      </button>
      <button
        disabled={!open}
        className="border-2 rounded p-1 mb-2 bg-slate-100 hover:bg-slate-200"
        onClick={() => dispatch({ type: "deposit" })}
      >
        Deposit 150
      </button>
      <button
        disabled={!open}
        className="border-2 rounded p-1 mb-2 bg-slate-100 hover:bg-slate-200"
        onClick={() => dispatch({ type: "withdraw" })}
      >
        Withdraw 50
      </button>
      <button
        disabled={!open}
        className="border-2 rounded p-1 mb-2 bg-slate-100 hover:bg-slate-200"
        onClick={() => dispatch({ type: "requestLoan" })}
      >
        Request a loan of 5000
      </button>
      <button
        disabled={!open}
        className="border-2 rounded p-1 mb-2 bg-slate-100 hover:bg-slate-200"
        onClick={() => dispatch({ type: "payLoan" })}
      >
        Pay loan
      </button>
      <button
        disabled={!open}
        className="border-2 rounded p-1 mb-2 bg-slate-100 hover:bg-slate-200"
        onClick={() => dispatch({ type: "closeAccount" })}
      >
        Close Account
      </button>
    </>
  );
}
