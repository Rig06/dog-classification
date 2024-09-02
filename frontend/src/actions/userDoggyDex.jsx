import { SET_USER_DOGGYDEX, CLEAR_USER_DOGGYDEX } from "./types";

export const setUserDoggydex = (breedArray) => ({
    type: SET_USER_DOGGYDEX,
    payload: breedArray,
});

export const clearUserDoggydex = () => ({
    type: CLEAR_USER_DOGGYDEX,
});
