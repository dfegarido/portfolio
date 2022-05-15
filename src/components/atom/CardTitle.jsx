

const CardTitle = (props) => {
    return (
        <h4 {...props} className={` text-xs mt-1 uppercase font-bold ${props?.className}`} >
            { props.label }
        </h4>
    )
}

export default CardTitle;