import Logo from "./atom/Logo";
import Anchor from "./atom/Anchor";
import { useSelector } from "react-redux";
import { scrollTo } from "../helpers/common";
import Icon from "./atom/Icon";
import { useEffect, useState } from "react";
import { LOGO, HOME, ABOUT, SERVICE, PORTFOLIO, CONTACT } from "../helpers/constants";

const Navigation = () => {
    const { scrollTop, listRef, isMobile, refLocation } = useSelector(({metadata}) => metadata)
    const [ toggleMenu, setToggleMenu ] = useState(false)
    const [ currentNavigation, setNavigation ] = useState(refLocation)

    const closeMenu = (ref) => {
        setToggleMenu(false)
        scrollTo(ref)
    }

    const labels = [
        HOME,
        ABOUT,
        SERVICE,
        PORTFOLIO,
        CONTACT,
    ]

    useEffect(() => {
        // Use scrollTop instead of document.documentElement.scrollTop to ensure reactivity
        // Add a small debounce to avoid flickering during rapid scrolling
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
        
        // Small timeout to debounce frequent scroll events
        const timeoutId = setTimeout(updateNavigation, 50);
        return () => clearTimeout(timeoutId);
    }, [scrollTop])

    return (
        <div 
            className="flex flex-row min-w-full items-center" 
            style={{
                ...styles.navigation,
                ...( !isMobile && scrollTop > 500 ? styles.hideNavigation : null),
            }}
        >
            <div className={`grid justify-items-${ !isMobile ? 'center' : 'start'} pl-6 content-center w-[50%]`} >
                <Logo  
                    label={LOGO} 
                    onClick={() => {
                        setNavigation('Home')
                        scrollTo(listRef.home)
                    }}/>
            </div>

            <div className={`gap-6 grid grid-flow-col content-center mx-4 ${ isMobile  ? 'hidden' : ''}`}>
                {
                    labels.map( label => (
                        <Anchor 
                            key={label} 
                            label={label}
                            isActive={label === currentNavigation}
                            onClick={() => {
                                setNavigation(label) // Set active navigation directly on click
                                scrollTo(listRef[label.toLocaleLowerCase()])
                            }} />
                    ))
                }
            </div>

            {    
                 isMobile ?
                <div className="grid justify-items-end w-full pr-6">
                    <Icon 
                        height={24}
                        width={24}
                        onClick={() => setToggleMenu(prevState => !prevState)}
                        name={'menu'} 
                        className={`h-8 w-8 pt-3 pl-2 cursor-pointer origin-center transition-transform duration-300 ${toggleMenu ? 'rotate-90' : ''}`}/>
                    <div 
                        style={styles.menuList} 
                        className={`fixed gap-4 -mr-6 w-full justify-items-end text-right pr-6 pt-3 pb-4 grid grid-rows-6 transition-all ease-in-out duration-300 
                        ${toggleMenu ? 'h-auto opacity-100 mt-12 rounded-b-xl' : 'h-0 pt-10 opacity-0 -z-10'}`}>
                        {
                            labels.map( label => (
                                <Anchor 
                                    key={label}
                                    className={`text-right ${!toggleMenu ? 'hidden' : ''}`}
                                    dark={true}
                                    isActive={label === currentNavigation}
                                    label={label}
                                    onClick={() => {
                                        setNavigation(label) // Set active navigation directly on click
                                        closeMenu(listRef[label.toLocaleLowerCase()])
                                    }}/>
                            ))
                        }
                    </div>
                </div>:null
            }
        </div>
    )
}


const styles = {
    navigation: {
        transition: 'all .4s ease-in-out',
        position: 'absolute',
        left: '0px',
        top: '0px',
        background: 'rgba(8, 8, 12, 0.75)',
        backdropFilter: 'blur(12px)',
        height: '60px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        zIndex: 1000,
    },
    hideNavigation: {
        height: '45px',
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
    },
    menuList: { 
        background: 'rgba(8, 8, 12, 0.9)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        borderRadius: '0 0 10px 10px',
    },
}


export default Navigation;