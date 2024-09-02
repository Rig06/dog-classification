import { SET_LEARNING_MODE } from "./types";

export const setLearningMode = (value) => ({
    type: SET_LEARNING_MODE,
    payload: value,
});
