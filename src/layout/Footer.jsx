import React, { useEffect, useRef } from 'react';
import { useTheme } from "../contexts/ThemeContext";
import { FONT_FAMILY } from "../helpers/constants";
import SocialIcon from "../components/atom/SocialIcon";
import config from "../helpers/config";
import "../assets/socialIcons.css";
import "../assets/optimized-footer.css";

const Footer = () => {
    // eslint-disable-next-line no-unused-vars
    const { theme, themeKey } = useTheme();
    const currentYear = new Date().getFullYear();
    const footerRef = useRef(null);
    
    // Scroll animation using Intersection Observer
    useEffect(() => {
        // Store a reference to the current value
        const currentFooterRef = footerRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('footer-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );
        
        if (currentFooterRef) {
            observer.observe(currentFooterRef);
        }
        
        return () => {
            // Use the captured value in the cleanup function
            if (currentFooterRef) {
                observer.unobserve(currentFooterRef);
            }
        };
    }, []);
    
    // Get social media links from config
    const { contact: socialLinks } = config;

    return (
        <footer ref={footerRef} className="relative overflow-hidden z-10 footer-animation">
            {/* Footer background with glassmorphism */}
            <div 
                className="relative py-8"
                style={{
                    background: 'rgba(var(--color-background-rgb), 0.7)',
                    backdropFilter: 'blur(10px)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.5s ease'
                }}
            >
                {/* Decorative elements - reduced for better performance */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 footer-pulse"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 footer-pulse"></div>
                
                {/* Decorative geometric shapes - limited to two for better performance */}
                <div className="absolute left-[5%] top-[20%] w-32 h-32 rounded-full border border-dashed opacity-10"
                    style={{
                        borderColor: 'var(--color-primary)',
                        transform: 'translate3d(0, 0, 0) rotate(-15deg)',
                        animation: 'rotateSlow 60s linear infinite',
                        willChange: 'transform'
                    }}
                ></div>
                
                {/* Reduced number of dots from 7 to 4 for better performance */}
                <div className="absolute left-0 top-0 w-full h-full" style={{ opacity: 0.05, zIndex: -1 }}>
                    <div className="absolute w-1 h-1 rounded-full bg-primary left-[10%] top-[20%]"></div>
                    <div className="absolute w-1 h-1 rounded-full bg-primary left-[70%] top-[30%]"></div>
                    <div className="absolute w-1 h-1 rounded-full bg-accent left-[20%] top-[40%]"></div>
                    <div className="absolute w-1 h-1 rounded-full bg-accent left-[90%] top-[50%]"></div>
                </div>

                {/* Content container */}
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        {/* Left section - Logo & tagline */}
                        <div className="flex items-center order-1 lg:order-1">
                            <div className="relative">
                                <div 
                                    className="w-10 h-10 rounded-full mr-3 flex items-center justify-center relative overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                                        transform: 'translate3d(0, 0, 0)' // Force GPU acceleration
                                    }}
                                >
                                    <span className="text-white text-xs font-bold relative z-10">DF</span>
                                    
                                    {/* Inner light effect */}
                                    <div 
                                        className="absolute inset-0 opacity-50"
                                        style={{
                                            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 70%)'
                                        }}
                                    ></div>
                                    
                                    {/* Animation ring */}
                                    <div 
                                        className="absolute inset-0 rounded-full border-2 border-white opacity-20 pulse-ring-animation"
                                    ></div>
                                </div>
                                
                                {/* Glowing dot */}
                                <div 
                                    className="absolute w-2 h-2 rounded-full bg-white top-0 right-3 pulse-light-animation"
                                    style={{ 
                                        boxShadow: '0 0 10px var(--color-primary), 0 0 5px var(--color-primary)'
                                    }}
                                ></div>
                            </div>
                            
                            <div>
                                <p 
                                    className="text-sm font-light mb-0.5"
                                    style={{ 
                                        color: 'var(--color-primary)',
                                        fontFamily: FONT_FAMILY,
                                        letterSpacing: '0.5px',
                                        fontWeight: 500
                                    }}
                                >
                                    Darwin Fegarido
                                </p>
                                <p 
                                    className="text-xs opacity-80"
                                    style={{ 
                                        color: 'var(--color-primary)',
                                        fontFamily: FONT_FAMILY,
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    Backend Engineer | AI Specialist
                                </p>
                            </div>
                        </div>
                        
                        {/* Center section - Social links with improved layout */}
                        <div className="flex items-center justify-center order-3 lg:order-2">
                            <div className="flex space-x-4 items-center">
                                {socialLinks.map((social, index) => (
                                    <a 
                                        key={social.name}
                                        href={social.link}
                                        className={`footer-social-item footer-delay-${(index % 3) + 1} group`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={social.name}
                                    >
                                        <div 
                                            className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-glow relative group touch-manipulation"
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.1), rgba(var(--color-accent-rgb), 0.1))',
                                                border: '1px solid rgba(var(--color-primary-rgb), 0.2)',
                                                backdropFilter: 'blur(10px)',
                                                transform: 'translate3d(0, 0, 0)',
                                                willChange: 'transform, box-shadow',
                                                minHeight: '44px',
                                                minWidth: '44px'
                                            }}
                                        >
                                            <SocialIcon name={social.logo} color="var(--color-primary)" size={20} />
                                            
                                            {/* Enhanced hover highlight effect */}
                                            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-300"
                                                style={{ 
                                                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                                                    transform: 'scale(0.8)'
                                                }}
                                            ></div>
                                            
                                            {/* Enhanced tooltip */}
                                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                                                <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 shadow-lg border border-gray-700">
                                                    <div className="text-center font-medium">{social.name}</div>
                                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                            
                            {/* Decorative connecting lines */}
                            <div className="hidden xl:flex items-center ml-6">
                                <div className="h-px w-16 bg-gradient-to-r from-primary via-accent to-transparent opacity-30"></div>
                                <div className="w-2 h-2 rounded-full bg-primary opacity-50 mx-2"></div>
                            </div>
                        </div>
                        
                        {/* Right section - Copyright & Status */}
                        <div className="order-2 lg:order-3">
                            <div className="flex flex-col items-center lg:items-end">
                                <div className="flex items-center mb-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                                    <p 
                                        className="text-xs font-medium"
                                        style={{ 
                                            color: 'var(--color-primary)',
                                            fontFamily: FONT_FAMILY,
                                            letterSpacing: '0.5px'
                                        }}
                                    >
                                        Available for projects
                                    </p>
                                </div>
                                
                                <p 
                                    className="text-xs text-center lg:text-right mb-1"
                                    style={{ 
                                        color: 'rgba(var(--color-primary-rgb), 0.7)',
                                        fontFamily: FONT_FAMILY,
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    &copy; {currentYear} Darwin Fegarido
                                </p>
                                
                                {/* Enhanced decorative line */}
                                <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-accent opacity-40 mb-1"></div>
                                
                                <p 
                                    className="text-[10px] text-center lg:text-right opacity-60"
                                    style={{ 
                                        color: 'var(--color-primary)',
                                        fontFamily: FONT_FAMILY,
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    Crafted with ♥ using React
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* CSS animations moved to optimized-footer.css */}
        </footer>
    );
}

export default Footer;