import { useState } from "react"


const Button = (props) => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover( prevState => !prevState ) 
    }


    return (
        <div 
            {...props}
            
            onMouseEnter={onHover}
            onMouseLeave={onHover}
        >
            { props.label }
        </div>
    )
}


export default Button;