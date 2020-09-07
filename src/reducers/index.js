import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import mainPage from "./mainPage";

export default history => combineReducers({
    mainPage,
    router: connectRouter(history)
});
