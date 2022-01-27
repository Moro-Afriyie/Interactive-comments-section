import { Comment, replyCommentInterface } from "./../../interfaces/interface";
import { ADD_NEW_COMMENT } from "./../actionTypes/commentType";
import { GET_ALL_COMMENTS } from "../actionTypes/commentType";

export const getAllComments = (data: Comment[]) => {
  return {
    type: GET_ALL_COMMENTS,
    payload: data,
  };
};

export const addNewComment = (data: Comment | replyCommentInterface) => {
  return {
    type: ADD_NEW_COMMENT,
    payload: data,
  };
};

export const updateComment = (data: Comment | replyCommentInterface) => {
  return {
    type: ADD_NEW_COMMENT,
    payload: data,
  };
};
