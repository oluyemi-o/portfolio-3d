import React, { useState } from 'react'
import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"
import { Canvas } from "@react-three/fiber"
import Astronaut from "../components/Astronaut"
import { useMediaQuery } from "react-responsive"
import { motion } from "framer-motion"

function Hero() {
    // checks for current screen size
    const isTablet = useMediaQuery({ maxWidth: "910px" })
    const isMobile = useMediaQuery({ maxWidth: "767px" })

    return (
        <section className="flex items-start justify-center md:items-start md:justify-start w-screen min-h-screen overflow-hidden c-space">

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

            {/* scroll down animation and button */}
            <div className="absolute sm:bottom-5 bottom-32 left-0 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-300 flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 40, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                            className="w-3 h-3 rounded-full mb-1 bg-gray-300"
                        >

                        </motion.div>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Hero
