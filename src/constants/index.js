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

//placeholder data

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
    date: "Jan 2021 - Mar 2023",
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
    date: "Jan 2023 - Dec 2023",
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
    date: "Jan 2024 - Present",
    points: [
      "Adipisicing minim amet tempor Lorem elit reprehenderit cillum laboris.",
      "Elit ea laboris aliquip dolore fugiat non consequat exercitation occaecat.",
      "Duis ad in dolor adipisicing id voluptate ut.",
    ],
  },
]

const testimonials = [
  {
    testimonial:
      "Working with this developer was a game-changer for our product launch. They delivered clean, responsive code, kept communication excellent, and helped us hit every deadline.",
    name: "Sara Lee",
    designation: "Chief Financial Officer",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "They transformed our website into a modern, high-performance experience. The attention to detail and commitment to quality were standout features of the engagement.",
    name: "Michael Turner",
    designation: "Product Manager",
    company: "BrightWave Labs",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    testimonial:
      "The 3D portfolio section is stunning and works flawlessly across devices. We appreciate the creativity, strong technical skills, and fast turnarounds.",
    name: "Amina Patel",
    designation: "Marketing Director",
    company: "Nova Ventures",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    testimonial:
      "This developer has a rare combination of UX sense and technical expertise. Every project milestone was delivered early, and the final product exceeded expectations.",
    name: "David Cho",
    designation: "Founder",
    company: "ScaleHub",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "They were responsive to feedback and made the process seamless from discovery to launch. The codebase is well-organized, and the interface is polished and intuitive.",
    name: "Isabella Green",
    designation: "Operations Lead",
    company: "Peak Digital",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    testimonial:
      "Our team appreciated the clear communication, thoughtful architecture, and beautiful animations. The project felt collaborative and the outcomes were excellent.",
    name: "Omar Williams",
    designation: "Technical Lead",
    company: "Pulse Interactive",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    testimonial:
      "The final product is fast, responsive, and visually impressive. We can confidently recommend this developer for both frontend polish and complex interactive features.",
    name: "Claire Johnson",
    designation: "Marketing Strategist",
    company: "Luna Studios",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
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
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "TripGuide",
    description:
      "A travel planning app that provides destination guides, itinerary templates, and booking links for flights, hotels, and local experiences.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Three Portfolio",
    description:
      "A 3D portfolio showcase built with Three.js, featuring animated project cards, interactive camera controls, and immersive visual transitions.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
]

export { services, technologies, experiences, testimonials, projects }
