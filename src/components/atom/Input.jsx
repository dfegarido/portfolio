import { useState } from "react";
import { FONT_FAMILY, LIGHT_GRAY, SLATE } from "../../helpers/constants";
import { useTheme } from "../../contexts/ThemeContext";

const Input = (props) => {
    const [value, setValue] = useState("")
    const [focus, setFocus] = useState(false)
    const { theme, themeKey } = useTheme();
    // Destructure labelStyle so it doesn't get passed to the root div
    const { labelStyle, className, style, error, onFocus, onBlur, ...domProps } = props;

    return (
        <div {...domProps} className={`relative ${className || ''}`}>
            <input 
                id={props?.label} 
                name={props?.name || props?.label} 
                style={{
                    fontFamily: FONT_FAMILY,
                    color: 'var(--color-primary)',
                    letterSpacing: '1px',
                    backgroundColor: 'rgba(var(--color-secondary-rgb), 0.6)',
                    backdropFilter: 'blur(4px)',
                    transition: 'var(--theme-transition)',
                    border: focus ? '1px solid var(--color-primary)' : '1px solid rgba(var(--color-primary-rgb), 0.3)',
                    boxShadow: focus ? '0 0 0 2px rgba(var(--color-primary-rgb), 0.2)' : 'none',
                    ...style
                }}
                className={`absolute rounded-md w-full h-10 px-3 pt-3 font-semibold text-sm ${error ? 'ring-1 ring-red-500' : ''}`}
                type={props?.type} 
                value={value}
                onChange={ e => setValue(e.target.value)}
                onFocus={() => {
                    setFocus(true);
                    if (onFocus) onFocus();
                }}
                onBlur={() => {
                    setFocus(false);
                    if (onBlur) onBlur();
                }}
                required={props?.required || false}
                autoFocus={false}
            />
            <label 
                htmlFor={props?.label} 
                style={{
                    fontFamily: FONT_FAMILY,
                    color: focus ? 'var(--color-primary)' : 'rgba(var(--color-primary-rgb), 0.7)',
                    letterSpacing: '2px',
                    transition: 'var(--theme-transition)',
                    ...labelStyle
                }} 
                className={`transition-all font-bold duration-300 absolute z-0 ml-3 ${focus || value.length > 0 ? 'text-xs mt-1' : 'text-sm mt-2'}`}
            >
                { props?.label }
            </label>
        </div>
    )
}

export default Input;