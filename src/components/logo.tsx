'use client';
import React, { Component, useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from "framer-motion";

interface LogoProps {
    className?: string;
}
export function Logo(props: LogoProps) {
    const controls = useAnimation();
    const imageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        async function animateBorder() {
            await controls.start({ strokeDashoffset: 400 }); // Animate the path to complete.
            await controls.start({ strokeDashoffset: 0 });  // Reset back to the start.
        }

        animateBorder();

    }, [controls]);

    return (
        <div className=''>
            <a href='#title'>
                <img className='object-contain h-full z-30' ref={imageRef} src='/assets/images/logo.png' alt='logo'/>
            </a>
        </div>
    );
}