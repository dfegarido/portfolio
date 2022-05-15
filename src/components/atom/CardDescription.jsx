

const CardDescription = (props) => {
    return (
        <h5 {...props} className={`my-3 text-gray-500 mx-5 text-xs sm:text-sm ${props?.className}`}>{props.label}</h5>
    )
}

export default CardDescription;