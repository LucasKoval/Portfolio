import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Lucas Koval | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Lucas Koval',
  subtitle: "and I'm a Full Stack Developer.",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'lucas.png',
  paragraphOne: 'I was born and raised in Corrientes, Argentina on October 20, 1988 and I currently reside in the city of La Plata, Buenos Aires. I am a Freelance Full Stack Developer oriented to e-commerce development with NodeJS (back-end) and ReactJS (front-end) as the main pillars of my work.',
  paragraphTwo: 'I love what I do and I consider myself an organized, methodical, and collaborative person working in groups. I always seek to learn from my colleagues, as well as generate feedback that can help the team grow. My goal is to belong to a company that helps me strengthen my skills and acquire new ones.',
  paragraphThree: 'SKILLS: JavaScript (ES6+) - HTML - CSS - ReactJS - NextJS - NodeJS - ExpressJS - MVC Architecture - MySQL / Sequelize - APIs - Postman - Git / GitHub - Scrum - Responsive Design - Spanish (Native) - English (Intermediate).',
  resume: 'https://drive.google.com/file/d/1k1b9YPU0BLAt_yJp-und3OK1Y6dQdw2X/view?usp=sharing', //https://drive.google.com/u/0/uc?id=1JjKz8rMgnQcy5Xg71M94vVD729t6pG1J&export=download
  //if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'libooks.jpg',
    title: 'LiBooks - E-Commerce',
    info: "E-Commerce website dedicated to the sale of books powered by La Nación.",
    info2: '* Applied Technologies: ReactJS - NextJS - JavaScript (ES6+) - GraphQL - Styled Components - Material UI - Git - Scrum.',
    url: 'https://beta.libooks.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'babieka.png',
    title: 'Babieka - E-Commerce',
    info: "E-Commerce website dedicated to the sale of women's footwear.",
    info2: '* Applied Technologies: NodeJS - ExpressJS - HTML - CSS - JavaScript (ES6+) - EJS Template Engine - APIs - MySQL / Sequelize - Git - Scrum.',
    url: 'https://babieka.herokuapp.com/',
    repo: 'https://github.com/LucasKoval/jfl-babieka', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dashboard.png',
    title: 'Babieka - Dashboard',
    info: "Statistics dashboard for Babieka website.",
    info2: '* Applied Technologies: ReactJS - JavaScript (ES6+) - APIs - Bootstrap - Git - Scrum.',
    url: 'https://babieka-dashboard.vercel.app/',
    repo: 'https://github.com/LucasKoval/jfl-dashboard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'aerolab.png',
    title: "Aerolab's Catalog View",
    info: "Project made for the Aerolab coding challenge. It consists of a responsive catalog view for a loyalty program application. The main goal of the product is to help users redeem items through a points-based system.",
    info2: '* Applied Technologies: NodeJS - ExpressJS - HTML - CSS - Bootstrap - JavaScript (ES6+) - EJS Template Engine - APIs - JWT - Git.',
    url: 'https://aerolab-challenge-lkdev.herokuapp.com/',
    repo: 'https://github.com/LucasKoval/Aerolab-Challenge', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pokedex.png',
    title: "Pokedex Encyclopedia",
    info: "Pokemon encyclopedia where you can search and view the different pokemons and their characteristics and statistics.",
    info2: '* Applied Technologies: ReactJS - NextJS - JavaScript (ES6+) - APIs - CSS - Bootstrap - Git.',
    url: 'https://pokedex-challenge-lkdev.vercel.app/',
    repo: 'https://github.com/LucasKoval/Pokedex-Challenge', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hacker.png',
    title: 'Hacker News Clone',
    info: "Clone of Hacker News, a social news website that focuses on computing and entrepreneurship.",
    info2: '* Applied Technologies: ReactJS - JavaScript (ES6+) - APIs - Bootstrap - Git.',
    url: 'https://hacker-news-clone-lkdev.vercel.app/',
    repo: 'https://github.com/LucasKoval/HackerNews-clone', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'lucasekoval@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lucaskoval/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/LucasKoval',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/LucasKoval',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
