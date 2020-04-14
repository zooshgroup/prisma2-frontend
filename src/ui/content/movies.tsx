import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const MOV_Q = gql`
  query movies($search: String) {
    movies(search: $search) {
      title
    }
  }
`

interface Movie {
    title: string
}

//is it good to double check whether user is logged in? eg: in greeting, nav, content
export function Movies() {
    const [search, upSearch] = useState('')
    const { loading, error, data } = useQuery(MOV_Q)
    /*const [loadGreeting, { called, loading2, data2 }] = useLazyQuery(
      MOV_Q,
      { variables: { search: search } }
    )*/
    if (loading) return <p>Loading ...</p>
    if(error) console.log(error)
    if (error) return <h1>Log in to view movies.</h1>
    if (data.movies.length === 0) return <h1>No movies found.</h1>
    const movies = data.movies
    console.log(movies)
    const listItems = movies.map((movie: Movie, index: number) =>
        <h1 key={index}>{movie.title}</h1>
    )
    

    function handleSubmit(event: any) {
      if(search) {
        
      }
    }

    function handleChange(event: any) {
      upSearch(event.target.name)
    }

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="search" onChange={handleChange} value={search} placeholder="type to search" />
          </form>
          {listItems}
        </div>)
}