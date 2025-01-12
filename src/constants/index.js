import {
  
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    threejs,
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
      name: "React JS",
      icon: reactjs,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  
  export const myProjects = [
    {
      title: 'Anonymous-wave',
      desc: 'Discover the mystique of covert communication with Anonymous Wave',
      subdesc:
        'A anonymous chat app where you can send messages to anyone but the thing is no one will know your identity where your identity remains a secret.Built this full-stack project using nextJs, Tailwind CSS and NEXTAUTH',
      href: 'https://anonymous-wave.vercel.app/',
      texture: 'src/assets/anoymous.jpg',
      spotlight: 'src/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'src/assets/tech/reactjs.png',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'src/assets/tech/tailwind.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: 'src/assets/tech/typescript.png',
        },
        {
          id: 4,
          name: 'Node js',
          path: 'src/assets/tech/nodejs.png',
        },
      ],
    },
    {
      title: 'Musical School',
      desc: 'Created a clone website for a music acadmey website',
      subdesc:
        'Created this clone using nextJs,Tailwind,node and also used ui library for cards animations etc',
      href: 'https://github.com/Sahilkukreja30/musicnextjs',
      texture: 'src/assets/music.jpg',
      
      spotlight: 'src/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'src/assets/tech/reactjs.png',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'src/assets/tech/tailwind.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: 'src/assets/tech/typescript.png',
        },
        {
          id: 4,
          name: 'Javascript',
          path: 'src/assets/tech/javascript.png',
        },
      ],
    },
    {
      title: 'Weather app',
      desc: 'A simple and cool weather app where you can check weather or season of anywhere you want',
      subdesc:
        'Using API and getting data from that created a weather app where you just need to search area and you will get every detail related to weather about that place or country or city',
      href: 'https://github.com/Sahilkukreja30/Weather-app',
      texture: 'src/assets/weather.jpg',
      spotlight: 'src/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: 'src/assets/tech/html.png',
        },
        {
          id: 2,
          name: 'CSS',
          path: 'src/assets/tech/css.png',
        },
        {
          id: 3,
          name: 'Javascript',
          path: 'src/assets/tech/javascript.png',
        },
      ],
    },
  ];
  
  export { technologies};