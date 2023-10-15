
const Description = (props) => {
    return (
        <div {...props} className="font-thin text-justify sm:text-justify text-neutral-500 mt-5 text-sm sm:text-base">
            { props.label }
        </div>
    )
}

export default Description;
