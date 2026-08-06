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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Work1",
    icon: starbucks,
    iconBg: "#383E56",
    date: "xx xxxx - xx xxxx",
    points: [
      "Eiusmod non ipsum ut irure eu Lorem.",
      "Lorem deserunt exercitation minim commodo aute aute laborum sint sunt aliqua Lorem consectetur quis ad.",
      "Ut nulla nostrud mollit ullamco ipsum minim do mollit consequat ad.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Work2",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "xx xxxx - xx xxxx",
    points: [
      "Nostrud ad velit reprehenderit deserunt Lorem enim amet enim sunt cillum id.",
      "Occaecat voluptate Lorem exercitation proident cupidatat est nulla nulla aliquip sunt excepteur.",
      "Sunt id deserunt in ut ex ipsum exercitation eiusmod occaecat commodo sint nulla enim.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Work3",
    icon: shopify,
    iconBg: "#383E56",
    date: "xx xxxx - xx xxxx  s",
    points: [
      "Adipisicing minim amet tempor Lorem elit reprehenderit cillum laboris.",
      "Elit ea laboris aliquip dolore fugiat non consequat exercitation occaecat.",
      "Duis ad in dolor adipisicing id voluptate ut.",
    ],
  },
]

const testimonials = [
  {
    testimonial: "example",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
]

const projects = [
  {
    name: "Example",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
]

export { services, technologies, experiences, testimonials, projects }
