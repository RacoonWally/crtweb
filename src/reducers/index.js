import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import mainPage from "./mainPage";
import favPage from "./favPage";

export default history => combineReducers({
    mainPage,
    favPage,
    router: connectRouter(history)
});
