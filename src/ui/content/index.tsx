import React, { useContext } from "react";
import { Login } from "./login";
import { Movies } from "./movies";
import { Register } from "./register";
import { Dashboard } from "./dashboard";
import { PageNotFound } from "./notfound";
import { Home } from "./home";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "./usercontext";

interface contentProps {}

export function Content(props: contentProps) {
  const user = useContext(UserContext).user;
  
  if (user) {
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
          <Dashboard />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    );
  }
  else {
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
          <Redirect to='/login' />
        </Route>
        <Route path="/dashboard">
          <Redirect to='/login' />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}
