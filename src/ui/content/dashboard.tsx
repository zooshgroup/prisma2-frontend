import React, { useState } from "react";
import { User } from "../../types/typedefs";
import { Redirect } from "react-router-dom";

interface dashProps {
  user?: User;
}

export function Dashboard(props: dashProps) {
  const [logout, setLogout] = useState(false);

  if (!props.user) return <h1>Log in to view page.</h1>;
  let ageP =
    props.user.age && props.user.age !== -1 ? (
      <p>Age: {props.user.age}</p>
    ) : (
        <p>No age set</p>
      );
  return (
    <aside>
      <p>Name: {props.user.name}</p>
      {ageP}
      <p><a href="/dashboard/reviews">View my reviews</a></p>
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
