import { useState, Suspense } from "react"
import { useDispatch, useSelector } from "react-redux"
import CharacterAnimation from "../components/CharacterAnimation"
import { useEffect, useRef } from "react"
import { setReference } from "../store/metadata"
import { scrollTo } from "../helpers/common";
import { 
    WHITE,
    FONT_FAMILY,
    LIGHT_GRAY,
    LIME } from '../helpers/constants'
import Button from '../components/atom/Button'
import { landingPage } from "../helpers/config"

// Import from centralized lazy loading
import { About, Services, Portfolio, Contact } from '../components/lazy/LazyComponents'


const Body = () => {
    const [isBtnHover, setBtnHover] = useState(false)
    const { windowHeight, scrollTop, listRef, isMobile }  = useSelector(({ metadata }) => metadata)
    const homeRef = useRef(null)
    const dispatch = useDispatch()
    const { greetings, fullname: name, description: nameToAnimate } = landingPage
    // Use CSS variables for theme-aware styling
    

    const closeMenu = (ref) => {
        scrollTo(ref)
    }

    useEffect(() => {
        if (homeRef.current) {
            // Use an ID-based approach instead of passing the ref directly
            homeRef.current.id = 'home-section';
            dispatch(setReference({name: 'home', value: 'home-section' }))
            
            // If there's no hash in the URL, ensure we show the home section
            if (!window.location.hash) {
                // Reset scroll position to top on initial load
                window.scrollTo(0, 0);
            }
        }
    }, [dispatch])

    const onHover = () => {
        setBtnHover(true)
    }
    const onLeaveHover = () => {
        setBtnHover(false)
    }

    const onHovering = {
        color: '#fff',
        borderColor: isBtnHover ? 'var(--color-primary)' : 'var(--color-primary)',
        backgroundColor: isBtnHover ? 'rgba(var(--color-primary-rgb), 0.3)' : 'rgba(var(--color-primary-rgb), 0.2)',
        transform: isBtnHover ? 'translateY(-2px)' : 'none',
        boxShadow: isBtnHover ? '0 0 20px rgba(var(--color-primary-rgb), 0.5)' : '0 0 15px rgba(var(--color-primary-rgb), 0.3)',
    }

    return (
        <div 
            ref={homeRef}
            className="flex-1 flex-row ">
            {/* Landing Page Background */}
            <div 
                className={`bg-cover bg-no-repeat bg-center bg-fixed bg-landing-two flex min-w-full relative overflow-hidden`} 
                style={{ 
                    height: `${windowHeight}px`,
                }}>
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                <div className="absolute inset-0 theme-accent-glow" style={{
                    background: `radial-gradient(circle at 50% 50%, rgba(var(--color-primary-rgb), 0.1) 0%, transparent 50%)`,
                    animation: 'pulse 4s ease-in-out infinite'
                }}></div>
                <div 
                    style={{
                        ...styles.container,
                        ...(scrollTop > 200 ? styles.hideContainer : null),
                    }}
                    className={`flex-1 backdrop-blur-sm relative z-10`}>
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <div style={isMobile ? styles.greetingsOnMobile : styles.greetings}>
                            <span className="theme-bracket-color">{"<"}</span>
                            {greetings}
                            <span className="theme-bracket-color">{"/>"}</span>
                        </div>
                        <div style={isMobile ? styles.nameOnMobile : styles.name} 
                             className="theme-gradient-text">
                            {name}
                        </div>
                        <div style={isMobile ? styles.subTextOnMobile : styles.subText}>
                            {landingPage.subText}
                        </div>
                        <div style={isMobile ? styles.iAmOnMobile : styles.iAm}>
                            <div className="theme-bracket-color opacity-75 inline-block mr-4">{"{"}</div>
                            <CharacterAnimation label={nameToAnimate}/>
                            <div className="theme-bracket-color opacity-75 inline-block ml-4">{"}"}</div>
                        </div>
                        <div style={styles.contactBtn}>
                            <Button 
                                onClick={() => closeMenu(listRef.contact)}
                                onMouseEnter={onHover}
                                onMouseLeave={onLeaveHover}
                                label={<span className="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                  </svg>
                                  Chat with me
                                </span>}
                                style={{...styles.contactLabel, ...onHovering}}/>
                        </div>
                    </div>
                </div>
                
            </div>
            <div>
                {/* Pages with Suspense for lazy loading */}
                <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
                </div>}>
                    <About />
                    <Services />
                    <Portfolio />
                    <Contact />
                </Suspense>
            </div>
        </div>
        
    )
}

const styles = {
    container: {
        transition: 'opacity .5s ease-in-out',
        opacity: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
    },
    hideContainer: {
        opacity: '0'
    },
    greetingsOnMobile: {
        fontFamily: FONT_FAMILY,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '2rem',
        lineHeight: '1.2',
        color: WHITE,
        letterSpacing: '3px',
        textShadow: '0 0 15px rgba(var(--color-primary-rgb), 0.4)',
        transform: 'translateZ(0)',
        WebkitFontSmoothing: 'antialiased',
        marginBottom: '1rem',
        transition: 'text-shadow 0.5s ease',
    },
    greetings: {
        fontFamily: FONT_FAMILY,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '3.5rem',
        lineHeight: '1.2',
        color: WHITE,
        letterSpacing: '3px',
        textShadow: '0 0 15px rgba(var(--color-primary-rgb), 0.4)',
        transform: 'translateZ(0)',
        WebkitFontSmoothing: 'antialiased',
        marginBottom: '1.5rem',
        transition: 'text-shadow 0.5s ease',
    },
    nameOnMobile: {
        fontFamily: FONT_FAMILY,
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '3rem',
        lineHeight: '1.2',
        letterSpacing: '4px',
        textShadow: '0 0 30px rgba(var(--color-primary-rgb), 0.6)',
        transform: 'translateZ(0)',
        WebkitFontSmoothing: 'antialiased',
        marginBottom: '1rem',
        transition: 'text-shadow 0.5s ease',
    },
    name: {
        fontFamily: FONT_FAMILY,
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '6rem',
        lineHeight: '1.2',
        letterSpacing: '6px',
        textShadow: '0 0 30px rgba(var(--color-primary-rgb), 0.6)',
        transform: 'translateZ(0)',
        WebkitFontSmoothing: 'antialiased',
        marginBottom: '1.5rem',
        transition: 'text-shadow 0.5s ease',
    },
    subTextOnMobile: {
        fontFamily: FONT_FAMILY,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '1.4rem',
        letterSpacing: '4px',
        opacity: 0.95,
        color: WHITE,
        textShadow: '0 0 10px rgba(var(--color-accent-rgb), 0.3)',
        WebkitFontSmoothing: 'antialiased',
        marginBottom: '1rem',
        transition: 'text-shadow 0.5s ease, color 0.5s ease',
    },
    subText: {
        fontFamily: FONT_FAMILY,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '1.8rem',
        letterSpacing: '4px',
        opacity: 0.95,
        color: WHITE,
        textShadow: '0 0 10px rgba(var(--color-accent-rgb), 0.3)',
        WebkitFontSmoothing: 'antialiased',
        marginBottom: '1.5rem',
        transition: 'text-shadow 0.5s ease, color 0.5s ease',
    },
    iAmOnMobile: {
        fontFamily: FONT_FAMILY,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '15px',
        lineHeight: '40px',
        letterSpacing: '3px',
        color: LIGHT_GRAY,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem',
    },
    iAm: {
        fontFamily: FONT_FAMILY,
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '2rem',
        lineHeight: '68px',
        letterSpacing: '2px',
        color: WHITE,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem',
    },
    contactBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: WHITE,
        marginTop: '1rem',
    },
    contactLabel: {
        fontSize: '20px',
        fontWeight: '700',
        minHeight: '45px',
        letterSpacing: '2px',
        color: '#fff',
        backgroundColor: 'rgba(132, 204, 22, 0.2)',
        borderColor: LIME,
        borderWidth: '2px',
        padding: '0 22px',
        boxShadow: '0 0 15px rgba(132, 204, 22, 0.3)',
        transition: 'all 0.3s ease',
    }
}

export default Body;