const Title = ({ label, className }) => {
    return (
        <div className={className} style={styles.container}>
            { label }
        </div>
    )
}

const styles = {
    container: {
        fontWeight: '800',
        fontSize: '50px',
        lineHeight: '68px',
        color: '#000000',
    }
}

export default Title;