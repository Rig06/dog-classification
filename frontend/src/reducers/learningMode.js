import { SET_LEARNING_MODE } from "../actions/types";

const initialState = {
    isLearningMode: false,
};

export default function learningMODE (state = initialState, action) {
  switch (action.type) {
    case SET_LEARNING_MODE:
      return  {
        ...state,
        isLearningMode: action.payload,
      }
    default:
      return state;
  }
}
