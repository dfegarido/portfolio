import { useState } from "react";
import { useSelector } from "react-redux";
import { PRIMARY, SECONDARY } from "../../helpers/constants";


const Logo = ({ label, onClick }) => {
    const { scrollTop, windowWidth, isMobile } = useSelector(({ metadata }) => metadata )
    const [ isHover, setHover ] = useState(false)

    return (
        <h1 
            style={{
                ...styles.logo,
                color: isHover ? SECONDARY : PRIMARY,
                ...( !isMobile && scrollTop > 500 ? styles.onScrollTop : null),
                ...( isMobile ? styles.mobile : null)
            }}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {label}
        </h1>
    )
}


const styles = {
    logo: {
        transition: 'font-size .5s',
        width: '184px',
        height: '48px',
        fontWeight: '800',
        fontSize: '30px',
        lineHeight: '48px',
        cursor: 'pointer',
        letterSpacing: '5px'
    },
    onScrollTop: {
        fontSize: '25px',
        lineHeight: '65px',
    },
    mobile: {
        fontSize: '15px',
        lineHeight: '65px',
        lineHeight: '3rem',
        fontSize: '1.5rem',
    }
}


export default Logo;