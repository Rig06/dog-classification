import {
    FETCH_DOGS_REQUEST,
    FETCH_DOGS_SUCCESS,
    FETCH_DOGS_FAILURE,
} from '../actions/types';

const initialState = {
    loading: false, 
    dogs: [],
    error: '',
};

const dogReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DOGS_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case FETCH_DOGS_SUCCESS:
            return{
                ...state,
                loading: false,
                dogs: action.payload,
                error: '',
            }
        case FETCH_DOGS_FAILURE:
            return{
                loading: false,
                dogs: [],
                error: action.played
            }
        default: return state;
    }
}

export default dogReducer;

