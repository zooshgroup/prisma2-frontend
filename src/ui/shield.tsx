import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import App from '.'

const WHO_Q = gql`
  query whoami {
    whoami {
      name
    }
  }
`

export default function ShieldedApp() {
    const { loading, data } = useQuery(WHO_Q)
    if (loading) return <p>Loading ...</p>
    // how to handle server errors and auth errors. check here or can I return specific messages from the backend query?
    //if (error) return <h1>Error<span className="active">.</span></h1>

    const name = data && data.whoami.name
    return <App user={name}/>
}
    