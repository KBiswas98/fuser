import {combineReducers} from 'redux'

import AppReducer from './AppReducer'
import RatingReducer from './RatingReducer'
import UserReducer from './UserReducer'

export default combineReducers({
    AppReducer,
    RatingReducer,
    UserReducer
})

