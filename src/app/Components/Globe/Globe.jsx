"use client";

import { useEffect, useRef } from "react";
import Globe from "globe.gl";

export default function GitHubGlobe() {
  const globeRef = useRef(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const globe = Globe()(globeRef.current)
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
      .backgroundImageUrl("//unpkg.com/three-globe/example/img/night-sky.png")
      .pointsData(samplePoints)
      .pointAltitude(0.01)
      .pointColor(() => "rgba(0,255,255,0.6)")
      .pointRadius(0.3)
      .width(window.innerWidth)
      .height(window.innerHeight);

    // ✅ Set auto-rotation via controls
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;

    return () => {
      globeRef.current?.replaceChildren(); 
    };
  }, []);

  return <div ref={globeRef} className="w-full h-screen" />;
}

// Sample points (replace with actual GitHub data if needed)
const samplePoints = Array.from({ length: 100 }).map(() => ({
  lat: (Math.random() - 0.5) * 180,
  lng: (Math.random() - 0.5) * 360,
  size: Math.random(),
}));