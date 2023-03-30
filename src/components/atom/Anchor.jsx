import { useState } from "react";
import { 
    FONT_FAMILY,
    PRIMARY,
    SECONDARY
} from "../../helpers/constants";


const Anchor = ({ label, dark=false, onClick, className, isActive=false }) => {
    const [hover, setHover] = useState(false)

    return (
        <div 
            className={className}
            style={{
                ...styles.normal, 
                ...(dark ? styles.dark : null ),
                ...(hover && dark ? styles.darkHover : null ),
                ...(hover && !dark? styles.hover : null ),
                ...(isActive && !dark? styles.hover : null),
            }} 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onClick}
         >
            { label }

            <div 
                style={{ 
                    ...styles.line, 
                    ...(hover && dark? styles.lineHoverDark : null),
                    ...(hover && !dark? styles.lineHover : null),
                    ...(isActive && !dark? styles.lineHover : null),
                }}
            ></div>
            
        </div>
    )
}

const styles = {
    normal: {
        fontFamily: FONT_FAMILY,
        fontWeight: '800',
        fontSize: '0.9rem',
        lineHeight: '25px',
        cursor: 'pointer',
        color: PRIMARY,
        paddingBottom: '1px',
        letterSpacing: '3px'
    },
    dark: {
        color: '#9A9A9A'
    },
    darkHover: {
        color: '#000000'
    },
    hover: {
        color: SECONDARY,
    },
    line: {
        transition: 'width .3s',
        width: '0px',
        height: '0px',
        paddingBottom: '1px',
    },
    lineHover: {
        width: '100%',
        borderBottom: `2px solid ${SECONDARY}`,
        paddingBottom: '0px',
    },
    lineHoverDark: {
        width: '100%',
        borderBottom: '1px solid #000000',
        paddingBottom: '0px',
    }

}

export default Anchor;