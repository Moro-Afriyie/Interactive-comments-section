import {
  Comment,
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
import { GET_ALL_COMMENTS } from "../actionTypes/commentType";

export const getAllComments = (data: Comment[]) => {
  return {
    type: GET_ALL_COMMENTS,
    payload: data,
  };
};

export const addNewComment = (data: Comment) => {
  return {
    type: ADD_NEW_COMMENT,
    payload: data,
  };
};

export const addNewReply = (data: ReplyComment) => {
  return {
    type: ADD_NEW_REPLY,
    payload: data,
  };
};

export const updateComment = (data: UpdateComment) => {
  return {
    type: UPDATE_COMMENT,
    payload: data,
  };
};

export const deleteComment = (data: DeleteComment) => {
  return {
    type: DELETE_A_COMMENT,
    payload: data,
  };
};

export const increaseVotes = (data: DeleteComment) => {
  return {
    type: INCREASE_VOTES,
    payload: data,
  };
};

export const decreaseVotes = (data: DeleteComment) => {
  return {
    type: DECREASE_VOTES,
    payload: data,
  };
};
