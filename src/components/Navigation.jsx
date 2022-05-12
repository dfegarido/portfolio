import Logo from "./atom/Logo";
import Anchor from "./atom/Anchor";
import { useSelector } from "react-redux";
import { scrollTo } from "../helpers/common";
import Icon from "./atom/Icon";
import { useEffect, useState } from "react";

const Navigation = () => {
    const { scrollTop, listRef, windowWidth, isMobile } = useSelector(({metadata}) => metadata)
    const [ toggleMenu, setToggleMenu ] = useState(false)

    return (
        <div 
            className="flex flex-row min-w-full" 
            style={{
                ...styles.navigation,
                ...( !isMobile && scrollTop > 500 ? styles.hideNavigation : null),
            }}
        >
            <div className={`grid justify-items-${ !isMobile ? 'center' : 'start'} pl-6  content-end w-[50%]`} >
                <Logo  label="Fegarido" onClick={() => {
                    scrollTo(listRef.homeRef)
                }}/>
            </div>

            <div className={`gap-10 grid grid-cols-6 content-end ${ isMobile  ? 'hidden' : ''}`}>
                <Anchor label="Home" onClick={() => {
                    scrollTo(listRef.homeRef)
                }}/>
                <Anchor label="About" onClick={() => {
                    scrollTo(listRef.aboutRef)
                }}/>
                <Anchor label="Service" onClick={() => {
                    scrollTo(listRef.serviceRef)
                }}/>
                <Anchor label="Portfolio" onClick={() => {
                    scrollTo(listRef.worksRef)
                }}/>
                <Anchor label="Contact" onClick={() => {
                    scrollTo(listRef.contactRef)
                }}/>
            </div>

            {    
                 isMobile ?
                <div className="grid justify-items-end w-full pr-6 ">
                    <Icon 
                        onClick={() => setToggleMenu(prevState => !prevState)}
                        name={'menu'} 
                        className={`h-8 w-8 pt-3 pl-2 cursor-pointer origin-center rotate-${toggleMenu ? '180' : '45'} transition-all duration-100 `}/>
                    <div 
                        style={styles.menuList} 
                        className={`fixed gap-6 -mr-6 w-full justify-items-end text-right pr-6 pt-1 grid grid-rows-6 transition-all ease-in-out duration-300 ${toggleMenu ? 'h-[20%] opacity-100 mt-12' : 'h-1 pt-10 opacity-0 -z-10 mt-20'}`}>
                        <Anchor 
                            className={`text-right`}
                            label="Home" 
                            onClick={() => {
                                scrollTo(listRef.homeRef)
                            }}/>
                        <Anchor 
                            className={`text-right`}
                            label="About" 
                            onClick={() => {
                                scrollTo(listRef.aboutRef)
                            }}/>
                        <Anchor 
                            className={`text-right`}
                            label="Service" 
                            onClick={() => {
                                scrollTo(listRef.serviceRef)
                            }}/>
                        <Anchor 
                            className={`text-right`}
                            label="Portfolio" 
                            onClick={() => {
                                scrollTo(listRef.worksRef)
                            }}/>
                        <Anchor 
                            className={`text-right`}
                            label="Contact" 
                            onClick={() => {
                                scrollTo(listRef.contactRef)
                            }}/>
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
        // width: '1440px',
        // height: '80px',
        left: '0px',
        top: '0px',
        background: '#00000080'
    },
    hideNavigation: {
        height: '30px',
    },
    menuList: { 
        background: '#00000063', 
    }
}


export default Navigation;