import {
  ADD_USER,
  GET_USER,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  SAVE_USER,
  SAVE_USER_FAILURE,
  SAVE_USER_SUCCESS,
} from "../actions";
import { REDUX_STATE_STATUS } from "../constants";

export const initialState = {
  users: [],
  reducerState: {
    saveUserStatus: REDUX_STATE_STATUS.NOT_STARTED,
    getUserStatus: REDUX_STATE_STATUS.NOT_STARTED,
  },
};

export default function userReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case SAVE_USER:
      return {
        ...state,
        reducerState: {
          ...state.reducerState,
          saveUserStatus: REDUX_STATE_STATUS.STARTED,
        },
      };
    case SAVE_USER_SUCCESS:
      return {
        ...state,
        reducerState: {
          ...state.reducerState,
          saveUserStatus: REDUX_STATE_STATUS.SUCCESS,
        },
      };
    case SAVE_USER_FAILURE:
      return {
        ...state,
        saveUserError: action.payload,
        reducerState: {
          ...state.reducerState,
          saveUserStatus: REDUX_STATE_STATUS.FAILURE,
        },
      };
    case GET_USER:
      return {
        ...state,
        reducerState: {
          ...state.reducerState,
          getUserStatus: REDUX_STATE_STATUS.STARTED,
        },
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        reducerState: {
          ...state.reducerState,
          getUserStatus: REDUX_STATE_STATUS.SUCCESS,
        },
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        getUserError: action.payload,
        reducerState: {
          ...state.reducerState,
          getUserStatus: REDUX_STATE_STATUS.FAILURE,
        },
      };
    default:
      return state;
  }
}
