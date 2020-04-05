import React from 'react'
/*
----------- this does not work - QUESTION WHY

interface navItemProps {
    target: string,
}
function navItem(props: navItemProps) {
    return <li><a href={props.target}>asd</a></li>
}
<navItem target="Home"/>
*/

interface navbarProps {
    onNavigate: any,
    active: number,
    login: boolean
}

export function Navbar(props: navbarProps) {
    function handleClick(e: any) {
        e.preventDefault()
        const target = Number(e.target.id)
        props.onNavigate(target)
      }
    if (props.login) {
        // eslint-disable-next-line
        return <ul><li><a href="/" id="0" onClick={handleClick} className={props.active === 0 ? "active" : ""}>Home</a></li><li><a href="/" id="1" onClick={handleClick} className={props.active === 1 ? "active" : ""}>Movies</a></li><li><a href="/" id="2" onClick={handleClick} className={props.active === 2 ? "active" : ""}>Dashboard</a></li></ul>
    }
    // eslint-disable-next-line
    return <ul><li><a href="/" id="0" onClick={handleClick} className={props.active === 0 ? "active" : ""}>Home</a></li><li><a href="/" id="1" onClick={handleClick} className={props.active === 1 ? "active" : ""}>Login</a></li><li><a href="/" id="2" onClick={handleClick} className={props.active === 2 ? "active" : ""}>Register</a></li></ul>
}
