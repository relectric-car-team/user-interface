import React, { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Stats, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useLoader } from 'react-three-fiber';

/*
    Notes about options for the car page:
    - Car cannot be globaly rendered. This caused by the way ionic handles modals, putting the modal over EVERY thing
      on the page. Thus the only way to render the car on the car page is to put it in the modal which gives us the 
      problem of re rendering the car everytime we open the modal.
    - Putting some sort of dynamic loading animation doesnt seem possible without a fixed length loading spinner (not
      ideal) as the the component techinically renders instantly, it just takes threejs a moment to render the scene.
    - As for switching modals on changing the state of the car, if we render all "states" of the car on the modal render
      we will take a large performance hit. On the other hand if we re render the 3d modal as the new "state" we will get
      momentary blank spot as the 3d modal disappears and loads the new one every time we say open a door.
    - Placing the car on the main page and rendering all 3d models in the background could work as we would take a performance
      hit on startup however there doesnt seem to be too much cost in having them running once started. We could then switch
      3d models in and out without the bank scenes will re rendering. Although im not sure how this would work with the 
      asthetic of the project.
    - Finally we could go back to a 2d model and just have a high quality svg done up that looks like a realistic view of
      the top of a car. Think of what we had before just high quality. Something like: 
      https://online.2021saleoutlet.ru/content?c=car%20top%20view%20png&id=8  
*/

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
            <PerspectiveCamera makeDefault position={[2, 4.2, 2]} near={0.1} far={100} zoom={1.2} />
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
                    gl.setClearColor('#000000');
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
