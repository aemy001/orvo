'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Globe = () => {
  const containerRef = useRef(null);
useEffect(() => {
  let controls;

  const init = async () => {
    const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls');
    // ... all rest of setup, using OrbitControls below
    controls = new OrbitControls(camera, renderer.domElement);
    // continue rest of scene setup here...
  };

  init();

  return () => {
    if (controls) controls.dispose();
    // other cleanup
  };
}, []);

  useEffect(() => {
    const globe_map_url =
      '/images/map.png';
    const image = new Image();
    image.crossOrigin = 'Anonymous';
    image.src = globe_map_url;

    const container = containerRef.current;
    const { width: W, height: H } = container.getBoundingClientRect();

    const GLOBE_RADIUS = 25;
    const DEG2RAD = Math.PI / 180;
    const worldDotRows = 200;
    const worldDotSize = 0.095;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(20, W / H, 170, 260);
    camera.position.set(0, 0, 220);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    container.appendChild(renderer.domElement);

    const parentContainer = new THREE.Group();
    const euler = new THREE.Euler(0.3, 4.6, 0.05);
    let rot = euler;
    const offset = new Date().getTimezoneOffset() || 0;
    rot.y = euler.y + Math.PI * (offset / 720);
    parentContainer.rotation.copy(rot);
    scene.add(parentContainer);

    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.minPolarAngle = Math.PI * 0.3;
    controls.maxPolarAngle = Math.PI * 0.6;

    const animate = () => {
      requestAnimationFrame(animate);
      parentContainer.rotation.y += 0.002;
      controls.update();
      renderer.render(scene, camera);
    };

    const calc_pos = (lat, lng, radius) => {
      const phi = (90 - lat) * DEG2RAD;
      const theta = (lng + 180) * DEG2RAD;
      return {
        x: -radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.cos(phi),
        z: radius * Math.sin(phi) * Math.sin(theta),
      };
    };

    const getImageData = (img) => {
      const c = document.createElement('canvas');
      const ctx = c.getContext('2d');
      c.width = img.width;
      c.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      return ctx.getImageData(0, 0, img.width, img.height);
    };

    const visibilityForCoordinate = (lng, lat, d) => {
      const x = Math.floor(((lng + 180) / 360) * d.width);
      const y = Math.floor(((90 - lat) / 180) * d.height);
      const i = 4 * (y * d.width + x);
      return d.data[i + 1] > 100;
    };

    const drawWorldDots = (img) => {
      const obj = new THREE.Object3D();
      const imageData = getImageData(img);
      const matrices = [];

      for (let lat = -90; lat <= 90; lat += 180 / worldDotRows) {
        const radius = Math.cos(Math.abs(lat) * DEG2RAD) * GLOBE_RADIUS;
        const circ = radius * Math.PI * 2 * 2;
        for (let r = 0; r < circ; r++) {
          const lng = (360 * r) / circ - 180;
          if (!visibilityForCoordinate(lng, lat, imageData)) continue;
          const s = calc_pos(lat, lng, GLOBE_RADIUS);
          obj.position.set(s.x, s.y, s.z);
          const o = calc_pos(lat, lng, GLOBE_RADIUS + 5);
          obj.lookAt(o.x, o.y, o.z);
          obj.updateMatrix();
          matrices.push(obj.matrix.clone());
        }
      }

      const dot = new THREE.CircleGeometry(worldDotSize, 5);
      const dotMat = new THREE.MeshStandardMaterial({
        color: 0x3a5f64,
        metalness: 0,
        roughness: 0.9,
        transparent: true,
        alphaTest: 0.02,
      });

      const mesh = new THREE.InstancedMesh(dot, dotMat, matrices.length);
      for (let i = 0; i < matrices.length; i++) mesh.setMatrixAt(i, matrices[i]);
      mesh.renderOrder = 3;
      parentContainer.add(mesh);
    };

    image.onload = () => drawWorldDots(image);
    animate();

    return () => {
      renderer.dispose();
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="globe"
      style={{ width: '100%', height: '100vh', overflow: 'hidden' }}
    />
  );
};

export default Globe;
