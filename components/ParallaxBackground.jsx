import React from 'react'
import sky from "../assets/PNG-no-blur/sky_01.png"
import rightRock from "../assets/parallax-adjusted/rock_04.svg"
import leftRock from "../assets/parallax-adjusted/rock_2.svg"
import planet1 from "../assets/parallax-adjusted/planet_01.svg"
import planet2 from "../assets/parallax-adjusted/planet_02.svg"
import floatingRocks from "../assets/parallax-adjusted/rock_03.svg"
import sun from "../assets/sun_01.svg"
import { motion, useScroll, useTransform } from "motion/react"


function ParallaxBackground() {

    const { scrollYProgress } = useScroll(); motion

    // whilst scroll progress is at 0, mountainY will be 0
    // as scroll progress moves to 50%, mountainY will move up to 70%
    const backGround = useTransform(scrollYProgress, [0, 0.5], ["0%", "70%"])
    const planetX = useTransform(scrollYProgress, [0, 0.5], ["0%", "-20%"])
    const midGround = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"])
    const foreGround = useTransform(scrollYProgress, [0, 0.5], ["0%", "0%"])

    return (
        <section className="absolute inset-0 bg-black/40">
            <div className="relative h-screen overflow-y-hidden" >



                {/* sky */}


                <div className="absolute inset-0 w-full h-screen -z-70"
                    style={{
                        backgroundImage: `url(${sky})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                    }}
                />

                <motion.div
                    className="absolute inset-0 w-full h-screen -z-60"
                    style={{
                        backgroundImage: "url(../assets/parallax-adjusted/sun_01.svg)",
                        // backgroundImage: `url(${sun})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: midGround
                    }}
                />

                <motion.div className="absolute inset-0 -z-50"
                    style={{
                        backgroundImage: `url(${planet2})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        x: planetX,
                    }}
                />

                <motion.div className="absolute inset-0 -z-40"
                    style={{
                        backgroundImage: `url(${planet1})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        x: planetX,
                    }}
                />

                <motion.div className="absolute inset-0 -z-30"
                    style={{
                        backgroundImage: `url(${floatingRocks})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: backGround,
                    }}
                />
                <motion.div className="absolute inset-0 -z-20"
                    style={{
                        backgroundImage: `url(${leftRock})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: foreGround,
                    }}
                />

                <motion.div className="absolute inset-0 -z-10"
                    style={{
                        backgroundImage: `url(${rightRock})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: foreGround,
                    }}
                />



                {/*

                <motion.div className="absolute inset-0 -z-40"
                    style={{
                        backgroundImage: `url(${mountain3})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: backGround,
                    }}
                />


                <motion.div className="absolute inset-0 -z-30"
                    style={{
                        backgroundImage: `url(${planets})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        x: planetX,
                    }}
                />


                <motion.div className="absolute inset-0 -z-20"
                    style={{
                        backgroundImage: `url(${mountain2})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: midGround,
                    }}
                />


                <motion.div className="absolute inset-0 -z-10"
                    style={{
                        backgroundImage: `url(${mountain1})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: foreGround,
                    }}
                /> 
                */}
            </div>
        </section>
    )
}

export default ParallaxBackground
