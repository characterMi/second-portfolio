import {
  web_developer,
  react_developer,
  nextjs_developer,
  creative_developer,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  threejs,
  bootstrap,
  mui,
  sass,
  telegram,
  instagram,
  movies,
  gym_lovers,
  atb_media,
  coca_cola,
  film_hub,
  github,
  next,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web_developer,
  },
  {
    title: "React Developer",
    icon: react_developer,
  },
  {
    title: "NextJs Developer",
    icon: nextjs_developer,
  },
  {
    title: "Creative Developer",
    icon: creative_developer,
  },
];

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
    name: "Sass",
    icon: sass,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Next JS",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "MUI",
    icon: mui,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const frame_works = [
  {
    title: "React.js",
    languages_name: "JavaScript, TypeScript",
    icon: reactjs,
    iconBg: "#383E56",
    date: "March 2023 - Present",
  },
  {
    title: "NextJs",
    languages_name: "JavaScript, TypeScript",
    icon: next,
    iconBg: "#E6DEDD",
    date: "October 2023 - Present",
  },
  {
    title: "ThreeJs",
    languages_name: "JavaScript",
    icon: threejs,
    iconBg: "#E6DEDD",
    date: "August 2023 - Present",
  },
  {
    title: "Bootstrap",
    languages_name: "Css",
    icon: bootstrap,
    iconBg: "#383E56",
    date: "February 2023 - Present",
  },
  {
    title: "TailwindCss",
    languages_name: "Css",
    icon: tailwind,
    iconBg: "#E6DEDD",
    date: "September 2023 - Present",
  },
];

const projects = [
  {
    name: "Movie Site",
    description:
      "this is the first site i've Created ! it's totally Responsive on all devices, also this is an static site. the point of creating this site was improving my html, css and JS Skills.",
    tags: [
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: movies,
    source_code_link: "https://github.com/charactermi/movies",
    live_site: "https://charactermi.github.io/movies",
  },
  {
    name: "Gym Lovers",
    description:
      "a modern Web application fitness exercises app, with the functionality to choose exercise categories and specific muscle groups, browse more than 1000 exercises with practical examples and much more...",
    tags: [
      {
        name: "react",
        color: "lightblue-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
      {
        name: "mui",
        color: "blue-text-gradient",
      },
    ],
    image: gym_lovers,
    source_code_link: "https://github.com/charactermi/gym-lovers",
    live_site: "https://charactermi.github.io/gym-lovers",
  },
  {
    name: "ATB Media",
    description:
      "A Youtube clone with a stunning videos section, categories, responsive channel and video cards, channel pages and most importantly video pages were you can play the video straight from the app, see related videos and much more...",
    tags: [
      {
        name: "react",
        color: "lightblue-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
      {
        name: "mui",
        color: "blue-text-gradient",
      },
    ],
    image: atb_media,
    source_code_link: "https://github.com/charactermi/atb_media",
    live_site: "https://charactermi.github.io/atb_media",
  },
  {
    name: "Coca-Cola Zero",
    description:
      "A modern UI/UX website that showcases a 3D model and the Power of Design.",
    tags: [
      {
        name: "react",
        color: "lightblue-text-gradient",
      },
      {
        name: "threejs",
        color: "black-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: coca_cola,
    source_code_link: "https://github.com/charactermi/coca-cola_zero",
    live_site: "https://charactermi.github.io/coca-cola_zero",
  },
  {
    name: "Film Hub",
    description:
      "Filmhub is a comprehensive app for movie lovers. The app features a wide variety of movie from all over the world. Users can use the app to find their favorite movies and get comprehensive information about them.",
    tags: [
      {
        name: "react",
        color: "lightblue-text-gradient",
      },
      {
        name: "mui",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "violet-text-gradient",
      },
      {
        name: "RESTapi",
        color: "green-text-gradient",
      },
    ],
    image: film_hub,
    source_code_link: "https://github.com/charactermi/film_hub",
    live_site: "https://charactermi.github.io/film_hub",
  },
];

const socials = [
  {
    title: "Git hub",
    link: "https://github.com/characterMi",
    image: github,
  },
  {
    title: "Telegram",
    link: "https://t.me/character_mi",
    image: telegram,
  },
  {
    title: "Instagram",
    link: "https://instagram.com/character_mi",
    image: instagram,
  },
];

export { services, technologies, frame_works, projects, socials };
