import { replyCommentInterface } from "./../../interfaces/interface";
import { ADD_NEW_COMMENT, UPDATE_COMMENT } from "./../actionTypes/commentType";
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

type Action =
  | {
      type: typeof GET_ALL_COMMENTS;
      payload: Comment[];
    }
  | { type: typeof ADD_NEW_COMMENT; payload: Comment }
  | { type: typeof UPDATE_COMMENT; payload: replyCommentInterface };

export const commentsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_ALL_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case ADD_NEW_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        comments: [],
      };
    default:
      return state;
  }
};
