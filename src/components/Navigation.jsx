import Logo from "./atom/Logo";
import Anchor from "./atom/Anchor";
import { useSelector } from "react-redux";
import { scrollTo } from "../helpers/common";
import Icon from "./atom/Icon";
import { useEffect, useState } from "react";

const Navigation = () => {
    const { scrollTop, listRef, windowWidth } = useSelector(({metadata}) => metadata)
    const [ toggleMenu, setToggleMenu ] = useState(false)
    return (
        <div 
            className="flex flex-row min-w-full" 
            style={{
                ...styles.navigation,
                ...(windowWidth > 600 && scrollTop > 500 ? styles.hideNavigation : null),
            }}
        >
            <div className={`grid justify-items-${!windowWidth || windowWidth >= 600 ? 'center' : 'start'} pl-6  content-end w-[50%]`} >
                <Logo  label="Fegarido" onClick={() => {
                    scrollTo(listRef.homeRef)
                }}/>
            </div>

            <div className={`gap-10 grid grid-cols-6 content-end ${(!windowWidth || windowWidth < 600) ? 'hidden' : ''}`}>
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
                !windowWidth || windowWidth < 600 ?
                <div 
                    className="grid justify-items-end w-full pr-6"
                    onClick={() => setToggleMenu(prevState => !prevState)}
                >
                    {
                        !toggleMenu ? <Icon name={'menu'} className={`cursor-pointer `}/> :
                        <Icon name={'close'} className={`cursor-pointer origin-center rotate-${toggleMenu ? '180' : '0'} transition-all duration-300 `}/>
                    }
                    
                    
                    <div 
                        style={styles.menuList} className={`fixed gap-2  -mr-6 w-full justify-items-end pr-6 pt-4 grid grid-rows-6 content-end transition-all ease-in-out duration-300 ${toggleMenu ? 'h-[20%] opacity-100 mt-12' : 'h-1 pt-10 opacity-0 mt-20'}`}>
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