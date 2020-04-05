import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const MOV_Q = gql`
  query movies {
    movies {
      title
    }
  }
`

interface Movie {
    title: string
}

export function Movies(){
    const { loading, error, data } = useQuery(MOV_Q)
    if (loading) return <p>Loading ...</p>
    if (error) return <h1>Log in to view movies.</h1>
    if (data.movies.length === 0) return <h1>No movies found.</h1>
    const movies = data.movies
    console.log(movies)
    const listItems = movies.map((movie: Movie, index: number) =>
        <h1 key={index}>{movie.title}</h1>
    )
    return <div>{listItems}</div>
}