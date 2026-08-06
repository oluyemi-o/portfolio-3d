import { useProgress } from "@react-three/drei"
import React from 'react'

function MyLoader() {

    const { active, progress } = useProgress()

    if (!active) return null

    return (
        // displays counter when model is loading
        <div className="fixed inset-0 z-50 flex items-center justify-center text-center text-xl font-black">
            {Math.round(progress)}% Loaded
        </div>
    )

}

export default MyLoader
