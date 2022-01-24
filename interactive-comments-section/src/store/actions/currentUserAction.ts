import { SET_CURRENT_USER } from "../actionTypes/currentUserType";
import { CurrentUser } from "./../../interfaces/interface";

export const setCurrentUser = (currentUser: CurrentUser) => {
  return {
    type: SET_CURRENT_USER,
    payload: currentUser,
  };
};
