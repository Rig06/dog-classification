import { SET_USER_DOGGYDEX, CLEAR_USER_DOGGYDEX } from "../actions/types";
//const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
    userDoggyDex: undefined
}

const userDoggyDex = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case SET_USER_DOGGYDEX: 
            return {
                ...state,
                userDoggyDex: payload,
            };
        case CLEAR_USER_DOGGYDEX: 
            return {
                ...state,
                userDoggyDex: undefined,
            };
        default: return state;
    }
}

export default userDoggyDex;