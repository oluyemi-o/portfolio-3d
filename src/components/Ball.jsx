import { Suspense } from 'react'
import { Canvas } from "@react-three/fiber"
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei"
import MyLoader from "./MyLoader"


function Ball(props) {
    const decal = useTexture(props.imgUrl)

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.5]} />
            <mesh castShadow receiveShadow scale={2.75} >
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color={"#fff8eb"}
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    map={decal}
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    flatShading
                />
            </mesh>
        </Float>
    )
}

function BallCanvas({ icon }) {
    return (
        <>
            <Canvas
                gl={{ preserveDrawingBuffer: true }}
            >
                <Float >
                    <Suspense fallback={<MyLoader />}>
                        <OrbitControls enableZoom={false} />
                        <Ball imgUrl={icon} />
                    </Suspense>
                </Float>
                <Preload all />
            </Canvas>
        </>
    )
}

export default BallCanvas
