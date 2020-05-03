import React, { useState } from "react";
import { User } from "../../../types/typedefs";
import ListReviews from "./listreviews";

interface revProps {
  user?: User;
}

export function Reviews(props: revProps) {
  const [search, upSearch] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    upSearch(event.currentTarget.value);
  }

  if (!props.user) return <h1>Log in to view page.</h1>;
  return (
    <aside>
      <h3>Reviews by {props.user.name}</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            onChange={handleChange}
            value={search}
            placeholder="type to search"
          />
          <button onClick={() => upSearch("")}>Reset</button>
        </form>
        <ListReviews searchString={search} user={props.user} />
      </div>
    </aside>
  );
}
