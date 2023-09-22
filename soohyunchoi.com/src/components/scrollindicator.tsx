import React from 'react';
import { AnimatePresence, motion, useScroll, Variants } from "framer-motion";

interface ScrollIndicatorProps {
    scrollIndicatorVisible: boolean;
}
export default function ScrollIndicator(props: ScrollIndicatorProps) {
    return (
        <AnimatePresence>
        {
            props.scrollIndicatorVisible &&
            <motion.div
                key='indicator'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{type: "spring", duration: 0.5}}
            >
                <div className='h-12 flex flex-col justify-center text-black space-y-4 fixed left-1/2 mb-12 bottom-0'>
                    <span className='font-sans italic text-lg text-center'>scroll</span>
                    <div className='animate-bounce h-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="22" viewBox="0 0 52 22" fill="none">
                            <path d="M2 2L26 19L50 2" stroke="black" stroke-width="4"/>
                        </svg>
                    </div>
                </div>
            </motion.div>
            }
        </AnimatePresence>
    );
}