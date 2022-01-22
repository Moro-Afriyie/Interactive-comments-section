import { SHOW_FORM } from "./../actionTypes/showFormType";

export const showForm = (status: boolean) => {
  return {
    type: SHOW_FORM,
    payload: status,
  };
};
