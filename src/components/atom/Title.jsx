const Title = (props) => {
    return (
        <div {...props} className={`font-black text-2xl sm:text-3xl`}>
            { props.label }
        </div>
    )
}

export default Title;