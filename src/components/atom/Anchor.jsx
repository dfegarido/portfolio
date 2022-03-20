import { useState } from "react";


const Anchor = ({ label }) => {
    const [hover, setHover] = useState(false)


    return (
        <div 
            className="grid justify-items-center"
            style={{
                ...styles.normal, 
                ...(hover ? styles.hover : styles.normal)}} 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
         >
            { label }

            <div 
                 style={{ 
                     ...styles.line, 
                     ...(hover ? styles.lineHover : styles.line) }}
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
        fontSize: '18px',
        lineHeight: '25px',
        cursor: 'pointer',
        color: '#ffffffd1',
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


    }

    


}

export default Anchor;