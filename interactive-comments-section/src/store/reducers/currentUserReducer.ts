import { CurrentUser } from "./../../interfaces/interface";
import { SET_CURRENT_USER } from "../actionTypes/currentUserType";
import juliusomo from "../../../assets/avatars/image-juliusomo.png";

const initialState: CurrentUser | null = {
  userName: "juliusomo",
  avatar: juliusomo,
};

type Action = {
  type: typeof SET_CURRENT_USER;
  payload: CurrentUser;
};
export const currentUserReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
