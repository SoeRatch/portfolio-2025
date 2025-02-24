"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Image, OrbitControls, Text } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import InteractiveFace from "./InteractiveFace";

const RotatingCube = () => {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Smooth rotation around Y-axis
  useFrame(() => {
    if (ref.current && !hovered) {
      ref.current.rotation.y += 0.012;
    }
  });
  

  return (
    <group ref={ref}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[3, 3, 3]} />

        {/* Adjacent sides have different colors */}
        <meshStandardMaterial attach="material-0" color="black" roughness={0.3} />  {/* Front */}
        <meshStandardMaterial attach="material-1" color="black" roughness={0.3} />  {/* Back */}
        <meshStandardMaterial attach="material-2" color="white" roughness={0.3} />  {/* Right */}
        <meshStandardMaterial attach="material-3" color="white" roughness={0.3} />  {/* Left */}
        <meshStandardMaterial attach="material-4" color="lightgray" roughness={0.3} /> {/* Top */}
        <meshStandardMaterial attach="material-5" color="darkgray" roughness={0.3} />  {/* Bottom */}
      </mesh>

      {/* Text on Each Side */}
      <Text
        position={[0, 0, 1.55]}
        fontSize={0.6}
        color="black"
        maxWidth={2.5}
        textAlign="center"
        onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerOut={() => setHovered(false)}
      >
        Suraj Sharma
      </Text>

      {/* Interactive Faces */}
      <InteractiveFace
        position={[1.55, 0, 0]}
        url="/youtube_logo.png"
        text="@ExDevPro"
        link="https://www.youtube.com/@ExDevPro"
        rotation={[0, Math.PI / 2, 0]}
        hovered={hovered}
        setHovered={setHovered}
      />

      <InteractiveFace
        position={[0, 0, -1.55]}
        url="/LeetCode_Logo.png"
        text="LeetCode Profile"
        link="https://leetcode.com/SoeRatch"
        rotation={[0, Math.PI, 0]}
        textColor="black"
        hovered={hovered}
        setHovered={setHovered}
      />

      <InteractiveFace
        position={[-1.55, 0, 0]}
        url="/linkedin_logo.png"
        text="LinkedIn Profile"
        link="https://www.linkedin.com/in/surajs787/"
        rotation={[0, -Math.PI / 2, 0]}
        hovered={hovered}
        setHovered={setHovered}
      />
    </group>
  );
};

const FloatingCube = () => {
  return (
    <div className="hidden sm:block fixed bottom-10 right-10 w-48 h-48 z-50"> {/* Responsive: Hidden on small screens */}
      <Canvas shadows>
        {/* Ambient Light for Soft Shadows */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 10]} intensity={1.5} castShadow />

        {/* Cube */}
        <RotatingCube />

        {/* User Can Slightly Interact */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2} // Prevent looking at top
          maxPolarAngle={Math.PI / 2} // Prevent looking at bottom
        />
      </Canvas>
    </div>
  );
};

export default FloatingCube;
