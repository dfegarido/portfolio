import { useSelector } from "react-redux";


const Logo = ({ label, onClick }) => {
    const { scrollTop, windowWidth, isMobile } = useSelector(({ metadata }) => metadata )

    return (
        <div 
            style={{
                ...styles.logo,
                ...( !isMobile && scrollTop > 500 ? styles.onScrollTop : null),
                ...( isMobile ? styles.mobile : null)
            }}
            onClick={onClick}
        >
            {label}
        </div>
    )
}


const styles = {
    logo: {
        transition: 'font-size .9s',
        width: '184px',
        height: '48px',
        fontWeight: '800',
        fontSize: '2rem',
        lineHeight: '48px',
        color: '#FFFFFF',
        cursor: 'pointer'
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