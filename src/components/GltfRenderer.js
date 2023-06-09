import './GltfRenderer.css';
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import React, {Component, useMemo} from 'react';



function ModelDefault({dataUri}){
const { scene } = useLoader(GLTFLoader, dataUri)
const copiedScene = useMemo(() => scene.clone(), [scene])
return (
	<>
	<primitive object={copiedScene} scale={0.2}/>
	</>
);
};

class GltfRenderer extends React.Component {
	render() {
		return(
		<div className="GltfRenderer">
		<Canvas>
		<Suspense fallback={null}>
		<ModelDefault dataUri = {this.props.dataUri}/>
			<Environment files={"/belfast_sunset_puresky_1k.hdr"} background/>
		<OrbitControls enableDamping={false} />
		</Suspense>
		</Canvas>
		</div>
		)

	}
}

export default GltfRenderer;






