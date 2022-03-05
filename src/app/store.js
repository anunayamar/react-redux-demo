import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import useReducer from "./reducers/userReducer";

const composeEnhancers = composeWithDevTools({ trace: true });
const store = createStore(useReducer, composeEnhancers(applyMiddleware()));

// const store = createStoreHook(
//     sampleAppReducer,
//     composeWithDevTools(applyMiddleware())
//   );

export default store;
