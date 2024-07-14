import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// export type ActionType =
//   | { type: "account/deposit"; payload: number }
//   | { type: "account/withdraw"; payload: number }
//   | {
//       type: "account/requestLoan";
//       payload: { amount: number; purpose: string };
//     }
//   | { type: "account/payloan" }
//   | {
//       type: "customer/createCustomer";
//       payload: {
//         fullname: string;
//         nationalID: string;
//         createdAt: string;
//       };
//     }
//   | { type: "customer/updateName"; payload: string }
//   | { type: "account/convertingCurrency" };

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
