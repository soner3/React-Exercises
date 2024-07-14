import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialStateCustomer = {
  fullname: "",
  nationalID: "",
  createdAt: "",
};

interface CreateCustomerActionType {
  fullname: string;
  nationalID: string;
  createdAt: string;
}

const customerSlice = createSlice({
  name: "customer",
  initialState: initialStateCustomer,
  reducers: {
    createCustomer: {
      prepare(fullname: string, nationalID: string) {
        return {
          payload: {
            fullname,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },

      reducer(state, action: PayloadAction<CreateCustomerActionType>) {
        state.fullname = action.payload.fullname;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullname = action.payload;
    },
  },
});

export const { updateName, createCustomer } = customerSlice.actions;
export default customerSlice.reducer;

// export default function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullname: action.payload.fullname,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };

//     case "customer/updateName":
//       return {
//         ...state,
//         fullname: action.payload,
//       };

//     default:
//       return state;
//   }
// }

// export function createCustomer(fullname: string, nationalID: string) {
//   return {
//     type: "customer/createCustomer",
//     payload: {
//       fullname: fullname,
//       nationalID: nationalID,
//       createdAt: new Date().toISOString(),
//     },
//   };
// }

// export function updateName(fullname: string) {
//   return { type: "customer/updateName", payload: fullname };
// }
