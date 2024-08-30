import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const RoomModel = () => {
  const gltf = useLoader(GLTFLoader, '/path/to/your/room-model.glb');
  return <primitive object={gltf.scene} />;
};

export default RoomModel;