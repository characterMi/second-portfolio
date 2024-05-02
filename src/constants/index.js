import {
  atb_media,
  bootstrap,
  coca_cola,
  creative_developer,
  css,
  designwave,
  docker,
  film_hub,
  git,
  github,
  gym_lovers,
  html,
  javascript,
  lingo,
  linkedin,
  marblerace,
  melodimix,
  movies,
  mui,
  next,
  nextjs_developer,
  pwa,
  react_developer,
  reactjs,
  redux,
  rtk_query,
  sass,
  tailwind,
  telegram,
  threejs,
  typescript,
  web_developer,
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
    id: "projects",
    title: "Projects",
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
    title: "Next.js Developer",
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
    name: "React-Query",
    icon: rtk_query,
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
    name: "Docker",
    icon: docker,
  },
  {
    name: "PWA",
    icon: pwa,
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
    date: "March 2023",
  },
  {
    title: "Next.js",
    languages_name: "JavaScript, TypeScript",
    icon: next,
    iconBg: "#E6DEDD",
    date: "October 2023",
  },
  {
    title: "ThreeJs",
    languages_name: "JavaScript",
    icon: threejs,
    iconBg: "#E6DEDD",
    date: "April 2024",
  },
  {
    title: "Bootstrap",
    languages_name: "Css",
    icon: bootstrap,
    iconBg: "#383E56",
    date: "February 2023",
  },
  {
    title: "TailwindCss",
    languages_name: "Css",
    icon: tailwind,
    iconBg: "#E6DEDD",
    date: "September 2023",
  },
];

const projects = [
  {
    name: "Lingo",
    description:
      "I've developed a web application called Lingo, which is a language learning program. Here are its features: the ability to select a course and learn from it, the option to continue a lesson from where you left off, an engaging user interface, a leaderboard page showcasing the top ten language learners, and a missions page displaying missions along with their completion status. We also have a system of hearts: with each incorrect answer, you lose hearts, and if you run out, you can't continue. You can regain hearts by purchasing them from the store using points earned or by revisiting completed lessons and answering questions correctly to earn hearts. Additionally, we offer the option to purchase a premium account where hearts become unlimited, ensuring uninterrupted learning even with mistakes. With Lingo, language learning becomes an exciting and rewarding experience.",
    tags: [
      {
        name: "react",
        color: "lightblue-text-gradient",
      },
      {
        name: "next.js",
        color: "black-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "green-text-gradient",
      },
    ],
    image: lingo,
    source_code_link: "https://github.com/charactermi/lingo",
    live_site: "https://charactermi-lingo.vercel.app",
  },
  {
    name: "MelodiMix",
    description:
      "MelodiMix, a music web application where users can listen to songs uploaded by others and also upload their own tracks. With its stunning user interface, MelodiMix allows us to like songs, curating a personalized collection accessible on the Liked page. This application features an advanced music player system, providing access to comprehensive song information and offering various additional functionalities. Moreover, it includes a powerful search system where users can easily find songs by typing their titles. MelodiMix revolutionizes the way we discover and enjoy music.",
    tags: [
      {
        name: "react",
        color: "lightblue-text-gradient",
      },
      {
        name: "next.js",
        color: "black-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
    ],
    image: melodimix,
    source_code_link: "https://github.com/charactermi/melodimix",
    live_site: "https://melodi-mix.vercel.app",
  },
  {
    name: "Design-Wave",
    description:
      "Design-Wave, is a large and captivating platform for editing photos using the power of AI. On the main page of this app, users can view edits made by others and also search for specific images. The highly advanced search system of this application allows us to search for images based on their title and content. If we navigate to an edited image page, we can view the before and after versions of the image and also download the edited image. Additionally, if we are the ones who edited the image, we can update or even delete it. The editing capabilities of this application include Restore Image, Background Remove, Generative Fill, Object Remove, and Object Recolor. As a regular user, we have only ten Credits to edit an image; if these Credits are exhausted, we must purchase a Premium package to continue editing photos.",
    tags: [
      {
        name: "react",
        color: "lightblue-text-gradient",
      },
      {
        name: "next.js",
        color: "black-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: designwave,
    source_code_link: "https://github.com/charactermi/design-wave",
    live_site: "https://design-wave.vercel.app",
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
    name: "Marble Race",
    description:
      "Marble Race is a web-based game created using Three.js, offering an exhilarating experience in the genre of adventure and challenging games. In this game, players view various levels from the perspective of a marble. Along the path towards the finish line, they encounter different types of obstacles, which they must navigate through to reach the goal. A timer at the top of the page starts as soon as the game begins, motivating players to beat their previous records. Additionally, upon completing each level, players can progress to the next one, which is more challenging and contains more obstacles than the previous level.",
    tags: [
      {
        name: "react",
        color: "lightblue-text-gradient",
      },
      {
        name: "three.js",
        color: "black-text-gradient",
      },
      {
        name: "zustand",
        color: "blue-text-gradient",
      },
    ],
    image: marblerace,
    source_code_link: "https://github.com/charactermi/marble-race",
    live_site: "https://charactermi.github.io/marble-race",
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
    title: "Linkedin",
    link: "https://linkedin.com/in/abolfazl-taghadosi/",
    image: linkedin,
  },
];

export { frame_works, projects, services, socials, technologies };
