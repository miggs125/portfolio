import { useFrame, useThree, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import React, { useRef } from "react";
import { vertexShader, fragmentShader } from "./shader";

const NoiseMaterial = shaderMaterial(
	{
		time:0,
	},
	vertexShader,
	fragmentShader
);

extend({ NoiseMaterial });

const Blob = (props) => {
	const ref = useRef();
	const { clock } = useThree();
	const updateBlob = () => {
		const time = clock.getElapsedTime();
        ref.current.material.uniforms.time.value = time;
	};

	useFrame(updateBlob);

	return (
		<mesh {...props} ref={ref}>
			<sphereBufferGeometry attach="geometry" args={[30, 100, 100]} />
			<noiseMaterial attach="material" wireframe />
		</mesh>
	);
};

export default Blob;
