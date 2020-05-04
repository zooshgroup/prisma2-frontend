import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../usercontext";

interface dashProps {}

export function Dashboard(props: dashProps) {
  const [logout, setLogout] = useState(false);
  const user = useContext(UserContext).user;

  if (!user) return <h1>Log in to view page.</h1>;
  let ageP =
    user.age && user.age !== -1 ? (
      <p>Age: {user.age}</p>
    ) : (
        <p>No age set</p>
      );
  return (
    <aside>
      <p>Name: {user.name}</p>
      {ageP}
      <pre>If admin, user list printed here</pre>
      <button
        onClick={(e: React.FormEvent) => {
          localStorage.removeItem("token");
          setLogout(true);
        }}
      >
        Log out
      </button>
      {logout && <Redirect to='/' />}
    </aside>
  );
}
