import React from "react";
import { NavLink } from "react-router-dom";

interface navItemProps {
  name: string;
  url: string;
}
function NavItem(props: navItemProps) {
  return (
    <li>
      <NavLink exact to={props.url}>
        {props.name}
      </NavLink>
    </li>
  );
}

interface navbarProps {
  login: boolean;
}

export function Navbar(props: navbarProps) {
  if (props.login) {
    return (
      <ul>
        <NavItem url="/" name="Home" />
        <NavItem url="/movies" name="Movies" />
        <NavItem url="/dashboard" name="Dashboard" />
      </ul>
    );
  }
  return (
    <ul>
      <NavItem url="/" name="Home" />
      <NavItem url="/login" name="Login" />
      <NavItem url="/register" name="Register" />
    </ul>
  );
}
