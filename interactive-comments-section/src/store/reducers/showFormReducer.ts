import { SHOW_FORM } from "../actionTypes/showFormType";

interface Action {
  type: typeof SHOW_FORM;
  payload: boolean;
}

const initialState = {
  showForm: false,
};

export const showFormReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SHOW_FORM:
      return {
        ...state,
        showForm: action.payload,
      };
    default:
      return state;
  }
};
