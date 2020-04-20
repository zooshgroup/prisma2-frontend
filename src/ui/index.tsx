import React from "react";
import { Navbar } from "./navbar";
import { Banner } from "./banner";
import { Content } from "./content/index";
import { BrowserRouter as Router } from "react-router-dom";
import { User } from "../types/typedefs";

interface MyProps {
  user?: User;
}

interface AppState {}

class App extends React.Component<MyProps, AppState> {
  readonly user = this.props.user;
  readonly isLoggedIn = this.user ? true : false;

  render() {
    return (
      <Router>
        <main>
          <header>
            <Banner name={this.user && this.user.name} />
            <Navbar login={this.isLoggedIn} />
          </header>
          <article>
            <Content user={this.user} />
          </article>
        </main>
      </Router>
    );
  }
}

export default App;
