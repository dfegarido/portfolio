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
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Left section - Logo & tagline */}
                        <div className="mb-4 md:mb-0 flex items-center">
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
                                    Full Stack Engineer
                                </p>
                            </div>
                        </div>
                        
                        {/* Center section - Social links - reduce number of animation delay classes */}
                        <div className="flex space-x-6 mb-4 md:mb-0 items-center">
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={social.name}
                                    href={social.link}
                                    className={`footer-social-item footer-delay-${(index % 3) + 1} group`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div 
                                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-glow relative"
                                        style={{
                                            background: 'rgba(var(--color-primary-rgb), 0.1)',
                                            border: '1px solid rgba(var(--color-primary-rgb), 0.2)',
                                            backdropFilter: 'blur(5px)',
                                            transform: 'translate3d(0, 0, 0)', // Force GPU acceleration
                                            willChange: 'transform, box-shadow'
                                        }}
                                    >
                                        <SocialIcon name={social.logo} color="var(--color-primary)" size={18} />
                                        
                                        {/* Hover highlight effect */}
                                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                            style={{ 
                                                background: 'var(--color-primary)'
                                            }}
                                        ></div>
                                        
                                        {/* Tooltip on hover */}
                                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                            {social.name}
                                        </div>
                                    </div>
                                </a>
                            ))}
                            
                            {/* GitHub link (if not in config) */}
                            {!socialLinks.some(social => social.logo === 'github') && (
                                <a 
                                    href="https://github.com/dfegarido"
                                    className="footer-social-item group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div 
                                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-glow relative"
                                        style={{
                                            background: 'rgba(var(--color-primary-rgb), 0.1)',
                                            border: '1px solid rgba(var(--color-primary-rgb), 0.2)',
                                            backdropFilter: 'blur(5px)',
                                            transform: 'translate3d(0, 0, 0)', // Force GPU acceleration
                                            willChange: 'transform, box-shadow'
                                        }}
                                    >
                                        <SocialIcon name="github" color="var(--color-primary)" size={18} />
                                        
                                        {/* Hover highlight effect */}
                                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                            style={{ 
                                                background: 'var(--color-primary)'
                                            }}
                                        ></div>
                                        
                                        {/* Tooltip on hover */}
                                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                            GitHub
                                        </div>
                                    </div>
                                </a>
                            )}
                            
                            {/* Connecting line */}
                            <div className="hidden md:block h-[1px] w-12 bg-gradient-to-r from-primary to-transparent opacity-30"></div>
                        </div>
                        
                        {/* Right section - Copyright */}
                        <div>
                            <div className="flex flex-col items-center md:items-end">
                                <p 
                                    className="text-xs text-center md:text-right mb-1"
                                    style={{ 
                                        color: 'rgba(var(--color-primary-rgb), 0.7)',
                                        fontFamily: FONT_FAMILY,
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    &copy; {currentYear} Darwin Fegarido
                                </p>
                                
                                {/* Subtle line */}
                                <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 mb-1"></div>
                                
                                <p 
                                    className="text-[10px] text-center md:text-right"
                                    style={{ 
                                        color: 'rgba(var(--color-primary-rgb), 0.5)',
                                        fontFamily: FONT_FAMILY,
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    All rights reserved
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