import { useState } from "react";
import { FONT_FAMILY, LIGHT_GRAY, SLATE } from "../../helpers/constants";


const TextArea = (props) => {
    const [value, setValue] = useState("")
    const [hover, setHover] = useState(false)
    return (
        <div {...props} className={`relative h-20 ${props?.className}`}>
            <textarea 
                id="message"
                name="message"
                style={styles.textarea}
                className={`absolute bg-neutral-100 font-semibold rounded-md w-full h-10 px-3 pt-4 ring-1  min-h-full ${props?.error ? 'ring-red-500' : ''}`}
                cols="10" rows="10" 
                value={value} 
                onChange={e => setValue(e.target.value)}
                onFocus={() => setHover(true)}
                onBlur={() => setHover(false)}>
                    
            </textarea>
            <div style={styles.label} className={`transition-all font-bold duration-300 absolute z-0 ml-3 text-neutral-400 ${hover || value.length > 0 ? 'text-xs mt-1' : 'text-sm mt-2'}`}>
                { props?.label }
            </div>
        </div>
    )
}

const styles = {
    textarea: {
        fontFamily: FONT_FAMILY,
        color: SLATE,
        letterSpacing: '1px',
    },
    label: {
        fontFamily: FONT_FAMILY,
        color: LIGHT_GRAY,
        letterSpacing: '2px',
    }
}


export default TextArea;