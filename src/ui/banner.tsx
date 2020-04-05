import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const WHO_Q = gql`
  query whoami {
    whoami {
      name
    }
  }
`

interface welcomeProps {
    name: string,
    login: boolean,
}

export function Greeting(props: welcomeProps) {
    const { loading, error, data } = useQuery(WHO_Q)

    if (loading) return <p>Loading ...</p>
    if (error) return <h1>Hello, Stranger<span className="active">.</span></h1>
    
    const name = data.whoami && data.whoami.name //is this proper way to check?
    return <h1>Hello, {name?name:"Stranger"}<span className="active">!</span></h1>
    
}
