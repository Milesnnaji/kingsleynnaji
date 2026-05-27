import {
    flutter,
    creator,
    web,
    javascript,
    typescript,
    reactjs,
    tailwind,
    node,
    mongodb,
    git,
    figma,
    docker,
    starbucks,
    carrent,
    jobit,
    tripguide,
    civyxpro,
    openclaw,
    invoxaflow,
    swifthaul1,
    swifthaul2,
    threejs,
  } from "../assets";

import carrent1 from "../assets/carrent1.jpg";
  
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
      title: "Next.js / React Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: flutter,
    },
    {
      title: "Node.js Backend Developer",
      icon: node,
    },
    {
      title: "AI & Automation Builder",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React.js",
      icon: reactjs,
    },
    {
      name: "Next.js",
      icon: web,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Node JS",
      icon: node,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three.js",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Frontend Engineer (Intern)",
      company_name: "IENERGYUP-INNOVATIONLAB",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "Sept 2023 – Jan 2024",
      points: [
        "Developed responsive frontend components using React.js, improving usability and user experience across the platform.",
        "Integrated REST APIs to support real-time property listings, search filtering, and booking workflows.",
        "Collaborated with UI/UX and backend teams to deliver scalable and accessible web interfaces.",
      ],
    },
    {
      title: "Founder & Full-Stack Developer",
      company_name: "Web Core Oracle",
      icon: creator,
      iconBg: "#383E56",
      date: "2023 – 2025",
      points: [
        "Built and deployed OpenClaw, a Telegram-integrated AI agent framework with persistent session tracking and multi-step workflow continuity.",
        "Built CivyxPro, a resume-builder SaaS with PDF export and Stripe/Paystack payment integration.",
        "Developed InvoxaFlow, a full-stack invoicing and payment tracking platform for freelancers.",
        "Engineered a multi-tenant SaaS marketplace supporting 50+ currencies with secure authentication and scalable deployment.",
        "Automated multi-stage content workflows using n8n, reducing manual publishing effort.",
      ],
    },
    {
      title: "IT Support Associate",
      company_name: "Arthur Nato Limited",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "Feb 2024 – May 2026",
      points: [
        "Provided technical support for software installation, troubleshooting, system configuration, and network maintenance.",
        "Managed digital operations, online inquiries, and system updates to maintain operational efficiency.",
        "Resolved technical issues promptly to minimize downtime and support continuous business operations.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Kingsley Nnaji proved me wrong.",
      name: "Emmanuel Macaulay",
      designation: "IT Manager",
      company: "Arthur Nato Limited",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Kingsley Nnaji does.",
      name: "Samuel Olawuyi",
      designation: "Director",
      company: "Arthur Nato Limited",
    },
    {
      testimonial:
        "Kingsley consistently resolved our technical issues with speed and professionalism. His contributions to our digital operations have been invaluable to the team.",
      name: "Pius Owolabi",
      designation: "Operations Manager",
      company: "Arthur Nato Limited",
    },
  ];
  
  const projects = [
    {
      name: "OpenClaw",
      description:
        "A multi-step autonomous AI agent framework built with Node.js and the Telegram Bot API. Features persistent memory across sessions using MEMORY.md, multi-turn interaction tracking, and security auditing for prompt injection risks.",
      tags: [
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Ollama / qwen3",
          color: "green-text-gradient",
        },
        {
          name: "Telegram API",
          color: "pink-text-gradient",
        },
      ],
      image: openclaw,
      source_code_link: "https://github.com/milesnnaji",
    },
    {
      name: "CivyxPro",
      description:
        "A resume-builder SaaS platform supporting PDF export and dual payment integration via Stripe and Paystack. Built with Next.js and Node.js, reducing resume creation and export time for users.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Stripe / Paystack",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: civyxpro,
      source_code_link: "https://github.com/Milesnnaji/civyxpro",
    },
    {
      name: "InvoxaFlow",
      description:
        "A full-stack invoicing and payment tracking platform for freelancers. Automates invoice generation and payment monitoring workflows, built with React.js, Node.js, and MongoDB.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: invoxaflow,
      source_code_link: "https://github.com/Milesnnaji/invoxaflow",
    },
    {
      name: "Amazon Clone",
      description:
        "Flutter-based e-commerce app replicating core Amazon features — product listings, user accounts, cart management, and secure payment gateway integration via a Node.js backend.",
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
      name: "WristWorks — Watch Store App",
      description:
        "A sleek Android e-commerce app for purchasing wrist watches. Features intuitive navigation, detailed product pages, high-quality images, cart management, and a seamless Firebase-backed checkout.",
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
          name: "Android",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Milesnnaji/WristWorks",
    },
    {
      name: "SwiftHaul",
      description:
        "A logistics platform for door-to-door courier delivery across all 36 Nigerian states. Features live tracking, instant PDF receipts, delivery photo proof, and Paystack payment integration.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Paystack",
          color: "pink-text-gradient",
        },
      ],
      image: swifthaul1,
      images: [swifthaul1, swifthaul2],
      source_code_link: "https://github.com/Milesnnaji/SwiftHaul",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };