'use client';

import React, { useEffect, useState, ReactNode } from 'react';
import styles from './SlideIn.module.css';

interface SlideInProps {
  children: ReactNode;
  duration?: string;
  trigger?: any;
  isVisible: boolean;
}

const SlideIn: React.FC<SlideInProps> = ({ children, duration = '0.5s', trigger, isVisible }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (trigger !== undefined) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, parseFloat(duration) * 1000);

      return () => clearTimeout(timer);
    }
  }, [trigger, duration]);

  return (
    <div
      className={`${styles.slideIn} ${isVisible ? styles.slideInActive : styles.slideOutActive}`}
      style={{ animationDuration: duration }}
    >
      {children}
    </div>
  );
};

export default SlideIn;
