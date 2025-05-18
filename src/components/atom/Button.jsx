

const Button = (props) => {
    return (
        <div {...props} 
            className={`border-2 grid place-items-center cursor-pointer px-5 h-8 text-xs sm:text-sm text-center rounded-full transition-all duration-300 ${props?.className}`}
            style={{
                ...props.style,
                borderColor: props.style?.borderColor || 'var(--color-primary)',
                color: props.style?.color || 'var(--color-accent)',
            }}
        >
            { props.label }
        </div>
    )
}


export default Button;