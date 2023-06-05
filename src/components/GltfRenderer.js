import './GltfRenderer.css';
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import React from 'react';

const Model = () =>{
const gltf = useLoader(GLTFLoader, "./scene.glb");
return (
	<>
	<primitive object={gltf.scene} scale={0.2}/>
	</>
);
};
//needs to be changed



export default function GltfRenderer() {
	return (
		<div className="GltfRenderer">
		<Canvas>
		<Suspense fallback={null}>
		<Model />
		<OrbitControls enableDamping={false} />
		<Environment preset="sunset" background />
		</Suspense>
		</Canvas>
		</div>

	);
}





