
const Description = (props) => {
    return (
        <div 
            {...props} 
            className="font-normal text-justify sm:text-justify text-neutral-600 mt-5 text-sm sm:text-base leading-relaxed"
            style={{
                textShadow: '0 1px 2px rgba(0,0,0,0.03)',
                wordSpacing: '1px',
                lineHeight: '1.6'
            }}
        >
            { props.label }
        </div>
    )
}

export default Description;
