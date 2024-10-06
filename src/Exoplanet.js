// src/Exoplanet.js
import React, { useEffect } from 'react';
import * as THREE from 'three';

function Exoplanet() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('exoplanet-canvas').appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Earth%27s_Temperature_Map.svg/800px-Earth%27s_Temperature_Map.svg.png'),
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      document.getElementById('exoplanet-canvas').removeChild(renderer.domElement);
    };
  }, []);

  return <div id="exoplanet-canvas"></div>;
}

export default Exoplanet;
