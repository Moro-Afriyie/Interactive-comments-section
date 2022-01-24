import { Comment } from "../../interfaces/interface";
import { GET_ALL_COMMENTS } from "../actionTypes/commentType";
import { data } from "./../../models/data";

interface IGetComments {
  comments: Comment[];
  loading: boolean;
  error: boolean;
}

const initialState: IGetComments = {
  comments: data,
  // comments: [],
  loading: false,
  error: false,
};

type Action = {
  type: typeof GET_ALL_COMMENTS;
  payload: Comment[];
};

export const commentsReducer = (state = initialState, action: Action) => {
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
