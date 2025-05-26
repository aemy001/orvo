// components/GradientBackground.js
'use client';

import { useEffect } from 'react';
import styles from './background.module.css'
import {initGradient } from './Gradient'

export default function GradientBackground() {
    useEffect(() => {
        const gradient = initGradient();
        return () => {
          gradient?.disconnect?.();
        };
      }, []);

  return (
    <canvas
      id="gradient-canvas"
      className={styles.canvas2}
    />
  );
}
