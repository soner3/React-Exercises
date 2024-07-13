import { combineReducers, createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

type ActionType =
  | { type: "account/deposit"; payload: number }
  | { type: "account/withdraw"; payload: number }
  | {
      type: "account/requestLoan";
      payload: { amount: number; purpose: string };
    }
  | { type: "account/payloan" }
  | {
      type: "customer/createCustomer";
      payload: {
        fullname: string;
        nationalID: string;
        createdAt: string;
      };
    }
  | { type: "customer/updateName"; payload: string };

const initialStateCustomer = {
  fullname: "",
  nationalID: "",
  createdAt: "",
};

function accountReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "account/requestLoan":
      if (state.loan > 0) {
        return state;
      } else {
        return {
          ...state,
          loan: action.payload.amount,
          loanPurpose: action.payload.purpose,
          balance: state.balance + action.payload.amount,
        };
      }

    case "account/payloan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action: ActionType) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullname: action.payload.fullname,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return {
        ...state,
        fullname: action.payload,
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

// store.dispatch({ type: "account/deposit", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 200 });
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "Buy a car" },
// });
// console.log(store.getState());
// store.dispatch({ type: "account/payloan" });
// console.log(store.getState());

function deposit(amount: number) {
  return { type: "account/deposit", payload: amount };
}
function withdraw(amount: number) {
  return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount: number, purpose: string) {
  return {
    type: "account/requestLoan",
    payload: { amount: amount, purpose: purpose },
  };
}
function payloan() {
  return { type: "account/payloan" };
}

store.dispatch(deposit(500));
console.log(store.getState());
store.dispatch(withdraw(200));
console.log(store.getState());
store.dispatch(requestLoan(1000, "Buy a cheap car"));
console.log(store.getState());
store.dispatch(payloan());
console.log(store.getState());

function createCustomer(fullname: string, nationalID: string) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullname: fullname,
      nationalID: nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}

function updateName(fullname: string) {
  return { type: "customer/updateName", payload: fullname };
}

store.dispatch(createCustomer("Max Mustermann", "7236"));
console.log(store.getState());
store.dispatch(deposit(250));
