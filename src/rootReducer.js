import { combineReducers } from 'redux'
import user from './reducers/user'
import ticket from './reducers/ticket'

export default combineReducers({
    user,
    ticket
})