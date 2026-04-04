'use client';
import { ReactNode, useState, useEffect } from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import MobilePage from '@/app/(sections)/mobilepage';
import { NavBar } from './navbar';

interface LayoutWrapperProps {
    children: ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
    const isMobile = useIsMobile();
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        // Set loading to false after the initial render
        setIsLoading(false);
    }, []);
    
    if (isLoading) {
        return <div className="min-h-screen w-full" style={{backgroundColor: '#eeebe3'}} />;
    }
    
    if (isMobile) {
        return <MobilePage />;
    }
    
    return (
        <div className="max-w-[1400px] mx-auto w-full">
            <NavBar />
            {children}
        </div>
    );
} 