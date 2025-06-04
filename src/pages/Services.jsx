import { useDispatch } from "react-redux";
import CircleLogo from "../components/atom/CircleLogo";
import Title from "../components/atom/Title";
import Card from "../components/Card";
import CardTitle from "../components/atom/CardTitle";
import CardDescription from "../components/atom/CardDescription";
import { useEffect, useRef, useState, memo, useCallback } from "react";
import { setReference } from "../store/metadata";
import config from "../helpers/config";
import { FONT_FAMILY, SERVICE } from "../helpers/constants";
import { useTheme } from "../contexts/ThemeContext";

const Services = memo(() => {
    const serviceRef = useRef(null)
    const dispatch = useDispatch()
    const { services } = config
    const { themeKey } = useTheme()
    const [hoveredCard, setHoveredCard] = useState(null)
    
    // Safe way to handle refs with Redux - store the element ID instead of the ref itself
    useEffect(() => {
        if (serviceRef.current) {
            // Use an ID-based approach instead of passing the ref directly
            serviceRef.current.id = 'service-section';
            dispatch(setReference({name: 'service', value: 'service-section' }))
        }
    }, [dispatch])

    const handleCardHover = useCallback((cardKey) => {
        setHoveredCard(cardKey);
    }, []);

    const handleCardLeave = useCallback(() => {
        setHoveredCard(null);
    }, []);

    return (
        <div 
            ref={serviceRef}
            className={`flex flex-col items-center pt-16 pb-20 relative overflow-hidden`}
            style={{
                background: 'var(--color-background)',
                backdropFilter: 'blur(10px)',
                transition: 'var(--theme-transition)',
                boxShadow: 'inset 0 -50px 50px -50px rgba(var(--color-background-rgb), 0.2)'
            }}>
            
            {/* Background texture and decorative elements */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23${themeKey === 'minimalist' ? '2c2c2c' : themeKey === 'tech' ? '4cc9f0' : 'c9b18c'}' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            ></div>
            
            {/* Gradient overlay at the top */}
            <div className="absolute top-0 left-0 right-0 h-40 opacity-40"
                style={{
                    background: `linear-gradient(to bottom, rgba(var(--color-primary-rgb), 0.15), transparent)`,
                }}
            ></div>

            <div className="w-full flex items-center mb-10 px-8">
                <div className="h-[3px] w-[30px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mr-4 rounded-full"></div>
                <Title label={SERVICE} style={{color: 'var(--color-primary)', textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}/>
                <div className="h-[3px] flex-grow bg-gradient-to-r from-[var(--color-accent)] to-transparent ml-4 rounded-full"></div>
            </div>
            
            <div className="grid grid-rows sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 mx-8 relative">
                {/* Animated background mesh for the grid */}
                <div className="absolute inset-0 -z-10" 
                    style={{
                        backgroundImage: `radial-gradient(rgba(var(--color-primary-rgb), 0.08) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px',
                        opacity: 0.6,
                        animation: 'fadeInBackground 1.5s ease-in-out forwards'
                    }}
                ></div>
                
                {/* Light rays effect */}
                <div className="absolute inset-0 -z-10 opacity-20"
                    style={{
                        background: `linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.2) 0%, transparent 100%)`,
                        filter: 'blur(60px)'
                    }}
                ></div>
                
                { 
                    services?.map(({ logo, title, description }, key) => (
                        <div 
                            key={key}
                            className="relative transition-all duration-500 transform hover:scale-105 hover:z-10"
                            onMouseEnter={() => handleCardHover(key)}
                            onMouseLeave={handleCardLeave}
                            style={{
                                transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
                            }}
                        >
                            {/* Card accent lighting */}
                            <div 
                                className={`absolute -inset-1 rounded-xl transition-all duration-500 ${hoveredCard === key ? 'opacity-70 blur-md' : 'opacity-30 blur-sm'}`}
                                style={{
                                    background: themeKey === 'minimalist'
                                        ? `linear-gradient(135deg, rgba(44, 44, 44, 0.5), rgba(107, 122, 143, 0.5))`
                                        : themeKey === 'tech'
                                            ? `linear-gradient(135deg, rgba(76, 201, 240, 0.5), rgba(0, 129, 167, 0.5))`
                                            : `linear-gradient(135deg, rgba(201, 177, 140, 0.5), rgba(138, 122, 94, 0.5))`,
                                    transform: hoveredCard === key ? 'scale(1.02)' : 'scale(1)'
                                }}
                            ></div>
                            
                            <Card 
                                className={'relative p-6 grid items-start place-items-center max-w-xs rounded-2xl overflow-hidden backdrop-blur-md z-10'} 
                                style={{
                                    background: themeKey === 'minimalist' 
                                        ? `rgba(255, 255, 255, ${hoveredCard === key ? '0.75' : '0.65'})` 
                                        : themeKey === 'tech'
                                            ? `rgba(13, 27, 42, ${hoveredCard === key ? '0.75' : '0.65'})`
                                            : `rgba(26, 26, 26, ${hoveredCard === key ? '0.75' : '0.65'})`,
                                    border: themeKey === 'minimalist'
                                        ? '1px solid rgba(0, 0, 0, 0.08)'
                                        : '1px solid rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(16px)',
                                    boxShadow: hoveredCard === key ? 
                                        `0 15px 30px rgba(var(--color-primary-rgb), 0.12), 0 8px 16px rgba(var(--color-primary-rgb), 0.06), inset 0 1px 0 ${themeKey === 'minimalist' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.05)'}` :
                                        `0 6px 12px rgba(0, 0, 0, 0.04), inset 0 1px 0 ${themeKey === 'minimalist' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.03)'}`,
                                    transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)',
                                }}
                            >
                                <div className="relative mb-6 group">
                                    {/* Icon background with animated gradient */}
                                    <div 
                                        className={`absolute inset-0 rounded-full blur-sm ${hoveredCard === key ? 'animate-pulse-slow' : ''}`}
                                        style={{
                                            background: themeKey === 'minimalist'
                                                ? hoveredCard === key 
                                                    ? `radial-gradient(circle at center, rgba(44, 44, 44, 0.5) 0%, rgba(107, 122, 143, 0.2) 70%)`
                                                    : `radial-gradient(circle at center, rgba(44, 44, 44, 0.3) 0%, transparent 70%)`
                                                : themeKey === 'tech'
                                                    ? hoveredCard === key
                                                        ? `radial-gradient(circle at center, rgba(76, 201, 240, 0.5) 0%, rgba(0, 129, 167, 0.2) 70%)`
                                                        : `radial-gradient(circle at center, rgba(76, 201, 240, 0.3) 0%, transparent 70%)`
                                                    : hoveredCard === key
                                                        ? `radial-gradient(circle at center, rgba(201, 177, 140, 0.5) 0%, rgba(138, 122, 94, 0.2) 70%)`
                                                        : `radial-gradient(circle at center, rgba(201, 177, 140, 0.3) 0%, transparent 70%)`,
                                            opacity: hoveredCard === key ? 0.7 : 0.25,
                                            transform: hoveredCard === key ? 'scale(1.1)' : 'scale(1)',
                                            transition: 'all 0.5s ease'
                                        }}
                                    ></div>
                                    
                                    {/* Main icon container */}
                                    <div 
                                        className="p-5 rounded-full relative"
                                        style={{
                                            background: themeKey === 'minimalist'
                                                ? hoveredCard === key
                                                    ? `linear-gradient(135deg, rgb(44, 44, 44), rgb(107, 122, 143))`
                                                    : 'rgba(44, 44, 44, 0.1)'
                                                : themeKey === 'tech'
                                                    ? hoveredCard === key
                                                        ? `linear-gradient(135deg, rgb(76, 201, 240), rgb(0, 129, 167))`
                                                        : 'rgba(76, 201, 240, 0.1)'
                                                    : hoveredCard === key
                                                        ? `linear-gradient(135deg, rgb(201, 177, 140), rgb(138, 122, 94))`
                                                        : 'rgba(201, 177, 140, 0.1)',
                                            border: themeKey === 'minimalist'
                                                ? `1px solid ${hoveredCard === key ? 'rgba(107, 122, 143, 0.5)' : 'rgba(44, 44, 44, 0.2)'}`
                                                : themeKey === 'tech'
                                                    ? `1px solid ${hoveredCard === key ? 'rgba(0, 129, 167, 0.5)' : 'rgba(76, 201, 240, 0.2)'}`
                                                    : `1px solid ${hoveredCard === key ? 'rgba(138, 122, 94, 0.5)' : 'rgba(201, 177, 140, 0.2)'}`,
                                            boxShadow: hoveredCard === key
                                                ? themeKey === 'minimalist'
                                                    ? '0 10px 25px rgba(44, 44, 44, 0.2)'
                                                    : themeKey === 'tech'
                                                        ? '0 10px 25px rgba(76, 201, 240, 0.2)'
                                                        : '0 10px 25px rgba(201, 177, 140, 0.2)'
                                                : 'none',
                                            transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)',
                                            transform: hoveredCard === key ? 'translateY(-5px)' : 'translateY(0)'
                                        }}
                                    >
                                        <CircleLogo 
                                            name={logo} 
                                            style={{
                                                background: 'transparent',
                                                filter: hoveredCard === key ? 'drop-shadow(0 2px 3px rgba(0,0,0,0.2))' : 'none'
                                            }}
                                        />
                                    </div>
                                </div>
                                <CardTitle 
                                    label={title} 
                                    className="font-bold tracking-wide mb-3 text-center text-lg relative"
                                    style={{
                                        color: 'var(--color-primary)',
                                        fontFamily: FONT_FAMILY,
                                        letterSpacing: '2px',
                                        textShadow: hoveredCard === key ? '0 1px 2px rgba(0,0,0,0.1)' : 'none',
                                        transform: hoveredCard === key ? 'translateY(-2px)' : 'translateY(0)',
                                        transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)'
                                    }}
                                />
                                
                                {/* Animated underline for title */}
                                <div className="w-16 h-0.5 mb-4 rounded-full" style={{
                                    background: `linear-gradient(to right, var(--color-primary), var(--color-accent))`,
                                    transform: hoveredCard === key ? 'scaleX(1.5)' : 'scaleX(1)',
                                    opacity: hoveredCard === key ? 1 : 0.7,
                                    transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)'
                                }}></div>
                                
                                <CardDescription 
                                    className="text-center px-2" 
                                    label={description}
                                    style={{
                                        color: 'var(--color-primary)',
                                        opacity: hoveredCard === key ? 0.95 : 0.8,
                                        fontFamily: FONT_FAMILY,
                                        letterSpacing: '0.5px',
                                        lineHeight: '1.6',
                                        transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)'
                                    }}
                                />
                                
                                {/* Learn more indicator that appears on hover */}
                                <div 
                                    className="mt-4 text-xs font-semibold tracking-wider uppercase flex items-center gap-1"
                                    style={{
                                        color: 'var(--color-primary)',
                                        opacity: hoveredCard === key ? 0.8 : 0,
                                        transform: hoveredCard === key ? 'translateY(0)' : 'translateY(10px)',
                                        transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)',
                                    }}
                                >
                                    <span>Learn more</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </Card>
                        </div>
                    )) 
                }
            </div>
        </div>
    )
});

export default Services;