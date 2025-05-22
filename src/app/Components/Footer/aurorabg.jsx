'use client';
import React from 'react';
import './aurora.css';

const AuroraBackground = ({ children, showRadialGradient = true }) => {
  return (
    <main>
      <div className={`aurora-wrapper ${showRadialGradient ? 'radial-mask' : ''}`}>
        <div className="aurora-overlay"></div>
        <div className="container d-flex align-items-center justify-content-center h-100">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuroraBackground;
