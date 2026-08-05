import React from 'react'
import { FlipWords } from "./FlipWords"
import { motion } from "motion/react"

function HeroText() {
    const words = ["Adaptable", "Modern", "Scaleable"]
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }
    return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text" >
            {/* desktop */}
            <div className="flex-col hidden md:flex c-space ">

                {/* name introduction */}
                <motion.h1
                    className="text-4xl font-medium"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                >Hi I'm Yemi</motion.h1>

                <div className="flex flex-col items-start" >

                    {/* title */}
                    <motion.p
                        className="text-5xl font-medium text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1 }}
                    >A Full Stack Developer </motion.p>

                    {/* flips words */}
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1 }}
                    >
                        <FlipWords words={words}
                            className="font-black text-white text-8xl"
                        />
                    </motion.div>

                    {/* small description */}
                    <motion.p
                        className="text-4xl font-medium text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1 }}
                    >Web Solutions</motion.p>
                </div>
            </div>

            {/* mobile */}
            <div className="flex flex-col space-y-6 md:hidden" >

                {/* name introduction */}
                <motion.p
                    className="text-4xl font-medium"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                >Hi, I'm Yemi</motion.p>
                <div>

                    {/* title */}
                    <motion.p
                        className="text-5xl font-black text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1 }}
                    >Building</motion.p>

                    {/* flips words */}
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1 }}
                    >
                        <FlipWords words={words}
                            className="font-black text-white text-7xl"
                        />
                    </motion.div>

                    {/* small description */}
                    <motion.p
                        className="text-4xl font-black text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1 }}
                    >web applications</motion.p>
                </div>
            </div>

        </div>
    )
}

export default HeroText
