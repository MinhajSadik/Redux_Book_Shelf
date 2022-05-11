import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import bookReducer from "./reducers/bookReducer";

const applysMiddleware = applyMiddleware(thunk);

// Outer function:
function myMiddleware(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      console.log("action dispatch", action);
      return next(action);
    };
  };
}

const combinedReducer = combineReducers({
  books: bookReducer,
  //   users: userReducer,
});

const store = createStore(
  combinedReducer,
  composeWithDevTools(applysMiddleware, myMiddleware)
);

export default store;
