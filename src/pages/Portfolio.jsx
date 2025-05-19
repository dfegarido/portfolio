import { useState, Suspense, lazy, useEffect, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../components/atom/Title";
import Anchor from '../components/atom/Anchor'
import { setReference } from "../store/metadata";
import { portfolio } from "../helpers/config";
import { PORTFOLIO, FONT_FAMILY } from "../helpers/constants";
import { useTheme } from "../contexts/ThemeContext";

const CardImage = lazy(() => import('../components/atom/CardImage'));

// Enhanced animations for the portfolio section with About Me approach
const portfolioAnimations = `
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
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
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

@keyframes twinkle {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.7; }
}

@keyframes scaleInOut {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

@keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 5px rgba(var(--color-primary-rgb), 0.3); }
    50% { box-shadow: 0 0 15px rgba(var(--color-primary-rgb), 0.6), 0 0 30px rgba(var(--color-accent-rgb), 0.3); }
}

@keyframes tabContainerHover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-3px); }
}

@keyframes fadeOutIn {
    0% { opacity: 1; transform: scale(1); }
    50% { opacity: 0; transform: scale(0.98); }
    100% { opacity: 1; transform: scale(1); }
}

.portfolio-grid-transitioning {
    animation: fadeOutIn 0.6s ease-out;
}

.portfolio-tab {
    transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1.0);
    position: relative;
    z-index: 1;
}

.portfolio-tab::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 2px;
    width: 0;
    background: linear-gradient(to right, var(--color-primary), var(--color-accent));
    transition: width 0.3s ease;
}

.portfolio-tab.active::after {
    width: 100%;
}

.portfolio-tab.active {
    color: var(--color-primary);
    font-weight: 500;
}

.portfolio-card {
    animation: fadeIn 0.6s ease-out forwards;
}

.grid-container {
    position: relative;
}

.grid-background-pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.05;
}

/* About Me inspired styling */
.accent-shape {
    position: absolute;
    border-radius: 50%;
    opacity: 0.6;
    filter: blur(50px);
    z-index: -1;
}

.accent-shape-portfolio-1 {
    width: 250px;
    height: 250px;
    top: -50px;
    right: 10%;
    background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%);
    animation: pulse 8s infinite;
}

.accent-shape-portfolio-2 {
    width: 300px;
    height: 300px;
    bottom: 100px;
    left: 5%;
    background: radial-gradient(circle, var(--color-accent) 0%, transparent 70%);
    animation: pulse 10s infinite reverse;
}

/* Enhanced particle styling matching About Me */
.particles-portfolio .particle {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--color-primary);
    opacity: 0.6;
    animation: float 10s infinite ease-in-out;
}

.particles-portfolio .particle-1 { top: 15%; left: 10%; animation-delay: 0s; }
.particles-portfolio .particle-2 { top: 25%; right: 15%; animation-delay: 1s; }
.particles-portfolio .particle-3 { bottom: 30%; left: 20%; animation-delay: 2s; }
.particles-portfolio .particle-4 { bottom: 10%; right: 30%; animation-delay: 3s; }
.particles-portfolio .particle-5 { top: 45%; left: 5%; animation-delay: 4s; }
.particles-portfolio .particle-6 { top: 50%; right: 8%; animation-delay: 5s; }
.particles-portfolio .particle-7 { bottom: 40%; left: 25%; animation-delay: 6s; }
.particles-portfolio .particle-8 { bottom: 60%; right: 15%; animation-delay: 7s; }

/* New decorative elements */
.rotating-circle {
    position: absolute;
    width: 200px;
    height: 200px;
    border: 1px dashed rgba(var(--color-primary-rgb), 0.2);
    border-radius: 50%;
    animation: rotateSlow 60s linear infinite;
    opacity: 0.5;
    z-index: -1;
}

.star {
    position: absolute;
    width: 2px;
    height: 2px;
    background-color: var(--color-primary);
    border-radius: 50%;
    animation: twinkle 3s infinite;
    z-index: -1;
}

.portfolio-grid-highlight {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 20px 20px;
    background-image: radial-gradient(circle, rgba(var(--color-primary-rgb), 0.5) 1px, transparent 1px);
    mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%);
    opacity: 0.1;
    animation: scaleInOut 10s infinite ease-in-out;
}

.tab-container {
    position: relative;
    z-index: 10;
    backdrop-filter: blur(10px);
    border-radius: 16px;
    animation: glowPulse 4s infinite;
    display: inline-block;
    margin: 0 auto;
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1.0), box-shadow 0.3s ease;
}

.tab-container:hover {
    animation: tabContainerHover 0.3s forwards;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15), 0 0 20px rgba(var(--color-primary-rgb), 0.15);
}
`;

const Portfolio = () => {
    const { isMobile } = useSelector(({ metadata }) => metadata)
    const portfolioRef = useRef(null)
    const dispatch = useDispatch()
    const [ brands, setBrands ] = useState('all')
    const { themeKey, theme } = useTheme()
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

    // Inject animations into the document
    useEffect(() => {
        const styleEl = document.createElement('style');
        styleEl.type = 'text/css';
        styleEl.id = 'portfolio-animations';
        styleEl.appendChild(document.createTextNode(portfolioAnimations));
        
        if (!document.getElementById('portfolio-animations')) {
            document.head.appendChild(styleEl);
        }
        
        return () => {
            const existingStyle = document.getElementById('portfolio-animations');
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

    const stars = generateStars(30);

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

    const handleTabHover = (index) => {
        setHoveredTab(index);
    }

    const handleTabLeave = () => {
        setHoveredTab(null);
    }

    const handleCardHover = (index) => {
        setHoveredCardIndex(index);
    }

    const handleCardLeave = () => {
        setHoveredCardIndex(null);
    }

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
            
            {/* Decorative accent shapes from About Me */}
            <div className="accent-shape accent-shape-portfolio-1"></div>
            <div className="accent-shape accent-shape-portfolio-2"></div>
            <div className="accent-shape" style={{
                width: '180px',
                height: '180px',
                top: '40%',
                right: '25%',
                background: 'radial-gradient(circle, rgba(var(--color-primary-rgb), 0.5) 0%, transparent 70%)',
                animation: 'pulse 12s infinite ease-in-out 1s',
            }}></div>
            
            {/* Rotating circle decorative elements */}
            <div className="rotating-circle" style={{ top: '15%', left: '8%' }}></div>
            <div className="rotating-circle" style={{ bottom: '10%', right: '5%', animationDirection: 'reverse', width: '150px', height: '150px' }}></div>
            
            {/* Star elements */}
            {stars.map((star, i) => (
                <div 
                    key={i} 
                    className="star" 
                    style={{
                        top: star.top,
                        left: star.left,
                        animationDelay: star.animationDelay,
                        opacity: star.opacity,
                        width: `${star.size}px`,
                        height: `${star.size}px`
                    }}
                ></div>
            ))}
            
            {/* Particle effects from About Me */}
            <div className="particles-portfolio">
                {[...Array(8)].map((_, i) => (
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
                                        : themeKey === 'minimalist' ? 'rgba(44, 44, 44, 0.7)' : 'var(--color-secondary)',
                                    fontFamily: FONT_FAMILY,
                                    letterSpacing: '1.5px',
                                    fontSize: '0.9rem',
                                    fontWeight: brands === label.toLowerCase() ? '600' : '400',
                                    transform: hoveredTab === index ? 'translateY(-2px)' : 'translateY(0)',
                                    transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1.0)',
                                }}
                            >
                                {label}
                                
                                {/* Enhanced glowing indicator inspired by About Me */}
                                {(brands === label.toLowerCase() || hoveredTab === index) && (
                                    <div 
                                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-2 h-2 rounded-full"
                                        style={{
                                            background: 'var(--color-primary)',
                                            boxShadow: '0 0 15px var(--color-primary), 0 0 5px var(--color-primary)',
                                            opacity: hoveredTab === index && brands !== label.toLowerCase() ? 0.7 : 1,
                                            animation: brands === label.toLowerCase() ? 'pulse 2s infinite' : 'none'
                                        }}
                                    ></div>
                                )}

                                {/* Bottom bar indicator - matches About Me styling */}
                                {brands === label.toLowerCase() && (
                                    <div 
                                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                                        style={{
                                            background: 'linear-gradient(to right, var(--color-primary), var(--color-accent))',
                                            boxShadow: '0 0 10px rgba(var(--color-primary-rgb), 0.5)',
                                        }}
                                    ></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Project grid with enhanced About Me styling approach */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 mx-auto relative z-10 ${isTransitioning ? 'portfolio-grid-transitioning' : ''}`}>
                {/* Enhanced decorative grid background - About Me style */}
                <div className="absolute inset-0 -z-10" 
                    style={{
                        backgroundImage: `radial-gradient(rgba(var(--color-primary-rgb), 0.07) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px',
                        opacity: 0.5,
                        animation: 'fadeInBackground 1.5s ease-in-out forwards'
                    }}
                ></div>
                
                {/* Grid highlight effect */}
                <div className="portfolio-grid-highlight"></div>
                
                {isTransitioning ? (
                    // Loading placeholders during transition
                    Array(6).fill(0).map((_, i) => (
                        <div key={`placeholder-${i}`} className="w-72 h-72 rounded-xl flex items-center justify-center" style={{
                            background: themeKey === 'minimalist' 
                                ? 'rgba(255, 255, 255, 0.2)'
                                : 'rgba(0, 0, 0, 0.2)',
                            backdropFilter: 'blur(5px)',
                            border: `1px solid rgba(var(--color-primary-rgb), 0.1)`,
                            opacity: 0.7,
                        }}>
                            <div className="card-loading-indicator"></div>
                        </div>
                    ))
                ) : (
                    portfolio
                        .filter(({ brand }) => brand === brands || 'all' === brands)
                        .map((items, key) => (
                            <Suspense key={key} fallback={
                                <div className="w-72 h-72 rounded-xl flex items-center justify-center" style={{
                                    background: themeKey === 'minimalist' 
                                        ? 'rgba(255, 255, 255, 0.2)'
                                        : 'rgba(0, 0, 0, 0.2)',
                                    backdropFilter: 'blur(5px)',
                                    border: `1px solid rgba(var(--color-primary-rgb), 0.1)`,
                                }}>
                                    <div className="w-10 h-10 rounded-full animate-pulse" style={{
                                        background: 'var(--color-primary)'
                                    }}></div>
                                </div>
                            }>
                                <div 
                                    className="portfolio-card filtered-in"
                                    onMouseEnter={() => handleCardHover(key)}
                                    onMouseLeave={handleCardLeave} 
                                    style={{ 
                                        animationDelay: `${key * 0.1}s`,
                                        transform: 'translateZ(0)',
                                        position: 'relative',
                                    }}
                                >
                                    {/* Individual card accent circles - only visible on hover */}
                                    {hoveredCardIndex === key && (
                                        <>
                                            <div className="absolute w-40 h-40 -top-5 -right-5 rounded-full opacity-20 z-0"
                                                style={{
                                                    background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
                                                    filter: 'blur(20px)',
                                                    animation: 'pulse 3s infinite'
                                                }}
                                            ></div>
                                            <div className="absolute w-32 h-32 -bottom-4 -left-4 rounded-full opacity-20 z-0"
                                                style={{
                                                    background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
                                                    filter: 'blur(15px)',
                                                    animation: 'pulse 4s infinite reverse'
                                                }}
                                            ></div>
                                        </>
                                    )}
                                    <CardImage {...items} themeKey={themeKey} tags={['React', 'Node.js']} />
                                </div>
                            </Suspense>
                        ))
                )}
            </div>
        </div>
    )
}

export default Portfolio;