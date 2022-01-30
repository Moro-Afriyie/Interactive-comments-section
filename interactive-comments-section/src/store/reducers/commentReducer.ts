import { replyCommentInterface } from "./../../interfaces/interface";
import {
  ADD_NEW_COMMENT,
  ADD_NEW_REPLY,
  DELETE_A_COMMENT,
  UPDATE_COMMENT,
} from "./../actionTypes/commentType";
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
  | { type: typeof ADD_NEW_REPLY; payload: replyCommentInterface }
  | { type: typeof UPDATE_COMMENT; payload: any }
  | { type: typeof DELETE_A_COMMENT; payload: Comment | replyCommentInterface };

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

    case ADD_NEW_REPLY: {
      // get the index
      const index = state.comments.findIndex(
        (comment) => comment.commentId === action.payload.mainCommentId
      );
      // make a new Array
      const newArr = [...state.comments];
      newArr[index].replies.push(action.payload); // updating the replies in the new Array

      return {
        ...state,
        comments: newArr, // assign the new Array to the comments
      };
    }

    case UPDATE_COMMENT: {
      if (action.payload.tag === "main") {
        console.log("main");
        console.log(action.payload);
      }
      return {
        ...state,
        comments: [],
      };
    }

    case DELETE_A_COMMENT: {
      return {
        ...state,
        comments: [],
      };
    }
    default:
      return state;
  }
};
