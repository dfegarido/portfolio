module.exports = {
    logoName: "Fegarido",
    landingPage: {
        greetings: "Hello, I'm",
        fullname: "Darwin",
        subText: "Full Stack Engineer",
        description: [
            "Backend Developer",
            "Node.js Expert", 
            "Python Developer",
            "AI Integration Specialist",
            "Microservices Architect",
            "LLM Integration Expert",
            "Cloud Solutions Engineer",
            "ETL Pipeline Developer"
        ]
    },
    about: {
        profileImage: require('../assets/profile-image.webp'),
        title: "About Me",
        subtitle: "Backend Engineer | Full Stack Developer | AI Integration Specialist",
        description: "Backend Developer with over 7 years of experience in backend and full-stack development, now extending expertise into AI integration and LLM-powered applications. Skilled in building scalable APIs, microservices, and real-time systems with Node.js, Python, and cloud services, alongside hands-on experience with ETL pipelines and data engineering. Proven track record in developing AI-driven solutions, including RAG (Retrieval-Augmented Generation) pipelines that leverage vector databases for knowledge retrieval and intelligent search. Adept at integrating LLMs (ChatGPT, Ollama, OpenAI APIs) into applications to enhance automation, chat systems, and data workflows. Successfully mentored developers and optimized CI/CD pipelines across Azure, AWS, and GitHub Actions, improving team efficiency and deployment reliability."
    },
    services: [
        {
            'logo':'developer',
            'title':'Backend & API Development',
            'description': "Build scalable backend systems using Node.js, Python, and Express. Design robust REST APIs, microservices architecture, and real-time systems with WebSocket integration for enterprise applications.",
        },
        {
            'logo':'architecture',
            'title':'AI & LLM Integration',
            'description': "Implement RAG (Retrieval-Augmented Generation) pipelines, integrate ChatGPT and OpenAI APIs, and build AI-powered automation workflows. Expertise in vector databases, prompt engineering, and intelligent search systems.",
        },
        {
            'logo':'cloud',
            'title':'Cloud & DevOps Solutions',
            'description': "Deploy scalable applications on AWS (ECS Fargate, S3, CloudFront) and Azure. Implement CI/CD pipelines with GitHub Actions, Docker containerization, and infrastructure as code for reliable deployments.",
        },
        {
            'logo':'computer',
            'title':'Data Engineering & ETL',
            'description': "Design and implement ETL pipelines using PySpark and Python. Build data normalization workflows, real-time data processing systems, and analytics dashboards for large-scale data operations.",
        },
        {
            'logo':'mobile',
            'title':'Mobile & Full Stack Development',
            'description': "Develop cross-platform mobile applications using React Native and Firebase. Create end-to-end solutions combining backend services, mobile apps, and web interfaces with seamless user experiences.",
        },
        {
            'logo':'monetization',
            'title':'Real-Time & Chat Systems',
            'description': "Build real-time communication platforms using Socket.IO and Firebase. Implement 1-to-1 and group messaging features, push notifications, and live data synchronization for interactive applications.",
        },
    ],
    portfolio: [
        {
            "brand": "mobile",
            'name': 'Shareikna App - Saudi Arabia',
            'description': 'Social networking platform built with Node.js (Express), React Native, deployed via AWS ECS Fargate (ECR + ALB). Features real-time messaging and social interactions.',
            'url': require('../assets/gemapp.webp'),
            'link': 'https://shareikna.com'
        },
        {
            "brand": "website",
            'name': 'Shareikna Admin Panel',
            'description': 'ReactJS admin panel deployed to Amazon S3 + CloudFront with automated CI/CD via GitHub Actions for secure, scalable delivery.',
            'url': require('../assets/moneytracker.webp'),
            'link': 'https://admin.shareikna.com'
        },
        {
            "brand": "mobile",
            'name': 'ILeafU - Plant E-commerce (USA)',
            'description': 'Mobile e-commerce app for plant sales powered by Firebase Functions + React Native. Features seamless payments and push notifications.',
            'url': require('../assets/gemapp.webp'),
            'link': 'https://github.com/dfegarido'
        },
        {
            "brand": "website",
            'name': 'PhillyMatch - Social Networking',
            'description': 'Social networking platform in Laravel with questionnaire-driven profile matching and advanced user recommendation algorithms.',
            'url': require('../assets/chillflixweb.webp'),
            'link': 'https://phillymatch.org'
        },
        {
            "brand": "website",
            'name': 'MasayaTripPH - Travel Platform',
            'description': 'Travel booking platform enabling hotel reservations with integrated search workflows and payment processing.',
            'url': require('../assets/trading.webp'),
            'link': 'https://masayatrip.com'
        },
        {
            "brand": "ecommerce",
            'name': 'Louis XIII E-commerce',
            'description': 'Developed the Louis XIII e-commerce platform using modern web technologies. Implemented responsive design, shopping cart functionality, and secure checkout process.',
            'url': require('../assets/louisxiii.webp'),
            'link': 'https://louisxiii-cognac.com/'
        },
        {
            "brand": "website",
            'name': 'RESTful API Service',
            'description': 'Designed and implemented a comprehensive REST API service using Node.js and Express. Features include authentication, rate limiting, and extensive documentation.',
            'url': require('../assets/pyrex.webp'), // Changed from SVG to webp image
            'link': 'https://github.com/dfegarido'
        }
    ],
    contact: [
        {
            logo: 'linkedin',
            name: 'LinkedIn',
            link: 'https://ph.linkedin.com/in/darwinfegarido'
        },
        {
            logo: 'github',
            name: 'GitHub',
            link: 'https://github.com/dfegarido'
        },
        {
            logo: 'email',
            name: 'Email',
            link: 'mailto:darwinfegarido@gmail.com'
        },
        // Additional social platforms - uncomment and customize as needed
        /*
        {
            logo: 'github',
            name: 'GitHub',
            link: 'https://github.com/yourusername'
        },
        {
            logo: 'twitter',
            name: 'Twitter',
            link: 'https://twitter.com/yourusername'
        },
        {
            logo: 'dribbble',
            name: 'Dribbble',
            link: 'https://dribbble.com/yourusername'
        },
        {
            logo: 'behance',
            name: 'Behance',
            link: 'https://www.behance.net/yourusername'
        },
        {
            logo: 'medium',
            name: 'Medium',
            link: 'https://medium.com/@yourusername'
        }
        */
    ],

}