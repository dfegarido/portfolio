import { useEffect, useRef, useState, memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import AboutMe from '../components/AboutMe'
import { setReference } from '../store/metadata'
import profileImage from '../assets/profile-image.webp'
import profileImageFallback from '../assets/profile-image.png'
import { useTheme } from '../contexts/ThemeContext'
import { downloadPDF } from '../helpers/common'
import Icon from '../components/atom/Icon'
import OptimizedImage from '../components/atom/OptimizedImage'

const About = memo(() => {
    const aboutRef = useRef(null)
    const dispatch = useDispatch()
    const { themeKey } = useTheme()
    const [isHover, setHover] = useState(false)

    const handleHover = useCallback(() => {
        setHover(true);
    }, []);

    const handleHoverLeave = useCallback(() => {
        setHover(false);
    }, []);

    // Safe way to handle refs with Redux - store the element ID instead of the ref itself
    useEffect(() => {
        if (aboutRef.current) {
            // Use an ID-based approach instead of passing the ref directly
            aboutRef.current.id = 'about-section';
            dispatch(setReference({name: 'about', value: 'about-section' }))
        }
    }, [dispatch])

    return (
        <div 
            ref={aboutRef}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-8 relative py-10`}
            style={{
                background: 'var(--color-background)',
                position: 'relative',
                zIndex: 0,
                transform: 'translate3d(0, 0, 0)' // Force GPU acceleration
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
                }}
            ></div>
            
            {/* Profile image section for mobile */}
            <div className='flex justify-center sm:hidden my-6 z-10'>
                <div className="relative profile-container">
                    <div className="accent-shape accent-shape-1"></div>
                    <div className="accent-shape accent-shape-2"></div>
                    <div className="profile-frame">
                        {/* Replace img with OptimizedImage for better performance */}
                        <OptimizedImage 
                            src={profileImageFallback}
                            webpSrc={profileImage}
                            alt="Profile"
                            width={280}
                            height={280}
                            className="profile-image-mobile"
                        />
                    </div>
                    <div className="absolute inset-0 profile-overlay"></div>
                    <div className="profile-name-badge">
                        Darwin Fegarido
                    </div>
                    
                    {/* Mobile badge */}
                    <div className="role-badge">
                        Full Stack Engineer
                    </div>
                </div>
            </div>
            
            {/* About Me content */}
            <div className="w-full grid justify-items-center relative z-10" >
                <AboutMe />
            </div>
            
            {/* Profile image section for desktop */}
            <div className='hidden sm:flex flex-col items-center justify-start mt-10 relative z-10' >
                <div className="relative profile-container">
                    {/* Background accent shapes */}
                    <div className="accent-shape accent-shape-1"></div>
                    <div className="accent-shape accent-shape-2"></div>
                    
                    {/* Added animated particles - reduced count for better performance */}
                    <div className="particles">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className={`particle particle-${i+1}`}></div>
                        ))}
                    </div>
                    
                    <div className="profile-frame">
                        {/* Replace img with OptimizedImage for better performance */}
                        <OptimizedImage 
                            src={profileImageFallback}
                            webpSrc={profileImage}
                            alt="Profile"
                            width={400}
                            height={400}
                            className="profile-image"
                        />
                        
                        {/* Inner glow effect */}
                        <div className="profile-inner-glow"></div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="code-bracket code-bracket-open">{"{"}</div>
                    <div className="code-bracket code-bracket-close">{"}"}</div>
                    
                    {/* Name badge appears on hover */}
                    <div className="profile-name-badge">
                        Darwin Fegarido
                    </div>
                    
                    {/* Badge */}
                    <div className="role-badge">
                        Full Stack Engineer
                    </div>
                    
                </div>
                <div className="flex justify-center mt-4">
                    {/* Download resume button with elegant and futuristic design */}
                    <div className="w-full flex justify-center sm:justify-start mt-10">
                        <div className="relative group">
                            {/* Light effects */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] opacity-70 blur-md rounded-lg group-hover:opacity-100 group-hover:blur-lg transition-all duration-300"></div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-30 group-hover:opacity-50 animate-gradient-x rounded-lg"></div>
                            
                            {/* Button */}
                            <button 
                                onClick={downloadPDF} 
                                onMouseEnter={handleHover}
                                onMouseLeave={handleHoverLeave}
                                className="relative flex items-center justify-center gap-3 px-6 py-3 backdrop-blur-sm rounded-lg transition-all duration-300 overflow-hidden group-hover:shadow-lg"
                                style={{
                                    background: "var(--color-background)",
                                    color: "var(--color-secondary)",
                                    transform: isHover ? "translateY(-2px) translate3d(0, 0, 0)" : "translateY(0) translate3d(0, 0, 0)",
                                    border: "1px solid rgba(var(--color-primary-rgb), 0.3)",
                                    willChange: 'transform'
                                }}
                            >
                                {/* Button content wrapper */}
                                <div className="flex items-center gap-3 z-10">
                                    {/* Download icon */}
                                    <div className={`relative rounded-full p-2 transition-all duration-300`} 
                                        style={{
                                            background: isHover 
                                                ? `linear-gradient(135deg, var(--color-primary), var(--color-accent))` 
                                                : `var(--color-primary)`,
                                            transform: 'translate3d(0, 0, 0)' // Force GPU acceleration
                                        }}
                                    >
                                        <Icon 
                                            height={18} 
                                            width={18} 
                                            name="download" 
                                            className={`text-white transition-transform duration-300 ${isHover ? 'animate-bounce-subtle' : ''}`}
                                        />
                                    </div>
                                    
                                    {/* Text content */}
                                    <div className="flex flex-col items-start">
                                        <span className="font-bold tracking-wider text-sm">RESUME</span>
                                        <span className="text-xs opacity-70 tracking-widest">DOWNLOAD CV</span>
                                    </div>
                                </div>
                                
                                {/* Moving light effect */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-30 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                                    style={{ 
                                        transform: isHover ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
                                        willChange: 'transform'
                                    }}
                                ></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default About