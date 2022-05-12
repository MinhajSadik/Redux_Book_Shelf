import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import bookReducer from "./reducers/bookReducer";

const applysMiddleware = applyMiddleware(thunk);

const combinedReducer = combineReducers({
  books: bookReducer,
  //   users: userReducer,
});

const store = createStore(
  combinedReducer,
  composeWithDevTools(applysMiddleware)
);

export default store;
