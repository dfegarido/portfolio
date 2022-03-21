import { useState } from "react";


const TextArea = ({ label }) => {
    const [value, setValue] = useState("")
    const [hover, setHover] = useState(false)


    return (
        <div style={styles.container}>
            <textarea 
                className={'p-5'}
                style={styles.textArea} 
                cols="10" rows="10" 
                value={value} 
                onChange={e => setValue(e.target.value)}
                onFocus={() => setHover(true)}
                onBlur={() => setHover(false)}>
                    
            </textarea>
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
        height: '187px',
    },
    textArea: {
        position: 'relative',
        width: '100%',
        height: '187px',
        background: '#E5E5E5',
    },
    label: {
        position: 'relative',
        width: '54px',
        height: '34px',
        left: '20px',
        bottom: '186px',
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '34px',
        color: '#9A9A9A',
        transition: 'bottom  .5s ease-in-out',
    },
    hover: {
        bottom: '195px',
        fontSize: '12px',
    }
}


export default TextArea;