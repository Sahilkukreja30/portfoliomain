import htmlIcon from '/assets/tech/html.png';
import cssIcon from '/assets/tech/css.png';
import javascriptIcon from '/assets/tech/javascript.png';
import reactjsIcon from '/assets/tech/reactjs.png';
import tailwindIcon from '/assets/tech/tailwind.png';
import nodejsIcon from '/assets/tech/nodejs.png';
import threejsIcon from '/assets/tech/threejs.svg';
import gitIcon from '/assets/tech/git.png';
import anonymousTexture from '/assets/anoymous.jpg';
import spotlight1 from '/assets/spotlight1.png';
import musicTexture from '/assets/music.jpg';
import spotlight2 from '/assets/spotlight2.png';
import weatherTexture from '/assets/weather.jpg';
import spotlight3 from '/assets/spotlight3.png';
import typescriptIcon from '/assets/tech/typescript.png';
const technologies = [
  {
    name: "HTML 5",
    icon: htmlIcon,
  },
  {
    name: "CSS 3",
    icon: cssIcon,
  },
  {
    name: "JavaScript",
    icon: javascriptIcon,
  },
  {
    name: "React JS",
    icon: reactjsIcon,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindIcon,
  },
  {
    name: "Node JS",
    icon: nodejsIcon,
  },
  {
    name: "Three JS",
    icon: threejsIcon,
  },
  {
    name: "git",
    icon: gitIcon,
  },
];

  
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
  export const myProjects = [
    {
      title: 'Anonymous-wave',
      desc: 'Discover the mystique of covert communication with Anonymous Wave',
      subdesc: 'A anonymous chat app where you can send messages to anyone but the thing is no one will know your identity where your identity remains a secret.',
      href: 'https://anonymous-wave.vercel.app/',
      texture: anonymousTexture,
      spotlight: spotlight1,
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: reactjsIcon,
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: tailwindIcon,
        },
        {
          id: 3,
          name: 'TypeScript',
          path: typescriptIcon,
        },
        {
          id: 4,
          name: 'Node js',
          path: nodejsIcon,
        },
      ],
    },
    {
      title: 'Musical School',
      desc: 'Created a clone website for a music acadmey website',
      subdesc: 'Created this clone using nextJs,Tailwind,node and also used ui library for cards animations etc',
      href: 'https://github.com/Sahilkukreja30/musicnextjs',
      texture: musicTexture,
      spotlight: spotlight2,
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: reactjsIcon,
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: tailwindIcon,
        },
        {
          id: 3,
          name: 'TypeScript',
          path: typescriptIcon,
        },
        {
          id: 4,
          name: 'Javascript',
          path: javascriptIcon,
        },
      ],
    },
    {
      title: 'Weather app',
      desc: 'A simple and cool weather app where you can check weather or season of anywhere you want',
      subdesc: 'Using API and getting data from that created a weather app where you just need to search area and you will get every detail related to weather about that place or country or city',
      href: 'https://github.com/Sahilkukreja30/Weather-app',
      texture: weatherTexture,
      spotlight: spotlight3,
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: htmlIcon,
        },
        {
          id: 2,
          name: 'CSS',
          path: cssIcon,
        },
        {
          id: 3,
          name: 'Javascript',
          path: javascriptIcon,
        },
      ],
    },
  ];
  
  export { technologies};