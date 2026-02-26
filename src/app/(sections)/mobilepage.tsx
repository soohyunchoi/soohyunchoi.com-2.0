'use client';
import { motion, spring } from "framer-motion";
import { RESUME_LINK } from '@/app/constants';

export default function MobilePage() {
    return (
        <div className="w-full min-h-screen bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 30,
                    duration: 1.5,
                    delay: 0
                }}
                className="flex justify-center gap-10 pt-7 px-6"
            >
                <a href={RESUME_LINK} target="_blank" className="font-serif text-lg italic font-light">
                    Resume
                </a>
                <a href="mailto:hello@soohyunchoi.com" className="font-serif text-lg italic font-light">
                    Email
                </a>
            </motion.div>
            <main className="w-full px-4 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 30,
                        duration: 1.5,
                        delay: 0
                    }}
                    className="font-sans text-6xl mb-6 text-center"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 240 }}
                        animate={{ opacity: 1, y: 225 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 30,
                            duration: 1.5,
                            delay: 3
                        }}
                        className="font-sans text-lg italic mb-6 text-right pr-10"
                    >
                        — Soohyun
                    </motion.h1>
                    <span className="font-sans text-5xl italic pr-4">Hey!</span>
                    <motion.span
                        animate={{
                            rotate: [0, 20, -10, 20, 0]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: 1,
                            repeatDelay: 1,
                            ease: "easeInOut"
                        }}
                        style={{
                            display: "inline-block",
                            transformOrigin: "70% 70%"
                        }}
                    >
                        👋
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 20 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 30,
                            duration: 1.5,
                            delay: 1
                        }}
                        className="w-full max-w-2xl mx-auto"
                    >
                        <p className="text-lg text-center leading-relaxed font-serif">
                            Welcome to my mobile site! Please visit on desktop for the full experience :)
                        </p>
                    </motion.h1>
                </motion.div>
            </main>
            <motion.div
                initial={{ opacity: 0, y: 240 }}
                animate={{ opacity: 1, y: 225 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 30,
                    duration: 1.5,
                    delay: 3
                }}
                className="-mt-40 px-4 pb-8 w-full flex justify-center"
            >
                <img
                    src="/assets/images/2.0/IMG_0539.webp"
                    alt="Photo"
                    className="rounded-lg w-full max-w-md"
                />
            </motion.div>
        </div>
    );
} 