

const Card = (props) => {
    return (
        <div {...props} style={styles.container} >
            {props.children}
        </div>
    )
}

const styles = {
    container: {
        background: '#FFFFFF',
        borderRadius: '5px',
    }
}

export default Card;

