import { useState } from "react";
import { useSelector } from "react-redux";
import { PRIMARY, SECONDARY } from "../../helpers/constants";


const Logo = ({ label, onClick }) => {
    const { scrollTop, isMobile } = useSelector(({ metadata }) => metadata )
    const [ isHover, setHover ] = useState(false)

    const getGradient = () => {
        if (isHover) {
            return 'linear-gradient(45deg, #fff, #a3e635)'
        }
        if (!isMobile && scrollTop > 500) {
            return 'linear-gradient(45deg, #84cc16, #fff)'
        }
        if (isMobile) {
            return 'linear-gradient(45deg, #fff, #84cc16)'
        }
        return 'linear-gradient(45deg, #fff, #a3e635)'
    }

    const hoverStyle = isHover ? {
        transform: 'perspective(500px) translateZ(10px) scale(1.03)',
        textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(163,230,53,0.6)',
    } : {};

    return (
        <h1 
            style={{
                ...styles.logo,
                backgroundImage: getGradient(),
                ...( !isMobile && scrollTop > 500 ? styles.onScrollTop : null),
                ...( isMobile ? styles.mobile : null),
                ...hoverStyle
            }}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {`{ ${label} }`}
        </h1>
    )
}


const styles = {
    logo: {
        transition: 'all .4s ease-in-out',
        width: 'auto',
        minWidth: '184px',
        height: '48px',
        fontWeight: '800',
        fontSize: '30px',
        lineHeight: '48px',
        cursor: 'pointer',
        letterSpacing: '5px',
        textShadow: '0 0 15px rgba(255,255,255,0.5)',
        position: 'relative',
        backgroundImage: 'linear-gradient(45deg, #fff, #a3e635)',
        backgroundSize: '100%',
        backgroundRepeat: 'repeat',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        MozBackgroundClip: 'text',
        MozTextFillColor: 'transparent',
        display: 'inline-block',
        padding: '0 5px',
        transform: 'perspective(500px) translateZ(0px)',
    },
    onScrollTop: {
        fontSize: '25px',
        lineHeight: '45px',
        textShadow: '0 0 20px rgba(255,255,255,0.6)',
    },
    mobile: {
        lineHeight: '3rem',
        fontSize: '1.5rem',
        textShadow: '0 0 15px rgba(255,255,255,0.5)',
    }
}


export default Logo;