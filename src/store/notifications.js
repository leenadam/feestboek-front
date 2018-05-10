import { createAction, handleActions } from 'redux-actions';

var id = 0;
export const addNotification = createAction('NOTIFICATION_ADD', payload => ({
    id: id++,
    read: false,
    content: payload,
}))

export const markNotificationAsRead = createAction('NOTIFICATION_MARK_AS_READ');

const initialState = []

export const reducer = handleActions({
    [addNotification]: (state, action) => [action.payload, ...state],
    [markNotificationAsRead]: (state, action) => state.map(notification =>
        notification.id === action.payload ?
            { ...notification, read: true } :
            notification),
}, initialState)
