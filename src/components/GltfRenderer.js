import './GltfRenderer.css';
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import React, {Component} from 'react';
import Dropzone from './Dropzone';

const {useState} = React;

const fileToDataUri = (file) => new Promise((resolve, reject)=> {
	const reader = new FileReader();
	reader.onload = (event) => {
		resolve(event.target.result)
	};
	reader.readAsDataURL(file);
})

export default function GltfRendererUpload() {

	const [dataUri, setDataUri] = useState('')
		const onChange = (file) => {
			if (!file) {
				setDataUri("./scene.glb");
				return;
			}
			fileToDataUri(file).then(dataUri => {
				setDataUri(dataUri)
			})
		}


		const ModelDefault = () =>{
			const gltf = useLoader(GLTFLoader, dataUri);
			return (
				<>
					<primitive object={gltf.scene} scale={0.2}/>
				</>
			);
		};

		return (
			<div className="GltfRenderer">
				<Canvas>
					<Suspense fallback={null}>
						<ModelDefault/>
						<OrbitControls enableDamping={false}/>
						<Environment preset="sunset" background/>
					</Suspense>
				</Canvas>
			</div>

		);

}

/*const ModelDefault = () =>{
const gltf = useLoader(GLTFLoader, "./scene.glb");
return (
	<>
	<primitive object={gltf.scene} scale={0.2}/>
	</>
);
};*/

/*export default function GltfRenderer() {
	return (
		<div className="GltfRenderer">
		<Canvas>
		<Suspense fallback={null}>
		<ModelDefault />
		<OrbitControls enableDamping={false} />
		<Environment preset="sunset" background />
		</Suspense>
		</Canvas>
		</div>

	);
}*/





