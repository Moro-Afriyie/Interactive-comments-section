import { GET_ALL_COMMENTS } from "../actionTypes/commentType";
import { data } from "./../../models/data";

const initialState = {
  comments: data,
};

type Action = {
  type: typeof GET_ALL_COMMENTS;
  payload: Comment[];
};

const commentsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_ALL_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};
