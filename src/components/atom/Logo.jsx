import { useState } from "react";
import { useSelector } from "react-redux";
import { PRIMARY, SECONDARY } from "../../helpers/constants";
import { useTheme } from "../../contexts/ThemeContext";


const Logo = ({ label, onClick }) => {
    const { scrollTop, isMobile } = useSelector(({ metadata }) => metadata )
    const [ isHover, setHover ] = useState(false)
    const { theme, themeKey } = useTheme();

    const getGradient = () => {
        if (isHover) {
            return `linear-gradient(45deg, ${theme.secondary}, ${theme.primary})`
        }
        if (!isMobile && scrollTop > 500) {
            return `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`
        }
        if (isMobile) {
            return `linear-gradient(45deg, ${theme.secondary}, ${theme.primary})`
        }
        return `linear-gradient(45deg, ${theme.secondary}, ${theme.primary})`
    }

    const hoverStyle = isHover ? {
        transform: 'perspective(500px) translateZ(10px) scale(1.03)',
        textShadow: `0 0 20px rgba(${theme.secondaryRGB},0.8), 0 0 30px rgba(${theme.primaryRGB},0.6)`,
    } : {};

    return (
        <h1 
            key={`logo-${themeKey}`} // Force re-render on theme change
            className="animated-text" // Use our common animated text class
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
        position: 'relative',
        // Background image will be set dynamically through getGradient()
        backgroundSize: '100%',
        backgroundRepeat: 'repeat',
        padding: '0 5px',
        transform: 'perspective(500px) translateZ(0px)',
    },
    onScrollTop: {
        fontSize: '25px',
        lineHeight: '45px',
    },
    mobile: {
        lineHeight: '3rem',
        fontSize: '1.5rem',
    }
}


export default Logo;