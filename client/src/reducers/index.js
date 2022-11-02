import loginRed from './logInReducer'
import authRed from './authTokenReducer'
import {combineReducers} from 'redux'

const reducers = combineReducers({
    loginReducer: loginRed,
    authReducer: authRed
});

export default reducers;