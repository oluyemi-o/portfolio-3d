import React from 'react'
import sky from "../../assets/PNG-no-blur/sky_01.png"
import rightRock from "../../assets/parallax-adjusted/rock_04.svg"
import leftRock from "../../assets/parallax-adjusted/rock_2.svg"
import planet1 from "../../assets/parallax-adjusted/planet_01.svg"
import planet2 from "../../assets/parallax-adjusted/planet_02.svg"
import floatingRocks from "../../assets/parallax-adjusted/rock_03.svg"
import sun from "/sun_01.svg"

import { motion, useScroll, useSpring, useTransform } from "motion/react"


function ParallaxBackground() {

    // whilst scroll progress is at 0, mountainY will be 0
    // as scroll progress moves to 50%, mountainY will move up to 70%
    const { scrollYProgress } = useScroll();

    // delays the movement of the elements to smooth them
    const spring = useSpring(scrollYProgress, { damping: 20 })

    const backGround = useTransform(spring, [0, 0.5], ["0%", "125%"])
    const planetX = useTransform(spring, [0, 0.5], ["0%", "-50%"])
    const midGround = useTransform(spring, [0, 0.5], ["0%", "100%"])
    const foreGroundDeep = useTransform(spring, [0, 0.5], ["0%", "20%"])
    const foreGround = useTransform(spring, [0, 0.5], ["0%", "0%"])

    return (
        <section className="absolute inset-0 bg-black/30">
            <div className="relative h-screen overflow-y-hidden" >



                {/* background sky */}
                <div className="absolute inset-0 w-full h-screen -z-70"
                    style={{
                        backgroundImage: `url(${sky})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                    }}
                />

                {/* sun image */}
                <motion.div
                    className="absolute inset-0 -z-60"
                    style={{
                        // backgroundImage: "url(/sun_01.svg)",
                        backgroundImage: `url(${sun})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: backGround
                    }}
                />

                {/* smaller planet */}
                <motion.div className="absolute inset-0 -z-50"
                    style={{
                        backgroundImage: `url(${planet2})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        x: planetX,
                    }}
                />

                {/* larger planet */}
                <motion.div className="absolute inset-0 -z-40"
                    style={{
                        backgroundImage: `url(${planet1})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        x: planetX,
                    }}
                />

                {/* midground rocks */}
                <motion.div className="absolute inset-0 -z-30"
                    style={{
                        backgroundImage: `url(${floatingRocks})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: midGround,
                    }}
                />

                {/* left foreground rock */}
                <motion.div className="absolute inset-0 -z-20"
                    style={{
                        backgroundImage: `url(${leftRock})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: foreGroundDeep,
                    }}
                />

                {/* right foreground rock */}
                <motion.div className="absolute inset-0 -z-10"
                    style={{
                        backgroundImage: `url(${rightRock})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: foreGround,
                    }}
                />





            </div>
        </section>
    )
}

export default ParallaxBackground
