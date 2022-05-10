import { useEffect, useState } from "react";


const Anchor = ({ label, dark=false, onClick }) => {
    const [hover, setHover] = useState(false)

    return (
        <div 
            className="grid justify-items-center"
            style={{
                ...styles.normal, 
                ...(dark ? styles.dark : null ),
                ...(hover && dark ? styles.darkHover : null ),
                ...(hover && !dark? styles.hover : null )}} 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onClick}
         >
            { label }

            <div 
                 style={{ 
                     ...styles.line, 
                     ...(hover && dark? styles.lineHoverDark : null),
                     ...(hover && !dark? styles.lineHover : null) }}
            ></div>
            
        </div>
    )
}

const styles = {
    normal: {
        width: '51px',
        height: '25px',
        left: '659px',
        top: '55px',
        fontWeight: '800',
        fontSize: '0.9rem',
        lineHeight: '25px',
        cursor: 'pointer',
        color: '#ffffffd1',
    },
    dark: {
        color: '#9A9A9A'
    },
    darkHover: {
        color: '#000000'
    },
    hover: {
        color: '#FFFFFF',
    },
    line: {
        transition: 'width .3s',
        width: '0px',
        height: '0px',
        marginTop: '-2px',

    },
    lineHover: {
        width: '100%',
        borderBottom: '1px solid #FFFFFF',
    },
    lineHoverDark: {
        width: '100%',
        borderBottom: '1px solid #000000',
    }

    


}

export default Anchor;