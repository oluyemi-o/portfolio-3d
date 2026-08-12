// import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import Ball from "../components/Ball"
import { useMediaQuery } from "react-responsive"

function Tech() {
    const isMobile = useMediaQuery({ maxWidth: 767 })

    return (
        <div className="flex flex-row flex-wrap justify-center gap-10 w-full">
            {technologies.map((technology) => {
                return (
                    <div className="flex justify-center items-center w-28 h-28" key={technology.name}>
                        {isMobile ? (
                            <img
                                src={technology.icon}
                                alt={technology.name}
                                className="h-16 w-16 object-contain"
                            />
                        ) : (
                            <Ball icon={technology.icon} />
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default SectionWrapper(Tech, "")
