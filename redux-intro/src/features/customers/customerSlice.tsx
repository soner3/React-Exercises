import { ActionType } from "../../store-v1";

const initialStateCustomer = {
  fullname: "",
  nationalID: "",
  createdAt: "",
};

export default function customerReducer(
  state = initialStateCustomer,
  action: ActionType
) {
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

export function createCustomer(fullname: string, nationalID: string) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullname: fullname,
      nationalID: nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}

export function updateName(fullname: string) {
  return { type: "customer/updateName", payload: fullname };
}
