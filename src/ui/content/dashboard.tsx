import React from 'react'

export function Dashboard(){
    return (
        <aside>
            <p>Dashboard here</p>
            <p>User data printed here</p>
            <p>If admin, user list printed here</p>
            <button onClick={(e) => localStorage.removeItem('token')}>Log out</button>
        </aside>)
}