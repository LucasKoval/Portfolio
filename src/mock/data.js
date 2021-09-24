import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Lucas Koval | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, i'm",
  name: 'Lucas Koval',
  subtitle: 'Welcome to my website!',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'lucas.png',
  paragraphOne:
    'I was born and raised in Corrientes, Argentina on October 20, 1988 and I currently reside in the city of La Plata, Buenos Aires. I am a Full Stack Developer oriented to e-commerce development with NodeJS (Back-End) and ReactJS (Front-End) as the main pillars of my work.',
  paragraphTwo:
    'I love what I do and I consider myself an organized, methodical, and collaborative person working in groups. I always seek to learn from my colleagues, as well as generate feedback that can help the team grow.',
  paragraphThree:
    'My goal is to grow in a company where I can strengthen my skills and acquire new ones.',
  resume: 'https://drive.google.com/file/d/1YaJm8UvDhytAHgdgMO-DiDV9Hw66CZwv/view?usp=sharing',
  curriculum: 'https://drive.google.com/file/d/1qKKQNZDalmue6n__C1Q2ux6nC0ZsYVUc/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    // LIBOOKS
    id: nanoid(),
    img: 'libooks.jpg',
    title: 'LiBooks | E-Commerce',
    info:
      'Online Bookstore made for the the sale of physical and digital books powered by La Nación.',
    info2:
      'ReactJS | NextJS | JavaScript (ES6+) | CSS - Styled-Components | Material-UI | JestJS | GraphQL APIs | Postman | Git - GitHub | Jira - MS-Teams | Scrum.',
    url: 'https://libooks.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    // BABIEKA
    id: nanoid(),
    img: 'babieka.png',
    title: 'Babieka | E-Commerce',
    info: "E-Commerce website dedicated to the sale of women's footwear.",
    info2:
      'HTML5 | CSS3 | JavaScript (ES6+) | EJS Template Engine | NodeJS | ExpressJS | REST APIs | MySQL - Sequelize  | Postman | Git - GitHub | Trello - Slack | Scrum.',
    url: 'https://babieka.herokuapp.com/',
    repo: 'https://github.com/LucasKoval/jfl-babieka',
  },
  {
    // DASHBOARD
    id: nanoid(),
    img: 'dashboard.png',
    title: 'Babieka | Dashboard',
    info: 'Statistics dashboard for Babieka website.',
    info2:
      'ReactJS | JavaScript (ES6+) | CSS - Bootstrap | REST APIs | Postman | Git - GitHub | Trello - Slack | Scrum.',
    url: 'https://babieka-dashboard.vercel.app/',
    repo: 'https://github.com/LucasKoval/jfl-dashboard',
  },
  {
    // CATALOG VIEW
    id: nanoid(),
    img: 'aerolab.png',
    title: 'Catalog View',
    info:
      'Catalog view app for a loyalty program application. The main goal of the product is to help users redeem items through a points-based system.',
    info2:
      'HTML5 | JavaScript (ES6+) | CSS - Bootstrap | EJS Template Engine | NodeJS | ExpressJS | REST APIs | JWT | Postman | Git - GitHub.',
    url: 'https://aerolab-challenge-lkdev.herokuapp.com/',
    repo: 'https://github.com/LucasKoval/Aerolab-Challenge',
  },
  {
    // GITHUB PROFILE FINDER
    id: nanoid(),
    img: 'github.jpg',
    title: 'GitHub Profile Finder',
    info: 'GitHub profile search app.',
    info2:
      'ReactJS | NextJS | JavaScript (ES6+) | CSS - Styled-Components - Bootstrap | GraphQL APIs | Postman | Git - GitHub.',
    url: 'https://take-home-test-lkdev.vercel.app/',
    repo: 'https://github.com/LucasKoval/Take-Home-Test',
  },
  {
    // POKEDEX
    id: nanoid(),
    img: 'pokedex.png',
    title: 'Pokedex Encyclopedia',
    info:
      'Pokemon encyclopedia where you can search and view the different pokemons and their characteristics and statistics.',
    info2:
      'ReactJS | NextJS | JavaScript (ES6+) | CSS - Bootstrap | REST APIs | Postman | Git - GitHub.',
    url: 'https://pokedex-challenge-lkdev.vercel.app/',
    repo: 'https://github.com/LucasKoval/Pokedex-Challenge',
  },
  {
    // HACKER NEWS
    id: nanoid(),
    img: 'hacker.png',
    title: 'Hacker News Clone',
    info:
      'Clone of Hacker News, a social news website that focuses on computing and entrepreneurship.',
    info2: 'ReactJS | JavaScript (ES6+) | CSS - Bootstrap | REST APIs | Git - GitHub.',
    url: 'https://hacker-news-clone-lkdev.vercel.app/',
    repo: 'https://github.com/LucasKoval/HackerNews-clone',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'lucaskovaldev@gmail.com',
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
