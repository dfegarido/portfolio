import { useState } from "react";


const Input = ({ label, type="text"}) => {
    const [value, setValue] = useState("")
    const [hover, setHover] = useState(false)

    return (
        <div style={styles.container}>
            
            <input 
                className={" px-5 "}
                type={type} 
                value={value}
                onChange={ e => setValue(e.target.value)}
                style={styles.input}
                onFocus={() => setHover(true)}
                onBlur={() => setHover(false)}
            />
            <div style={{
                ...styles.label,
                ...(hover || value.length !== 0 ? styles.hover : null)
                }}>
                { label }
            </div>
        </div>
    )
}

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        height: '69px',
    },
    input: {
        position: 'relative',
        width: '100%',
        height: '69px',
        background: '#E5E5E5',
    },
    label: {
        position: 'relative',
        width: '54px',
        height: '34px',
        left: '20px',
        bottom: '50px',
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '34px',
        color: '#9A9A9A',
        transition: 'bottom  .5s ease-in-out',
    },
    hover: {
        bottom: '68px',
        fontSize: '12px',
    }
}

export default Input;