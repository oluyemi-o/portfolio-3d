import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { styles } from "../styles"
import { git, github, vercel } from "../../assets/rest"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

function ProjectCard({ index, name, description, tags, image, source_code_link, deploy_link }) {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} >
            <Tilt
                option={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]" >
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"
                    />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div onClick={() => window.open(deploy_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img
                                src={vercel}
                                alt="github"
                                className="w-[25px] h-[25px] object-cover "
                            />

                        </div>
                        <div onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 ml-2 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img
                                src={github}
                                alt="github"
                                className="w-full h-full object-cover "
                            />

                        </div>

                        {/* make another div for deploy */}
                    </div>
                </div>
                <div className="mt-5 ">
                    <h3 className="text-white font-bold text-[24px]" >{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]" >{description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2" >
                    {tags.map((tag) => {
                        return (
                            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                                {tag.name}
                            </p>
                        )
                    })}
                </div>
            </Tilt>
        </motion.div>
    )
}


function Work() {
    return (
        <>
            <motion.div
                variants={textVariant()}
            >
                <p className={styles.sectionSubText}>My Works</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>
            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1)}
                    className="mt-3 text-gray-300 max-w-3xl text[17px] leading-[30px]"
                >
                    The following projects show my works and my skills so far
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7 sm: justify-center">
                {projects.map((project, index) => {
                    return (
                        <ProjectCard
                            key={`project-${index}`}
                            index={index}
                            {...project}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default SectionWrapper(Work, "work")
