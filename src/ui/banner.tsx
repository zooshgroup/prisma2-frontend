import React from 'react'

interface welcomeProps {
    name: string,
}

export function Banner(props: welcomeProps) {
    return <h1>Hello, {props.name?props.name:"Stranger"}<span className="active">!</span></h1>
}
