

const Card = ({ children, className }) => {
    return (
        <div className={className} style={styles.container}>
            {children}
        </div>
    )
}

const styles = {
    container: {
        position: 'initial',
        width: '345px',
        height: '323px',
        
        background: '#FFFFFF',
        boxShadow: '0px 4px 36px #00000040',
        borderRadius: '5px',
    }
}

export default Card;

