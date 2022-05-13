

const Button = (props) => {
    return (
        <div {...props} className={`grid place-items-center cursor-pointer active:bg-slate-600 outline px-5 h-8 text-xs sm:text-sm text-center rounded-full ${props?.className}`}>
            { props.label }
        </div>
    )
}


export default Button;