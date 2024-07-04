import React, { useState, useEffect, ReactNode } from 'react';
import styles from './FadeDown.module.css';

interface FadeDownProps {
    children: ReactNode;
    startAnimation: boolean;
}

const FadeDown: React.FC<FadeDownProps> = ({ children, startAnimation }) => {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        if (startAnimation) {
            setShouldAnimate(true);
        }
    }, [startAnimation]);

    return (
        <div className={shouldAnimate ? styles.fadeDown : ''}>
            {children}
        </div>
    );
};

export default FadeDown;
