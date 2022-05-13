import Icon from "./Icon";


const CircleLogo = (props) => {
    return (
        <div {...props} style={styles.container} className={`h-12 w-12 p-2 mt-1 sm:h-20 sm:w-20 sm:p-5 ${props?.className}`}>
            <Icon name={props.name} className={`h-8 w-8 sm:h-10 sm:w-10`}/>
        </div>
    )
}

const styles = {
    container: {
        background: '#E5E5E561',
        borderRadius: '50px',
    }
}

export default CircleLogo;