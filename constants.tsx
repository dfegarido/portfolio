import React from 'react';
import { Project, Experience, Skill } from './types';
import { Brain, Cloud, Database } from 'lucide-react';
import { getImagePath } from './helpers/imagePath';

export const PORTFOLIO_OWNER = "Darwin Fegarido";
export const PORTFOLIO_ROLE = "Full Stack Developer | Builds Scalable AI-Enabled Web Apps";

const START_YEAR = 2016;
const currentYear = new Date().getFullYear();
const yearsOfExperience = currentYear - START_YEAR;

export const PORTFOLIO_TAGLINE = "Helping businesses automate workflows, scale backend systems, and integrate intelligent solutions.";
export const CONTACT_EMAIL = "darwinfegarido@gmail.com"; 
export const GITHUB_URL = "https://github.com/dfegarido";
export const LINKEDIN_URL = "https://www.linkedin.com/in/darwinfegarido/";

export const ABOUT_ME = `
  I'm a Full Stack Developer with over ${yearsOfExperience} years of experience specializing in robust backend architecture and, more recently, AI integration. 
  
  Throughout my career, I've tackled complex problems—from building serverless e-commerce platforms to designing high-throughput ETL pipelines with PySpark. I thrive on translating business bottlenecks into scalable, automated solutions using Node.js, Python, and cloud infrastructure.
  
  Today, I'm passionate about the intersection of traditional engineering and AI. By leveraging LLMs and vector databases (RAG), I build intelligent applications that don't just process data, but actually understand it to drive real business impact.
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
    role: 'Senior Full Stack / Backend Engineer (Consultant)',
    company: 'Self-Employed',
    period: 'Jul 2025 - Present',
    summary: 'Leading architecture, automation strategy, and cloud-native system design for startups across AI, e-commerce, and SaaS domains.',
    description: [
      'Leading architecture, automation strategy, and cloud-native system design for startups and digital platforms across AI, e-commerce, and SaaS domains.',
      'Architect and implement AI-driven advertising automation systems integrating Make.com, OpenAI (ChatGPT), and Groq APIs, eliminating manual workflows and enabling scalable campaign orchestration.',
      'Design distributed backend architectures using Node.js (Express) and containerized microservices deployed on AWS (ECR, ECS Fargate) with emphasis on reliability, scalability, and performance.',
      'Lead development of cross-platform mobile and social networking applications using React Native, aligning product requirements with scalable backend infrastructure.',
      'Engineer serverless commerce solutions with Firebase Functions, event-driven architecture, and real-time data pipelines to support high-availability retail operations.',
      'Design and implement intelligent matching and recommendation systems (e.g., PhillyMatch) using scoring algorithms, structured questionnaires, and behavioral profiling logic.',
      'Architect and integrate end-to-end booking and payment workflows for travel platforms (e.g., MasayaTripPH), ensuring secure transactions and optimized user conversion flows.',
      'Establish CI/CD pipelines and automated deployment workflows using GitHub Actions, Amazon S3, and CloudFront, improving release reliability and system uptime.',
      'Advise clients on infrastructure strategy, performance optimization, and scalable SaaS architecture decisions.'
    ]
  },
  {
    id: '2',
    role: 'Sr Full Stack Engineer',
    company: 'VISEO ASIA',
    period: 'Feb 2021 - Jul 2025',
    summary: 'Built scalable backend systems, ETL pipelines, and cloud-deployed full-stack applications for enterprise analytics clients.',
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
    summary: 'Developed secure backend services and RESTful APIs for core insurance workflows, reducing API response times by 30%.',
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
    summary: 'Led backend development of a gaming analytics CMS with data normalization pipelines, improving processing performance by 25%.',
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
    summary: 'Built backend services and ETL pipelines for data integration, while hardening system security and reducing vulnerabilities by 50%.',
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
    summary: 'Led backend development of a Web3 SaaS platform with Ethereum smart contracts, ERC20 token integration, and REST APIs.',
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
    id: '11',
    title: 'Leadmailer - Smart Bulk Mailing SaaS',
    description: 'A centralized SaaS platform for automated lead management, behavioral segmentation, and bulk email delivery.',
    role: 'Lead Architect & Full Stack Developer',
    problem: 'Businesses struggled with manual lead routing, low email deliverability, and poor engagement tracking across multiple domains.',
    impact: 'Automated 10,000+ daily emails with smart segmentation and SMTP rotation, resulting in a 35% increase in open rates.',
    tags: ['SaaS', 'Automation', 'SMTP Rotation', 'React', 'Node.js', 'PostgreSQL'],
    imageUrl: getImagePath('/images/Leadmailer.png'),
    liveUrl: 'https://email-lead-system-ebon.vercel.app/'
  },
  {
    id: '1',
    title: 'Amanah - Muslim Community Platform',
    description: 'A comprehensive digital ecosystem connecting mosques, businesses, and community members.',
    role: 'Full Stack Engineer',
    problem: 'Fragmented local tools prevented effective community communication and digital commerce for local businesses.',
    impact: 'Successfully onboarded 50+ local businesses and streamlined digital donation flows for community centers.',
    tags: ['Mobile App', 'React Native', 'Node.js', 'Social Network'],
    imageUrl: getImagePath('/images/amanah-website.png'),
    liveUrl: 'https://www.amanahbiz.com/'
  },
  {
    id: '3',
    title: 'Shareikna App & Admin Panel',
    description: 'A scalable social networking platform tailored for users in Saudi Arabia.',
    role: 'Backend & Cloud Engineer',
    problem: 'Previous iterations suffered from high latency and unreliability during peak usage hours.',
    impact: 'Deployed a highly available architecture on AWS ECS Fargate, scaling seamlessly to support 5,000+ concurrent users.',
    tags: ['Node.js', 'React Native', 'AWS ECS', 'ReactJS', 'CI/CD'],
    imageUrl: getImagePath('/images/shareikna.png'),
    liveUrl: 'https://shareikna.com/'
  },
  {
    id: '10',
    title: 'Data ETL Automation Pipeline',
    description: 'Modular data ingestion pipeline automating daily analytics and reporting processes for large datasets.',
    role: 'Data Engineer',
    problem: 'Manual daily reporting processes were taking several hours and were highly prone to human error.',
    impact: 'Reduced data processing time by 80% and achieved 99.9% data accuracy using PySpark automation.',
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