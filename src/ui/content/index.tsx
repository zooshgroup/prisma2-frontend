import React from 'react'
import { Login } from './login'
import { Movies } from './movies'
import { Register } from './register'
import { Dashboard } from './dashboard'
import { PageNotFound } from './notfound'
import { Home } from './home'
import { useParams } from 'react-router-dom'

interface contentProps {
    page: number,
    login: boolean,
}

interface RouteParams {
    id: string
}

const { id } = useParams<RouteParams>()

let page:number = parseInt(id)

export function Content(props: contentProps) {
    let element
    switch(page) {
        case 0: element = <Home />; break;
        case 1: element = props.login ? <Movies /> : <Login />; break;
        case 2: element = props.login ? <Dashboard /> : <Register />; break;
        default: element = <PageNotFound />; break;
    }
    return element
}