import firebase from 'firebase';

import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';

export const emailChanged = (text) => ({
    type: EMAIL_CHANGED,
    payload: text
});

export const passwordChanged = (text) => ({
    type: PASSWORD_CHANGED,
    payload: text
});

export const loginUser = ({ email, password }) => (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((fError) => {
            console.log(fError);
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => loginUserSuccess(dispatch, user))
                .catch((sError) => {
                    console.log(sError);
                    loginUserFail(dispatch);
                });
        });
};

const loginUserFail = (dispatch) => dispatch({
    type: LOGIN_USER_FAIL
});

const loginUserSuccess = (dispatch, user) => dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
});
