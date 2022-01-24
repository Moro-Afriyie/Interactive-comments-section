import { currentUserReducer } from "./currentUserReducer";
import { combineReducers } from "redux";
import { commentsReducer } from "./commentReducer";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  comments: commentsReducer,
});

export default rootReducer;

export type IRootReducerState = ReturnType<typeof rootReducer>;
