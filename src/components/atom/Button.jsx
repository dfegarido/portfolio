

const Button = (props) => {
    return (
        <div {...props} className={`border-2 grid place-items-center cursor-pointer px-5 h-8 text-xs sm:text-sm text-center rounded-full ${props?.className}`}>
            { props.label }
        </div>
    )
}


export default Button;