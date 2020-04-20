import React from 'react'
import { Login } from './login'
import { Movies } from './movies'
import { Register } from './register'
import { Dashboard } from './dashboard'
import { PageNotFound } from './notfound'
import { Home } from './home'
import { User } from '../../types/typedefs'
import { Switch, Route } from 'react-router-dom'

interface contentProps {
    page: number,
    login: boolean,
    user?: User,
}

export function Content(props: contentProps) {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/movies">
                <Movies />
            </Route>
            <Route path="/dashboard">
                <Dashboard user={props.user} />
            </Route>
            <Route component={PageNotFound} />
        </Switch>
    )
}