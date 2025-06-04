import { useState, memo, useCallback } from "react";
import Icon from "./Icon";
import '../../assets/optimized-cardImage.css'
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import { FONT_FAMILY } from "../../helpers/constants";
import OptimizedBackground from "./OptimizedBackground";

// Card animations moved to optimized-cardImage.css for better performance

const CardImage = memo(({ themeKey = 'tech', ...domProps }) => {
    const [flip, setFlip] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
    }, []);

    const handleFlipToggle = useCallback(() => {
        setFlip(prevState => !prevState);
    }, []);

    const handleFlipToFront = useCallback(() => {
        setFlip(false);
    }, []);

    const handleLinkClick = useCallback(() => {
        if (domProps?.link) {
            window.open(domProps.link, '_blank');
        }
    }, [domProps?.link]);

    return (
        <div 
            {...domProps} 
            className="relative grid place-items-center justify-items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Card glowing effect */}
            <div 
                className="absolute inset-0 rounded-xl transition-all duration-500"
                style={{
                    opacity: isHovered ? 0.7 : 0.3,
                    transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                    filter: isHovered ? 'blur(15px)' : 'blur(8px)',
                    background: themeKey === 'minimalist'
                        ? `linear-gradient(135deg, rgba(44, 44, 44, 0.4), rgba(107, 122, 143, 0.4))`
                        : themeKey === 'tech'
                            ? `linear-gradient(135deg, rgba(76, 201, 240, 0.4), rgba(0, 129, 167, 0.4))`
                            : `linear-gradient(135deg, rgba(201, 177, 140, 0.4), rgba(138, 122, 94, 0.4))`,
                }}
            ></div>

            {/* About Me style accent circles */}
            <div 
                className="card-accent-circle"
                style={{
                    width: '150px',
                    height: '150px',
                    top: '-20px',
                    right: '-20px',
                    background: `radial-gradient(circle, var(--color-primary) 0%, transparent 70%)`,
                }}
            ></div>
            
            <div 
                className="card-accent-circle"
                style={{
                    width: '120px',
                    height: '120px',
                    bottom: '-10px',
                    left: '-10px',
                    background: `radial-gradient(circle, var(--color-accent) 0%, transparent 70%)`,
                }}
            ></div>

            <div className="card-flip-container vertical flip-container flex z-10"> 
                <div 
                    className={`flipper ${flip ? 'flip' : ''} flex-1 h-72 w-72 overflow-hidden rounded-xl card-img-container card-floating-1`}
                    style={{
                        position: 'relative',
                        boxShadow: isHovered ? 
                            `0 15px 30px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(var(--color-primary-rgb), 0.1), 0 0 20px rgba(var(--color-primary-rgb), 0.2)` : 
                            '0 5px 15px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(var(--color-primary-rgb), 0.05)',
                        transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)',
                        transform: isHovered && !flip ? 'scale(1.03)' : 'scale(1)',
                    }}
                >
                    {/* Animated border effect */}
                    <div className="card-img-border"></div>
                    
                    {/* Shimmer effect */}
                    {isHovered && <div className="card-shimmer-effect"></div>}
                    
                    <OptimizedBackground
                        className="front rounded-xl relative"
                        src={domProps.url}
                        webpSrc={domProps.webp || domProps.url.replace(/\.(png|jpg|jpeg)$/, '.webp')}
                        width={288}
                        height={288}
                        aria-label={domProps.name}
                        role="img"
                        bgSize="cover"
                        bgPosition="center"
                    >
                        {/* Overlay gradient for better text visibility */}
                        <div 
                            className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300"
                            style={{
                                background: 'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.8) 100%)',
                                opacity: isHovered ? 0.9 : 0,
                                backdropFilter: isHovered ? 'blur(2px)' : 'none',
                                transform: 'translate3d(0, 0, 0)', // Force GPU acceleration
                            }}
                        ></div>

                        {/* Project name on hover - About Me inspired styling */}
                        <div 
                            className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-8 opacity-0 transition-all duration-300"
                            style={{
                                opacity: isHovered ? 1 : 0,
                                transform: isHovered ? 'translateY(0) translate3d(0, 0, 0)' : 'translateY(8px) translate3d(0, 0, 0)', // Force GPU acceleration
                                willChange: 'transform, opacity',
                            }}
                        >
                            <h3 className="text-white font-medium text-lg" style={{
                                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                                fontFamily: FONT_FAMILY,
                                letterSpacing: '1px',
                            }}>{domProps.name}</h3>
                            
                            <div 
                                className="w-12 h-0.5 my-2 rounded-full"
                                style={{
                                    background: `linear-gradient(to right, var(--color-primary), var(--color-accent))`,
                                    boxShadow: '0 0 5px rgba(var(--color-primary-rgb), 0.7)',
                                }}
                            ></div>
                            
                            {/* Tech tags - About Me styled */}
                            {domProps.tags && domProps.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1 mt-2">
                                    {domProps.tags.slice(0, 3).map((tag, index) => (
                                        <span 
                                            key={index} 
                                            className="text-xs px-2 py-0.5 rounded-full" 
                                            style={{
                                                background: 'rgba(var(--color-primary-rgb), 0.3)',
                                                color: 'white',
                                                backdropFilter: 'blur(4px)',
                                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                                textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                                                fontFamily: FONT_FAMILY,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </OptimizedBackground>
                    <div 
                        className="back rounded-xl h-72 w-72"
                        style={{
                            background: themeKey === 'minimalist' 
                                ? 'rgba(255, 255, 255, 0.85)' 
                                : themeKey === 'tech'
                                    ? 'rgba(13, 27, 42, 0.85)'
                                    : 'rgba(26, 26, 26, 0.85)',
                            backdropFilter: 'blur(12px)',
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            border: themeKey === 'minimalist'
                                ? '1px solid rgba(0, 0, 0, 0.08)'
                                : '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: 'inset 0 0 20px rgba(var(--color-primary-rgb), 0.1)',
                            transform: 'translate3d(0, 0, 0) rotateY(180deg)', // Force GPU acceleration
                        }}
                    >
                        <div>
                            <CardTitle 
                                label={domProps.name} 
                                className="text-lg font-bold mb-3"
                                style={{
                                    color: 'var(--color-primary)',
                                    fontFamily: FONT_FAMILY,
                                    letterSpacing: '1px',
                                    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                                    background: 'linear-gradient(to right, var(--color-primary), var(--color-accent))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            />
                            
                            <div 
                                className="w-16 h-0.5 mb-4 rounded-full"
                                style={{
                                    background: `linear-gradient(to right, var(--color-primary), var(--color-accent))`,
                                    boxShadow: '0 0 5px rgba(var(--color-primary-rgb), 0.5)',
                                }}
                            ></div>
                            
                            <CardDescription 
                                className="text-sm leading-relaxed" 
                                label={domProps.description}
                                style={{
                                    color: 'var(--color-primary)',
                                    opacity: 0.85,
                                    fontFamily: FONT_FAMILY,
                                    letterSpacing: '0.5px',
                                    maxHeight: '9rem',
                                    overflow: 'auto',
                                    textAlign: 'left'
                                }}
                            />
                        </div>
                        
                        {/* Back to front button - About Me styled */}
                        <div className="flex justify-end mt-3">
                            <button 
                                className="text-xs uppercase tracking-wider flex items-center gap-1 card-action-btn"
                                onClick={handleFlipToFront}
                                style={{
                                    color: 'var(--color-primary)',
                                    fontFamily: FONT_FAMILY,
                                    letterSpacing: '1px',
                                    opacity: 0.8,
                                    padding: '3px 8px',
                                    borderRadius: '12px',
                                    background: 'rgba(var(--color-primary-rgb), 0.1)',
                                    border: '1px solid rgba(var(--color-primary-rgb), 0.2)',
                                }}
                            >
                                <span>Back</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action buttons overlay - About Me styled animations */}
            <div className="absolute grid place-items-center justify-items-center opacity-0 hover:opacity-100 transition-all duration-300 z-20 w-full h-full p-2">
                <div className="flex flex-row gap-4">
                    <Icon 
                        height={24}
                        width={24}
                        className="card-action-btn cursor-pointer rotate-45 p-2 card-button-appear"
                        style={{
                            background: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`,
                            borderRadius: '50%',
                            boxShadow: '0 3px 10px rgba(0, 0, 0, 0.15), 0 0 15px rgba(var(--color-primary-rgb), 0.5)',
                            color: themeKey === 'minimalist' ? '#fff' : '#fff',
                            animationDelay: '0.1s',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                        }}
                        name={'link'}
                        onClick={handleLinkClick}
                    />  
                    <Icon 
                        height={24}
                        width={24}
                        className="card-action-btn cursor-pointer p-2 card-button-appear"
                        style={{
                            background: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`,
                            borderRadius: '50%',
                            boxShadow: '0 3px 10px rgba(0, 0, 0, 0.15), 0 0 15px rgba(var(--color-primary-rgb), 0.5)',
                            color: themeKey === 'minimalist' ? '#fff' : '#fff',
                            animationDelay: '0.2s',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                        }}
                        name={'description'}
                        onClick={handleFlipToggle}
                    /> 
                </div>
            </div>
                   
        </div>
    )
});

export default CardImage;