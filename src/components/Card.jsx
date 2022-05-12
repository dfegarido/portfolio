

const Card = (props) => {
    return (
        <div {...props} style={styles.container}>
            {props.children}
        </div>
    )
}

const styles = {
    container: {
        background: '#FFFFFF',
        boxShadow: '0px 4px 36px #00000040',
        borderRadius: '5px',
    }
}

export default Card;

