import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hii! i am ',
  name: 'Aman Bharti',
  subtitle: 'Competitive Programmer and Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'amanimg.jpg',
  paragraphOne:
    'I am a pre-final year undergraduate student of National Institute Of Technology Patna doing major in Electronics and Communication. I am a competitive Programmer and having sound knowledge of data structure and algorithms.',
  paragraphTwo:
    'I am also interested in full stack web development and have a good experience of javascript , Node js, express js ,React js ,Next js, express js.',
  paragraphThree:
    'I am also web cordinator of Robotics club of patna.I am tech blogger at medium also.',
  resume: 'https://drive.google.com/file/d/1LjWbPITHEV0krC7buxYhI9cniWf5Uc5s/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pr1.png',
    title: 'Easy Monitor',
    info: 'An online educational platform for teachers and students to detect plagiarism through web scrapping.ML using python assists in grouping/clustering students who copied from one another.',
    info2: 'TechStack : React.js, Node.js, MongoDB, Express.',
    url: 'https://eduhack.herokuapp.com/',
    repo: 'https://github.com/amanbharti0302/Easy-Monitor', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pr2.png',
    title: 'Crown Clothing',
    info: 'Developed an e-commerce web application.It has features like SignIn with google, Adding items to cart, Removing items from cart, etc.',
    info2: 'React Js, Redux Js, Firebase',
    url: 'https://react-project-crown.herokuapp.com/',
    repo: 'https://github.com/amanbharti0302/crown-clothingnew', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pr3.png',
    title: 'Poshan Abhiyan',
    info: 'A complete web app for govt. workers to monitor vaccines and nutrition of children and women.',
    info2: 'Developed with the help of node js, express , mongo db , ejs..',
    url: 'http://poshan.herokuapp.com/',
    repo: 'https://github.com/amanbharti0302/poshan-new', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Thank You',
  btn: 'Contact me',
  email: 'amanb.ug18.ec@nitp.ac.in',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/_bharti_aman',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bharti-aman/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/amanbharti0302',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
