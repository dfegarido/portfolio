import { useState } from "react"


const Button = ({ label, dark=true }) => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover( prevState => !prevState ) 
    }


    return (
        <div 
            className="px-10 py-5 text-center" 
            style={{
                ...styles.container,
                ...(dark ? styles.dark : null),
                ...(hover ? styles.onHover : null)
            }} 
            onMouseEnter={onHover}
            onMouseLeave={onHover}
        >
            { label }
        </div>
    )
}

const styles = {
    container: {
        borderRadius: '10px',
        fontWeight: '800',
        fontSize: '23px',
        lineHeight: '34px',
        background: '#FFFFFF',
        color: '#000000',
        border: '1px solid #00000040',
    },
    onHover: {
        background: '#000000a3',
        color: '#FFFFFF',
    },
    dark: {
        background: '#000000',
        color: '#FFFFFF',
    },
}

export default Button;