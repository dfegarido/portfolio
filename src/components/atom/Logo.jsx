import { useSelector } from "react-redux";


const Logo = ({ label, onClick }) => {
    const { scrollTop, windowWidth } = useSelector(({ metadata }) => metadata )

    return (
        <div 
            style={{
                ...styles.logo,
                ...( windowWidth >= 600 && scrollTop > 500 ? styles.onScrollTop : null)
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
        fontSize: '35px',
        lineHeight: '48px',
        color: '#FFFFFF',
        cursor: 'pointer'
    },
    onScrollTop: {
        fontSize: '25px',
        lineHeight: '65px',
    }
}


export default Logo;