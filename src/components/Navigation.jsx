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
        <div 
            className="flex flex-row min-w-full items-center justify-between"
            style={{
                position: 'fixed',
                left: '0px',
                top: '0px',
                background: 'rgba(var(--color-background-rgb), 0.75)',
                backdropFilter: 'blur(12px)',
                height: '60px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                zIndex: 1000,
                transition: 'all .4s ease-in-out',
                ...(scrollTop > 500 && !isMobile ? {
                    height: '45px',
                    background: 'rgba(var(--color-background-rgb), 0.85)',
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
                } : {})
            }}
        >
            <div className={`${isSmallScreen ? 'pl-3' : 'pl-6'} content-center`}>
                <Logo  
                    label={LOGO} 
                    onClick={() => {
                        setNavigation('Home')
                        scrollTo(listRef.home)
                    }}
                    className={isSmallScreen ? "scale-90" : ""}
                />
            </div>

            <div className={`grid grid-flow-col content-center ${isMobile ? 'hidden' : isSmallScreen ? 'gap-3 mr-3' : 'gap-6 mr-6'}`}>
                {
                    labels.map(label => (
                        <Anchor 
                            key={label} 
                            label={label}
                            isActive={label === currentNavigation}
                            className={isSmallScreen ? "text-sm px-1" : ""} 
                            onClick={() => {
                                setNavigation(label)
                                scrollTo(listRef[label.toLocaleLowerCase()])
                            }} 
                        />
                    ))
                }
            </div>

            {isMobile && (
                <div className="grid justify-items-end pr-6">
                    <Icon 
                        height={24}
                        width={24}
                        onClick={() => setToggleMenu(prevState => !prevState)}
                        name={'menu'} 
                        className={`h-8 w-8 pt-3 pl-2 cursor-pointer origin-center transition-transform duration-300 ${toggleMenu ? 'rotate-90' : ''}`}
                    />
                    <div 
                        style={{
                            background: 'rgba(var(--color-background-rgb), 0.9)',
                            backdropFilter: 'blur(16px)',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                            borderRadius: '0 0 10px 10px',
                        }}
                        className={`fixed gap-4 -mr-6 w-full justify-items-end text-right pr-6 pt-3 pb-4 grid grid-rows-6 transition-all ease-in-out duration-300 
                        ${toggleMenu ? 'h-auto opacity-100 mt-12 rounded-b-xl' : 'h-0 pt-10 opacity-0 -z-10'}`}
                    >
                        {
                            labels.map(label => (
                                <Anchor 
                                    key={label}
                                    className={`text-right ${!toggleMenu ? 'hidden' : ''}`}
                                    isActive={label === currentNavigation}
                                    label={label}
                                    onClick={() => {
                                        setNavigation(label)
                                        closeMenu(listRef[label.toLocaleLowerCase()])
                                    }}
                                />
                            ))
                        }
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navigation;