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

interface lmProps {
  searchString: string
}

function ListMovies(props: lmProps) {
  const search = props.searchString
  
  const { loading:isLoading, error, data } = useQuery(MOV_Q, { variables: { search: search } })
    
  if (isLoading) return <p>Loading ...</p>
  if (error) return <h1>Log in to view movies.</h1>

  if (data.movies.length === 0) return <h1>No movies found.</h1>
  const movies = data.movies
  const listItems = movies.map((movie: Movie, index: number) =>
        <h1 key={index}>{movie.title}</h1>
  )
  return listItems
}

//is it good to double check whether user is logged in? eg: in greeting, nav, content
export function Movies() {
    const [search, upSearch] = useState('')    

    function handleSubmit(event: any) {
      event.preventDefault()
    }

    function handleChange(event: any) {
      upSearch(event.target.value)
    }

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="search" onChange={handleChange} value={search} placeholder="type to search" />
            <button onClick={()=>upSearch('')}>Reset</button>
          </form>
          <ListMovies searchString={search}/>
        </div>)
}