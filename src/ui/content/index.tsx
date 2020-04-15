import React from 'react'
import { Login } from './login'
import { Movies } from './movies'
import { Register } from './register'
import { Dashboard } from './dashboard'
import { PageNotFound } from './notfound'
import { Home } from './home'
import { User } from '../../types/typedefs'

interface contentProps {
    page: number,
    login: boolean,
    user: User,
}


export function Content(props: contentProps) {
    let element
    switch(props.page) {
        case 0: element = <Home />; break;
        case 1: element = props.login ? <Movies /> : <Login />; break;
        case 2: element = props.login ? <Dashboard user={props.user} /> : <Register />; break;
        default: element = <PageNotFound />; break;
    }
    return element
}