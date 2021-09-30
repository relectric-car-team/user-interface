import React, { Suspense, useLayoutEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Stats, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useLoader } from 'react-three-fiber';
import { Vector3 } from 'three';

const Car = () => {
    const nodes = useLoader(GLTFLoader, './assets/CarModel3d/scene.gltf');
    {
        /** Checks objects location to prevent object translations
         *  being "stacked" on top of eachother.
         */
    }
    if (nodes.scene.position.x != -1.7 && nodes.scene.position.y != -1.2 && nodes.scene.position.z != -1.4) {
        nodes.scene.translateY(-0.3);
        nodes.scene.translateX(-0.85);
        nodes.scene.translateZ(-0.35);
    }
    return <primitive object={nodes.scene} dispose={null} />;
};

const Scene = () => {
    return (
        <>
            <pointLight intensity={5.0} position={[20, 20, 20]} />
            <pointLight intensity={5.0} position={[-20, -20, 20]} />
            <Car />
            <PerspectiveCamera makeDefault position={[-4.2, 0, 0]} near={0.1} far={100} zoom={1} />
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
                style={{ background: 'transparent' }}
                onCreated={({ gl }) => {
                    gl.setClearColor('#252934');
                }}
            >
                <color attach="background" args={['null']} />
                <Stats />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                />
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default ThreeDimensionCar;
