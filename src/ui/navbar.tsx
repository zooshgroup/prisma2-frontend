import React from 'react'

interface navItemProps {
    name: string,
    id: number,
    handler: any,
    active: number
}
function NavItem(props: navItemProps) {
    let active = ""
    if (props.active === props.id) active = "active"
    return (
        <li>
            <a href="/" id={props.id.toString()} onClick={props.handler} className={active}>{props.name}</a>
        </li>)
}

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
        return (
            <ul>
                <NavItem name="Home" id={0} handler={handleClick} active={props.active}/>
                <NavItem name="Movies" id={1} handler={handleClick} active={props.active}/>
                <NavItem name="Dashboard" id={2} handler={handleClick} active={props.active}/>
            </ul>)
    }
    // eslint-disable-next-line
    return (
        <ul>
            <NavItem name="Home" id={0} handler={handleClick} active={props.active}/>
            <NavItem name="Login" id={1} handler={handleClick} active={props.active}/>
            <NavItem name="Register" id={2} handler={handleClick} active={props.active}/>
        </ul>)
}