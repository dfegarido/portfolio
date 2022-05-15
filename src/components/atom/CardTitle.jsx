

const CardTitle = (props) => {
    return (
        <h4 {...props} className={`font-semibold ${props?.className}`} >
            { props.label }
        </h4>
    )
}

export default CardTitle;