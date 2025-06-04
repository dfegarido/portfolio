import { useDispatch } from "react-redux";
import Title from '../components/atom/Title';
import ChatMessage from "../components/atom/ChatMessage";
import ChatInput from "../components/atom/ChatInput";
import TypingIndicator from "../components/atom/TypingIndicator";
import { useEffect, useRef, useState, memo } from "react";
import { setReference } from "../store/metadata";
import { CONTACT_ME, FONT_FAMILY } from "../helpers/constants";
import { useTheme } from "../contexts/ThemeContext";
import "../assets/socialIcons.css";
import "../assets/optimized-contact.css";

const Contact = memo(() => {
    const chatEndRef = useRef(null);
    const contactRef = useRef(null);
    const dispatch = useDispatch();
    const { themeKey } = useTheme();
    // Removed unused botHasResponded state
    const [inputVisible, setInputVisible] = useState(false);
    const [typingIndicator, setTypingIndicator] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 0,
            type: "BOT",
            message: "Hi! I'm Darwin, thanks for checking out my Portfolio. How can I help you today?"
        }
    ]);

    useEffect(() => {
        if (contactRef.current) {
            contactRef.current.id = 'contact-section';
            dispatch(setReference({name: 'contact', value: 'contact-section' }))
        }
    }, [dispatch])

    const scrollToBottom = () => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setInputVisible(true);
        }, 200)
    }, [])

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleInputSubmit = (userMessage) => {
        // Guard against empty or null messages
        if (!userMessage || userMessage.trim() === '') {
            return;
        }
        
        const newMessages = [
            ...messages,
            {
                id: messages.length,
                type: "USER",
                message: userMessage
            }
        ];

        setMessages(newMessages);
        setTypingIndicator(true);

        setTimeout(() => {
            setTypingIndicator(false);
            const botResponseIndex = messages.length + 1;
            
            let botResponse = "";
            
            const userMessageLower = userMessage.toLowerCase();
            
            if (userMessageLower.includes("hire") || userMessageLower.includes("job") || 
                (userMessageLower.includes("work") && 
                 (userMessageLower.includes("opportunity") || userMessageLower.includes("position") || 
                  userMessageLower.includes("opening") || userMessageLower.includes("with you")))) {
                botResponse = "I'm always open to discussing new opportunities! Feel free to reach out through my email: darwinfegarido@gmail.com";
            } 
            else if (userMessageLower.includes("email") || userMessageLower.includes("contact") || userMessageLower.includes("reach")) {
                botResponse = "You can reach me at darwinfegarido@gmail.com or through my social media profiles listed below.";
            }
            else if (userMessageLower.includes("experience") || userMessageLower.includes("background")) {
                botResponse = "I have 9+ years of experience as a Full Stack Developer, specializing in React, Node.js, and modern web technologies. I've worked on enterprise applications, e-commerce platforms, and various web development projects.";
            }
            else if (userMessageLower.includes("skill") || userMessageLower.includes("tech") || userMessageLower.includes("stack")) {
                botResponse = "My tech stack includes: React, TypeScript, Node.js, Express, MongoDB, PostgreSQL, AWS, Docker, and more. I'm also experienced with testing frameworks and CI/CD pipelines.";
            }
            else if (userMessageLower.includes("project") || userMessageLower.includes("portfolio") || 
                     (userMessageLower.includes("work") && 
                      (userMessageLower.includes("example") || userMessageLower.includes("project") || 
                       userMessageLower.includes("portfolio") || userMessageLower.includes("showcase")))) {
                botResponse = "You can check out my portfolio section to see some of my recent projects. Each project includes details about the technologies used and my role in development.";
            }
            else if (userMessageLower.includes("hello") || userMessageLower.includes("hi") || userMessageLower.includes("hey")) {
                botResponse = "Hello! How can I help you today?";
            }
            else {
                botResponse = "Thanks for your message! If you'd like to discuss anything specific about my work or potential collaborations, feel free to email me at darwinfegarido@gmail.com";
            }
            
            setMessages([
                ...newMessages,
                {
                    id: botResponseIndex,
                    type: "BOT",
                    message: botResponse
                }
            ]);
            
            // Removed setBotHasResponded call as it's no longer needed
        }, 1500);
    };

    return (
        <div
            ref={contactRef}
            className="relative min-h-screen py-10 px-4 sm:px-8 overflow-hidden"
            style={{
                background: 'var(--color-background)',
                zIndex: 0,
            }}
        >
            <div 
                className="absolute inset-0 z-0" 
                style={{
                    background: themeKey === 'minimalist' ? 
                        'linear-gradient(to bottom, rgba(245, 245, 247, 0.7), rgba(245, 245, 247, 0.9))' : 
                        `linear-gradient(to bottom, rgba(var(--color-background-rgb), 0.8), rgba(var(--color-background-rgb), 0.95))`,
                    backdropFilter: 'blur(5px)',
                }}
            ></div>
            
            <div className="contact-accent-shape contact-accent-shape-1"></div>
            <div className="contact-accent-shape contact-accent-shape-2"></div>
            
            <div className="contact-particles">
                <div className="contact-particle contact-particle-1"></div>
                <div className="contact-particle contact-particle-2"></div>
                <div className="contact-particle contact-particle-3"></div>
            </div>
            
            <div className="rotating-circle-contact" style={{ top: '15%', left: '8%' }}></div>
            <div className="rotating-circle-contact" style={{ bottom: '10%', right: '5%', animationDirection: 'reverse' }}></div>
            
            <div className="w-full flex items-center mb-8 px-2 sm:px-8 relative z-10">
                <div className="h-[3px] w-[30px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mr-4 rounded-full"></div>
                <Title 
                    label={CONTACT_ME} 
                    style={{
                        color: 'var(--color-primary)', 
                        textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        fontFamily: FONT_FAMILY,
                    }}
                />
                <div className="h-[3px] flex-grow bg-gradient-to-r from-[var(--color-accent)] to-transparent ml-4 rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto relative z-10">
                <div 
                    className="w-full rounded-lg overflow-hidden relative contact-floating-1"
                    style={{
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                        border: themeKey === 'minimalist' 
                            ? '1px solid rgba(0, 0, 0, 0.05)'
                            : '1px solid rgba(255, 255, 255, 0.1)',
                        transform: 'translate3d(0, 0, 0)', 
                        willChange: 'transform'
                    }}
                >
                    <div
                        className="absolute inset-0 -z-1"
                        style={{
                            background: themeKey === 'minimalist' 
                                ? 'rgba(255, 255, 255, 0.7)'
                                : themeKey === 'tech'
                                    ? 'rgba(13, 27, 42, 0.7)'
                                    : 'rgba(26, 26, 26, 0.7)',
                            backdropFilter: 'blur(10px)',
                        }}
                    ></div>
                    
                    <div 
                        className="w-full px-6 py-4 flex items-center"
                        style={{
                            borderBottom: themeKey === 'minimalist' 
                                ? '1px solid rgba(0, 0, 0, 0.05)'
                                : '1px solid rgba(255, 255, 255, 0.1)',
                            background: themeKey === 'minimalist'
                                ? 'rgba(245, 245, 247, 0.8)'
                                : themeKey === 'tech'
                                    ? 'rgba(7, 18, 30, 0.8)'
                                    : 'rgba(22, 22, 22, 0.8)',
                        }}
                    >
                        <div 
                            className="w-10 h-10 rounded-full mr-3 grid place-items-center"
                            style={{
                                background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <span className="text-white font-bold">DF</span>
                            
                            <div 
                                className="absolute w-3 h-3 bg-green-500 rounded-full border-2 right-0 bottom-0 contact-pulse"
                                style={{
                                    borderColor: themeKey === 'minimalist' 
                                        ? 'rgba(255, 255, 255, 0.7)'
                                        : 'rgba(13, 27, 42, 0.7)',
                                    boxShadow: '0 0 5px rgba(16, 185, 129, 0.7)'
                                }}
                            ></div>
                        </div>
                        
                        <div>
                            <p 
                                className="font-medium text-base"
                                style={{ 
                                    color: 'var(--color-primary)',
                                    fontFamily: FONT_FAMILY
                                }}
                            >
                                Darwin Fegarido
                            </p>
                            <p 
                                className="text-xs"
                                style={{ 
                                    color: 'rgba(var(--color-primary-rgb), 0.7)',
                                    fontFamily: FONT_FAMILY
                                }}
                            >
                                Online
                            </p>
                        </div>
                    </div>
                    
                    <div 
                        className="px-6 py-4"
                        style={{
                            minHeight: '350px',
                            maxHeight: '400px',
                            overflowY: 'auto'
                        }}
                    >
                        {messages.map((message, index) => (
                            <div 
                                key={message.id} 
                                className={`message-appear message-appear-delay-${index % 3 + 1}`}
                            >
                                <ChatMessage 
                                    message={message.message} 
                                    type={message.type} 
                                />
                            </div>
                        ))}
                        
                        {typingIndicator && (
                            <div className="message-appear">
                                <TypingIndicator />
                            </div>
                        )}
                        
                        <div ref={chatEndRef} />
                    </div>
                    
                    <div 
                        className="w-full px-6 py-4 chat-input-container"
                        style={{
                            borderTop: themeKey === 'minimalist' 
                                ? '1px solid rgba(0, 0, 0, 0.05)'
                                : '1px solid rgba(255, 255, 255, 0.1)',
                            background: themeKey === 'minimalist'
                                ? 'rgba(245, 245, 247, 0.8)'
                                : themeKey === 'tech'
                                    ? 'rgba(7, 18, 30, 0.8)'
                                    : 'rgba(22, 22, 22, 0.8)',
                        }}
                    >
                        {inputVisible && (
                            <ChatInput 
                                onSendMessage={handleInputSubmit} 
                            />
                        )}
                    </div>
                </div>
                
                <div className="mt-8 text-center">
                    <p 
                        className="text-sm mb-2"
                        style={{ 
                            color: 'rgba(var(--color-primary-rgb), 0.8)',
                            fontFamily: FONT_FAMILY
                        }}
                    >
                        Or reach me directly at
                    </p>
                    <a 
                        href="mailto:darwinfegarido@gmail.com"
                        className="inline-block px-4 py-2 rounded-full contact-slide-right"
                        style={{ 
                            color: 'var(--color-primary)',
                            background: 'rgba(var(--color-primary-rgb), 0.1)',
                            fontFamily: FONT_FAMILY,
                            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                            backdropFilter: 'blur(5px)',
                            border: '1px solid rgba(var(--color-primary-rgb), 0.2)',
                            animationDelay: '0.3s'
                        }}
                    >
                        darwinfegarido@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
});

export default Contact;