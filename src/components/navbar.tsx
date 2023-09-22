'use client';
import React, { Component } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import { Logo } from './logo';
import { RESUME_LINK } from '@/app/constants';
interface NavLinkProps {
    label: string;
    to: string;
    className?: string;
    newTab?: boolean;
}

function NavLink(props: NavLinkProps) {
    return (
        <div className={`font-serif text-lg nav-link px-10 ${props.className}`}>
            <a href={props.to} target={props.newTab ? "_blank" : ''}>
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

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 17,
        restDelta: 0.00001
    });

    return (
        <div>
            <motion.div
                className="fixed bg-gradient-to-r from-purple-500 to-pink-500 top-0 left-0 right-0 h-1.5 origin-left z-40"
                style={{ scaleX: scaleX }}
            />
            <div className='text-black backdrop-blur flex justify-between fixed top-0 left-0 right-0 pt-7 h-20 px-32 z-30'>
                <Logo/>
                <NavMenu>
                    <NavLink key='work' label='Work' to='#work'/>
                    <NavLink key='about' label='About' to='#bio'/>
                    <NavLink key='resume' label='Resume' to={RESUME_LINK} newTab={true}/>
                </NavMenu>
            </div>
        </div>
    );
}

export { NavBar };