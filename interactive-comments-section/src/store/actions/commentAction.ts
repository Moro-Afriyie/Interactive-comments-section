import { GET_ALL_COMMENTS } from "../actionTypes/commentType";

export const getAllComments = (data: Comment[]) => {
  return {
    type: GET_ALL_COMMENTS,
    payload: data,
  };
};
