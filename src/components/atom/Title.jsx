import { FONT_FAMILY, SLATE } from "../../helpers/constants";

const Title = (props) => {
    return (
        <h2 {...props} style={{ ...title, ...props.style }} className={`font-black text-2xl sm:text-3xl`}>
            { props.label }
        </h2>
    )
}

const title = {
    fontFamily: FONT_FAMILY,
    letterSpacing: '3px',
    fontWeight: '700',
    color: SLATE,
}

export default Title;