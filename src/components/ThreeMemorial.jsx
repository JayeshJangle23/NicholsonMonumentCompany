import React, { useMemo, useState, useEffect } from "react";
import { Canvas,useThree } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  Text,
} from "@react-three/drei";
import * as THREE from "three";
import "../styles/global.css";
import CemeteryEnvironment from "../components/CementryEnvironment.jsx";

const graniteOptions = [
  { name: "Midnight Black", color: "#25282b", roughness: 0.24 },
  { name: "Classic Gray", color: "#858582", roughness: 0.38 },
  { name: "Rose Granite", color: "#88645f", roughness: 0.34 },
  { name: "Forest Green", color: "#34483f", roughness: 0.3 },
];

const emblemOptions = ["✝", "✦", "❀", "♥"];

function getStoneShape(style) {
  const shape = new THREE.Shape();

  if (style === "Heart") {
    shape.moveTo(0, 0);

  shape.bezierCurveTo(
    -0.2, 0.3,
    -1.4, 1.1,
    -1.4, 1.85
  );

  shape.bezierCurveTo(
    -1.4, 2.8,
    -0.2, 2.8,
    0, 2.05
  );

  shape.bezierCurveTo(
    0.2, 2.8,
    1.4, 2.8,
    1.4, 1.85
  );

  shape.bezierCurveTo(
    1.4, 1.1,
    0.2, 0.3,
    0, 0
  );

  shape.closePath();
  } else if (style === "Slanted") {
    shape.moveTo(-1.25, 0);
    shape.lineTo(-1.25, 1.75);
    shape.lineTo(1.25, 2.15);
    shape.lineTo(1.25, 0);
    shape.closePath();
  } else {
    shape.moveTo(-1.25, 0);
    shape.lineTo(-1.25, 1.65);
    shape.quadraticCurveTo(-1.25, 2.25, -0.65, 2.25);
    shape.lineTo(0.65, 2.25);
    shape.quadraticCurveTo(1.25, 2.25, 1.25, 1.65);
    shape.lineTo(1.25, 0);
    shape.closePath();
  }

  return new THREE.ExtrudeGeometry(shape, {
    depth: 0.32,
    bevelEnabled: true,
    bevelSegments: 4,
    bevelSize: 0.035,
    bevelThickness: 0.035,
  });
}

// function MemorialModel({ granite, monumentStyle, inscription, emblem }) {
//   const geometry = useMemo(() => getStoneShape(monumentStyle), [monumentStyle]);

//   const stone = graniteOptions.find((g) => g.name === granite);

//   const textPosition = monumentStyle === "Heart" ? 1.45 : 1.55;

//   return (
//     <group position={[0, -0.65, 0]}>
//       {/* Main monument */}
//       <mesh
//         geometry={geometry}
//         position={[0, 0.85, 0]}
//         castShadow
//         receiveShadow
//       >
//         <meshStandardMaterial
//           color={stone.color}
//           roughness={stone.roughness}
//           metalness={0.15}
//         />
//       </mesh>

//       {/* Emblem */}
//       <Text
//         position={[0, 2.75, 0.36]}
//         fontSize={0.27}
//         color="#d6b578"
//         anchorX="center"
//         anchorY="middle"
//       >
//         {emblem}
//       </Text>

//       {/* Customer inscription */}
//       <Text
//         position={[0, textPosition, 0.37]}
//         fontSize={0.205}
//         maxWidth={1.85}
//         textAlign="center"
//         anchorX="center"
//         anchorY="middle"
//         lineHeight={1.45}
//         color="#eee4d3"
//         outlineWidth={0.002}
//         outlineColor="#222222"
//       >
//         {inscription || "Forever\nIn Our Hearts"}
//       </Text>

//       {/* Engraving separator */}
//       <mesh position={[0, 1.25, 0.38]}>
//         <boxGeometry args={[0.65, 0.012, 0.01]} />
//         <meshStandardMaterial color="#d6b578" />
//       </mesh>

//       {/* Top pedestal */}
//       <mesh position={[0, 0.79, 0]}>
//         <boxGeometry args={[2.85, 0.22, 0.75]} />
//         <meshStandardMaterial color={stone.color} roughness={stone.roughness} />
//       </mesh>

//       {/* Bottom pedestal */}
//       <mesh position={[0, 0.57, 0]}>
//         <boxGeometry args={[3.05, 0.17, 0.85]} />
//         <meshStandardMaterial color="#393a3a" roughness={0.32} />
//       </mesh>

//       {/* Gold detail */}
//       <mesh position={[0, 0.475, 0]}>
//         <boxGeometry args={[2.8, 0.018, 0.86]} />
//         <meshStandardMaterial
//           color="#b99a69"
//           metalness={0.55}
//           roughness={0.3}
//         />
//       </mesh>
//     </group>
//   );
// }


function ResponsiveMemorialCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    const isMobile = size.width < 600;

    if (isMobile) {
      camera.position.set(4.8, 3.1, 9.2);
      camera.fov = 43;
    } else {
      camera.position.set(4, 2.7, 7);
      camera.fov = 37;
    }

    camera.updateProjectionMatrix();
  }, [camera, size.width]);

  return null;
}



function MemorialModel({ granite, monumentStyle, inscription, emblem }) {
  const geometry = useMemo(
    () => getStoneShape(monumentStyle),
    [monumentStyle]
  );

  const stone = graniteOptions.find((g) => g.name === granite);

  // Independent positioning for each monument shape
//   const layouts = {
//     Classic: {
//       emblemY: 2.05,
//       textY: 1.25,
//       dividerY: 0.95,
//       fontSize: 0.205,
//       maxWidth: 1.85,
//       emblemSize: 0.27,
//     },

//     Heart: {
//       emblemY: 1.80,
//       textY: 0.95,
//       dividerY: 0.65,
//       fontSize: 0.155,
//       maxWidth: 1.30,
//       emblemSize: 0.22,
//     },

//     Slanted: {
//       emblemY: 1.65,
//       textY: 0.95,
//       dividerY: 0.65,
//       fontSize: 0.175,
//       maxWidth: 1.85,
//       emblemSize: 0.23,
//     },
//   };

const layouts = {
  Classic: {
    emblemY: 2.35,
    textY: 1.65,
    dividerY: 1.25,
    fontSize: 0.19,
    maxWidth: 1.95,
    emblemSize: 0.25,
  },

  Heart: {
    emblemY: 2.5,
    textY: 1.85,
    dividerY: 1.25,
    fontSize: 0.145,
    maxWidth: 1.65,
    emblemSize: 0.22,
  },

  Slanted: {
    emblemY: 1.85,
    textY: 1.25,
    dividerY: 0.90,
    fontSize: 0.16,
    maxWidth: 1.85,
    emblemSize: 0.22,
  },
};

  const layout = layouts[monumentStyle] || layouts.Classic;

  return (
    <group position={[0, -0.65, 0]}>

      {/* Main monument */}
      <mesh
        geometry={geometry}
        position={[0, 0.85, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={stone.color}
          roughness={stone.roughness}
          metalness={0.15}
        />
      </mesh>

      {/* Memorial emblem */}
      {/* <Text
        position={[0, layout.emblemY, 0.37]}
        fontSize={layout.emblemSize}
        color="#d6b578"
        anchorX="center"
        anchorY="middle"
        textAlign="center"
      >
        {emblem}
      </Text> */}

      {/* Personalized inscription */}
      {/* <Text
        position={[0, layout.textY, 0.37]}
        fontSize={layout.fontSize}
        maxWidth={layout.maxWidth}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        lineHeight={1.35}
        color="#eee4d3"
        outlineWidth={0.001}
        outlineColor="#222222"
        overflowWrap="break-word"
      >
        {inscription || "Forever\nIn Our Hearts"}
      </Text> */}

      {/* Decorative engraving */}
      {/* <mesh position={[0, layout.dividerY, 0.38]}>
        <boxGeometry args={[0.65, 0.012, 0.01]} />
        <meshStandardMaterial
          color="#d6b578"
          metalness={0.5}
        />
      </mesh> */}
{/* Memorial emblem */}
<Text
  position={[0, layout.emblemY, 0.39]}
  fontSize={layout.emblemSize}
  color="#d6b578"
  anchorX="center"
  anchorY="middle"
  textAlign="center"
>
  {emblem}
</Text>

{/* Personalized inscription */}
<Text
  position={[0, layout.textY, 0.39]}
  fontSize={layout.fontSize}
  maxWidth={layout.maxWidth}
  textAlign="center"
  anchorX="center"
  anchorY="middle"
  lineHeight={1.3}
  color="#eee4d3"
  outlineWidth={0.001}
  outlineColor="#222222"
  overflowWrap="break-word"
  clipRect={[-1.15, -0.35, 1.15, 0.35]}
>
  {inscription || "Forever\nIn Our Hearts"}
</Text>

{/* Decorative separator */}
<mesh position={[0, layout.dividerY, 0.40]}>
  <boxGeometry args={[0.55, 0.012, 0.01]} />
  <meshStandardMaterial color="#d6b578" />
</mesh>
      {/* Upper pedestal */}
      <mesh position={[0, 0.79, 0]}>
        <boxGeometry args={[2.85, 0.22, 0.75]} />
        <meshStandardMaterial
          color={stone.color}
          roughness={stone.roughness}
        />
      </mesh>

      {/* Bottom pedestal */}
      <mesh position={[0, 0.57, 0]}>
        <boxGeometry args={[3.05, 0.17, 0.85]} />
        <meshStandardMaterial
          color="#393a3a"
          roughness={0.32}
        />
      </mesh>

      {/* Gold decorative line */}
      <mesh position={[0, 0.475, 0]}>
        <boxGeometry args={[2.8, 0.018, 0.86]} />
        <meshStandardMaterial
          color="#b99a69"
          metalness={0.55}
          roughness={0.3}
        />
      </mesh>

    </group>
  );
}

export default function ThreeMemorial() {
  const [granite, setGranite] = useState("Midnight Black");
  const [monumentStyle, setMonumentStyle] = useState("Classic");
  const [emblem, setEmblem] = useState("✝");
  const [inscription, setInscription] = useState("Forever\nIn Our Hearts");

//   const [showEditor, setShowEditor] = useState(false);

  return (
    <section className="memorial-experience">
      <div className="memorial-heading">
        <span>PERSONALIZED MEMORIALS</span>
        <h2>A Lasting Tribute</h2>
        <p>Explore the beauty of a personalized monument.</p>
      </div>

      <div className="memorial-layout">
        <div className="memorial-canvas">
          <div className="canvas-label">
            <span>3D PREVIEW</span>
            <span>DRAG TO EXPLORE ↗</span>
          </div>

          <Canvas
            camera={{ position: [4, 2.7, 7], fov: 37 }}
            shadows
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
          >
            <ResponsiveMemorialCamera />
            <CemeteryEnvironment />
            <ambientLight intensity={1.1} />

            <directionalLight position={[4, 7, 5]} intensity={2.4} castShadow />

            <pointLight position={[-4, 3, 2]} color="#e8c78d" intensity={30} />

            <MemorialModel
              granite={granite}
              monumentStyle={monumentStyle}
              inscription={inscription}
              emblem={emblem}
            />

            <ContactShadows
              position={[0, -0.1, 0]}
              opacity={0.4}
              scale={7}
              blur={2.5}
            />

            <Environment preset="city" />

            <OrbitControls
              enablePan={false}
              enableZoom
              enableRotate
              minDistance={4.5}
              maxDistance={10}
              minPolarAngle={0.65}
              maxPolarAngle={1.75}
              target={[0, 1, 0]}
              enableDamping
              dampingFactor={0.06}
            />
          </Canvas>

          <div className="canvas-hint">
            <span>↻</span> Rotate &nbsp; · &nbsp; Zoom to inspect
          </div>
        </div>

        <div className="memorial-controls">
          <div className="control-title">
            <div>
              <span>MEMORIAL STUDIO</span>
              <h3>Customize Design</h3>
            </div>
            <span className="studio-icon">✧</span>
          </div>

          <div className="control-group">
            <label>01 — GRANITE COLOR</label>

            <div className="granite-options">
              {graniteOptions.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  className={`granite-option ${
                    granite === item.name ? "selected" : ""
                  }`}
                  onClick={() => setGranite(item.name)}
                  aria-pressed={granite === item.name}
                  title={item.name}
                >
                  <span style={{ background: item.color }} />
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="control-group">
            <label>02 — MONUMENT STYLE</label>

            <div className="style-options">
              {["Classic", "Heart", "Slanted"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setMonumentStyle(item)}
                  className={monumentStyle === item ? "active" : ""}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="control-group">
            <label>03 — MEMORIAL EMBLEM</label>

            <div className="emblem-options">
              {emblemOptions.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setEmblem(item)}
                  className={emblem === item ? "active" : ""}
                  aria-pressed={emblem === item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="control-group">
            <label htmlFor="memorial-inscription">
              04 — PERSONAL INSCRIPTION
            </label>

            <textarea
              id="memorial-inscription"
              rows="2"
              maxLength={65}
              value={inscription}
              onChange={(e) => setInscription(e.target.value)}
              placeholder="Enter memorial inscription..."
            />
          </div>

          {/* <button
            type="button"
            className="memorial-edit-button"
            onClick={() => setShowEditor(!showEditor)}
          >
            {showEditor ? "Close customization" : "Explore customization"}
            <span>→</span>
          </button> */}
          <button
            type="button"
            className="memorial-edit-button"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Request This Design <span>→</span>
          </button>
          <button
            type="button"
            className="memorial-reset"
            onClick={() => {
              setGranite("Midnight Black");
              setMonumentStyle("Classic");
              setEmblem("✝");
              setInscription("Forever\nIn Our Hearts");
            }}
          >
            Reset design
          </button>

          <p className="memorial-disclaimer">
            This is an interactive design preview. Final monument specifications
            and pricing are confirmed by our team.
          </p>
        </div>
      </div>
    </section>
  );
}
