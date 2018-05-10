import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Login from './../ui/Login';
import Signup from './../ui/Signup';
import Dashboard from './../ui/Dashboard';
import NotFound from './../ui/NotFound';

const history = createHistory();

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard'];

export const onAuthChange = (isAuthenticated) => {
    const pathname = history.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);
    console.log('isAuthenticated',isAuthenticated);
    if(isAuthenticated && isUnauthenticatedPage) {
        history.replace('/dashboard');
    } else if(!isAuthenticated && isAuthenticatedPage) {
        history.replace('/');
    }
};

history.listen((location, action) => {
    let pathname = location.pathname;
    console.log(`Aktuelle URL: ${pathname}`);
    if(!!Meteor.userId() && unauthenticatedPages.includes(pathname)) {
        history.replace('/dashboard');
    }
    if(!Meteor.userId() && authenticatedPages.includes(pathname)) {
        history.replace('/');
    }
});

export const routes = (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </Router>
);
