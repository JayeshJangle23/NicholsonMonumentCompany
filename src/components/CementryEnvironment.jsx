
import React from "react";
import * as THREE from "three";

function Tree({ position, scale = 1 }) {
  return (
    <group position={position} scale={scale}>
      {/* Tree trunk */}
      <mesh position={[0, 1, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.2, 2, 8]} />
        <meshStandardMaterial color="#65513b" />
      </mesh>

      {/* Natural tree canopy */}
      <mesh position={[0, 2.3, 0]} castShadow>
        <sphereGeometry args={[0.95, 12, 12]} />
        <meshStandardMaterial color="#65785a" roughness={1} />
      </mesh>

      <mesh position={[-0.48, 2.65, 0.1]}>
        <sphereGeometry args={[0.58, 10, 10]} />
        <meshStandardMaterial color="#778966" roughness={1} />
      </mesh>

      <mesh position={[0.48, 2.55, -0.1]}>
        <sphereGeometry args={[0.62, 10, 10]} />
        <meshStandardMaterial color="#526b4d" roughness={1} />
      </mesh>
    </group>
  );
}

function BackgroundMemorial({ position, scale = 1 }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.65, 0]} castShadow>
        <boxGeometry args={[0.8, 1.25, 0.22]} />
        <meshStandardMaterial
          color="#92938d"
          roughness={0.42}
        />
      </mesh>

      <mesh position={[0, 1.28, 0]}>
        <sphereGeometry
          args={[0.4, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]}
        />
        <meshStandardMaterial color="#a2a39d" roughness={0.4} />
      </mesh>

      <mesh position={[0, 0.06, 0]}>
        <boxGeometry args={[1.05, 0.15, 0.4]} />
        <meshStandardMaterial color="#777a75" />
      </mesh>
    </group>
  );
}

function Bush({ position, scale = 1 }) {
  return (
    <mesh position={position} scale={scale}>
      <sphereGeometry args={[0.55, 12, 10]} />
      <meshStandardMaterial color="#627653" roughness={1} />
    </mesh>
  );
}

export default function CemeteryEnvironment() {
  return (
    <group>
      {/* Sky */}
      <color attach="background" args={["#dce3dc"]} />

      <fog attach="fog" args={["#dce3dc", 10, 24]} />

      {/* Natural ground */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.32, -3]}
        receiveShadow
      >
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial
          color="#77836a"
          roughness={1}
        />
      </mesh>

      {/* Stone pathway behind the main monument */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.305, -5]}
      >
        <planeGeometry args={[2.5, 13]} />
        <meshStandardMaterial
          color="#aaa397"
          roughness={0.9}
        />
      </mesh>

      {/* Pathway stone divisions */}
      {Array.from({ length: 7 }).map((_, i) => (
        <mesh
          key={i}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.29, -1.5 - i * 1.5]}
        >
          <planeGeometry args={[2.5, 0.035]} />
          <meshStandardMaterial color="#827e74" />
        </mesh>
      ))}

      {/* Background trees */}
      <Tree position={[-4.5, -0.3, -3]} scale={1.2} />
      <Tree position={[4.5, -0.3, -4]} scale={1.3} />
      <Tree position={[-5, -0.3, -8]} scale={1.5} />
      <Tree position={[5.5, -0.3, -9]} scale={1.5} />

      {/* Smaller distant memorials */}
      <BackgroundMemorial position={[-3.3, -0.3, -5]} scale={0.9} />
      <BackgroundMemorial position={[3.4, -0.3, -6]} scale={0.85} />
      <BackgroundMemorial position={[-2.8, -0.3, -9]} scale={0.7} />
      <BackgroundMemorial position={[2.8, -0.3, -10]} scale={0.7} />

      {/* Garden bushes */}
      <Bush position={[-3.2, 0.1, -2]} />
      <Bush position={[3.1, 0.1, -2.5]} />
      <Bush position={[-4.5, 0.1, -6]} scale={1.3} />
      <Bush position={[4.5, 0.1, -7]} scale={1.2} />
    </group>
  );
}
