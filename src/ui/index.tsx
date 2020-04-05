import React from 'react'
import { whoAmI } from '../apollo/App'
import { Navbar } from './navbar'
import { Greeting } from './banner'
import { Content } from './content/index'

const user = whoAmI()
const isLoggedIn = (user) ? true : false

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
        return <main><header><Greeting login={isLoggedIn} name={user} /><Navbar login={isLoggedIn} active={this.state.page} onNavigate={this.handleNavigation} /></header><article><Content login={isLoggedIn} page={this.state.page} /></article></main>
    }
}

export default App