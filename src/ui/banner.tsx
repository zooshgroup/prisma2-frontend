import React, { useContext } from "react";
import { UserContext } from "./usercontext";

interface welcomeProps {}

export function Banner(props: welcomeProps) {
  const user = useContext(UserContext).user;
  return (
    <h1>
      Hello, {user ? user.name : "Stranger"}
      <span className="active">!</span>
    </h1>
  );
}
