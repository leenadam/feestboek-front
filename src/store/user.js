import { createAction, handleActions, combineActions } from 'redux-actions';
import axios from 'axios'

const loginStart = createAction('USER_LOGIN_START');
const loginSuccess = createAction('USER_LOGIN_SUCCESS');
const loginFail = createAction('USER_LOGIN_FAIL');

export const login = (username, password) => dispatch => {
    dispatch(loginStart())
    return axios.post('/api/login', { username, password }).then(response => {
        dispatch(loginSuccess(response.data.result))
    }).catch(e => {
        dispatch(loginFail())
    })
}

const logoutSuccess = createAction('USER_LOGOUT_SUCCESS');

export const logout = () => dispatch => {
    return axios.post('/api/logout').finally(() => {
        dispatch(logoutSuccess())
    })
}

const initialState = {
    inProgress: false,
    loggedIn: false,
    profile: null,
}

export const reducer = handleActions({
    [loginStart]: (state, action) => ({
        inProgress: true,
        loggedIn: false,
        profile: null,
    }),
    [loginSuccess]: (state, action) => ({
        inProgress: false,
        loggedIn: true,
        profile: action.payload,
    }),
    [combineActions(loginFail, logoutSuccess)]: (state, action) => ({
        inProgress: false,
        loggedIn: false,
        profile: null,
    }),
}, initialState)
