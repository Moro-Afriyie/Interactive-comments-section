import { currentUserReducer } from "./currentUserReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
});

export default rootReducer;
