module.exports = {
    logoName: "Fegarido",
    landingPage: {
        greetings: "Hello, I'm",
        fullname: "Darwin",
        subText: "Full Stack Engineer",
        description: [
            "Frontend Developer",
            "React.js Expert",
            "UI/UX Designer",
            "Node.js Developer",
            "Web Architect",
            "JavaScript Ninja",
            "Problem Solver",
            "Code Craftsman"
        ]
    },
    about: {
        profileImage: require('../assets/profile-image.png'),
        title: "About Me",
        subtitle: "Full Stack Engineer & AI Specialist",
        description: "As a passionate Full Stack Engineer with a specialization in AI, I bridge the gap between cutting-edge artificial intelligence and practical web solutions. With 9+ years of hands-on experience, I've mastered the art of integrating AI capabilities into modern web applications, creating intelligent systems that transform user experiences. My expertise spans the full technology stack - from React and Node.js to TensorFlow and PyTorch, complemented by deep knowledge of cloud platforms and MLOps practices. I'm driven by the challenge of building next-generation applications that leverage AI to solve real-world problems, always staying ahead of technological trends and pushing the boundaries of what's possible in web development."
    },
    services: [
        {
            'logo':'computer',
            'title':'Modern Frontend Development',
            'description': "Build cutting-edge web applications using React, Next.js and TypeScript. Create engaging, accessible user interfaces with component-driven architecture and optimal performance.",
        },
        {
            'logo':'developer',
            'title':'API & Backend Systems',
            'description': "Develop robust backend systems using Node.js, Express, and GraphQL. Design and implement scalable microservices and efficient data pipelines for modern applications.",
        },
        {
            'logo':'architecture',
            'title':'AI Integration Services',
            'description': "Seamlessly integrate AI capabilities into web applications. Implement machine learning models, natural language processing, and intelligent features that transform user experiences.",
        },
        {
            'logo':'cloud',
            'title':'Cloud Architecture',
            'description': "Design and deploy cloud-native applications using AWS, Azure, or GCP. Implement serverless architectures, containerization, and CI/CD pipelines for scalable solutions.",
        },
        {
            'logo':'monetization',
            'title':'Performance & Analytics',
            'description': "Optimize applications for speed and user engagement. Implement sophisticated analytics systems to track KPIs, user behavior, and business metrics for data-driven decisions.",
        },
        {
            'logo':'mobile',
            'title':'Full Stack Solutions',
            'description': "Deliver end-to-end development solutions from concept to deployment. Create cohesive experiences across frontend, backend, and infrastructure with modern tech stacks.",
        },
    ],
    portfolio: [
        {
            "brand": "website",
            'name': 'RC Gem Web Portal',
            'description': 'Led the development of a comprehensive web portal for Rémy Cointreau using React and Node.js. Implemented responsive design and complex data visualization features.',
            'url': require('../assets/chillflixweb.webp'), // Changed from PNG to webp image
            'link': 'https://github.com/dfegarido'
        },
        {
            "brand": "website",
            'name': 'Analytics Dashboard',
            'description': 'Created a modern analytics dashboard using React, Redux, and D3.js. Features real-time data updates, interactive charts, and comprehensive reporting tools.',
            'url': require('../assets/moneytracker.webp'), // Changed from SVG to webp image
            'link': 'https://github.com/dfegarido'
        },
        {
            "brand": "website",
            'name': 'Chatbot AI Platform',
            'description': 'Developed a chatbot AI platform using React, Node.js, and TensorFlow. Features natural language processing, real-time user interactions, and analytics dashboards.',
            'url': require('../assets/chatbot-ai.webp'), // Changed from PNG to webp image
            'link': 'https://dfegarido.github.io/chatbot/'
        },
        {
            "brand": "mobile",
            'name': 'RC Gem Mobile App',
            'description': 'Developed the RC Gem mobile application with React Native. Implemented key features including inventory management, sales tracking, and user authentication.',
            'url': require('../assets/gemapp.webp'),
            'link': 'https://play.google.com/store/apps/details?id=com.remycointreau.gem'
        },
        {
            "brand": "website",
            'name': 'Trading Platform UI',
            'description': 'Built a responsive trading platform interface using React and WebSocket for real-time data. Implemented complex trading views and interactive charts.',
            'url': require('../assets/trading.webp'),
            'link': 'https://github.com/dfegarido'
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
            logo: 'facebook',
            name: 'Facebook',
            link: 'https://www.facebook.com/dfegarido'
        },
        {
            logo: 'instagram',
            name: 'Instagram',
            link: 'https://www.instagram.com/darwin.fegarido/'
        },
        {
            logo: 'linkedin',
            name: 'LinkedIn',
            link: 'https://ph.linkedin.com/in/darwinfegarido'
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