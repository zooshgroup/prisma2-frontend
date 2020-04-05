import React from 'react'
import { whoAmI } from '../apollo/App'

const user = whoAmI()
const isLoggedIn = (user) ? true : false

interface welcomeProps {
    name: string,
}

function Greeting(props: welcomeProps) {
    if (isLoggedIn) {
      return <h1>Hello, {props.name}<span className="active">!</span></h1>
    }
    return <h1>Hello, Stranger<span className="active">.</span></h1>
}

/*
----------- this does not work - QUESTION WHY

interface navItemProps {
    target: string,
}
function navItem(props: navItemProps) {
    return <li><a href={props.target}>asd</a></li>
}
<navItem target="Home"/>
*/

interface navbarProps {
    onNavigate: any,
    active: number
}

function Navbar(props: navbarProps) {
    function handleClick(e: any) {
        e.preventDefault()
        const target = Number(e.target.id)
        props.onNavigate(target)
      }
    if (isLoggedIn) {
        // eslint-disable-next-line
        return <ul><li><a href="/" id="0" onClick={handleClick} className={props.active === 0 ? "active" : ""}>Home</a></li><li><a href="/" id="1" onClick={handleClick} className={props.active === 1 ? "active" : ""}>Movies</a></li><li><a href="/" id="2" onClick={handleClick} className={props.active === 2 ? "active" : ""}>Dashboard</a></li></ul>
    }
    // eslint-disable-next-line
    return <ul><li><a href="/" id="0" onClick={handleClick} className={props.active === 0 ? "active" : ""}>Home</a></li><li><a href="/" id="1" onClick={handleClick} className={props.active === 1 ? "active" : ""}>Login</a></li><li><a href="/" id="2" onClick={handleClick} className={props.active === 2 ? "active" : ""}>Register</a></li></ul>
}

interface contentProps {
    page: number
}

function Content(props: contentProps) {
    let element
    switch(props.page) {
        case 0: element = <code>a React application built with Apollo, GraphQL Yoga and Prisma2</code>; break;
        case 1: element = isLoggedIn ? <p>Movies here</p> : <p>Login here</p>; break;
        case 2: element = isLoggedIn ? <p>Dashboard here</p> : <p>Register here</p>; break;
        default: element = <p>Nothing there yet...</p>; break;
    }
    return element
}

interface MyProps {
}
  
interface AppState {
    page: number,
}

class App extends React.Component<MyProps, AppState> {
    constructor(props: any) { //PROPER TS WAY?
        super(props)
        this.state = {
            page : 0
        }
        // This binding is necessary to make `this` work in the callback
        this.handleNavigation = this.handleNavigation.bind(this);
    }

    handleNavigation(pageno: number) {
        if(pageno>-1) {
            this.setState(state => ({
                page: pageno
            }))
        }
    }

    render() {
        return <main><header><Greeting name={user} /><Navbar active={this.state.page} onNavigate={this.handleNavigation} /></header><article><Content page={this.state.page} /></article></main>
    }
}

export default App

/*
---------- to be made

interface loginState {
    email: string,
    password: string,
}

class loginForm extends React.Component<MyProps,loginState> {
    constructor(props: any) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {email: '',password: ''};
    }
  
    handleChange(e:any) {
      this.setState({email: e.target.value});
    }
  
    render() {
      const email = this.state.email;
      const password = this.state.password;
      return (
        <fieldset>
            <legend>Enter login details:</legend>
            <input
            value={email}
            onChange={this.handleChange} />
            <input
            value={password}
            onChange={this.handleChange} />
        </fieldset>
      );
    }
  }
  */