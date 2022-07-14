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
    'I was born and raised in Corrientes, Argentina on October 20, 1988 and I currently reside in the city of La Plata, Buenos Aires. I am a Full Stack Developer (MERN) oriented to E-Commerce development with NodeJS (Back-End) and ReactJS (Front-End) as the main pillars of my work.',
  paragraphTwo:
    'I love what I do and I consider myself an organized, methodical, and collaborative person working in groups. I always seek to learn from my colleagues, as well as generate feedback that can help the team grow.',
  paragraphThree:
    'My goal is to grow in a company where I can strengthen my skills and acquire new ones.',
  resume: 'https://drive.google.com/file/d/1zOIoFyWUbFUF8BNXjGQlqpbztU90PRmr/view?usp=sharing',
  curriculum: 'https://drive.google.com/file/d/1D6ng91SC9Giyi-y8dWvO4oxRLRYXE1Yg/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    // CHANEL
    id: nanoid(),
    img: 'chanel.png',
    title: 'Chanel US | E-Commerce',
    info: 'American online store of the well-known French fashion house Chanel (New York - US).',
    info2:
      'HTML | CSS | JavaScript (ES11) | JQuery | Kibo Personalization | SAP Hybris | Git - Bitbucket | MS Teams | Scrum - Jira.',
    url: 'https://www.chanel.com/us/',
    repo: '', // if no repo, the button will not show up
  },
  {
    // LIBOOKS
    id: nanoid(),
    img: 'libooks.png',
    title: 'LiBooks | E-Commerce',
    info: 'Online Bookstore made for the the sale of physical and digital books powered by La Nación (Argentina).',
    info2:
      'ReactJS | NextJS | JavaScript (ES11) | CSS - Styled-Components | Material-UI | GraphQL APIs | Postman | Git - GitHub | MS Teams | Scrum - Jira.',
    url: 'https://libooks.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    // BABIEKA
    id: nanoid(),
    img: 'babieka.png',
    title: 'Babieka | E-Commerce',
    info: "Ecommerce website made for the sale of women's footwear.",
    info2:
      'HTML5 | CSS3 | JavaScript (ES11) | EJS Template Engine | NodeJS | ExpressJS | REST APIs | MySQL - Sequelize  | Postman | Git - GitHub | Trello - Slack | Scrum.',
    url: 'https://babieka.herokuapp.com/',
    repo: 'https://github.com/LucasKoval/Babieka',
  },
  {
    // DASHBOARD
    id: nanoid(),
    img: 'dashboard.png',
    title: 'Babieka | Dashboard',
    info: 'Statistics dashboard for the Babieka website.',
    info2:
      'ReactJS | JavaScript (ES11) | CSS - Bootstrap | REST APIs | Postman | Git - GitHub | Trello - Slack | Scrum.',
    url: 'https://babieka-dashboard.vercel.app/',
    repo: 'https://github.com/LucasKoval/Babieka-Dashboard',
  },
  {
    // CATALOG VIEW
    id: nanoid(),
    img: 'aerolab.png',
    title: 'Catalog View',
    info: 'Catalog view app for a loyalty program application. The main goal of the product is to help users redeem items through a points-based system.',
    info2:
      'HTML5 | JavaScript (ES11) | CSS - Bootstrap | EJS Template Engine | NodeJS | ExpressJS | REST APIs | JWT | Postman | Git - GitHub.',
    url: 'https://catalog-view-lkdev.herokuapp.com/',
    repo: 'https://github.com/LucasKoval/Catalog-View',
  },
  {
    // GITHUB PROFILE FINDER
    id: nanoid(),
    img: 'github.jpg',
    title: 'GitHub Profile Finder',
    info: 'GitHub profile search app. Project made for the Take Home Test 2021.',
    info2:
      'ReactJS | NextJS | JavaScript (ES11) | CSS - Styled-Components - Bootstrap | GraphQL APIs | Postman | Git - GitHub.',
    url: 'https://github-profile-finder-lkdev.vercel.app/',
    repo: 'https://github.com/LucasKoval/GitHub-Profile-Finder',
  },
  {
    // POKEDEX
    id: nanoid(),
    img: 'pokedex.png',
    title: 'Pokedex Encyclopedia',
    info: 'Pokemon encyclopedia where you can search and view the different pokemons and their characteristics and statistics.',
    info2:
      'ReactJS | NextJS | JavaScript (ES11) | CSS - Bootstrap | REST APIs | Postman | Git - GitHub.',
    url: 'https://pokedex-lkdev.vercel.app/',
    repo: 'https://github.com/LucasKoval/Pokedex-Encyclopedia',
  },
  {
    // HACKER NEWS
    id: nanoid(),
    img: 'hacker.png',
    title: 'Hacker News Clone',
    info: 'Clone of Hacker News, a social news website that focuses on computing and entrepreneurship.',
    info2: 'ReactJS | JavaScript (ES11) | CSS - Bootstrap | REST APIs | Git - GitHub.',
    url: 'https://hacker-news-lkdev.vercel.app/',
    repo: 'https://github.com/LucasKoval/HackerNews-Clone',
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
      url: 'https://codepen.io/LucasKovalDev',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
