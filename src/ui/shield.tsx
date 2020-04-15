import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import App from '.'
import { User } from '../types/typedefs'

const WHO_Q = gql`
  query whoami {
    whoami {
      name, email, age
    }
  }
`

export default function ShieldedApp() {
    const { loading, error, data } = useQuery(WHO_Q)
    if (loading) return <p>Loading ...</p>
    /*if (error && error.graphQLErrors)
    error.graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    )*/
    let netErr = ""
    if(error && error.networkError) netErr = error.networkError.message + " - "
    if (error && !error.message.includes('Not Authorised')) return <h1>{netErr}Error<span className="active">.</span></h1>    
    let name = data && data.whoami.name
    let email = data && data.whoami.email
    let age = data && data.whoami.age
    const user: User = {name,email,age}
    return <App user={user}/>
}
    