import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    CLEAR_USER_DOGGYDEX,
    SET_LEARNING_MODE
} from "./types";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import { setUserDoggydex } from "./userDoggyDex";



const register = (name, username, email, password) => (dispatch) => {
    return AuthService.register(name, username, email, password).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: REGISTER_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};
export const login = (email, password) => (dispatch) => {
    return AuthService.login(email, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });
            dispatch({
                type: SET_LEARNING_MODE,
                payload: true
            })
            UserService.getUserDoggyDex().then(res => {
                dispatch(setUserDoggydex(res))
            }).catch(error => console.log(error));
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};
export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
        type: LOGOUT,
    });
    dispatch({
        type: SET_LEARNING_MODE,
        payload: false
    })
    dispatch( {
        type: CLEAR_USER_DOGGYDEX,
    })
};

export default register;