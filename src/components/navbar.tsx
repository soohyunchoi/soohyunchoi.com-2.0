'use client';
import React, { Component, useState } from 'react';
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
    const highlightVariants = {
        hover: { scaleX: 1 },
        initial: { scaleX: 0 }
    };
    
    const transition = { duration: 0.3, type: "spring", stiffness: 200, damping: 20 };

    return (
        <motion.div
            className={`z-40 relative font-serif text-lg mx-10 ${props.className}`}
        >
                <motion.a href={props.to} target={props.newTab ? "_blank" : ''}
                    initial="initial"
                    whileHover="hover"
                >
                    {props.label}
                    <motion.div
                        className="absolute left-0 h-[3px] bg-black w-full origin-left"
                        variants={highlightVariants}
                        transition={transition}
                />
                </motion.a>
        </motion.div>
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