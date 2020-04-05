import React from 'react'

interface welcomeProps {
    name: string,
    login: boolean,
}

export function Greeting(props: welcomeProps) {
    if (props.login) {
      return <h1>Hello, {props.name}<span className="active">!</span></h1>
    }
    return <h1>Hello, Stranger<span className="active">.</span></h1>
}