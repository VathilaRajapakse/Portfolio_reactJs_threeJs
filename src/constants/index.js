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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "IT undergrad with a BSc (Hons)",
    company_name: "Sri Lanka Institute of Information Technology",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Third year of undergraduate studies, no repeats.",
      "Committee member of faculty of computing student community at SLIIT (FCSC)",
      "Faculty Co-ordinator in Student Interactive Society at SLIIT (SIS)",
      "Committee member of information technology student community at SLIIT (ITSC)",
    ],
  },
  {
    title: "Python for Beginners",
    company_name: "University of Moratuwa",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Feb 2022",
    points: [
      "Learning Python as a beginner is a great experience due to its simple syntax,abundant learning resources, versatile applications, and supportive community.",
      "You'll enjoy immediate feedback, real-world applicability, and the opportunity to work on projects.", 
      "Challenges and frustrations are part of the journey, but they help you grow as a programmer.",
      "Continuous learning is key to mastering Python.",
    ],
  },
  {
    title: "Web Design for Beginners",
    company_name: "University of Moratuwa",
    icon: shopify,
    iconBg: "#383E56",
    date: "Mar 2022 - Apr 2023",
    points: [
      "Studying web design as a beginner at the University of Moratuwa has been an enlightening experience.",
      "The comprehensive curriculum provides a solid foundation in HTML, CSS, and JavaScript, allowing me to create visually appealing and interactive web pages.",
      "Collaborative projects with peers have honed my teamwork and problem-solving skills, while dedicated instructors offer valuable guidance.",
      "The university's emphasis on staying updated with the latest design trends and technologies ensures I am well-prepared for the ever-evolving field of web design.",
    ],
  },
  {
    title: "Front-End Web Developer",
    company_name: "University of Moratuwa",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Mar 2023",
    points: [
      "Pursuing a career as a Front-End Web Developer at the University of Moratuwa has been a transformative journey.",
      "The program's hands-on approach and emphasis on user-centered design have equipped me with the skills to craft engaging and responsive websites.",
      "Collaborating on real-world projects has not only improved my coding abilities but also taught me the importance of effective communication and teamwork in the development process.",
      "The university's commitment to staying current with industry trends has kept me updated with the latest front-end technologies and best practices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Vathila disproved my assumption that it was impossible to create a website as stunning as our product.",
    name: "Nalin Rajapakse",
    designation: "Manager",
    company: "Maliban textiles",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },

  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Vathila does.",
    name: "Chanugi Dinanya",
    designation: "CEO",
    company: "MAS Holdings",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "After Vathila optimized our website, our traffic increased by 40%. We can't thank him enough!",
    name: "Oneli Rajapakse",
    designation: "Vice- president",
    company: "99x",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Vetinary System",
    description:
      "The Veterinary System, developed using Java, JavaScript, and the MERN stack, provides a user-friendly platform for pet owners. It facilitates easy searches for doctors and nurses while also offering a seamless way to purchase pet medicines, creating a holistic solution for pet care needs.",
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
        name: "mernstack",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/VathilaRajapakse/Veterinary_System_Webapp",
  },
  {
    name: "Life On Land",
    description:
      "Our web app, Life on Land is a powerful tool dedicated to advancing Sustainable Development Goal 15: Life on Land. Users can post articles, blogs, and projects, fostering knowledge sharing and collaboration. Additionally, our interactive map helps users find recycling centers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/VathilaRajapakse/HelpNature",
  },
  {
    name: "Riya-Saka mobile app",
    description:
      "Riya-Saka: Your Convenient Vehicle Rental and Sharing Solution. Rent, share, and earn effortlessly with our secure platform. Experience the future of smart, sustainable mobility.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/VathilaRajapakse/Riyasaka-Mobile-App",
  },
  {
    name: "Foodies mobile app",
    description:
      "A recipe is a step-by-step guide or set of instructions that explains how to prepare, cook, or bake a certain dish. People also look for recipes to get an accurate quantity and measurement of each ingredient and how long each step of the process takes.",
    tags: [
      {
        name: "springboot",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/VathilaRajapakse/Foodies",
  },
];

export { services, technologies, experiences, testimonials, projects };
