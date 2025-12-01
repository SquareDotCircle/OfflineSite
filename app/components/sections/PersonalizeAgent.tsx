'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function PersonalizeAgent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0x000000, 0);

    // Create sphere of nodes
    const nodeGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
    });
    const nodes: THREE.Mesh[] = [];
    const nodePositions: THREE.Vector3[] = [];

    // Generate nodes in spherical formation
    const radius = 2;
    const nodeCount = 50;

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(x, y, z);
      nodes.push(node);
      nodePositions.push(new THREE.Vector3(x, y, z));
      scene.add(node);
    }

    // Create connections
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.2,
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodePositions[i].distanceTo(nodePositions[j]);
        if (distance < 1.5) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            nodePositions[i],
            nodePositions[j],
          ]);
          const line = new THREE.Line(geometry, lineMaterial);
          scene.add(line);
        }
      }
    }

    camera.position.z = 5;

    // Animation
    let animationFrameId: number;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);

      // Gentle rotation
      scene.rotation.y += 0.005;
      scene.rotation.x += 0.002;

      // Pulse effect on nodes
      const time = Date.now() * 0.001;
      nodes.forEach((node, index) => {
        const scale = 1 + 0.3 * Math.sin(time + index * 0.1);
        node.scale.setScalar(scale);
      });

      renderer.render(scene, camera);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  return (
    <section
      id="build-it"
      className="bg-black py-16 md:py-32 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="container max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Content */}
          <div>
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 md:mb-8 uppercase tracking-tight">
              Building tools for self reliant people
            </h2>

            <p className="text-[#dbdbdb] text-lg md:text-xl leading-[1.7] mb-6 md:mb-8 font-medium">
              Personal intelligence that doesn&apos;t sit on a server farm
            </p>

            <p className="text-[#dbdbdb] text-base md:text-lg leading-[1.7] mb-6 md:mb-8">
              Giving you the infrastructure to customise your AI by talking to it, all local and as private as it gets
            </p>
          </div>

          {/* Three.js Visualization */}
          <div className="relative h-[300px] md:h-[400px]">
            <canvas
              ref={canvasRef}
              id="sphereNetwork"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
