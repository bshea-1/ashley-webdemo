import React, { useEffect, useState } from 'react';

const PageTransition = ({ children, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 10);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
        >
            {children}
        </div>
    );
};

export const FadeIn = ({ children, delay = 0, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div
            className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} ${className}`}
        >
            {children}
        </div>
    );
};

export const StaggeredList = ({ children, staggerDelay = 100 }) => {
    return (
        <>
            {React.Children.map(children, (child, index) => (
                <FadeIn delay={index * staggerDelay} key={index}>
                    {child}
                </FadeIn>
            ))}
        </>
    );
};

export default PageTransition;
