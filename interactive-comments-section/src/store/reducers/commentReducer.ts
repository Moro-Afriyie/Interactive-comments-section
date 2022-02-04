import {
  DeleteComment,
  ReplyComment,
  UpdateComment,
} from "./../../interfaces/interface";
import {
  ADD_NEW_COMMENT,
  ADD_NEW_REPLY,
  DECREASE_VOTES,
  DELETE_A_COMMENT,
  INCREASE_VOTES,
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
  | { type: typeof ADD_NEW_REPLY; payload: ReplyComment }
  | { type: typeof UPDATE_COMMENT; payload: UpdateComment }
  | { type: typeof DELETE_A_COMMENT; payload: DeleteComment }
  | { type: typeof INCREASE_VOTES; payload: DeleteComment }
  | { type: typeof DECREASE_VOTES; payload: DeleteComment };

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
        const index = state.comments.findIndex(
          (comment) => comment.commentId === action.payload.mainCommentId
        );

        const newArr = [...state.comments];
        newArr[index].mainComment = action.payload.comment;
        return {
          ...state,
          comments: newArr,
        };
      } else {
        // get the index of the main comment
        const index = state.comments.findIndex(
          (comment) => comment.commentId === action.payload.mainCommentId
        );

        // get the replies index of the reply from the replies array
        const replyIndex = state.comments[index].replies.findIndex(
          (reply: ReplyComment) =>
            reply.replyCommentId === action.payload.replyCommentId
        );
        const newArr = [...state.comments];
        newArr[index].replies[replyIndex].reply = action.payload.comment;
        return {
          ...state,
          comments: newArr,
        };
      }
    }

    case DELETE_A_COMMENT: {
      let newArr: Comment[] = [];
      if (action.payload.tag === "main") {
        newArr = state.comments.filter(
          (comment) => comment.commentId !== action.payload.mainCommentId
        );
      } else if (action.payload.tag === "reply") {
        // get the index of the main comment
        const index = state.comments.findIndex(
          (comment) => comment.commentId === action.payload.mainCommentId
        );

        newArr = [...state.comments];
        // filter the replies
        const newReplyArr = state.comments[index].replies.filter(
          (reply: ReplyComment) =>
            reply.replyCommentId !== action.payload.replyCommentId
        );

        newArr[index].replies = newReplyArr;
      }
      return {
        ...state,
        comments: newArr,
      };
    }

    case INCREASE_VOTES: {
      if (action.payload.tag === "main") {
        const index = state.comments.findIndex(
          (comment) => comment.commentId === action.payload.mainCommentId
        );

        const newArr = [...state.comments];
        newArr[index].votes += 1;
        return {
          ...state,
          comments: newArr,
        };
      } else {
        // get the index of the main comment
        const index = state.comments.findIndex(
          (comment) => comment.commentId === action.payload.mainCommentId
        );

        // get the replies index of the reply from the replies array
        const replyIndex = state.comments[index].replies.findIndex(
          (reply: ReplyComment) =>
            reply.replyCommentId === action.payload.replyCommentId
        );
        const newArr = [...state.comments];
        newArr[index].replies[replyIndex].votes += 1;
        return {
          ...state,
          comments: newArr,
        };
      }
    }

    case DECREASE_VOTES: {
      return {
        ...state,
        comments: [],
      };
    }

    default:
      return state;
  }
};
