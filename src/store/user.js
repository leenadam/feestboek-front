import { createAction, handleActions } from 'redux-actions';

export const login = createAction('USER_LOGIN');
export const logout = createAction('USER_LOGOUT');

const initialState = {
    loggedIn: false,
    profile: null,
}

export const reducer = handleActions({
    [login]: (state, action) => ({ loggedIn: true, profile: action.payload }),
    [logout]: (state, action) => ({ loggedIn: false, profile: null }),
}, initialState)
