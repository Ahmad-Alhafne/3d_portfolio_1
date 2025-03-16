import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  reactjs,
  laravel,
  meta,
  starbucks,
  tesla,
  shopify,
  iphone,
  landingpage,
  template3,
  template2,
  bondi,
  coca_cola,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Design",
    icon: mobile,
  },
  {
    title: "3D Devloper",
    icon: backend,
  },
  {
    title: "App Builder",
    icon: creator,
  },
];

const technologies = [

  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Laravel",
    icon: laravel,
  },


];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Iphone 15 pro",
    description:
    "This is a clone of Apple's iPhone 15 Pro website using React.js. effective use of GSAP and Three.js for displaying iPhone 15 Pro models in various colors and shapes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: iphone,
    source_code_link: "https://github.com/Ahmad-Alhafne/Iphone_Clone_Website",
    vist_website:"https://iphone-15-clone-website.netlify.app/"

  },
  {
    name: "Geeks Drink",
    description:
    "3D website built using React and Three.js. It provides an interactive and engaging experience to showcase Coca-Cola Zero Sugar with smooth animations.",
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
        name: "Three.js",
        color: "green-text-gradient",
      },
    ],
    image: coca_cola,
    source_code_link: "https://github.com/Ahmad-Alhafne/coca-cola-cool-website",
    vist_website:"https://geeks-drink.netlify.app/"

  },
  {
    name: "Dashboard",
    description: 
    "This project is a simple dashboard created using HTML, CSS. It provides a user-friendly interface for displaying various data and metrics in a visually appealing format.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/Ahmad-Alhafne/Dashboard",
    vist_website:"https://ahmed-alhafni-frontend-dashboard.netlify.app/"

  },
  {
    name: "Landing Page",
    description:
      "A creative landing page for picking Iphones. show how much awsome with live demo. its sleek design, vibrant colors, and advanced features  that even Donald Trump Likes",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
    image: landingpage,
    source_code_link: "https://github.com/Ahmad-Alhafne/Landding_Page_Iphone",
    vist_website:"https://ahmed-alhafni-iphone-landing-page.netlify.app/"

  },
  {
    name: "Cool One",
    description:
      "A creative web page using frontend skills. show how much awsome with live demo. its sleek design, vibrant colors, and cool design  that even Donald Trump Likes",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
      ],
    image: template3,
    source_code_link: "https://github.com/Ahmad-Alhafne/Template3",
    vist_website:"https://ahmed-alhafni-tmeplate3.netlify.app/"

  },
  {
    name: "Kaspar",
    description:
      "Kasper is a platfrom that show frontend skills. show how much awsome with live demo. its sleek design, vibrant colors, and cool design that even Donald Trump Likes",
      tags: [
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
    image: template2,
    source_code_link: "https://github.com/Ahmad-Alhafne/Template2",
    vist_website:"https://ahmed-alhafni-template2.netlify.app"
  },
  {
    name: "Bondi",
    description:
      "Bondi is a cool theme that build using frontend Tech. show how much awsome with live demo. its sleek design, vibrant colors, and cool design",
      tags: [
        {
          name: "BootStrap",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
      ],
    image: bondi,
    source_code_link: "https://github.com/Ahmad-Alhafne/Bootstrap_5_Design_01_Bondi",
    vist_website:"https://bootstrap-design-bondi.netlify.app"
  },
];

export { services, technologies, experiences, testimonials, projects };
