import { CONTACT_EMAIL, PORTFOLIO_OWNER, PORTFOLIO_ROLE, ABOUT_ME, SKILLS, EXPERIENCES, PROJECTS, GITHUB_URL, LINKEDIN_URL } from '../constants';

interface QAPair {
  keywords: string[];
  answer: string;
}

// Knowledge base with common questions and answers
const knowledgeBase: QAPair[] = [
  {
    keywords: ['hi', 'hello', 'hey', 'greetings', 'hi there', 'hello there', 'hey there'],
    answer: `Hi there! 👋 Nice to meet you! I'm here to help you learn about ${PORTFOLIO_OWNER}'s portfolio. Feel free to ask me about his skills, projects, experience, or anything else you'd like to know!`
  },
  {
    keywords: ['how are you', 'how are you doing', 'what\'s up', 'sup'],
    answer: `I'm doing great, thanks for asking! 😊 I'm here and ready to help you learn about ${PORTFOLIO_OWNER}'s work. What would you like to know?`
  },
  {
    keywords: ['thanks', 'thank you', 'thx', 'appreciate'],
    answer: `You're welcome! 😊 Happy to help! If you have any more questions about ${PORTFOLIO_OWNER}'s portfolio, feel free to ask.`
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'later', 'cya'],
    answer: `Goodbye! 👋 Feel free to come back anytime if you have more questions. You can also reach out directly to ${PORTFOLIO_OWNER} at ${CONTACT_EMAIL}. Have a great day!`
  },
  {
    keywords: ['experience', 'years', 'how long', 'background', 'career'],
    answer: `I have over 7 years of experience in backend and full-stack development. I've worked on scalable APIs, microservices, and real-time systems using Node.js, Python, and cloud services. I also have hands-on experience with ETL pipelines, data engineering, and AI integration.`
  },
  {
    keywords: ['skills', 'technologies', 'tech stack', 'what can you do', 'expertise'],
    answer: `My core skills include: ${SKILLS.slice(0, 10).map(s => s.name).join(', ')}, and more. I specialize in backend development with Node.js and Python, frontend with React and Vue.js, cloud services (AWS, Azure), databases (MongoDB, PostgreSQL, Redis), and AI/LLM integration.`
  },
  {
    keywords: ['ai', 'llm', 'artificial intelligence', 'chatgpt', 'gemini', 'rag', 'vector'],
    answer: `I have extensive experience with AI integration and LLM-powered applications. I've built RAG (Retrieval-Augmented Generation) pipelines using vector databases for knowledge retrieval and intelligent search. I've worked with ChatGPT, Groq, and other AI services to create automated workflows and intelligent systems.`
  },
  {
    keywords: ['projects', 'portfolio', 'what have you built', 'applications'],
    answer: `I've built several projects including: ${PROJECTS.slice(0, 5).map(p => p.title).join(', ')}, and more. These range from social networking platforms and e-commerce apps to AI automation systems and data analytics tools.`
  },
  {
    keywords: ['shareikna', 'social network'],
    answer: `Shareikna is a social networking platform for Saudi Arabia built with Node.js and React Native. It includes features for activities, meetings, and social connections. The backend is deployed on AWS ECS Fargate and the frontend on Amazon S3 + CloudFront. You can check it out at https://shareikna.com/`
  },
  {
    keywords: ['ileafu', 'plant', 'ecommerce'],
    answer: `iLeafU is a mobile e-commerce app for plant sales in the USA. It's built with React Native and Firebase Functions, supporting seamless payments, order tracking, and push notifications. You can visit https://ileafu.com/ to learn more.`
  },
  {
    keywords: ['phillymatch', 'matching', 'laravel'],
    answer: `PhillyMatch is a social networking platform created using Laravel. It enables users to match based on questionnaire-driven profiles. You can check it out at https://phillymatch.org`
  },
  {
    keywords: ['masaya', 'travel', 'booking', 'hotel'],
    answer: `MasayaTripPH is a travel and hotel booking platform for the Philippines. It allows users to book accommodations across selected destinations with integrated search and reservation workflows. Visit https://masayatrip.com to see it in action.`
  },
  {
    keywords: ['amanah', 'muslim', 'community', 'mosque', 'ummah', 'masjid'],
    answer: `Amanah is a comprehensive digital ecosystem for Muslim communities that I built to connect mosques, Muslim-owned businesses, and community members. It features a mosque finder, Muslim business directory, event management, donation system, and direct communication tools. The platform exists to revive trust-based commerce and strengthen Muslim communities. You can visit https://www.amanahbiz.com/ to learn more. Amanah means "trust" and represents our mission to build a safe, authentic space where Muslims can connect and support each other.`
  },
  {
    keywords: ['automation', 'make.com', 'workflow'],
    answer: `I've built advertising automation workflows using Make.com and AI integration (ChatGPT, Groq) to streamline content generation, campaign execution, and performance tracking. This system automates the entire advertising workflow from content creation to performance analysis.`
  },
  {
    keywords: ['remy', 'cointreau', 'shopify', 'ecommerce'],
    answer: `I implemented a branded Shopify eCommerce solution for Remy Cointreau with integrated payment systems, product catalog, and SEO optimization. You can see it at https://www.remy-cointreau.com/`
  },
  {
    keywords: ['chat', 'messaging', 'real-time', 'supabase'],
    answer: `I've developed robust 1-to-1 and group messaging features using Supabase, enabling instant real-time communication across mobile and web platforms.`
  },
  {
    keywords: ['etl', 'data', 'pyspark', 'pipeline', 'analytics'],
    answer: `I've built modular and scalable data ingestion pipelines using PySpark and Python, automating daily analytics and reporting processes for large datasets. This includes ETL workflows that process real estate data and other large-scale data operations.`
  },
  {
    keywords: ['contact', 'email', 'reach', 'get in touch', 'hire'],
    answer: `You can reach me at ${CONTACT_EMAIL}. I'm always open to discussing new opportunities, collaborations, or answering any questions you might have!`
  },
  {
    keywords: ['github', 'code', 'repository'],
    answer: `You can check out my code and projects on GitHub at ${GITHUB_URL}. Feel free to explore my repositories and contributions!`
  },
  {
    keywords: ['linkedin', 'professional', 'network'],
    answer: `You can connect with me on LinkedIn at ${LINKEDIN_URL}. I'd love to connect and discuss opportunities!`
  },
  {
    keywords: ['backend', 'api', 'node.js', 'python', 'microservices'],
    answer: `I specialize in backend development, building scalable APIs and microservices using Node.js and Python. I've worked with Express, Django, and various cloud services to create robust backend systems that handle high traffic and complex business logic.`
  },
  {
    keywords: ['cloud', 'aws', 'azure', 'deployment', 'devops'],
    answer: `I have extensive experience with cloud platforms including AWS (ECS Fargate, S3, CloudFront) and Azure. I've set up CI/CD pipelines, deployed applications using Docker, and managed infrastructure for scalable applications.`
  },
  {
    keywords: ['who are you', 'name', 'introduce'],
    answer: `Hi! I'm ${PORTFOLIO_OWNER}, a ${PORTFOLIO_ROLE}. ${ABOUT_ME}`
  }
];

// Normalize text for matching
const normalizeText = (text: string): string => {
  return text.toLowerCase().trim();
};

// Calculate similarity score between question and keywords
const calculateScore = (question: string, keywords: string[]): number => {
  const normalizedQuestion = normalizeText(question);
  let score = 0;
  
  keywords.forEach(keyword => {
    const normalizedKeyword = normalizeText(keyword);
    if (normalizedQuestion.includes(normalizedKeyword)) {
      score += 1;
    }
    // Also check for partial matches
    if (normalizedKeyword.length > 3 && normalizedQuestion.includes(normalizedKeyword.substring(0, 3))) {
      score += 0.5;
    }
  });
  
  return score;
};

// Find the best matching answer
export const getChatResponse = (question: string): string => {
  const normalizedQuestion = normalizeText(question);
  
  // Check for exact matches first
  const exactMatch = knowledgeBase.find(qa => 
    qa.keywords.some(keyword => normalizedQuestion === normalizeText(keyword))
  );
  
  if (exactMatch) {
    return exactMatch.answer;
  }
  
  // Calculate scores for all Q&A pairs
  const scores = knowledgeBase.map(qa => ({
    qa,
    score: calculateScore(question, qa.keywords)
  }));
  
  // Find the best match (highest score)
  const bestMatch = scores.reduce((best, current) => 
    current.score > best.score ? current : best
  , { qa: knowledgeBase[0], score: 0 });
  
  // If we have a reasonable match (score > 0), return it
  if (bestMatch.score > 0) {
    return bestMatch.qa.answer;
  }
  
  // No match found - return default message
  return `I'm not sure how to answer that question. Please reach out to me directly at ${CONTACT_EMAIL} and I'll be happy to help!`;
};

// Simulate streaming response (for smooth UI experience)
export async function* streamResponse(response: string): AsyncGenerator<string> {
  const words = response.split(' ');
  for (let i = 0; i < words.length; i++) {
    yield (i === 0 ? words[i] : ' ' + words[i]);
    // Small delay to simulate streaming
    await new Promise(resolve => setTimeout(resolve, 30));
  }
}

// Get suggested questions based on context
export const getSuggestedQuestions = (): string[] => {
  const allSuggestions = [
    "What are your skills?",
    "Tell me about your projects",
    "What's your experience with AI?",
    "How can I contact you?",
    "What technologies do you use?",
    "Tell me about Amanah",
    "Tell me about Shareikna",
    "What is iLeafU?",
    "Tell me about your backend experience",
    "Do you work with cloud services?",
    "What's your GitHub?",
    "Tell me about your chat system",
    "What projects have you built?"
  ];
  
  // Return 3 random suggestions
  const shuffled = [...allSuggestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};

