// import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import Ball from "../components/Ball"

function Tech() {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10 w-full">
            {technologies.map((technology) => {
                return (
                    <div className="flex justify-center items-center w-28 h-28" key={technology.name}>
                        <Ball icon={technology.icon} />
                    </div>
                )
            })}
        </div>
    )
}

export default SectionWrapper(Tech, "")
