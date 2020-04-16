import React from 'react'
import { Navbar } from './navbar'
import { Banner } from './banner'
import { Content } from './content/index'
import { BrowserRouter as Router } from 'react-router-dom'
import { User } from '../types/typedefs'

interface MyProps {
    user?: User,
}
  
interface AppState {
    page: number,
}

class App extends React.Component<MyProps, AppState> {
    constructor(props: any) {
        super(props)
        this.state = {
            page : 0
        }
    }
    readonly user = this.props.user
    readonly isLoggedIn = (this.user) ? true : false

    handleNavigation = (pageno: number) => {
        if(pageno>-1) {
            this.setState(state => ({
                page: pageno
            }))
        }
    }

    render() {
        return (
            <Router>
                <main>
                    <header>
                        <Banner name={this.user && this.user.name} />
                        <Navbar login={this.isLoggedIn} active={this.state.page} onNavigate={this.handleNavigation} />
                    </header>
                    <article>
                        <Content login={this.isLoggedIn} page={this.state.page} user={this.user} />
                    </article>
                </main>
            </Router>)
    }
}

export default App