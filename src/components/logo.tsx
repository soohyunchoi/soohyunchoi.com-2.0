'use client';
import React, { Component, useEffect, useState, useRef } from 'react';

interface LogoProps {
    className?: string;
}
export function Logo(props: LogoProps) {
    return (
        <div className=''>
            <a href='#title'>
                <img className='object-contain h-full z-30' src='/assets/images/logo.png' alt='logo'/>
            </a>
        </div>
    );
}