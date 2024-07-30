import {
    mobile,
    bootstrap ,
    flutter,
    backend,
    creator,
    wix,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    node,
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
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Flutter Developer",
      icon: flutter,
    },
    {
      title: "Node.Js Developer",
      icon: node,
    },
    {
      title: "REST API's Developer",
      icon: backend,
    },
    {
      title: "React Native Developer",
      icon: reactjs,
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
      name: "Dart",
      icon: reactjs,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: node,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "wix",
      icon: wix,
    },
    {
      name: "Rest Api",
      icon: backend,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer at Mattress Warehouse ",
      company_name: "Arthur Nato",
      icon: shopify,
      iconBg: "#383E56",
      date: "June 2023",
      points: [
        "Built a fully functional e-commerce website for Mattress Warehouse, facilitating online sales and inventory management, and enhancing customer shopping experience.",
      
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "IENERGYUP-INNOVATION ",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "Sept 2023",
      points: [
       // "Collaborative Problsing strong teamwork and commchitecting the solution and ensuring data integrity through comprehensive testing.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
       "Contributed to developing and maintaining dynamic web applications using React.js. Collaborated with cross-functional teams to enhance user interfaces, implement new features, and optimize performance for a better user experience.",

       
       // "Implementing responsive design (AirBnB clone) and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Dev",
      company_name: "Only1Samaga",
      icon: node,
      iconBg: "#383E56",
      date: "May 2024",
      points: [
        "Developed a professional portfolio website to showcase projects, skills, and accomplishments, utilizing modern web technologies for a seamless and engaging user experience.",

        //"Wrote integration tests for all applications using JUnit/Mockito, significantly reducing customer complaints about bugs and application malfunctions..",
       // "Designed and built scalable APIs to increase development workflow by 25%",
       // "Implementing responsive design and ensuring cross-browser compatibility.",
        //"Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Android App DEv  ",
      company_name: " Codeclaues",
      icon: mobile,
      iconBg: "#E6DEDD",
      date: "May 2024 ",
      points: [
       


"Developed and maintained Android applications, collaborating with senior developers to implement new features, fix bugs, and enhance app performance. Gained hands-on experience with Java and Kotlin, contributing to user-friendly and efficient mobile solutions.",
       // "Improved user authentication by incorporating email service into an existing Spring Boot application.",
       // "Increased productivity by 40% by following agile methodologies and best practices for product development.",
       // "Managed SQL Server database system to ensure data integrity and security.",
        //"Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Kingsley Nnaji proved me wrong.",
      name: "Emmanuel Macaulay",
      designation: "Stack Associate",
      company: "DECAGON",
   
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Kingsley Nnaji does.",
      name: "Samuel Olawuyi",
      designation: "CEO",
      company: "SammyWealth",
    
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Pius Owolabi",
      designation: "Head of Network Operations",
      company: "Nigerian Civil Aviation Authority",

    },
  ];
  
  const projects = [
    {
      name: "Amazon clone",
      description:
     "E-commerce Functionality: Developed Flutter-based front-end for a user-friendly shopping experience. Implemented Node.js backend to handle product listings, user accounts, and transactions. Payment Integration: Integrated payment gateways for secure and seamless transactions.  Ensured a smooth checkout process for users.",
        //"Web-based platform that allows users to sign-up, login, and chat with other users as well as Make post, Like post and comment.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Dart",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Milesnnaji/Amazon-clone",
    },
    {
      name: "E-commerce Wrist Watches Android App",
      description:"A sleek and user-friendly Android app designed for purchasing wrist watches. Browse through a wide selection of stylish and premium watches, compare prices, and make secure purchases with ease. The app features intuitive navigation, detailed product descriptions, high-quality images, and seamless checkout, providing an exceptional shopping experience.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: " Android App",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Milesnnaji/WristWorks",
    },
    {
      name: "Job List Application",
      description:
        "Job Matching Algorithm: Created Flutter application for effective job searching and posting.Implemented Node.js backend for job listing management and user profiles.Application Management:Developed a system for job seekers to apply, and employers to manage applications.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "swift",
          color: "green-text-gradient",
        },
        {
          name: "Dart",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Milesnnaji/Flutter-job-list-application--",
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };