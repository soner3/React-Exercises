import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

interface LoanPayload {
  amount: number;
  purpose: string;
}

const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount: number, purpose: string) {
        return {
          payload: { amount, purpose },
        };
      },

      reducer(state, action: PayloadAction<LoanPayload>) {
        if (state.loan > 0) {
          return;
        }
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoan(state) {
      state.loanPurpose = "";
      state.balance -= state.loan;
      state.loan = 0;
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;
export default accountSlice.reducer;

export function deposit(amount: number, currency: string) {
  if (currency === "USD") {
    return { type: "account/deposit", payload: amount };
  } else {
    return async function (dispatch) {
      dispatch({ type: "account/convertingCurrency" });

      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
      );
      const data = await res.json();
      console.log(data);
      const converted = data.rates.USD;

      dispatch({ type: "account/deposit", payload: converted });
    };
  }
}

// Old Version

// export default function accountReducer(state = initialState, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//         isLoading: false,
//       };

//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };

//     case "account/requestLoan":
//       if (state.loan > 0) {
//         return state;
//       } else {
//         return {
//           ...state,
//           loan: action.payload.amount,
//           loanPurpose: action.payload.purpose,
//           balance: state.balance + action.payload.amount,
//         };
//       }

//     case "account/payloan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };

//     case "account/convertingCurrency":
//       return {
//         ...state,
//         isLoading: true,
//       };

//     default:
//       return state;
//   }
// }

// export function deposit(amount: number, currency: string) {
//   if (currency === "USD") {
//     return { type: "account/deposit", payload: amount };
//   } else {
//     return async function (dispatch, getState: StateType) {
//       dispatch({ type: "account/convertingCurrency" });

//       const res = await fetch(
//         `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//       );
//       const data = await res.json();
//       console.log(data);
//       const converted = data.rates.USD;

//       dispatch({ type: "account/deposit", payload: converted });
//     };
//   }
// }
// export function withdraw(amount: number) {
//   return { type: "account/withdraw", payload: amount };
// }
// export function requestLoan(amount: number, purpose: string) {
//   return {
//     type: "account/requestLoan",
//     payload: { amount: amount, purpose: purpose },
//   };
// }
// export function payloan() {
//   return { type: "account/payloan" };
// }
