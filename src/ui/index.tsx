import React from 'react'
import { whoAmI } from '../App'

const user = whoAmI()
const isLoggedIn = (user) ? true : false

function getGreeting(user: string) {
    if (isLoggedIn) {
      return <h1>Hello, {user}<span className="active">!</span></h1>
    }
    return <h1>Hello, Stranger<span className="active">.</span></h1>
}

function getNavbar() {
    if (isLoggedIn) {
        // eslint-disable-next-line
        return <ul><li><a href="#" className="active">Home</a></li><li><a href="#">Movies</a></li><li><a href="#">Logout</a></li></ul>
    }
    // eslint-disable-next-line
    return <ul><li><a href="#" className="active">Home</a></li><li><a href="#">Login</a></li><li><a href="#">Register</a></li></ul>
}

function App() {
    return (<header>{getGreeting(user)}{getNavbar()}</header>)
}

export default App