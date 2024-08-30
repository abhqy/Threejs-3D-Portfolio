import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Earth = () => {
  const earth = useGLTF("./mysterious_letter.glb");

  return (
    <primitive object={earth.scene} scale={0.02} position-y={0} rotation-x={1} />
  );
};
// const Earth = () => {
//   const earth = useGLTF("./canadian_mailbox.glb");

//   return (
//     <primitive object={earth.scene} scale={0.015} position-y={-1.5} position-x={-0.5} />
//   );
// };

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          rotation={[0, 3, 0]}
        />
        <ambientLight intensity={10} castShadow />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
