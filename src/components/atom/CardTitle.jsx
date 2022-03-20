

const CardTitle = ({ label, className }) => {
    return (
        <div className={className} style={styles.container} >
            { label }
        </div>
    )
}

const styles = {
    container: {
        fontWeight: '800',
        fontSize: '20px',
        lineHeight: '27px',
        color: '#000000',
    }
}

export default CardTitle;