import {
  GET_USER,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  SAVE_USER,
  SAVE_USER_FAILURE,
  SAVE_USER_SUCCESS,
} from "../actions";
import { checkStatus, parseJSON } from "../utils/fetchHelpers";

export function saveUser(user) {
  return function saveUserThunk(dispatch, getState) {
    const apiUrl = `http://localhost:8080/users`;
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    dispatch({ type: SAVE_USER });
    fetch(apiUrl, options)
      .then(checkStatus)
      .then(parseJSON)
      .then((data) => dispatch({ type: SAVE_USER_SUCCESS, payload: data }))
      .catch((error) => {
        dispatch({
          type: SAVE_USER_FAILURE,
          payload: error,
        });
      });
  };
}

export function getUsers() {
  return function getUserThunk(dispatch, getState) {
    const apiUrl = `http://localhost:8080/users`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    dispatch({ type: GET_USER });
    fetch(apiUrl, options)
      .then(checkStatus)
      .then(parseJSON)
      .then((data) => dispatch({ type: GET_USER_SUCCESS, payload: data }))
      .catch((error) => {
        dispatch({
          type: GET_USER_FAILURE,
          payload: error,
        });
      });
  };
}
