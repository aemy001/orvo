"use client";

import { useEffect, useRef } from "react";
import Globe from "globe.gl";

export default function GithubGb() {
  const globeRef = useRef(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const globe = Globe()(globeRef.current)
.globeImageUrl("/images/globe/globe3.png")
      // .globeImageUrl("//unpkg.com/three-globe/example/img/earth-night.jpg")
      .backgroundColor("rgba(0, 0, 0, 0)") 
      .showAtmosphere(false)
      .atmosphereColor("#0ff")
      .atmosphereAltitude(0.4)
      .pointsData(samplePoints)
      .pointAltitude(0.03)
      .pointColor(() => "#ccffff") 
      .pointRadius(0.4)
      .arcsData(sampleArcs)
      .arcColor(() => ["#ccffff", "#ccffff"]) 
      .arcAltitude(0.3)
      .arcStroke(0.6)
      .arcDashLength(0.4)
      .arcDashGap(0.01)
      .arcDashInitialGap(() => Math.random())
      .arcDashAnimateTime(4000)
      .width(1000)
      .height(window.innerHeight);

    const controls = globe.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;
    controls.enableZoom = false;
    controls.minDistance = 250;
    controls.maxDistance = 300;
    controls.update();

    return () => {
      globeRef.current?.replaceChildren();
    };
  }, []);

  return (
    <div
      ref={globeRef}
      className="w-full h-screen bg-transparent"
      style={{ backgroundColor: "transparent" ,
       cursor: "grab"
  }}
  onMouseDown={(e) => (e.currentTarget.style.cursor = "grabbing")}
  onMouseUp={(e) => (e.currentTarget.style.cursor = "grab")}
    />
  );
}

// 🔹 Fake location points
const samplePoints = [
  { lat: -23.5, lng: -46.6 },   
  { lat: -34.6, lng: -58.4 },   
  { lat: 4.6, lng: -74.1 },     
  { lat: -33.4, lng: -70.6 },  
  { lat: -12.0, lng: -77.0 },
  { lat: 60.0, lng: 100.0 },    
  { lat: 50.0, lng: 135.0 },    
  { lat: 40.0, lng: 120.0 },    
  { lat: 30.0, lng: 140.0 },   
  { lat: 10.0, lng: 130.0 },    
];

const arcsFromEquator = samplePoints.slice(0, 5).map((p) => ({
  startLat: 0,
  startLng: 0,
  endLat: p.lat,
  endLng: p.lng,
}));

const arcsFromFarEast = samplePoints.slice(5).map((p) => ({
  startLat: 85.0,
  startLng: -170.0,
  endLat: p.lat,
  endLng: p.lng,
}));

const sampleArcs = [...arcsFromEquator, ...arcsFromFarEast];