export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Yin Jiang',
    position: 'Senior Technical Project Manager at Harvard Kennedy School',
    img: 'assets/review1.jpg',
    review:
      'Working with Lyon was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    linkedIn: 'https://www.linkedin.com/in/yin-jiang-2a227b40/',
  },
  {
    id: 2,
    name: 'Gaurang Shah',
    position: 'Architect/Vice President Investment Banking at UBS',
    img: 'assets/review2.jpg',
    review:
      'Lyon’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our project, and resulting in 40% performance improvement and 60% reduction in code complexity. He’s a true professional! Fantastic work.',
      linkedIn: 'https://www.linkedin.com/in/gaurangshah/',
  },
  {
    id: 3,
    name: 'Bhushan Deodhar',
    position: 'Associate Director at UBS ',
    img: 'assets/review3.jpg',
    review:
      'I can’t say enough good things about Lyon. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    linkedIn: 'https://www.linkedin.com/in/bhushan-deodhar/',

  },
  {
    id: 4,
    name: 'Ram Paramhansa',
    position: 'Site Reliability Engineer at UBS',
    img: 'assets/review4.jpg',
    review:
      'Lyon was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
      linkedIn: 'https://www.linkedin.com/in/ram-paramhansa/',

  },
];

export const myProjects = [
  {
    title: 'Admin Dashboard App',
    desc: 'Build and Deploy a React Admin Dashboard App With Theming, Tables, Charts, Calendar, Kanban and More',
    subdesc:
      'Completed seven fully functional charts such as Line, Area, Financial, Bar, Pie, Color-Mapping, Pyramid, Stacked by using Syncfusion library and developed four App included Calendar, Kanban, Editor, Color-Picker.',
    href: 'https://react-dashboard-ecru.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/dashboard.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Syncfusion',
        path: '/assets/syncfusion.svg',
      },
    ],
  },
  {
    title: 'E-Commerce - Online Store',
    desc: 'A cutting-edge e-commerce platform that offers users a seamless shopping experience. It features a user-friendly interface, product recommendations, and secure payment processing, making it easy for customers to find and purchase products online.',
    subdesc:
      'React/ Hooks&Refs/ Next.js /Sanity/ Stripe',
    href: 'https://ecommerce-website-theta.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/trolley.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Sanity',
        path: '/assets/sanity.svg',
      },
      {
        id: 4,
        name: 'Stripe',
        path: '/assets/stripe.svg',
      },
    ],
  },
  {
    title: 'TikTok Clone',
    desc: 'A TikTok clone that allows users to create and share short videos with friends and followers. It features a user-friendly interface, real-time notifications, and a secure messaging system, making it easy for users to connect and share content.',
    subdesc:
      'React/Next.js/ TypeScript/ Hooks/ Zustand/ Google Auth2.0/ Git/ Sanity',
    href: 'https://tiktok-clone-three.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/tiktok.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Sun Florist - Online Flower Shop',
    desc: 'Sun Florist is a modern online flower shop that offers a wide range of fresh flowers, bouquets, and arrangements for every occasion.',
    subdesc:
      'Shopify/LiquidJS/CSS/HTML/JavaScript, Developed a Shopify theme for Sun Florist, an online flower shop. The theme features a clean and modern design, easy navigation, and a user-friendly interface, making it easy for customers to browse and purchase products.',
    href: 'https://sunflorist.co/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/sunflorist.svg',
    logoStyle: {
      backgroundColor: '#ffff',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Shopify',
        path: '/assets/shopify.svg',
      },
      {
        id: 2,
        name: 'Liquidjs',
        path: 'assets/liquidjs.png',
      },
      {
        id: 3,
        name: 'CSS',
        path: '/assets/css.png',
      }
    ],
  },
  {
    title: 'Jasmine - B&B website ',
    desc: 'Jasmine is a modern hotel website that offers a wide range of services and amenities for guests.',
    subdesc:
      'Wordpress, Developed a custom WordPress theme for Jasmine, a modern hotel website. The theme features a clean and modern design, easy navigation, and a user-friendly interface, making it easy for guests to book rooms and explore the hotel.',
    href: 'https://jasminekt.com/',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/hotel.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'UBS',
    pos: 'Front-End Developer',
    duration: 'Jul 2024 - Nov 2024',
    location: 'NC, USA',
    title: "Led front-end development for Investment Bank Trading Compliance Control System post UBS-Credit Suisse merger, maintaining mission-critical compliance systems handling $100M+ daily trading activities.",
    icon: '/assets/ubs.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Credit Suisse',
    pos: 'Front-End Developer',
    duration: 'Oct 2022 - 2024 Jul',
    location: 'NC, USA',
    title: "Spearheaded development of trading compliance platform using React.js, achieving 40% performance improvement through modern stack implementation. Created comprehensive testing frameworks and role-based access control systems for regulatory compliance.",
    icon: '/assets/CS.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'United Software Coporation',
    pos: 'Software Engineer',
    duration: 'Apr 2022 - Oct 2023',
    location: 'Remote USA',
    title: "Architected cloud-native solutions using AWS services and microservices, achieving 99.9% system availability. Developed robust CI/CD pipelines and RESTful APIs, while implementing event-driven architecture for real-time data synchronization.",
    icon: '/assets/usc.png',
    animation: 'victory',
  },
  {
    id: 4,
    name: 'Clio Enterprises Co.',
    pos: 'Full-Stack Developer',
    duration: 'Oct 2018 - Apr 2022',
    location: 'Remote USA',
    title: "Built and maintained enterprise-level Student Hub Portal using Node.js and React ecosystem. Achieved 99.5% uptime during peak periods through AWS infrastructure optimization and Docker containerization.",
    icon: '/assets/company.svg',
    animation: 'salute',
  },
];