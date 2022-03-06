import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";

const composeEnhancers = composeWithDevTools({ trace: true });
const store = createStore(
  userReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
