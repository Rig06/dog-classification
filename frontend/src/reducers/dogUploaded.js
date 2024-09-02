import { IS_DOG_UPLOADED } from "../actions/types";

const initialState = {
    isDogUploaded: false,
}

const  docStatus = (state = initialState, action) => {
    const { type, payload } = action;
    
    switch (type) {
        case IS_DOG_UPLOADED:
            return { isDogUploaded: payload };
        
        default:
            return state;
    }
}

export default  docStatus;