import { useState } from "react";
import { FONT_FAMILY, LIGHT_GRAY, SLATE } from "../../helpers/constants";
import { useTheme } from "../../contexts/ThemeContext";


const TextArea = (props) => {
    const [value, setValue] = useState("")
    const [focus, setFocus] = useState(false)
    const { theme, themeKey } = useTheme();
    
    return (
        <div {...props} className={`relative h-32 ${props?.className}`}>
            <textarea 
                id={props?.name || "message"}
                name={props?.name || "message"}
                style={{
                    fontFamily: FONT_FAMILY,
                    color: 'var(--color-primary)',
                    letterSpacing: '1px',
                    backgroundColor: 'rgba(var(--color-secondary-rgb), 0.6)',
                    backdropFilter: 'blur(4px)',
                    transition: 'var(--theme-transition)',
                    border: focus ? '1px solid var(--color-primary)' : '1px solid rgba(var(--color-primary-rgb), 0.3)',
                    boxShadow: focus ? '0 0 0 2px rgba(var(--color-primary-rgb), 0.2)' : 'none',
                    resize: 'vertical',
                    ...props?.style
                }}
                className={`absolute font-semibold rounded-md w-full h-10 px-3 pt-6 min-h-full ${props?.error ? 'ring-1 ring-red-500' : ''}`}
                cols="10" 
                rows="6" 
                value={value} 
                onChange={e => setValue(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                required={props?.required || false}
            >
            </textarea>
            <label 
                htmlFor={props?.name || "message"} 
                style={{
                    fontFamily: FONT_FAMILY,
                    color: focus ? 'var(--color-primary)' : 'rgba(var(--color-primary-rgb), 0.7)',
                    letterSpacing: '2px',
                    transition: 'var(--theme-transition)',
                    ...props?.labelStyle
                }}
                className={`transition-all font-bold duration-300 absolute z-0 ml-3 ${focus || value.length > 0 ? 'text-xs mt-1' : 'text-sm mt-2'}`}
            >
                { props?.label }
            </label>
        </div>
    )
}


export default TextArea;