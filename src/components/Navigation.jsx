import Logo from "./atom/Logo";
import Anchor from "./atom/Anchor";
import { useSelector } from "react-redux";
import { scrollTo } from "../helpers/common";
import Icon from "./atom/Icon";
import { useEffect, useState, useRef } from "react";
import { LOGO, HOME, ABOUT, SERVICE, PORTFOLIO, CONTACT } from "../helpers/constants";
import { useTheme } from "../contexts/ThemeContext";

const Navigation = () => {
    const { scrollTop, listRef, isMobile, refLocation } = useSelector(({metadata}) => metadata)
    const [ toggleMenu, setToggleMenu ] = useState(false)
    const [ currentNavigation, setNavigation ] = useState(refLocation)
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    // Add a ref to track if this is the initial load
    const isInitialLoad = useRef(true);

    const closeMenu = (ref) => {
        setToggleMenu(false);
        // Navigation is now purposeful, not automatic
        isInitialLoad.current = false;
        scrollTo(ref);
    }

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 1024 && window.innerWidth > 768);
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Add a specific effect to handle URL hash on initial load
    useEffect(() => {
        // Check if there's a hash in the URL on initial load
        const hash = window.location.hash;
        if (hash && isInitialLoad.current) {
            // Strip the # symbol
            const sectionId = hash.substring(1);
            
            // Only scroll if it's a valid section
            if (['home-section', 'about-section', 'service-section', 'portfolio-section', 'contact-section'].includes(sectionId)) {
                // Delay the scroll a bit to ensure the page has properly loaded
                setTimeout(() => {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 500);
            } else {
                // If hash doesn't match any section, ensure we stay at the top
                window.scrollTo(0, 0);
            }
        } else if (isInitialLoad.current) {
            // If no hash and initial load, ensure we're at the top
            window.scrollTo(0, 0);
            setNavigation('Home');
        }
        
        // Mark initial load as complete
        isInitialLoad.current = false;
    }, []);

    useEffect(() => {
        // Skip navigation updates during initial load
        if (isInitialLoad.current) return;
        
        const updateNavigation = () => {
            switch (true) {
                case scrollTop < 483:
                    setNavigation('Home')
                    break;
                case scrollTop < 1200:
                    setNavigation('About')
                    break;
                case scrollTop < 1859:
                    setNavigation('Service')
                    break;
                case scrollTop < 2500:
                    setNavigation('Portfolio')
                    break;
                case scrollTop >= 2500:
                    setNavigation('Contact')
                    break;
                default:
                    setNavigation('Home')
                    break;
            }
        };
        
        const timeoutId = setTimeout(updateNavigation, 50);
        return () => clearTimeout(timeoutId);
    }, [scrollTop])

    const labels = [
        HOME,
        ABOUT,
        SERVICE,
        PORTFOLIO,
        CONTACT,
    ]

    return (
        <nav 
            className="flex flex-row min-w-full items-center justify-between relative"
            style={{
                position: 'fixed',
                left: '0px',
                top: '0px',
                background: 'rgba(var(--color-background-rgb), 0.85)',
                backdropFilter: 'blur(20px)',
                height: isMobile ? '64px' : (scrollTop > 500 ? '50px' : '64px'),
                boxShadow: scrollTop > 100 ? '0 4px 32px rgba(0, 0, 0, 0.15)' : '0 2px 16px rgba(0, 0, 0, 0.1)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                zIndex: 1000,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                willChange: 'transform, background-color, box-shadow'
            }}
        >
            <div className={`${isMobile ? 'pl-4' : isSmallScreen ? 'pl-3' : 'pl-6'} flex items-center`}>
                <Logo  
                    label={LOGO} 
                    onClick={() => {
                        setNavigation('Home')
                        scrollTo(listRef.home)
                        setToggleMenu(false) // Close mobile menu when logo clicked
                    }}
                    className={`${isSmallScreen ? 'scale-90' : ''} cursor-pointer transition-transform hover:scale-105`}
                />
            </div>

            <div className={`${isMobile ? 'hidden' : 'flex items-center'} ${isSmallScreen ? 'gap-2 mr-3' : 'gap-8 mr-6'}`}>
                {
                    labels.map((label, index) => (
                        <div key={label} className="relative">
                            <Anchor 
                                label={label}
                                isActive={label === currentNavigation}
                                className={`${isSmallScreen ? 'text-sm px-2 py-1' : 'px-3 py-2'} transition-all duration-200 hover:scale-105`} 
                                onClick={() => {
                                    setNavigation(label)
                                    scrollTo(listRef[label.toLocaleLowerCase()])
                                }}
                            />
                        </div>
                    ))
                }
            </div>

            {isMobile && (
                <div className="flex items-center pr-4">
                    {/* Enhanced hamburger menu button */}
                    <button
                        onClick={() => setToggleMenu(prevState => !prevState)}
                        className="relative p-3 rounded-lg transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                        style={{
                            background: toggleMenu ? 'rgba(var(--color-primary-rgb), 0.1)' : 'transparent'
                        }}
                        aria-label="Toggle navigation menu"
                        aria-expanded={toggleMenu}
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${toggleMenu ? 'rotate-45 translate-y-1.5' : 'translate-y-0'}`} style={{ backgroundColor: 'var(--color-primary)' }} />
                            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 my-1 ${toggleMenu ? 'opacity-0' : 'opacity-100'}`} style={{ backgroundColor: 'var(--color-primary)' }} />
                            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${toggleMenu ? '-rotate-45 -translate-y-1.5' : 'translate-y-0'}`} style={{ backgroundColor: 'var(--color-primary)' }} />
                        </div>
                    </button>
                    {/* Enhanced mobile menu dropdown */}
                    <div 
                        style={{
                            background: 'rgba(var(--color-background-rgb), 0.95)',
                            backdropFilter: 'blur(20px)',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                            borderRadius: '0 0 16px 16px',
                        }}
                        className={`fixed left-0 w-full transition-all duration-300 ease-in-out overflow-hidden
                        ${toggleMenu ? 'top-16 opacity-100 visible' : 'top-0 opacity-0 invisible'}`}
                    >
                        <div className="px-4 py-6 space-y-1">
                            {
                                labels.map((label, index) => (
                                    <div
                                        key={label}
                                        className={`transform transition-all duration-300 delay-${index * 50}
                                        ${toggleMenu ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                                    >
                                        <Anchor 
                                            className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200
                                            ${label === currentNavigation ? 'bg-white/10 text-primary' : 'hover:bg-white/5'}`}
                                            isActive={label === currentNavigation}
                                            label={label}
                                            onClick={() => {
                                                setNavigation(label)
                                                closeMenu(listRef[label.toLocaleLowerCase()])
                                            }}
                                        />
                                    </div>
                                ))
                            }
                            
                            {/* Mobile menu footer */}
                            <div className="pt-4 mt-4 border-t border-white/10">
                                <div className="text-center text-sm opacity-70" style={{ color: 'var(--color-primary)' }}>
                                    Darwin Fegarido - Backend Engineer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation;