

const CardTitle = (props) => {
    return (
        <div {...props} className={`font-semibold ${props?.className}`} >
            { props.label }
        </div>
    )
}

export default CardTitle;