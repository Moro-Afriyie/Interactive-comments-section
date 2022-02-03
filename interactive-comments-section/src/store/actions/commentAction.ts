import { Comment, ReplyComment } from "./../../interfaces/interface";
import {
  ADD_NEW_COMMENT,
  ADD_NEW_REPLY,
  DELETE_A_COMMENT,
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

export const updateComment = (data: any) => {
  return {
    type: UPDATE_COMMENT,
    payload: data,
  };
};

export const deleteComment = (data: Comment | ReplyComment) => {
  return {
    type: DELETE_A_COMMENT,
    payload: data,
  };
};
