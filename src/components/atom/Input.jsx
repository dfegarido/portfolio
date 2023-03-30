import { useState } from "react";
import { FONT_FAMILY, GRAY, LIGHT_GRAY, SLATE } from "../../helpers/constants";


const Input = (props) => {
    const [value, setValue] = useState("")
    const [focus, setFocus] = useState(false)

    return (
        <div {...props} className={`relative ${props?.className}`}>
            
            <input 
                id={props?.label} 
                name={props?.label} 
                style={styles.input}
                className={`absolute bg-neutral-100 rounded-md w-full h-10 px-3 pt-3 font-semibold text-sm text-neutral-600 ring-1 ${props?.error ? 'ring-red-500' : ''}`}
                type={props?.type} 
                value={value}
                onChange={ e => setValue(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                required={true}
                autoFocus={false}
            />
            <div style={styles.label} className={`transition-all font-bold duration-300 absolute z-0 ml-3 text-neutral-400 ${focus || value.length > 0 ? 'text-xs mt-1' : 'text-sm mt-2'}`}>
                { props?.label }
            </div>
        </div>
    )
}

const styles = {
    label: {
        fontFamily: FONT_FAMILY,
        color: LIGHT_GRAY,
        letterSpacing: '2px',
    },
    input: {
        fontFamily: FONT_FAMILY,
        color: SLATE,
        letterSpacing: '1px',
    }
}

export default Input;