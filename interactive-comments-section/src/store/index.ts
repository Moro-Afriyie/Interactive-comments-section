import { createStore } from "redux";
import { showFormReducer } from "./reducers/showFormReducer";

export const store = createStore(showFormReducer);
