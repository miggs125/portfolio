import React from "react";
import { Canvas } from "@react-three/fiber";
import Blob from "../Blob";
import Controls from "../Controls";
import "./styles.css";


const App = () => {
	

	return (
		<div className="app">
			<Canvas
				id="canvas"
				gl={{ preserveDrawingBuffer: true }}
				shadows
				dpr={[1, 1.5]}
				camera={{ position: [0, 0, 150], fov: 50 }}>
				<Controls />
				<color attach="background" args={['#111111']} />
			
				<ambientLight intensity={0.4} />
				<Blob />
			</Canvas>
	 </div>
	);
};

export default App;
