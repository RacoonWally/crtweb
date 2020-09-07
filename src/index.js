import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {createBrowserHistory} from "history";
import {ConnectedRouter, routerMiddleware} from "connected-react-router";
import {Provider} from 'react-redux'

import 'normalize.css'

import "./index.scss"

import routes from './routes'
import createRootReducer from './reducers'


const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];

const store = createStore(createRootReducer(history),
    applyMiddleware(...middlewares));


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {routes}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);



