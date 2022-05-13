module.exports = {
    logoName: "Fegarido",
    landingPage: {
        title: "Hello",
        description: [
            "Darwin Fegarido",
            "Javascript Developer",
            "Python Developer",
            "Website Developer",
            "Frontend Developer",
            "Backend Developer",
            "Solution Architect",
            "UI / UX Designer", 
            "Shopify Developer",
        ]
    },
    about: {
        profileImage:require('./assets/profile-image.png'),
        title: "About Me",
        subtitle: "Fullstack Developer",
        description: "I have been working as a Fullstack Developer since 2016, the period during which I have worked in different environments, from Start Up to International Companies. I am a self-motivated and self-taught professional who likes to solve problems. My repertoire includes programming languages and tools such as ReactJS, Angular, Vue, NodeJS, Python, MySQL, PostgreSQL, Nginx, MongoDB, Redis, Elasticsearch and more."
    },
    services: [
        {
            'logo':'computer',
            'title':'Web Design',
            'description':"Create and code web pages, using both technical and non-technical skills to produce websites that fit your customers' requirements",
        },
        {
            'logo':'architecture',
            'title':'Architecture',
            'description':"Practice to provide ground for software development projects by tailoring IT solutions to specific business needs and defining their functional requirements and stages of implementation",
        },
        {
            'logo':'developer',
            'title':'Development',
            'description':"Building and maintenance of websites that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience",
        },
        {
            'logo':'monetization',
            'title':'Blockchain',
            'description':"Design secure blockchain technologies, develop application features and interfaces, and maintain client and server-side applications.",
        },
        {
            'logo':'mobile',
            'title':'Fully Responsive',
            'description':"Responsive design is when a website or email is displayed on a mobile device and it automatically adjusts it's sizing, layout, and proportions to display in a legible manner on the device.",
        },
        {
            'logo':'cloud',
            'title':'Search Engine Optimization',
            'description':"Search engines show this description in search results for your homepage if they don't find content more relevant to a visitor's search terms.",
        },
    ],

    portfolio: [
        {
            "brand":"mobile",
            'name':'Chillflix',
            'description':'Watch your favorite movie. download or watch online.',
            'url': require('./assets/chillflix.png'),
            'link':'https://play.google.com/'
        },
        {
            "brand":"mobile",
            'name':'Budget planner',
            'description':'Track all your finances and plan your future goal.',
            'url': require('./assets/moneytracker.png'),
            'link':'https://play.google.com/'
        },
        {
            "brand":"mobile",
            'name':'Skate Park',
            'description':'Search nearby skate park and talk to skate community',
            'url': require('./assets/skatepark.png'),
            'link':'https://play.google.com/'
        },
        {
            "brand":"desktop",
            'name':'Chillflix Web',
            'description':'Watch movies using your web browser',
            'url': require('./assets/chillflixweb.png'),
            'link':'https://batibot-web.herokuapp.com/'
        },
        {
            "brand":"desktop",
            'name':'Trading Platform',
            'description':'Easy to trade and fast transaction on crypto world. ',
            'url': require('./assets/trading.png'),
            'link':'https://ftxwebsite.herokuapp.com/'
        },
        {
            "brand":"desktop",
            'name':'Duralex',
            'description':'International Cookware, which owns the Pyrex trademark, has acquired French tableware manufacturer Duralex.',
            'url': require('./assets/duralex.png'),
            'link':'https://www.duralex.com/'
        },
    ],
    contact: {
        address: 'Philippines',
        email: 'darwinfegarido@gmail.com',
        phone: '+63-956-570-5207'
    }

}