import React, { useEffect, useState, ReactNode } from 'react';
import styles from './FadeIn.module.css';

interface FadeInProps {
    children: ReactNode;
    duration?: string;
    trigger?: any; // Use 'any' type to accept any type of trigger
    className?: string
}

const FadeIn: React.FC<FadeInProps> = ({ children, duration = '2s', trigger, className }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(false);
        console.log('trigger__')
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 10);

        return () => clearTimeout(timer);
    }, [trigger]);

    return (
        <div
            className={`${styles.fadeIn} ${className}`}
            style={{
                animationDuration: duration,
                opacity: isVisible ? 1 : 0
            }}
        >
            {children}
        </div>
    );
};

export default FadeIn;
