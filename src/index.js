import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginForm from './Form'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";
  const routing=(
    <BrowserRouter>
    <Switch>
        <Route path="/"  component={LoginForm}/>
    </Switch>
    </BrowserRouter>
  )


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
