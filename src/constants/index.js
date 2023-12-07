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
  malangPost,
  umm,
  kominfo,
  bangkit,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
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
    title: "Web Development",
    icon: web,
  },
  {
    title: "Data Science",
    icon: mobile,
  },
  {
    title: "Data Analytics",
    icon: backend,
  },
  {
    title: "Generative Ai",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Analyst",
    company_name: "University of Muhammadiyah Malang",
    icon: umm,
    iconBg: "#383E56",
    date: "Nov 2021 - Nov 2022",
    points: [
      "Crafted interactive dashboards to effectively monitor employee data, statistics, and others.",
      "Leveraged data-driven insights to analyze student data challenges, enabling informed decision-making.",
      "Developed compelling data visualizations that conveyed complex information in a clear and easily understandable manner, catering to a wider audience.",
    ],
  },
  {
    title: "Data Scientist Scholarship",
    company_name: "Kominfo",
    icon: kominfo,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Aug 2022",
    points: [
      "Devised product package recommendations that not only mitigated stock-related issues but also boosted sales performance.",
      "Conducted credit risk evaluation, classification, and data-driven analysis to assess the financial needs of SMEs.",
      "Employed data segmentation techniques to categorize customer data into meaningful segments, empowering businesses with actionable insights.",
    ],
  },
  {
    title: "Machine Learning Researcher",
    company_name:
      "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    icon: bangkit,
    iconBg: "#383E56",
    date: "Feb 2022 - Jul 2022",
    points: [
      "Designed and implemented machine learning models to tackle real-world problems and optimize decision-making.",
      "Collaborated cross-functionally with Cloud Computing, Mobile Developer, and mentor teams to define project requirements and develop efficient solutions.",
      "Trained and evaluated machine learning models on large-scale datasets, ensuring optimal performance and accuracy.",
      "Monitored and maintained machine learning models in production, ensuring continuous effectiveness and adaptability.",
      "Effectively communicated complex technical concepts to non-technical audiences, bridging the gap between technical expertise and business understanding.",
    ],
  },
  {
    title: "Online Content Editor",
    company_name: "PT. Malang Post Cemerlang",
    icon: malangPost,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Mar 2021",
    points: [
      "Processing news for online publication on the web or mobile apps.",
      "Curated and edited news content for online publication, ensuring accuracy, relevance, and engagement.",
      "Created visually appealing and engaging designs for Instagram posts, contributing to enhanced brand presence and social media engagement.",
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

export { services, technologies, experiences, testimonials };
