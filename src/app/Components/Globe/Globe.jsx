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
  { lat: -23.5, lng: -46.6 },   // São Paulo
  { lat: -34.6, lng: -58.4 },   // Buenos Aires
  { lat: 4.6, lng: -74.1 },     // Bogotá
  { lat: -33.4, lng: -70.6 },   // Santiago
  { lat: -12.0, lng: -77.0 },   // Lima
  { lat: 60.0, lng: 100.0 },    // Central Siberia, Russia
  { lat: 50.0, lng: 135.0 },    // Russian Far East
  { lat: 40.0, lng: 120.0 },    // Northeastern China
  { lat: 30.0, lng: 140.0 },    // South of Japan
  { lat: 10.0, lng: 130.0 },    // Western Pacific Ocean

  // 🔽 New points toward Antarctica
  // { lat: -45.0, lng: 170.5 },   // Dunedin, NZ
  // { lat: -54.8, lng: -68.3 },   // Ushuaia, Argentina
  // { lat: -60.0, lng: -45.0 },   // Southern Atlantic Ocean
  // { lat: -70.0, lng: 90.0 },    // East Antarctica
  // { lat: -75.0, lng: 0.0 },     // Queen Maud Land
  // { lat: -80.0, lng: 120.0 },   // Dome A region
  // { lat: -85.0, lng: -135.0 },  // Near Amundsen–Scott Station
];


// 🔹 Fake arcs
// const sampleArcs = samplePoints.map((p) => ({
//   startLat: 0,
//   startLng: 0,
//   endLat: p.lat,
//   endLng: p.lng,
// }));
// First half: arcs from Equator
const arcsFromEquator = samplePoints.slice(0, 5).map((p) => ({
  startLat: 0,
  startLng: 0,
  endLat: p.lat,
  endLng: p.lng,
}));

// Second half: arcs from far northeast (more spread)
const arcsFromFarEast = samplePoints.slice(5).map((p) => ({
  startLat: 85.0,
  startLng: -170.0,
  endLat: p.lat,
  endLng: p.lng,
}));

const sampleArcs = [...arcsFromEquator, ...arcsFromFarEast];