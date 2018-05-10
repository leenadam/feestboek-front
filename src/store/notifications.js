import { createAction, handleActions } from 'redux-actions';

var id = 0;
export const addNotification = createAction('NOTIFICATION_ADD', payload => ({
    id: id++,
    content: payload,
}))

export const markNotificationAsRead = createAction('NOTIFICATION_MARK_AS_READ');

const initialState = {
    read: [],
    unread: [],
}

export const reducer = handleActions({
    [addNotification]: (state, action) => {
        return {
            read: state.read,
            unread: [action.payload, ...state.unread]
        }
    },
    [markNotificationAsRead]: (state, action) => {
        const msg = state.unread.filter(msg => msg.id === action.payload)[0]
        return {
            unread: state.unread.filter(msg => msg.id !== action.payload),
            read: [msg, ...state.read],
        }
    },
}, initialState)
