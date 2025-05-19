import React, { useEffect, useRef } from 'react';
import { useTheme } from "../contexts/ThemeContext";
import { FONT_FAMILY } from "../helpers/constants";
import SocialIcon from "../components/atom/SocialIcon";
import config from "../helpers/config";
import "../assets/socialIcons.css";

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
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 footer-pulse"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 footer-pulse"></div>
                
                {/* Decorative geometric shapes */}
                <div className="absolute left-[5%] top-[20%] w-32 h-32 rounded-full border border-dashed opacity-10"
                    style={{
                        borderColor: 'var(--color-primary)',
                        transform: 'rotate(-15deg)',
                        animation: 'rotateSlow 60s linear infinite'
                    }}
                ></div>
                <div className="absolute right-[10%] bottom-[20%] w-24 h-24 rounded-full border border-dashed opacity-10"
                    style={{
                        borderColor: 'var(--color-accent)',
                        transform: 'rotate(15deg)',
                        animation: 'rotateSlow 45s linear infinite reverse'
                    }}
                ></div>
                
                {/* Futuristic decorative elements */}
                <div className="absolute w-20 h-1 left-[22%] top-[30%] bg-gradient-to-r from-transparent via-primary to-transparent opacity-10 footer-pulse-1"
                    style={{ 
                        transform: 'rotate(45deg)'
                    }}
                ></div>
                <div className="absolute w-20 h-1 right-[22%] bottom-[30%] bg-gradient-to-r from-transparent via-primary to-transparent opacity-10 footer-pulse-2"
                    style={{ 
                        transform: 'rotate(-45deg)'
                    }}
                ></div>
                
                {/* Subtle dot pattern */}
                <div className="absolute left-0 top-0 w-full h-full" style={{ opacity: 0.05, zIndex: -1 }}>
                    <div className="absolute w-1 h-1 rounded-full bg-primary left-[10%] top-[20%]"></div>
                    <div className="absolute w-1 h-1 rounded-full bg-primary left-[30%] top-[60%]"></div>
                    <div className="absolute w-1 h-1 rounded-full bg-primary left-[70%] top-[30%]"></div>
                    <div className="absolute w-1 h-1 rounded-full bg-primary left-[85%] top-[70%]"></div>
                    <div className="absolute w-1 h-1 rounded-full bg-accent left-[20%] top-[40%]"></div>
                    <div className="absolute w-1 h-1 rounded-full bg-accent left-[50%] top-[20%]"></div>
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
                                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
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
                                        style={{}}
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
                        
                        {/* Center section - Social links */}
                        <div className="flex space-x-6 mb-4 md:mb-0 items-center">
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={social.name}
                                    href={social.link}
                                    className={`footer-social-item-${index} group`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ 
                                        opacity: 0
                                    }}
                                >
                                    <div 
                                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-glow relative"
                                        style={{
                                            background: 'rgba(var(--color-primary-rgb), 0.1)',
                                            border: '1px solid rgba(var(--color-primary-rgb), 0.2)',
                                            backdropFilter: 'blur(5px)'
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
                                    className={`footer-social-item-${socialLinks.length} group`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ 
                                        opacity: 0
                                    }}
                                >
                                    <div 
                                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-glow relative"
                                        style={{
                                            background: 'rgba(var(--color-primary-rgb), 0.1)',
                                            border: '1px solid rgba(var(--color-primary-rgb), 0.2)',
                                            backdropFilter: 'blur(5px)'
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
            
            {/* CSS for footer animations */}
            <style jsx="true">{`
                @keyframes rotateSlow {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                .footer-social-item {
                    animation: socialIconEntrance 0.8s cubic-bezier(0.25, 0.1, 0.25, 1.4) forwards;
                }
                
                @keyframes socialIconEntrance {
                    0% { opacity: 0; transform: translateY(10px) scale(0.8); }
                    60% { transform: translateY(-5px) scale(1.1); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                }
                
                .footer-animation {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.8s ease, transform 0.8s ease;
                }
                
                .footer-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .shadow-glow {
                    box-shadow: 0 0 15px rgba(var(--color-primary-rgb), 0.5);
                }
                
                @keyframes pulseLight {
                    0% { opacity: 0.3; }
                    50% { opacity: 0.6; }
                    100% { opacity: 0.3; }
                }
                
                .footer-pulse {
                    animation: pulseLight 4s infinite ease-in-out;
                }
                
                @keyframes pulseRing {
                    0% {
                        transform: scale(0.8);
                        opacity: 0.3;
                    }
                    50% {
                        transform: scale(1.2);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(0.8);
                        opacity: 0.3;
                    }
                }

                .pulse-ring-animation {
                    animation: pulseRing 3s infinite ease-out 0.5s;
                }
                
                .pulse-light-animation {
                    animation: pulseLight 2s infinite ease-in-out;
                }
                
                .footer-pulse-1 {
                    animation: pulseLight 4s infinite ease-in-out 1s;
                }
                
                .footer-pulse-2 {
                    animation: pulseLight 4s infinite ease-in-out 2.5s;
                }
                
                /* Dynamic classes for social items with different delays */
                ${Array.from({ length: socialLinks.length + 1 }).map((_, i) => `
                .footer-social-item-${i} {
                    animation: socialIconEntrance 0.8s cubic-bezier(0.25, 0.1, 0.25, 1.4) forwards ${0.3 + (i * 0.15)}s;
                }
                `).join('\n')}
            `}</style>
        </footer>
    );
}

export default Footer;