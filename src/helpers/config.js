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
            'title':'Frontend Development',
            'description': "Build modern, responsive web applications using React and related technologies. Create engaging user interfaces with clean, maintainable code and optimal performance.",
        },
        {
            'logo':'developer',
            'title':'Backend Development',
            'description': "Develop robust backend systems using Node.js, Express, and modern databases. Design and implement scalable APIs and efficient data management solutions.",
        },
        {
            'logo':'architecture',
            'title':'Web Architecture',
            'description': "Design and implement scalable web architectures. Focus on clean code, maintainability, and modern development practices for optimal application performance.",
        },
        {
            'logo':'cloud',
            'title':'Database Design',
            'description': "Create efficient database schemas and implement robust data management solutions using PostgreSQL, MongoDB, and other modern databases.",
        },
        {
            'logo':'monetization',
            'title':'Performance Optimization',
            'description': "Optimize web applications for speed and efficiency. Implement best practices for loading times, resource management, and overall application performance.",
        },
        {
            'logo':'mobile',
            'title':'Responsive Web Design',
            'description': "Create responsive, mobile-first web applications that provide excellent user experience across all devices and screen sizes.",
        },
    ],
    portfolio: [
        {
            "brand": "website",
            'name': 'RC Gem Web Portal',
            'description': 'Led the development of a comprehensive web portal for Rémy Cointreau using React and Node.js. Implemented responsive design and complex data visualization features.',
            'url': require('../assets/chillflixweb.png'), // Changed from SVG to webp image
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
    ],

}