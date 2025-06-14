'use client';
import { motion, spring } from "framer-motion";

export default function MobilePage() {
    return (
        <div className="w-full min-h-screen bg-white">
            <main className="w-full px-4 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    animate={{ opacity: 1, y: 100 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 30,
                        duration: 1.5
                    }}
                    className="w-full max-w-2xl mx-auto"
                >
                    <motion.h1 
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: 1, y: 125 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 30,
                            duration: 1.5,
                            delay: 2
                        }}
                        className="text-lg italic mb-6 text-right pr-10"
                    >
                        — Soohyun
                    </motion.h1>
                    <p className="text-lg text-center leading-relaxed font-serif">
                        Welcome to my mobile site! Please visit on desktop for the full experience :)
                    </p>
                </motion.div>
            </main>
        </div>
    );
} 