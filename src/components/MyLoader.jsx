import { Html, useProgress } from "@react-three/drei"

function MyLoader() {
    const { progress } = useProgress()

    return (
        <Html center>
            <div className="text-center text-xl font-black whitespace-nowrap">
                {Math.round(progress)}% Loaded
            </div>
        </Html>
    )
}

export default MyLoader