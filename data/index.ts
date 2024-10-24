export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "User-friendly and responsive web applications that engage users and deliver results",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "",
    img: "/computer.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Adaptable to new technologies and frameworks, I am always eager to learn and grow",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Experience with modern frontend and backend technologies",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "",
    img: "/grid.svg",
    spareImg: "/card.svg",
  },

  {
    id: 5,
    title: "Currently building fullstack projects with Node.js, Express, and MongoDB",
    description: "New technologies and new horizons",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "",
    img: "/code.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to bring your project to life?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Chat App - Full Stack",
    des: "Real-time chat application with authentication, private messaging, and a RESTful API using React.js, Node.js, and PostgreSQL.",
    img: "/p1-chat-app.png",
    iconLists: ["/logo-react.svg", "/logo-express.svg", "/logo-nodejs.svg", "/logo-postgresql.svg", "/logo-prisma.svg", "/logo-socketio.svg", "/logo-zustand.svg", "/logo-ts.svg", "/logo-tw.svg"],
    link: "https://github.com/mr-smoke/pern-chat-app",
  },
  {
    id: 2,
    title: "Expense Tracker - Full Stack",
    des: "Full-stack expense tracker app with authentication, CRUD operations, and a RESTful API using React.js, Node.js, and MongoDB.",
    img: "/p2-expanse-tracker.png",
    iconLists: ["/logo-react.svg", "/logo-express.svg", "/logo-nodejs.svg", "/logo-mongodb.svg", "/logo-passportjs.svg", "/logo-graphql.svg", "/logo-tw.svg"],
    link: "https://github.com/mr-smoke/expense-tracker-full-stack-app",
  },
  {
    id: 3,
    title: "Admin Dashboard - Full Stack",
    des: "Admin dashboard with CRUD operations, authentication, and a RESTful API using Next.js, Next Auth, and MongoDB.",
    img: "/p3-admin-dashboard.png",
    iconLists: ["/logo-nextjs.svg", "/logo-nextauth.svg", "/logo-mongodb.svg"],
    link: "https://github.com/mr-smoke/admin-dashboard-nextjs",
  },
  {
    id: 4,
    title: "Color Palette - Frontend",
    des: "Color palette website with a search feature, color picker, and color shades using React.js and Sass.",
    img: "/p4-color-palette.png",
    iconLists: ["/logo-react.svg", "/logo-sass.svg"],
    link: "https://github.com/mr-smoke/brand-colors",
  },
];

export const moreProjects = [
  {
    desc:
      "Watchlist App is an application that allows users to search and view details about movies. Users can easily manage their watchlist and watched movies, making it simple to keep track of what they want to see and what they have already seen. The site is built using React for a modern user interface.",
    name: "Watchlist App",
    link: "https://github.com/mr-smoke/watchlist-app",
    iconLists: ["/logo-react.svg"],
  },
  {
    desc:
      "A full-stack real estate application built with React, GraphQL, Strapi, and Sass. This project provides a platform for users to browse, buy, and rent properties. The application leverages the power of React for building a dynamic and responsive user interface, Strapi for a flexible and scalable backend solution, Apollo Client for efficient data querying with GraphQL, and Sass for styling and responsive design.",
    name: "Real Estate App",
    link: "https://github.com/mr-smoke/real-estate-app",
    iconLists: ["/logo-react.svg", "/logo-strapi.svg", "/logo-graphql.svg", "/logo-sass.svg"],

  },
  {
    desc:
      "Movie App is an application that allows users to search and view details about movies. This project provides a user-friendly interface to explore popular, top-rated, and upcoming movies. The site is built using Next.js and Tailwind CSS for a modern and responsive user interface.",
    name: "Movie App",
    link: "https://github.com/mr-smoke/movie-app-nextjs",
    iconLists: ["/logo-nextjs.svg", "/logo-tw.svg"],

  },
  {
    desc:
      "A full-stack blog application built with React, MySQL, Express.js and Tailwind CSS. This project provides a platform for users to create, edit, and delete blog posts. It includes user authentication and authorization, allowing users to manage their own posts while viewing others' content. The application leverages the power of React for building a dynamic and responsive user interface, MySQL for a robust and reliable database solution, and Express.js for handling server-side logic and API endpoints, and Tailwind CSS for styling and responsive design.",
    name: "Blog App",
    link: "https://github.com/mr-smoke/blog-app",
    iconLists: ["/logo-react.svg", "/logo-express.svg", "/logo-mysql.svg", "/logo-tw.svg",],

  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer - TUSEM",
    desc: "ASP.NET Core, Entity Framework Core, and SQL Server to develop and maintain web applications, ensuring optimal performance and user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    desc: "Developed and maintained websites for clients, ensuring optimal performance and user experience. Utilized modern frontend technologies such as React, Next.js, and Tailwind CSS.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "github",
    img: "/github.svg",
    link: "https://github.com/mr-smoke",
  },
  {
    id: 2,
    name: "linkedin",
    img: "/linkedin.svg",
    link: "https://www.linkedin.com/in/muhammet-baki-duman-019451195/",
  },
];

export const myApproach = [
  {
    id: 1,
    title: "Planning & Strategy",
    description: "We’ll work together to define your website’s goals, target audience, and essential features. This includes mapping out site structure, navigation, and content strategy.",
    img: "/approach-1.svg",
    bgColor: "bg-red-800",
  },
  {
    id: 2,
    title: "Development & Progress Updates",
    description: "With the plan in place, I’ll dive into development, keeping you updated regularly as the project evolves from concept to code.",
    img: "/approach-2.svg",
    bgColor: "bg-blue-800",
  },
  {
    id: 3,
    title: "Development & Launch",
    description: "The final step! After finalizing the design, I’ll bring your vision to life with clean, functional code, ready to launch.",
    img: "/approach-3.svg",
    bgColor: "bg-green-800",
  },
]

