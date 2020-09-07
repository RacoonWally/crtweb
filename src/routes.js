import React from 'react';
import {Switch, Route} from "react-router";

import MainPage from './pages/mainPage'



export default (
    <Switch>
        <Route path='/' component={MainPage} exact/>
    </Switch>
);
