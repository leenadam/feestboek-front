import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing'
import { reducer as userReducer } from './user'
import thunk from 'redux-thunk';

const history = createBrowserHistory()

const rootReducer = combineReducers({
    form: formReducer,
    location: routerReducer,
    user: userReducer,
})

const middleware = applyMiddleware(thunk, routerMiddleware(history))

const store = createStore(rootReducer, middleware)

startListener(history, store)

export default store
