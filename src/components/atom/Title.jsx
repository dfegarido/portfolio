const Title = (props) => {
    return (
        <h2 {...props} className={`font-black text-2xl sm:text-3xl`}>
            { props.label }
        </h2>
    )
}

export default Title;