import {
  linkedin,
  github3d,
  resume,
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
  cpp,
  kotlin,
  python,
  sql,
  racket,
  meta,
  starbucks,
  cogeco,
  bb,
  cloudspark,
  tesla,
  gcp,
  aws,
  shopify,
  stickynotes,
  heyo,
  coursebuddy,
  threejs,
  flask,
} from "../assets";

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
];

const services = [
  {
    title: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/abhqy/",
  },
  {
    title: "GitHub",
    icon: github3d,
    link: "https://www.github.com/abhqy/",
  },
  {
    title: "Resume",
    icon: resume,
    link: "https://drive.google.com/file/d/1BrBqnp1aF0BKSSkEqnkYUSdWjo2hcmMZ/view?usp=sharing"    
  },
];

const technologies = [
  {
    title: "GCP",
    icon: gcp,
  },
  {
    title: "Python",
    icon: python,
  },
  {
    title: "C++",
    icon: cpp,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Cloud Software Engineer Intern",
    company_name: "Cogeco Connexion",
    icon: cogeco,
    iconBg: "#001F62",
    date: "May 2023 - Sep 2023",
    points: [
      "Created a cloud cost management application to optimize infrastructure costs within GCP, resulting in significant monthly expense reductions.",
      "Built a Flask microservice using Pandas to calculate interquartile ranges and notify project owners of daily cost anomalies, enhancing cost control measures.",
      "Implemented a Flask microservice for accurate project cost forecasting using ARIMA model, facilitating improved budget planning and resource allocation.",
      "Collaborated with team to achieve annual savings of $123,375 USD by implementing optimized infrastructure, proactive cost anomaly detection, and accurate cost forecasting."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "BlackBerry",
    icon: bb,
    iconBg: "#E6DEDD",
    date: "May 2022 - Dec 2022",
    points: [
      "Spearheaded frontend development for an internal cloud infrastructure management app using React and TypeScript, optimizing user experience.",
      "Enhanced React web app performance by 54% through the implementation of caching, pagination, and throttling techniques.",
      "Accelerated login speed by 98% through the application of memory caching techniques.",
      "Boosted the app's user experience by code splitting, resulting in a 66% improvement in page load times."
    ],
  },
  {
    title: "Product Developer Assistant",
    company_name: "Cloudspark Technology Labs",
    icon: cloudspark,
    iconBg: "#ffffff",
    date: "Sep 2021 - Dec 2021",
    points: [
      "Designed responsive and user-friendly dashboards using React, Material UI, and TypeScript.",
      "Developed and published an npm UI library with Material UI components for enhanced code reusability.",
      "Created a website documenting Cloudspark products using React and Gatsby.",
      "Programmed efficient CosmosDB stored procedures for automating data projection deletion."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sticky Note",
    repo: "gitlab",
    description:
      "A user-centric software application with rich text support and themes, microservices on AWS EC2 for scalability, and seamless remote data sync. ",
    tags: [
      {
        name: "kotlin",
        color: "purple-text-gradient",
      },
      {
        name: "aws",
        color: "orange-text-gradient",
      },
      {
        name: "spring",
        color: "green-text-gradient",
      },
      {
        name: "javafx",
        color: "blue-text-gradient",
      },
      {
        name: "junit",
        color: "red-text-gradient",
      },
    ],
    image: stickynotes,
    source_code_link: "https://git.uwaterloo.ca/a32menon/notes-app",
  },
  {
    name: "Heyo",
    repo: "github",
    description:
      "A full-stack web application that enables users to create, share, and explore engaging posts enriched with images, comments and descriptions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "material-ui",
        color: "purple-text-gradient",
      },
    ],
    image: heyo,
    source_code_link: "https://github.com/abhqy/twitter-clone",
  },
  {
    name: "Course Buddy",
    repo: "github",
    description:
      "A web application for UWaterloo's CS Students, featuring a seamless drag-and-drop interface for course selection, powered by Firebase's real-time database.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "material-ui",
        color: "purple-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: coursebuddy,
    source_code_link: "https://github.com/brandngo/course-buddy",
  },
];

export { services, technologies, experiences, testimonials, projects };
