'use client';
import ScrollIndicator from '@/components/scrollindicator'
import WorkSection from './(sections)/aboutsection'
import BioSection from './(sections)/biosection'
import TitleCard from './(sections)/titlecard'
import Footer from './(sections)/footer'
import { motion } from "framer-motion";
import { useState } from 'react';

export default function Home() {
    const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(false);
    
    return (
        <main className="bg-white flex min-h-screen flex-col items-center justify-between p-16">
            <motion.div
                onViewportEnter={() => setScrollIndicatorVisible(true)}
                onViewportLeave={() => setScrollIndicatorVisible(false)}
                viewport={{margin: '-90% 0% 0% 0%'}}
            >
            <TitleCard/>
            </motion.div>
            <WorkSection/>
            <BioSection/>
            <Footer/>
            <ScrollIndicator
                scrollIndicatorVisible={scrollIndicatorVisible}
            />
        </main>
    )
}