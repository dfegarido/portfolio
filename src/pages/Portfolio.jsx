import { useState, Suspense, useEffect, useRef, useMemo, memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../components/atom/Title";
import { setReference } from "../store/metadata";
import { portfolio } from "../helpers/config";
import { PORTFOLIO, FONT_FAMILY } from "../helpers/constants";
import { useTheme } from "../contexts/ThemeContext";
import '../assets/optimized-portfolio.css';

// Use centralized lazy loading
import { CardImage } from '../components/lazy/LazyComponents';

const Portfolio = memo(() => {
    const { isMobile } = useSelector(({ metadata }) => metadata)
    const portfolioRef = useRef(null)
    const dispatch = useDispatch()
    const [ brands, setBrands ] = useState('all')
    const { themeKey } = useTheme()
    const [hoveredTab, setHoveredTab] = useState(null)
    const [hoveredCardIndex, setHoveredCardIndex] = useState(null)
    const [isTransitioning, setIsTransitioning] = useState(false)
    
    // Safe way to handle refs with Redux - store the element ID instead of the ref itself
    useEffect(() => {
        if (portfolioRef.current) {
            // Use an ID-based approach instead of passing the ref directly
            portfolioRef.current.id = 'portfolio-section';
            dispatch(setReference({name: 'portfolio', value: 'portfolio-section' }))
        }
    }, [dispatch])

    // Animation handling optimized - now using external CSS file

    // Generate random positions for stars - further reduced for better performance
    const stars = useMemo(() => {
        const starsArray = [];
        // Further reduced star count for better performance
        for (let i = 0; i < 6; i++) {
            // Using only 2 delay classes to reduce composited animations
            const delayIndex = i % 2;
            starsArray.push({
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                delayClass: `portfolio-star-delay-${delayIndex}`,
                opacity: 0.3 + Math.random() * 0.5,
                size: 1 + Math.random() * 2
            });
        }
        return starsArray;
    }, []);

    let labels = [
        "Website",
        "Mobile",
        "Ecommerce"
    ]

    if(!isMobile){
        labels = ['All', ...labels]
    }

    useEffect(() => {
        if(isMobile) setBrands('website')
    }, [isMobile])

    const handleTabHover = useCallback((index) => {
        setHoveredTab(index);
    }, []);

    const handleTabLeave = useCallback(() => {
        setHoveredTab(null);
    }, []);

    const handleCardHover = useCallback((index) => {
        setHoveredCardIndex(index);
    }, []);

    const handleCardLeave = useCallback(() => {
        setHoveredCardIndex(null);
    }, []);
    
    // Filter portfolio items only once when brands changes
    const filteredPortfolio = useMemo(() => {
        return portfolio.filter(item => {
            if (brands === 'all') return true;
            return item.brand === brands;
        });
    }, [brands]);

    return (
        <div 
            ref={portfolioRef}
            className={`grid grid-cols-1 gap-6 px-4 sm:px-8 relative py-10`}
            style={{
                background: 'var(--color-background)',
                position: 'relative',
                zIndex: 0,
                minHeight: '100vh',
                overflow: 'hidden'
            }}
        >
            {/* Semi-transparent overlay for better contrast - About Me style */}
            <div 
                className="absolute inset-0 z-0" 
                style={{
                    background: themeKey === 'minimalist' ? 
                        'linear-gradient(to bottom, rgba(245, 245, 247, 0.7), rgba(245, 245, 247, 0.9))' : 
                        `linear-gradient(to bottom, rgba(var(--color-background-rgb), 0.8), rgba(var(--color-background-rgb), 0.95))`,
                    backdropFilter: 'blur(5px)',
                }}
            ></div>
            
            {/* Decorative accent shapes - reduced for better performance */}
            <div className="accent-shape accent-shape-portfolio-1"></div>
            <div className="accent-shape accent-shape-portfolio-2"></div>
            
            {/* Reduced star elements for better performance */}
            {stars.map((star, i) => (
                <div 
                    key={i} 
                    className={`star ${star.delayClass}`}
                    style={{
                        top: star.top,
                        left: star.left,
                        opacity: star.opacity,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        transform: 'translate3d(0, 0, 0)', // Force GPU acceleration
                    }}
                ></div>
            ))}
            
            {/* Further reduced particle effects for better performance */}
            <div className="particles-portfolio">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className={`particle particle-${i+1}`}></div>
                ))}
            </div>
            
            {/* Portfolio Title with About Me inspired styling */}
            <div className="w-full flex items-center mb-8 px-2 sm:px-8 z-10">
                <div className="h-[3px] w-[30px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mr-4 rounded-full"></div>
                <Title 
                    label={PORTFOLIO} 
                    style={{
                        color: 'var(--color-primary)', 
                        textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        fontFamily: FONT_FAMILY,
                    }}
                />
                <div className="h-[3px] flex-grow bg-gradient-to-r from-[var(--color-accent)] to-transparent ml-4 rounded-full"></div>
            </div>
            
            {/* Category tabs with enhanced About Me inspired styling */}
            <div className="flex flex-wrap justify-center gap-5 sm:gap-8 mt-3 mb-8 relative z-10">
                {/* Glass morphism container inspired by About Me */}
                <div className="tab-container relative p-4 sm:p-5 rounded-xl" style={{
                    width: 'fit-content',
                    minWidth: '240px'
                }}>
                    <div
                        className="absolute inset-0 -z-1 rounded-xl"
                        style={{
                            background: themeKey === 'minimalist' 
                                ? 'rgba(255, 255, 255, 0.6)'
                                : themeKey === 'tech'
                                    ? 'rgba(13, 27, 42, 0.5)'
                                    : 'rgba(26, 26, 26, 0.5)',
                            backdropFilter: 'blur(8px)',
                            boxShadow: `0 10px 30px rgba(0, 0, 0, 0.1)`,
                            border: themeKey === 'minimalist'
                                ? '1px solid rgba(255, 255, 255, 0.8)'
                                : '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '16px',
                            transform: 'translate3d(0, 0, 0)', // Force GPU acceleration
                        }}
                    ></div>
                
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-5 relative">
                        {labels.map((label, index) => (
                            <div
                                key={label}
                                className={`portfolio-tab px-4 py-2 cursor-pointer relative ${brands === label.toLowerCase() ? 'active' : ''}`}
                                onMouseEnter={() => handleTabHover(index)}
                                onMouseLeave={handleTabLeave}
                                onClick={() => {
                                    if (brands !== label.toLowerCase()) {
                                        setIsTransitioning(true);
                                        setTimeout(() => {
                                            setBrands(label.toLowerCase());
                                            setTimeout(() => {
                                                setIsTransitioning(false);
                                            }, 100);
                                        }, 400);
                                    }
                                }}
                                style={{
                                    color: brands === label.toLowerCase() 
                                        ? 'var(--color-primary)'
                                        : themeKey === 'minimalist' ? '#555' : 'rgba(255, 255, 255, 0.7)',
                                    fontFamily: FONT_FAMILY,
                                    fontWeight: 500,
                                    letterSpacing: '0.5px',
                                    transition: 'all 0.3s ease',
                                    transform: hoveredTab === index || brands === label.toLowerCase() 
                                        ? 'translateY(-2px) translate3d(0, 0, 0)' 
                                        : 'translateY(0) translate3d(0, 0, 0)',
                                    opacity: hoveredTab !== null && hoveredTab !== index && brands !== label.toLowerCase() ? 0.7 : 1,
                                    willChange: 'transform', // Hint for browser optimization
                                }}
                            >
                                {label}
                                
                                {/* Active indicator with gradient */}
                                {brands === label.toLowerCase() && (
                                    <div 
                                        className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 rounded-full portfolio-active-tab-indicator" 
                                    ></div>
                                )}
                                
                                {/* Hover effect */}
                                {hoveredTab === index && brands !== label.toLowerCase() && (
                                    <div 
                                        className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 rounded-full"
                                        style={{
                                            background: 'rgba(var(--color-primary-rgb), 0.3)',
                                            width: '60%',
                                        }}
                                    ></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Portfolio grid with enhanced About Me inspired styling */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 px-4 sm:px-10 md:px-4 lg:px-8 xl:px-16 mx-auto max-w-7xl transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                <Suspense fallback={<div className="col-span-full text-center py-20">Loading projects...</div>}>
                    {filteredPortfolio.map((item, index) => (
                        <div 
                            key={item.name} 
                            className={`transform transition-all duration-700 ease-out portfolio-item-appear portfolio-item-delay-${index % 3}`}
                            onMouseEnter={() => handleCardHover(index)}
                            onMouseLeave={handleCardLeave}
                            style={{
                                opacity: hoveredCardIndex !== null && hoveredCardIndex !== index ? 0.7 : 1,
                                transform: hoveredCardIndex === index ? 'scale(1.03) translate3d(0, 0, 0)' : 'scale(1) translate3d(0, 0, 0)',
                                transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)',
                                willChange: 'transform, opacity', // Hint for browser optimization
                            }}
                        >
                            <CardImage 
                                themeKey={themeKey}
                                {...item}
                            />
                        </div>
                    ))}
                </Suspense>
            </div>
        </div>
    )
});

export default Portfolio;