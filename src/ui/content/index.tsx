import React from "react";
import { Login } from "./login";
import { Movies } from "./movies";
import { Register } from "./register";
import { Dashboard } from "./dashboard";
import { Reviews } from "./reviews";
import { PageNotFound } from "./notfound";
import { Home } from "./home";
import { User } from "../../types/typedefs";
import { Switch, Route } from "react-router-dom";
import { Movie } from "./movies/movie";
import { UserContext } from "../../context/usercontext";

interface contentProps {
  user?: User;
}

export class Content extends React.Component<contentProps,{}> {
  render() {
    return (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <UserContext.Consumer>
            {
              value => (<Login value={value}/>)
            }
          </UserContext.Consumer>
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/movie/:movieId">
          <Movie />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard user={this.props.user} />
        </Route>
        <Route exact path="/dashboard/reviews">
          <Reviews user={this.props.user} />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}
