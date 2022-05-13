

const CardDescription = (props) => {
    return (
        <div {...props} className={`my-3 text-gray-500 mx-5 text-xs sm:text-sm ${props?.className}`}>{props.label}</div>
    )
}

export default CardDescription;