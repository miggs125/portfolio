import React, { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend, useFrame, useThree } from "@react-three/fiber";

extend({ OrbitControls });

const Controls = () => {
	const {
		camera,
		gl: { domElement },
	} = useThree();

	const ref = useRef();
	useFrame(() => ref.current.update());

	return (
		<orbitControls
			ref={ref}
			args={[camera, domElement]}
			enableZoom={true}
		/>
	);
};

export default Controls;
