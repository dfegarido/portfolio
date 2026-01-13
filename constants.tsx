import React from 'react';
import { Project, Experience, Skill } from './types';
import { Brain, Cloud, Database } from 'lucide-react';
import { getImagePath } from './helpers/imagePath';

export const PORTFOLIO_OWNER = "Darwin Fegarido";
export const PORTFOLIO_ROLE = "Software Engineer | Full Stack Web Developer";
export const PORTFOLIO_TAGLINE = "7+ Years in Scalable APIs, Microservices, and AI-Driven Solutions.";
export const CONTACT_EMAIL = "darwinfegarido@gmail.com"; 
export const GITHUB_URL = "https://github.com/dfegarido";
export const LINKEDIN_URL = "https://www.linkedin.com/in/darwinfegarido/";

export const ABOUT_ME = `
  Backend Developer with over 7 years of experience in backend and full-stack development, now extending expertise into AI integration and LLM-powered applications. 
  
  I am skilled in building scalable APIs, microservices, and real-time systems with Node.js, Python, and cloud services, alongside hands-on experience with ETL pipelines and data engineering. I have a proven track record in developing AI-driven solutions, including RAG (Retrieval-Augmented Generation) pipelines that leverage vector databases for knowledge retrieval and intelligent search.
  
  Passionate about blending traditional backend engineering with AI-powered systems, driving innovation through LLM integration, vector search, and intelligent automation.
`;

const SkillIcon = ({ src, alt }: { src: string, alt: string }) => (
  <img 
    src={src} 
    alt={alt}
    className="w-10 h-10 object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
  />
);

export const SKILLS: Skill[] = [
  // Backend
  { 
    name: 'Python', 
    category: 'backend', 
    icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" /> 
  },
  { 
    name: 'Node.js', 
    category: 'backend', 
    icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" /> 
  },
  { 
    name: 'Django', 
    category: 'backend', 
    icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" alt="Django" /> 
  },
  { 
    name: 'PySpark', 
    category: 'backend', 
    icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg" alt="PySpark" /> 
  },

  // Frontend
  { 
    name: 'React', 
    category: 'frontend', 
    icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" /> 
  },
  { 
    name: 'Vue.js', 
    category: 'frontend', 
    icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" alt="Vue.js" /> 
  },
  { 
    name: 'Web3.js', 
    category: 'frontend', 
    icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ethereum/ethereum-original.svg" alt="Ethereum/Web3" /> 
  },

  // Data
  { 
    name: 'MongoDB', 
    category: 'backend', 
    icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" /> 
  },
  { 
    name: 'PostgreSQL', 
    category: 'backend', 
    icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" /> 
  },
  { 
    name: 'Redis', 
    category: 'backend', 
    icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" alt="Redis" /> 
  },

  // Cloud & DevOps
  { 
    name: 'AWS', 
    category: 'tools', 
    icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS" /> 
  },
  { 
    name: 'Azure', 
    category: 'tools', 
    icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" alt="Azure" /> 
  },
  { 
    name: 'Firebase', 
    category: 'backend', 
    icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" alt="Firebase" /> 
  },
  { 
    name: 'Docker', 
    category: 'tools', 
    icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" /> 
  },
  
  // Advanced / AI
  { 
    name: 'Socket.IO', 
    category: 'backend', 
    icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" alt="Socket.IO" /> 
  },
  { 
    name: 'AI / LLMs', 
    category: 'other', 
    icon: <Brain size={40} className="text-slate-400 group-hover:text-cyan-400 transition-colors" /> 
  },
  {
    name: 'Vector DBs',
    category: 'other',
    icon: <Database size={40} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Freelance Full Stack / Backend Engineer',
    company: 'Self-Employed',
    period: 'Jul 2025 - Present',
    description: [
      'Delivered advertising automation workflows using Make.com with AI integration (ChatGPT, Groq) to streamline campaign execution.',
      'Built and deployed social networking platforms and mobile applications with Node.js (Express), React Native, and AWS (ECR, ECS Fargate).',
      'Developed serverless e-commerce solutions with Firebase Functions and React Native to support scalable retail operations.',
      'Implemented matching and recommendation features in web applications (e.g., PhillyMatch) using Laravel, questionnaires, and profile-based matching.',
      'Designed and integrated hotel booking workflows into travel platforms (e.g., MasayaTripPH) with seamless user experience and payment support.',
      'Deployed and maintained ReactJS admin panels with CI/CD pipelines using GitHub Actions, Amazon S3, and CloudFront.'
    ]
  },
  {
    id: '2',
    role: 'Sr Full Stack Engineer',
    company: 'VISEO ASIA',
    period: 'Feb 2021 - Jul 2025',
    description: [
      'Engineered scalable backend systems using Node.js and Python to support analytics-driven applications.',
      'Designed and deployed end-to-end ETL workflows that process real estate data from Parquet files using PySpark and Pandas.',
      'Built and maintained user-facing applications using modern frontend frameworks like Vue.js and React.js.',
      'Administered CI/CD pipelines in Azure, streamlining deployment cycles and improving system reliability.',
      'Tuned SQL queries and restructured database schemas to significantly enhance performance and query efficiency.',
      'Deployed backend Node.js APIs using Docker on AWS ECS Fargate with Application Load Balancer for scalable request handling.',
      'Set up frontend React.js applications hosted on GitHub, with automated build and deploy workflows via CI/CD to Amazon S3/CloudFront.',
      'Mentored junior and mid-level engineers by promoting engineering best practices and conducting code reviews.'
    ]
  },
  {
    id: '3',
    role: 'Full Stack Engineer',
    company: 'Quantum Crowd',
    period: 'Apr 2020 - Jan 2021',
    description: [
      'Built scalable and secure backend services using Node.js for core insurance workflows, including user authentication, policy, and claims management.',
      'Integrated closely with Vue.js frontend components, ensuring smooth data flow and consistent UX.',
      'Designed RESTful APIs and structured service layers for reusability and maintainability.',
      'Enhanced developer experience by implementing comprehensive API documentation using Swagger/OpenAPI.',
      'Delivered core backend modules ahead of schedule, enabling a successful MVP launch.',
      'Reduced API response times by over 30% through performance tuning and query optimization.',
      'Significantly improved team velocity by introducing standardized, well-documented API structures.'
    ]
  },
  {
    id: '4',
    role: 'Full Stack Engineer',
    company: 'Taktyl Studios',
    period: 'Nov 2019 - Jul 2020',
    description: [
      'Led backend development of a Content Management System (CMS) tailored for gaming analytics and operational dashboards.',
      'Built robust data normalization pipelines to aggregate in-game metrics and player behavior insights.',
      'Designed RESTful APIs to support internal tools and external analytics visualization.',
      'Collaborated with frontend teams to ensure real-time syncing and reporting accuracy.',
      'Improved backend data processing performance by 25%, enhancing analytics turnaround time.',
      'Enabled near real-time game telemetry insights by streamlining backend logic and database operations.',
      'Delivered scalable backend infrastructure that supported multiple live game environments.'
    ]
  },
  {
    id: '5',
    role: 'Mid Fullstack Developer',
    company: 'New Oriental Club88',
    period: 'Mar 2019 - Aug 2019',
    description: [
      'Developed backend services and automated scripts to integrate external data sources into internal systems using Python and cron jobs on CentOS environments.',
      'Managed server configurations and deployments using Nginx, ensuring high availability and optimized routing.',
      'Designed ETL processes to fetch and process data from third-party providers, enabling centralized analytics and operations.',
      'Implemented system-level logging and monitoring tools to enhance operational visibility and incident response.',
      'Hardened backend systems by implementing enhanced security protocols, reducing vulnerability reports by 50%.',
      'Streamlined data ingestion pipelines, improving data availability for internal dashboards and reports.'
    ]
  },
  {
    id: '6',
    role: 'Full Stack / Python Developer',
    company: 'Skyluster Technology Inc.',
    period: 'Mar 2018 - Feb 2019',
    description: [
      'Led backend development for a Web3-powered SaaS platform that allowed users to generate templated websites in one click.',
      'Designed and deployed smart contracts on the Ethereum network, including a custom ERC20 token, enabling crypto-based subscription payments.',
      'Integrated Web3.js into the frontend to facilitate real-time blockchain interactions such as wallet authentication and token transactions.',
      'Developed and maintained backend infrastructure using Node.js, Django, and Python, with server-side automation via Bash scripts.',
      'Managed Ubuntu servers and configured Nginx for secure, scalable hosting and traffic routing.',
      'Delivered a full-stack decentralized SaaS product with seamless Ethereum-based payments and smart contract automation.',
      'Successfully launched a custom ERC20 token, facilitating crypto transactions within the platform.',
      'Built robust backend services supporting both traditional REST APIs and blockchain communication.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Advertising Automation with AI',
    description: 'Automated advertising workflows using Make.com and AI integration (ChatGPT, Groq) to streamline content generation, campaign execution, and performance tracking.',
    tags: ['AI', 'Make.com', 'ChatGPT', 'Automation'],
    imageUrl: getImagePath('/images/automation.png')
  },
  {
    id: '2',
    title: 'Shareikna App & Admin Panel',
    description: 'Social networking platform (Saudi Arabia) built with Node.js and React Native. Deployed backend with AWS ECS Fargate and frontend to Amazon S3 + CloudFront.',
    tags: ['Node.js', 'React Native', 'AWS', 'ReactJS', 'CI/CD'],
    imageUrl: getImagePath('/images/shareikna.png'),
    liveUrl: 'https://shareikna.com/'
  },
  {
    id: '3',
    title: 'ILeafU Mobile App',
    description: 'Mobile e-commerce app for plant sales (USA), powered by Firebase Functions + React Native, supporting seamless payments, order tracking, and push notifications.',
    tags: ['React Native', 'Firebase', 'eCommerce', 'Mobile'],
    imageUrl: getImagePath('/images/ileafu.png'),
    liveUrl: 'https://ileafu.com/'
  },
  {
    id: '4',
    title: 'PhillyMatch',
    description: 'A social networking platform (USA) created using Laravel, enabling users to match based on questionnaire-driven profiles.',
    tags: ['Laravel', 'Social Network', 'PHP', 'Matching Algo'],
    imageUrl: getImagePath('/images/philymatch.png'),
    liveUrl: 'https://phillymatch.org'
  },
  {
    id: '5',
    title: 'MasayaTripPH',
    description: 'A travel and hotel booking platform (Philippines) allowing users to book accommodations across selected destinations with integrated search and reservation workflows.',
    tags: ['Travel Tech', 'Booking System', 'Web App'],
    imageUrl: getImagePath('/images/masayatrip.png'),
    liveUrl: 'https://masayatrip.com'
  },
  {
    id: '6',
    title: 'Remy Cointreau eCommerce',
    description: 'Implemented a branded Shopify eCommerce solution with integrated payment systems, product catalog, and SEO optimization for improved visibility and conversions.',
    tags: ['Shopify', 'eCommerce', 'SEO', 'Payment Integration'],
    imageUrl: getImagePath('/images/remy.png'),
    liveUrl: 'https://www.remy-cointreau.com/'
  },
  {
    id: '7',
    title: 'Railway Load Prediction System',
    description: 'Designed a predictive analytics tool (Melbourne, Australia) that estimates passenger overflow during station disruptions and calculates optimal bus dispatching using real-time data inputs.',
    tags: ['Analytics', 'Prediction', 'Real-time', 'Data Science'],
    imageUrl: getImagePath('/images/Railway.png')
  },
  {
    id: '8',
    title: 'Real-Time Chat System',
    description: 'Developed robust 1-to-1 and group messaging features using Supabase, enabling instant real-time communication across mobile and web platforms.',
    tags: ['Supabase', 'Real-time', 'Chat', 'WebSocket'],
    imageUrl: getImagePath('/images/chatsystem.png')
  },
   {
    id: '9',
    title: 'Data ETL Automation',
    description: 'Built a modular and scalable data ingestion pipeline using PySpark and Python, automating daily analytics and reporting processes for large datasets.',
    tags: ['ETL', 'PySpark', 'Python', 'Big Data'],
    imageUrl: getImagePath('/images/etl.png')
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Darwin Fegarido's personal portfolio website. 
Your goal is to answer visitor questions about Darwin's skills, experience, and projects.

Here is the context about Darwin:
Name: ${PORTFOLIO_OWNER}
Role: ${PORTFOLIO_ROLE}
Bio: ${ABOUT_ME}
Skills: ${SKILLS.map(s => s.name).join(', ')}
Experience: ${EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.period})`).join('; ')}
Projects: ${PROJECTS.map(p => `${p.title}: ${p.description}`).join('; ')}
Contact: ${CONTACT_EMAIL}

Rules:
1. Be professional, friendly, and concise.
2. Only answer questions related to Darwin's professional life, skills, or this portfolio.
3. If asked about AI, emphasize his recent work with RAG, Vector Stores, and LLM integration.
4. Keep responses short (under 3 sentences) unless asked for details.
`;