import { Lightformer } from "@react-three/drei"
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  indievault,
  portfolio,
  hunterjournal,
} from "../../assets/rest"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
]

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
]

const experiences = []

const testimonials = []

const projects = [
  {
    name: "Indie Vault",
    description:
      "Community platform enabling indie game developers to publish games, share development progress and engage with peers through comments and updates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "bcrypt",
        color: "yellow-text-gradient",
      },
      {
        name: "JWT-token",
        color: "yellow-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: indievault,
    source_code_link: "https://github.com/oluyemi-o/indie-vault",
    deploy_link: "https://indie-vault.vercel.app",
  },
  {
    name: "Portfolio 3JS",
    description:
      "My personal portfolio website made using three.js, 3d assets and motion",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "orange-text-gradient",
      },
      {
        name: "motion",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
    deploy_link: "",
  },
  {
    name: "Hunter Journal",
    description:
      "An interactive enemy catalogue inspired by Hollow Knight where users browse, add and edit enemies and the locations they inhabit",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "JSON-server",
        color: "green-text-gradient",
      },
    ],
    image: hunterjournal,
    source_code_link: "https://github.com/oluyemi-o/hunter-journal-client",
    deploy_link: "https://hunter-journal.vercel.app",
  },
]

export { services, technologies, experiences, testimonials, projects }
