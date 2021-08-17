import React, { Suspense, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Stats, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import tex1 from '../assets/CarModel3d/textures/Material.008_baseColor.png';
import tex2 from '../assets/CarModel3d/textures/Material.009_baseColor.png';
import tex3 from '../assets/CarModel3d/textures/Material.010_baseColor.png';
import tex4 from '../assets/CarModel3d/textures/Material.011_normal.png';
import tex5 from '../assets/CarModel3d/textures/Material.011_baseColor.png';
import tex6 from '../assets/CarModel3d/textures/Material.032_baseColor.png';

import * as three from 'three';

const Car = () => {
    const car = useRef<three.Mesh>();
    const texture1 = useLoader(three.TextureLoader, tex1);
    const texture2 = useLoader(three.TextureLoader, tex2);
    const texture3 = useLoader(three.TextureLoader, tex3);
    const texture4 = useLoader(three.TextureLoader, tex4);
    const texture5 = useLoader(three.TextureLoader, tex5);
    const texture6 = useLoader(three.TextureLoader, tex6);
    const group = useRef();

    const nodes = useLoader(GLTFLoader, './assets/CarModel3d/scene.gltf');

    return <primitive object={nodes.scene} dispose={null} />;
};

const Scene = () => {
    return (
        <>
            <pointLight intensity={5.0} position={[1, 1, 1]} />
            <pointLight intensity={5.0} position={[-1, -1, -1]} />
            <pointLight intensity={5.0} position={[-20, -20, -20]} />
            <Car />
        </>
    );
};

const ThreeDimensionCar: React.FC = () => {
    return (
        <div
            style={{
                height: '100%',
                width: '100%',
            }}
        >
            <Canvas
                camera={{
                    near: 0.1,
                    far: 1000,
                    zoom: 1,
                }}
                onCreated={({ gl }) => {
                    gl.setClearColor('#252934');
                }}
            >
                <Stats />
                <OrbitControls />
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default ThreeDimensionCar;
