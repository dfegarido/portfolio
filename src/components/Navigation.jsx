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
        setToggleMenu(prevState => !prevState)
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
        let currentLoc = document.documentElement.scrollTop
        switch (true) {
            case currentLoc < 483:
                setNavigation('Home')
                break;
            case currentLoc < 1200:
                setNavigation('About')
                break;
            case currentLoc < 1859:
                setNavigation('Service')
                break;
            case currentLoc < 2500:
                setNavigation('Portfolio')
                break;
            case currentLoc >= 2500:
                setNavigation('Contact')
                break;
        }
    })

    return (
        <div 
            className="flex flex-row min-w-full" 
            style={{
                ...styles.navigation,
                ...( !isMobile && scrollTop > 500 ? styles.hideNavigation : null),
            }}
        >
            <div className={`grid justify-items-${ !isMobile ? 'center' : 'start'} pl-6  content-end w-[50%]`} >
                <Logo  
                    label={LOGO} 
                    onClick={() => {
                        setNavigation('Home')
                        scrollTo(listRef.home)
                    }}/>
            </div>

            <div  className={`gap-10 grid grid-flow-col content-end mx-4 ${ isMobile  ? 'hidden' : ''}`}>
                {
                    labels.map( label => (
                        <Anchor 
                            key={label} 
                            label={label}
                            isActive={label === currentNavigation}
                            onClick={() => {
                                closeMenu(listRef[label.toLocaleLowerCase()])
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
                        className={`h-8 w-8 pt-3 pl-2 cursor-pointer origin-center `}/>
                    <div 
                        style={styles.menuList} 
                        className={`fixed gap-6 -mr-6 w-full justify-items-end text-right pr-6 pt-1 grid grid-rows-6 transition-all ease-in-out duration-300 ${toggleMenu ? 'h-[20%] opacity-100 mt-12' : 'h-0 pt-10 opacity-0 -z-10'}`}>
                        {
                            labels.map( label => (
                                <Anchor 
                                    key={label}
                                    className={`text-right ${!toggleMenu ? 'hidden' : ''}`}
                                    label={label}
                                    onClick={() => {
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
        transition: 'height .5s',
        position: 'absolute',
        left: '0px',
        top: '0px',
        background: '#000000bf',
        height: '50px',
    },
    hideNavigation: {
        height: '30px',
    },
    menuList: { 
        background: '#000000bf', 
    },
}


export default Navigation;