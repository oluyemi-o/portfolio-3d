import { PointMaterial, Points, Preload } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import React, { Suspense, useRef, useState } from 'react'

import * as random from "maath/random/dist/maath-random.esm"
import MyLoader from "./MyLoader"

function Stars(props) {
    const ref = useRef()

    const sphere = random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 })

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10
        ref.current.rotation.y -= delta / 15
    })


    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                />
            </Points>
        </group>
    )
}

function StarsCanvas() {
    return (
        // <div className="w-screen h-auto absolute inset-0 -z-1 ">
        <div className="fixed top-0 left-0 -z-18 h-screen w-screen">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense
                    fallback={<MyLoader />}
                >
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}

export default StarsCanvas
