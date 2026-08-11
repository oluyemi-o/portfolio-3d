import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { styles } from "../styles"
// import { EarthCanvas} from ".components"
import { slideIn } from "../utils/motion"
import { SectionWrapper } from "../hoc"
import Earth from "../components/Earth"
import EarthCanvas from "../components/Earth"
//import.meta.env.
function Contact() {
    const templateID = import.meta.env.VITE_TEMPLATE_ID
    const serviceID = import.meta.env.VITE_SERVICE_ID
    const publicKey = import.meta.env.VITE_PUBLIC_KEY

    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)

            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Yemi",
                    from_email: form.email,
                    to_email: "o.ogunbadejo7@gmail.com",
                    message: form.message,
                    time: new Date().toLocaleString()
                },
                import.meta.env.VITE_PUBLIC_KEY
            )

            alert("Thanks for the message! I will get back to you as soon as possible.")

            setForm({
                name: "",
                email: "",
                message: "",
            })

        } catch (error) {
            console.error("EmailJS error:", error)
            alert("Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }



    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden" >
            <motion.div
                variants={slideIn("left", "tween", "0.2", "1")}
                className=" flex-[0.75] bg-black-100 rounded-2xl p-8 w-full"
            >
                <p className={styles.sectionSubText}>Get In Touch</p>
                <h3 className={styles.sectionHeadText} >Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4" >Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"

                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4" >Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"

                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4" >Message</span>
                        <textarea
                            rows="7"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What would You like to say?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"

                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary self-center rounded-xl"
                    >
                        {loading ? 'Sending...' : 'Submit'}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", "0.2", "1")}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact")
