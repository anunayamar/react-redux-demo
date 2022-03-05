import { ADD_USER } from "../actions";

export const initialState = {
  users: [],
};

export default function useReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      console.log(action);

      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
}
