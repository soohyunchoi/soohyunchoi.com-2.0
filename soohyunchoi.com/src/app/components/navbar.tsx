import React, { Component } from 'react';

interface NavLinkProps {
    label: string;
    to: string;
}

function NavLink(props: NavLinkProps) {
    return (
        <a href={props.to} className="nav-link">
            {props.label}
        </a>
    );
}

interface NavMenuProps {
    children: React.ReactNode;
}
function NavMenu(props: NavMenuProps) {
    return (
        <div className='flex justify-between'>
            {props.children}
        </div>
    )
}

function NavBar() {
    return (
        <div className='text-black flex justify-between fixed top-0 left-0 right-0'>
            <img src='../../../public/assets/images/logo.png' alt='logo'/>
            asdf
            <NavMenu>
                <NavLink label='About' to='/about'/>
                <NavLink label='Resume' to='/resume'/>
                <NavLink label='Contact' to='/contact'/>
            </NavMenu>
        </div>
    );
}

export { NavBar };