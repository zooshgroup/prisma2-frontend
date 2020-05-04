import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Movie } from "../../../types/typedefs";

const MOV_Q = gql`
  query movies($search: String) {
    movies(search: $search) {
      title,
      length,
      id
    }
  }
`;

interface mProps {
    id: string;
}

function Details(props: mProps) {
    const search = '';

    const { loading: isLoading, error, data } = useQuery(MOV_Q, {
        variables: { search: search },
    });

    if (isLoading) return <p>Loading ...</p>;
    if (error) return <h1>Log in to view movies.</h1>;

    if (data.movies.length === 0) return <h1>No movies found.</h1>;
    const movies = data.movies;
    const listItems = movies.map((movie: Movie) => (
        movie.id === props.id ? <div key={movie.id}><h1>Title: {movie.title}</h1><h2>Length: {movie.length ? movie.length : 'No info.'}</h2></div> : ''
    ));
    return listItems;
}

export default Details;