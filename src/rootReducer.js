import { combineReducers } from 'redux'
import user from './reducers/user'
import ticket from './reducers/ticket'
import master from './reducers/master'

export default combineReducers({
    user,
    ticket,
    master
})