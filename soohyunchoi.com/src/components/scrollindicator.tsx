import React from 'react';

export default function ScrollIndicator() {
    return (
        <div className='h-12 flex flex-col justify-center text-black space-y-4 fixed bottom-0 left-50 right-50 mb-12'>
            <span className='font-sans italic text-lg text-center'>scroll</span>
            <div className='animate-bounce h-20'>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="22" viewBox="0 0 52 22" fill="none">
                    <path d="M2 2L26 19L50 2" stroke="black" stroke-width="4"/>
                </svg>
            </div>
        </div>
    );
}