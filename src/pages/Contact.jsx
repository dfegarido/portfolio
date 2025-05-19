import { useDispatch } from "react-redux";
import Title from '../components/atom/Title';
import CircleLogo from '../components/atom/CircleLogo';
import CardTitle from "../components/atom/CardTitle";
import { useEffect, useRef, useState } from "react";
import { setReference } from "../store/metadata";
import config from "../helpers/config";
import { CONTACT_ME, FONT_FAMILY, SLATE } from "../helpers/constants";
import { useTheme } from "../contexts/ThemeContext";
import SocialIcon from "../components/atom/SocialIcon";
import ChatMessage from "../components/atom/ChatMessage";
import ChatInput from "../components/atom/ChatInput";
import TypingIndicator, { typingIndicatorCSS } from "../components/atom/TypingIndicator";
import { getGroqResponse } from "../helpers/groqHelper";
import "../assets/socialIcons.css";

// CSS animations for Contact page with similar styling to Portfolio and About Me
const contactAnimations = `
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
}

@keyframes pulse {
    0% { opacity: 0.7; transform: scale(1); }
    50% { opacity: 0.9; transform: scale(1.05); }
    100% { opacity: 0.7; transform: scale(1); }
}

@keyframes shimmer {
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInRight {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
}

@keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes fadeInBackground {
    0% { opacity: 0; }
    100% { opacity: 0.6; }
}

@keyframes rotateSlow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes formFieldFocus {
    0% { box-shadow: 0 0 0 0 rgba(var(--color-primary-rgb), 0); }
    50% { box-shadow: 0 0 0 4px rgba(var(--color-primary-rgb), 0.2); }
    100% { box-shadow: 0 0 0 0 rgba(var(--color-primary-rgb), 0); }
}

@keyframes socialIconPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

@keyframes contactFormAppear {
    0% { transform: translateY(30px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
}

@keyframes messageSuccess {
    0% { transform: translateX(-10px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
}

@keyframes socialIconEntrance {
    0% { opacity: 0; transform: translateY(20px) scale(0.8); }
    60% { transform: translateY(-10px) scale(1.1); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
}

.typing-dot {
  width: 8px;
  height: 8px;
  background-color: var(--color-primary);
  border-radius: 50%;
  opacity: 0.7;
  display: inline-block;
  animation: typingAnimation 1.4s infinite ease-in-out;
}

@keyframes typingAnimation {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
    opacity: 0.5;
  }
}

/* Custom scrollbar for chat container */
.scrollbar-thin::-webkit-scrollbar {
  width: 4px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: rgba(var(--color-primary-rgb), 0.3);
  border-radius: 20px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background-color: rgba(var(--color-primary-rgb), 0.5);
}

/* Chat message animations */
@keyframes messagePop {
  0% { transform: scale(0.9); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.chat-message-enter {
  animation: messagePop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

/* Chat container animations */
.chat-container {
  animation: contactFormAppear 0.8s cubic-bezier(0.25, 0.1, 0.25, 1.0) forwards;
  position: relative;
}

.chat-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right, rgba(var(--color-primary-rgb), 0.1), transparent 70%),
              radial-gradient(circle at bottom left, rgba(var(--color-accent-rgb), 0.1), transparent 70%);
  z-index: 0;
  opacity: 0.6;
}

.form-input-focused {
    animation: formFieldFocus 1s ease-out;
}

.contact-social-item {
    animation: socialIconEntrance 0.8s cubic-bezier(0.25, 0.1, 0.25, 1.4) forwards;
    transition: transform 0.3s ease-in-out;
}

/* Apply transform directly instead of using animation on hover */
.contact-social-item:hover {
    transform: translateY(-5px);
}

.user-message {
    animation: slideInRight 0.3s ease-out forwards;
}

.bot-message {
    animation: slideInLeft 0.3s ease-out forwards;
}

.accent-shape {
    position: absolute;
    border-radius: 50%;
    opacity: 0.6;
    filter: blur(50px);
    z-index: 0;
}

.accent-shape-contact-1 {
    width: 250px;
    height: 250px;
    top: -50px;
    right: 10%;
    background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%);
    animation: pulse 8s infinite;
}

.accent-shape-contact-2 {
    width: 300px;
    height: 300px;
    bottom: 100px;
    left: 5%;
    background: radial-gradient(circle, var(--color-accent) 0%, transparent 70%);
    animation: pulse 10s infinite reverse;
}

.particles-contact .particle {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--color-primary);
    opacity: 0.6;
    animation: float 10s infinite ease-in-out;
}

.particles-contact .particle-1 { top: 15%; left: 10%; animation-delay: 0s; }
.particles-contact .particle-2 { top: 25%; right: 15%; animation-delay: 1s; }
.particles-contact .particle-3 { bottom: 30%; left: 20%; animation-delay: 2s; }
.particles-contact .particle-4 { bottom: 10%; right: 30%; animation-delay: 3s; }
.particles-contact .particle-5 { top: 45%; left: 5%; animation-delay: 4s; }
.particles-contact .particle-6 { top: 50%; right: 8%; animation-delay: 5s; }
.particles-contact .particle-7 { bottom: 40%; left: 25%; animation-delay: 6s; }
.particles-contact .particle-8 { bottom: 60%; right: 15%; animation-delay: 7s; }
`;

// Helper function to format time
const formatTime = (date) => {
    return new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }).format(date);
};

const Contact = () => {
    const contactRef = useRef(null)
    const chatContainerRef = useRef(null)
    const dispatch = useDispatch()
    const { contact:contactUs } = config
    const { theme, themeKey } = useTheme()
    const [hoveredSocial, setHoveredSocial] = useState(null)
    const [isChatVisible, setIsChatVisible] = useState(true)
    const [isFormVisible, setIsFormVisible] = useState(false)
    const [messages, setMessages] = useState([
        { 
            id: 1, 
            content: "Hi there! I'm Darwin, a Full Stack Engineer. How can I help you today?", 
            isUser: false, 
            timestamp: formatTime(new Date())
        },
        {
            id: 2,
            content: "You can ask me about my projects, skills, or experience. Or simply say hello! 👋",
            isUser: false,
            timestamp: formatTime(new Date())
        }
    ])
    const [isTyping, setIsTyping] = useState(false)
    const [waitingForResponse, setWaitingForResponse] = useState(false)

    useEffect(() => {
        if (contactRef.current) {
            // Use an ID-based approach instead of passing the ref directly
            contactRef.current.id = 'contact-section';
            dispatch(setReference({name: 'contact', value: 'contact-section' }))
        }
        
        // Add staggered animation effect for social icons
        const socialItems = document.querySelectorAll('.contact-social-item');
        socialItems.forEach((item, index) => {
            item.style.animationDelay = `${0.3 + (index * 0.15)}s`;
            item.style.opacity = '0'; // Start with opacity 0
        });
    }, [dispatch])
    
    // Placeholder function for future Groq API integration
    // This will be implemented later
    const getGroqResponse = async (message) => {
        // This is just a placeholder for now
        // The actual implementation will call the Groq API
        
        // Example usage (commented out until implementation):
        /*
        try {
            const response = await fetch('https://api.groq.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${GROQ_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    messages: [{ role: "user", content: message }],
                    model: "llama3-70b-8192" // or another model
                })
            });
            
            const data = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
            console.error('Error calling Groq API:', error);
            return "I'm sorry, I couldn't process that request. Please try again later.";
        }
        */
        
        // For now, return a simulated response
        return "This is a placeholder response. Groq API integration coming soon!";
    };
    
    // Function to handle sending messages
    const handleSendMessage = (message) => {
        const newMessage = {
            id: messages.length + 1,
            content: message,
            isUser: true,
            timestamp: formatTime(new Date())
        };
        
        setMessages(prevMessages => [...prevMessages, newMessage]);
        setWaitingForResponse(true);
        
        // Simulate typing indicator
        setTimeout(() => {
            setIsTyping(true);
            
            // Simulate response (will be replaced with actual Groq API call)
            setTimeout(async () => {
                try {
                    // Get response from helper (will later use Groq API)
                    const response = await getGroqResponse(message);
                    
                    // Create response message
                    const botMessage = {
                        id: messages.length + 2,
                        content: response,
                        isUser: false,
                        timestamp: formatTime(new Date())
                    };
                    
                    setIsTyping(false);
                    setMessages(prevMessages => [...prevMessages, botMessage]);
                    setWaitingForResponse(false);
                } catch (error) {
                    console.error('Error getting response:', error);
                    
                    // Handle error with graceful message
                    const errorMessage = {
                        id: messages.length + 2,
                        content: "I'm sorry, I couldn't process that request. Please try again later.",
                        isUser: false,
                        timestamp: formatTime(new Date())
                    };
                    
                    setIsTyping(false);
                    setMessages(prevMessages => [...prevMessages, errorMessage]);
                    setWaitingForResponse(false);
                }
                
                // Scroll to bottom when new messages arrive
                if (chatContainerRef.current) {
                    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
                }
            }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5 seconds for typing
        }, 500); // Delay before typing indicator appears
    };
    
    // Scroll to bottom when new messages arrive
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    // Inject animations into the document
    useEffect(() => {
        const styleEl = document.createElement('style');
        styleEl.type = 'text/css';
        styleEl.id = 'contact-animations';
        styleEl.appendChild(document.createTextNode(contactAnimations));
        
        if (!document.getElementById('contact-animations')) {
            document.head.appendChild(styleEl);
        }
        
        // Show form after a slight delay for better visual effect
        const timer = setTimeout(() => {
            setIsFormVisible(true);
        }, 300);
        
        return () => {
            clearTimeout(timer);
            const existingStyle = document.getElementById('contact-animations');
            if (existingStyle) {
                document.head.removeChild(existingStyle);
            }
        };
    }, [])

    // Generate random positions for stars
    const generateStars = (count) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push({
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: 0.3 + Math.random() * 0.5,
                size: 1 + Math.random() * 2
            });
        }
        return stars;
    };

    const stars = generateStars(20);

    return (
        <div 
            ref={contactRef}
            className="py-10 relative overflow-hidden"
            style={{
                background: 'var(--color-background)',
                transition: 'var(--theme-transition)',
                minHeight: '100vh',
                position: 'relative',
            }}
        >
            {/* Semi-transparent overlay for better contrast */}
            <div 
                className="absolute inset-0 z-0" 
                style={{
                    background: themeKey === 'minimalist' ? 
                        'linear-gradient(to bottom, rgba(245, 245, 247, 0.7), rgba(245, 245, 247, 0.9))' : 
                        `linear-gradient(to bottom, rgba(var(--color-background-rgb), 0.8), rgba(var(--color-background-rgb), 0.95))`,
                    backdropFilter: 'blur(5px)',
                    zIndex: 0,
                }}
            ></div>
            
            {/* Decorative accent shapes */}
            <div className="accent-shape accent-shape-contact-1"></div>
            <div className="accent-shape accent-shape-contact-2"></div>
            <div className="accent-shape" style={{
                width: '180px',
                height: '180px',
                top: '40%',
                right: '25%',
                background: 'radial-gradient(circle, rgba(var(--color-primary-rgb), 0.5) 0%, transparent 70%)',
                animation: 'pulse 12s infinite ease-in-out 1s',
            }}></div>
            
            {/* Rotating circle decorative elements */}
            <div 
                className="absolute w-200 h-200 border border-dashed rounded-full opacity-20 z-0"
                style={{
                    top: '15%', 
                    left: '8%',
                    width: '200px',
                    height: '200px',
                    borderColor: 'rgba(var(--color-primary-rgb), 0.2)',
                    animation: 'rotateSlow 60s linear infinite'
                }}
            ></div>
            <div 
                className="absolute w-150 h-150 border border-dashed rounded-full opacity-20 z-0"
                style={{
                    bottom: '10%', 
                    right: '5%',
                    width: '150px',
                    height: '150px',
                    borderColor: 'rgba(var(--color-accent-rgb), 0.2)',
                    animation: 'rotateSlow 60s linear infinite reverse'
                }}
            ></div>
            
            {/* Star elements */}
            {stars.map((star, i) => (
                <div 
                    key={i} 
                    className="absolute w-1 h-1 bg-primary rounded-full" 
                    style={{
                        top: star.top,
                        left: star.left,
                        animationDelay: star.animationDelay,
                        opacity: star.opacity,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        background: 'var(--color-primary)',
                        animation: 'shimmer 3s infinite'
                    }}
                ></div>
            ))}
            
            {/* Particle effects */}
            <div className="particles-contact">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className={`particle particle-${i+1}`}></div>
                ))}
            </div>
            
            <div className="w-full flex items-center mb-8 px-8 relative z-10">
                <div className="h-[3px] w-[30px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mr-4 rounded-full"></div>
                <Title 
                    label={CONTACT_ME || "Contact Me"} 
                    style={{
                        color: 'var(--color-primary)',
                        textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        fontFamily: FONT_FAMILY,
                    }}
                />
                <div className="h-[3px] flex-grow bg-gradient-to-r from-[var(--color-accent)] to-transparent ml-4 rounded-full"></div>
            </div>
            
            <div className="pt-5 sm:pt-10 flex flex-row flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-4 relative z-10 social-icons-wrapper mx-auto max-w-3xl">
                {/* Decorative glow effects behind social icons */}
                <div 
                    className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-20 blur-3xl"
                    style={{
                        background: 'radial-gradient(circle at center, var(--color-primary) 0%, transparent 70%)',
                        animation: 'pulse 8s infinite alternate'
                    }}
                ></div>
                <div 
                    className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-3xl"
                    style={{
                        background: 'radial-gradient(circle at center, var(--color-accent) 0%, transparent 70%)',
                        animation: 'pulse 10s infinite alternate-reverse'
                    }}
                ></div>
                
                {
                    contactUs.map((item, key) => (
                        <div 
                            className="contact-social-item flex flex-col text-center items-center relative"
                            key={key}
                            onMouseEnter={() => setHoveredSocial(key)}
                            onMouseLeave={() => setHoveredSocial(null)}
                            style={{
                                animationDelay: `${key * 0.15}s`,
                                width: "100px", // Fixed width to ensure consistent spacing
                                marginBottom: "15px" // Add spacing between items
                            }}
                        >
                            {/* Icon and ring container */}
                            <div className="relative flex justify-center items-center mb-3" style={{ height: "70px" }}>
                                {/* Ring effect animation for hovered social icon */}
                                {hoveredSocial === key && (
                                    <div 
                                        className="social-icon-ring"
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)"
                                        }}
                                    ></div>
                                )}
                                
                                <SocialIcon 
                                    name={item.logo} 
                                    isHovered={hoveredSocial === key}
                                    onClick={() => {
                                        window.open(
                                            item.link,
                                            '_blank'
                                        )
                                    }}
                                    style={{ position: "relative", zIndex: 2 }}
                                />
                            </div>
                            
                            {/* Title container */}
                            <div className="relative z-10 mt-3">
                                <CardTitle 
                                    label={item.name}
                                    style={{
                                        fontFamily: FONT_FAMILY,
                                        color: 'var(--color-primary)',
                                        transition: 'all 0.3s ease',
                                        opacity: hoveredSocial === key ? 1 : 0.7,
                                        fontWeight: hoveredSocial === key ? '600' : '500',
                                        transform: hoveredSocial === key ? 'scale(1.05)' : 'scale(1)',
                                        textShadow: hoveredSocial === key ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                                        textAlign: 'center',
                                        width: '100%'
                                    }}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
            
            <div 
                className={`mx-5 sm:mx-10 md:mx-24 lg:mx-80 mt-16 pb-10 relative z-10 transition-all duration-500 ${isChatVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
            >
                {/* Chat interface with glassmorphism effect */}
                <div 
                    className="backdrop-blur-sm rounded-xl p-4 relative overflow-hidden chat-container"
                    style={{
                        background: 'rgba(var(--color-background-rgb), 0.3)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                        borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(var(--color-primary-rgb), 0.05)',
                        backdropFilter: 'blur(10px)',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '500px', // Fixed height for chat container
                        transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)'
                    }}
                >
                    {/* Chat accent lighting */}
                    <div 
                        className="absolute -inset-1 opacity-30"
                        style={{
                            background: `radial-gradient(circle at 50% 0%, var(--color-primary) 0%, transparent 70%)`,
                            filter: 'blur(40px)'
                        }}
                    ></div>
                    
                    {/* Chat header */}
                    <div 
                        className="flex items-center px-4 py-3 border-b relative z-10"
                        style={{
                            borderBottomColor: 'rgba(var(--color-primary-rgb), 0.1)',
                            background: 'rgba(var(--color-background-rgb), 0.5)',
                            backdropFilter: 'blur(5px)'
                        }}
                    >
                        <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden flex items-center justify-center mr-3"
                            style={{
                                background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                            }}
                        >
                            <span className="text-white text-sm font-bold">DF</span>
                        </div>
                        <div>
                            <h3 
                                className="font-semibold"
                                style={{
                                    color: 'var(--color-primary)',
                                    fontFamily: FONT_FAMILY
                                }}
                            >
                                Darwin Fegarido
                            </h3>
                            <p 
                                className="text-sm"
                                style={{
                                    color: 'rgba(var(--color-primary-rgb), 0.7)',
                                    fontFamily: FONT_FAMILY
                                }}
                            >
                                Full Stack Engineer
                            </p>
                        </div>
                        <div 
                            className="ml-auto flex items-center px-3 py-1 rounded-full text-xs"
                            style={{
                                background: 'rgba(var(--color-primary-rgb), 0.1)',
                                color: 'var(--color-primary)',
                                border: '1px solid rgba(var(--color-primary-rgb), 0.2)'
                            }}
                        >
                            <span className="h-2 w-2 rounded-full mr-2 animate-pulse" style={{ background: 'var(--color-primary)' }}></span>
                            Online
                        </div>
                    </div>
                    
                    {/* Messages container with scroll */}
                    <div 
                        ref={chatContainerRef}
                        className="flex-grow overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent"
                        style={{
                            scrollBehavior: 'smooth',
                            background: 'rgba(var(--color-background-rgb), 0.1)',
                            backdropFilter: 'blur(4px)',
                            boxShadow: 'inset 0 5px 10px rgba(0, 0, 0, 0.03), inset 0 -5px 10px rgba(0, 0, 0, 0.03)'
                        }}
                    >
                        {messages.map((msg) => (
                            <ChatMessage 
                                key={msg.id}
                                message={msg.content}
                                isUser={msg.isUser}
                                timestamp={msg.timestamp}
                            />
                        ))}
                        
                        {/* Suggested messages - only show if no user messages yet */}
                        {messages.length <= 2 && (
                            <div className="mt-4 flex flex-wrap gap-2 justify-center">
                                <button
                                    onClick={() => handleSendMessage("Tell me about your experience")}
                                    className="px-3 py-2 rounded-full text-sm transition-all duration-300"
                                    style={{
                                        background: 'rgba(var(--color-primary-rgb), 0.1)',
                                        color: 'var(--color-primary)',
                                        border: '1px solid rgba(var(--color-primary-rgb), 0.2)',
                                        fontFamily: FONT_FAMILY,
                                        transform: 'scale(1)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.03)';
                                        e.currentTarget.style.background = 'rgba(var(--color-primary-rgb), 0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.background = 'rgba(var(--color-primary-rgb), 0.1)';
                                    }}
                                >
                                    Tell me about your experience
                                </button>
                                <button
                                    onClick={() => handleSendMessage("What projects have you worked on?")}
                                    className="px-3 py-2 rounded-full text-sm transition-all duration-300"
                                    style={{
                                        background: 'rgba(var(--color-primary-rgb), 0.1)',
                                        color: 'var(--color-primary)',
                                        border: '1px solid rgba(var(--color-primary-rgb), 0.2)',
                                        fontFamily: FONT_FAMILY,
                                        transform: 'scale(1)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.03)';
                                        e.currentTarget.style.background = 'rgba(var(--color-primary-rgb), 0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.background = 'rgba(var(--color-primary-rgb), 0.1)';
                                    }}
                                >
                                    What projects have you worked on?
                                </button>
                                <button
                                    onClick={() => handleSendMessage("What skills do you have?")}
                                    className="px-3 py-2 rounded-full text-sm transition-all duration-300"
                                    style={{
                                        background: 'rgba(var(--color-primary-rgb), 0.1)',
                                        color: 'var(--color-primary)',
                                        border: '1px solid rgba(var(--color-primary-rgb), 0.2)',
                                        fontFamily: FONT_FAMILY,
                                        transform: 'scale(1)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.03)';
                                        e.currentTarget.style.background = 'rgba(var(--color-primary-rgb), 0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.background = 'rgba(var(--color-primary-rgb), 0.1)';
                                    }}
                                >
                                    What skills do you have?
                                </button>
                            </div>
                        )}
                        
                        {/* Typing indicator */}
                        {isTyping && <TypingIndicator />}
                    </div>
                    
                    {/* Chat input area */}
                    <ChatInput 
                        onSendMessage={handleSendMessage}
                        isDisabled={waitingForResponse}
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact;