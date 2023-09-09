'use client';
import React, { Component } from 'react';
import { motion, useScroll } from "framer-motion";

interface NavLinkProps {
    label: string;
    to: string;
    className?: string;
}

function NavLink(props: NavLinkProps) {
    return (
        <div className={`font-serif text-lg nav-link px-10 ${props.className}`}>
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
    const { scrollYProgress } = useScroll();
    return (
        <div>
            <motion.div
                className="fixed bg-gradient-to-r from-purple-500 to-pink-500  top-0 left-0 right-0 h-1 origin-left z-20"
                style={{ scaleX: scrollYProgress }}
            />
            <div className='text-black backdrop-blur flex justify-between fixed top-0 left-0 right-0 pt-7 h-20 px-32 z-10'>
                <img className='object-contain h-full' src='/assets/images/logo.png' alt='logo'/>
                <NavMenu>
                    <NavLink label='About' to='/about'/>
                    <NavLink label='Resume' to='/resume'/>
                    <NavLink label='Contact' to='/contact'/>
                </NavMenu>
            </div>
        </div>
    );
}

export { NavBar };