import { useState } from "react";


const TextArea = (props) => {
    const [value, setValue] = useState("")
    const [hover, setHover] = useState(false)
    return (
        <div {...props} className={`relative h-20 ${props?.className}`}>
            <textarea 
                id="message"
                name="message"
                className={`absolute bg-neutral-200 rounded-md text-sm w-full h-10 px-3 pt-4 ring-1 text-neutral-600 min-h-full ${props?.error ? 'ring-red-500' : 'ring-green-500'}`}
                cols="10" rows="10" 
                value={value} 
                onChange={e => setValue(e.target.value)}
                onFocus={() => setHover(true)}
                onBlur={() => setHover(false)}>
                    
            </textarea>
            <div className={`transition-all font-bold duration-300 absolute z-0 ml-3 text-neutral-400 ${hover || value.length > 0 ? 'text-xs mt-1' : 'text-base mt-2'}`}>
                { props?.label }
            </div>
        </div>
    )
}


export default TextArea;