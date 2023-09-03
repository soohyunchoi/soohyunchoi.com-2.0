import React, { Component } from 'react';

interface NavLinkProps {
    label: string;
    to: string;
    className?: string;
}

function NavLink(props: NavLinkProps) {
    const classes = `font-serif text-lg nav-link px-10 ${props.className}`;
    return (
        <div className={classes}>
            <a href={props.to}>
                {props.label}
            </a>
        </div>
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
        <div className='text-black flex justify-between fixed top-0 left-0 right-0 pt-8 px-28 h-20'>
            <img className='object-contain h-full' src='/assets/images/logo.png' alt='logo'/>
            <NavMenu>
                <NavLink label='About' to='/about'/>
                <NavLink label='Resume' to='/resume'/>
                <NavLink label='Contact' to='/contact'/>
            </NavMenu>
        </div>
    );
}

export { NavBar };