import React from 'react'
import { User } from '../../types/typedefs'

interface dashProps {
    user?: User,
}

export function Dashboard(props: dashProps) {
    if(!props.user) return <h1>Log in to view page.</h1>
    let ageP = (props.user.age && props.user.age!== -1) ? <p>Age: {props.user.age}</p> : <p>No age set</p>
    return (
        <aside>
            <p>Name: {props.user.name}</p>
            {ageP}
            <pre>If admin, user list printed here</pre>
            <button onClick={(e: React.FormEvent) => localStorage.removeItem('token')}>Log out</button>
        </aside>)
}