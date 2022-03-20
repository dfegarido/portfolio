import Logo from "./atom/Logo";
import Anchor from "./atom/Anchor";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navigation = () => {
    const { scrollTop } = useSelector(({metadata}) => metadata)

    return (
        <div 
            className="flex flex-row min-w-full" 
            style={{
                ...styles.navigation,
                ...(scrollTop > 500 ? styles.hideNavigation : null)
            }}
        >
            <div className="grid justify-items-center  content-end w-[50%]" >
                <Logo  label="Fegarido" />
            </div>
            <div className="grid grid-cols-6 gap-10 content-end ">
                <Anchor label="Home" />
                <Anchor label="About" />
                <Anchor label="Service" />
                <Anchor label="Works" />
                <Anchor label="Blog" />
                <Anchor label="Contact" />
                
            </div>
        </div>
    )
}


const styles = {
    navigation: {
        transition: 'height .5s',
        position: 'absolute',
        width: '1440px',
        height: '80px',
        left: '0px',
        top: '0px',
        background: '#00000080'
    },
    hideNavigation: {
        height: '30px',
    }
}


export default Navigation;