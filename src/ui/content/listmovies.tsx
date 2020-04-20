import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const MOV_Q = gql`
  query movies($search: String) {
    movies(search: $search) {
      title
      id
    }
  }
`;

interface Movie {
    title: string;
    id: string;
}

interface lmProps {
    searchString: string;
}

function ListMovies(props: lmProps) {
    const search = props.searchString;

    const { loading: isLoading, error, data } = useQuery(MOV_Q, {
        variables: { search: search },
    });

    if (isLoading) return <p>Loading ...</p>;
    if (error) return <h1>Log in to view movies.</h1>;

    if (data.movies.length === 0) return <h1>No movies found.</h1>;
    const movies = data.movies;
    const listItems = movies.map((movie: Movie) => (
        <h1 key={movie.id}>{movie.title}</h1>
    ));
    return listItems;
}

export default ListMovies;