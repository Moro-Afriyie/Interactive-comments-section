import { currentUserReducer } from "./currentUserReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
});

export default rootReducer;

export type IRootReducerState = ReturnType<typeof rootReducer>;
