import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React, { Suspense } from 'react'
import MyLoader from "./MyLoader"


function Earth() {
    const earth = useGLTF("./planet/scene.gltf")


    return (
        <primitive
            object={earth.scene}
        />
    )
}

function EarthCanvas() {
    return (
        <Canvas
            shadows
            frameloop="demand"
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 30,
                near: 0.1,
                far: 200,
            }}

        >
            <Suspense fallback={<MyLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth
                    scale={2.5}
                    position-y={0}
                    rotation-y={0}
                />

            </Suspense>
        </Canvas>
    )
}

export default EarthCanvas
