import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, OrbitControls, Preload, useGLTF, useProgress } from "@react-three/drei"
import { useMotionValue, useSpring } from "motion/react"
import { easing } from "maath"
import MyLoader from "./MyLoader"
function Astronaut({ scale }) {
    const group = useRef()


    const astronaut = useGLTF("./models/chibi_astronaut/scene.gltf")
    const yPosition = useMotionValue(8)
    const ySpring = useSpring(yPosition, { damping: 30 })

    useEffect(() => {
        ySpring.set(0)
    }, [yPosition])



    useFrame((state, delta) => {
        group.current.position.y = ySpring.get()

    })
    return (
        <mesh>
            <hemisphereLight
                intensity={0.15}
                groundColor={"black"}
            />
            <pointLight intensity={1} />
            <group ref={group} >
                <primitive
                    object={astronaut.scene}
                    scale={scale}
                    position={[0, 0, 0]}
                    rotation={[-0.2, -5.3, -0.1]}
                />
            </group>
        </mesh>
    )
}

function AstronautCanvas({ scale }) {
    const [isOrbiting, setIsOrbiting] = useState(false);

    return (
        <>
            <Canvas
                shadows
                camera={{ position: [0, 2, 5], fov: 25 }}
                gl={{ preserveDrawingBuffer: true }}
            >
                <Float >
                    <Suspense fallback={<MyLoader />}>
                        <OrbitControls
                            enableZoom={false}
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={Math.PI / 2}
                            onStart={() => setIsOrbiting(true)}
                            onEnd={() => setIsOrbiting(false)}
                        />
                        <Astronaut scale={scale} />
                    </Suspense>
                </Float>
                {/* <Rig enabled={!isOrbiting} /> */}
                <Preload all />
            </Canvas>

        </>
    )

}

/* function Rig({ enabled }) {
    useFrame((state, delta) => {
        if (!enabled) return

        easing.damp3(
            state.camera.position,
            [state.mouse.x * 1.5, 1 + state.mouse.y * 1.5, 5],
            0.5,
            delta
        )
    })

    return null
} */

export default AstronautCanvas
