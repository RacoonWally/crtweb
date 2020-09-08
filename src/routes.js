import React from 'react';
import {Switch, Route} from "react-router";

import MainPage from './pages/mainPage'
import FavPage from './pages/favPage'

export default (
    <Switch>
        <Route path='/' component={MainPage} exact/>
        <Route path='/favourite' component={FavPage} exact/>
    </Switch>
);
