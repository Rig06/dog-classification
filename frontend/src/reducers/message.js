import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/types";
const initialState = {};

//Fix warning by naming function possibly
export default function getMessage (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return { message: payload };

    case CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}
