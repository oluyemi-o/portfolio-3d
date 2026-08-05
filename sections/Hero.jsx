import React, { useState } from 'react'
import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"
import { Canvas } from "@react-three/fiber"
import Astronaut from "../components/Astronaut"
import { useMediaQuery } from "react-responsive"

function Hero() {
    // checks for current screen size
    const isTablet = useMediaQuery({ maxWidth: "910px" })
    const isMobile = useMediaQuery({ maxWidth: "767px" })

    return (
        <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">

            {/* Descriptions in hero */}
            <HeroText />

            {/* Animated background */}
            <ParallaxBackground />

            {/* 3D Model with responsiveness for smaller screens */}
            <div className={isMobile ? "absolute top-30 " : " absolute top-[-50px] left-80 inset-0 "}
                style={{ width: "100vw", height: "100vh" }}
            >
                <Astronaut
                    scale={isTablet ? 1 : 1.5}
                />
            </div>

        </section>
    )
}

export default Hero
