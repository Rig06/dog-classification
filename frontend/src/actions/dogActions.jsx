import axios from 'axios';
import {
    FETCH_DOGS_REQUEST,
    FETCH_DOGS_SUCCESS,
    FETCH_DOGS_FAILURE,
} from './types';

export const fetchDogs = () => {
    return (dispatch) => {
        dispatch(fetchDogsRequest);
        axios
            .get('/api/dogbreed')
            .then(response => {
                const dogs = response.data;
                dispatch(fetchDogsSuccess(dogs));
            })
            .catch(error => {
                dispatch(fetchDogsFailure(error));
            });
    };
};

export const fetchDogsRequest = () => ({
    type: FETCH_DOGS_REQUEST,
});

export const fetchDogsSuccess = (dogs) => ({
    type: FETCH_DOGS_SUCCESS,
    payload: dogs
});

export const fetchDogsFailure = (error) => ({
    type: FETCH_DOGS_FAILURE,
    payload: error
});
