import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import bookReducer from "./reducers/bookReducer";

const logger = (store) => (next) => (action) => {
  console.log("action fired", action);
  console.log("store", store);
  // console.log("next", next(action));
  next(action);
};
const externalMiddlewares = applyMiddleware(thunk, logger);

const combinedReducer = combineReducers({
  books: bookReducer,
  //   users: userReducer,
});

const store = createStore(
  combinedReducer,
  composeWithDevTools(externalMiddlewares)
);

export default store;
