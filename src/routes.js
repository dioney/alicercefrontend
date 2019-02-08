import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import List from './pages/List'
import Form from './pages/Form'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ SignIn } />
            <Route path="/dashboard" component={ Dashboard } />
            <Route path="/list" component={ List } />
            <Route path="/form" component={ Form } />
            <Route path="*" component={() => <h1>Not Found!</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;