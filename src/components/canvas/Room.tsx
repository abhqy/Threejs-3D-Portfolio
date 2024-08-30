import React, { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {Model} from "../../../public/Lowpoly_room";
// import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";

// const Room: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
//   const room = useGLTF("./lowpoly_room/scene.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={1.5} groundColor="black" />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={room.scene}
//         scale={isMobile ? 0.7 : 0.75}
//         position={isMobile ? [0, -3, -2.2] : [0, -400, 0]}
//         rotation={[0, 0, 0]}
//       />
//     </mesh>
//   );
// }

const RoomCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <></>
      ) : (
        <Canvas
          frameloop="demand"
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          camera={{ position: [0, 2, 5], fov: 70 }}
        >
          <OrbitControls enableZoom={false} autoRotate={true} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Model />
          {/* <EffectComposer>
            <SelectiveBloom threshold={0.1} strength={1.5} radius={0.4} />
          </EffectComposer> */}
        </Canvas>
      )}
    </>
  );
}

export default RoomCanvas;

