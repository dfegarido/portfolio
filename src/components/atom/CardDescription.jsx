

const CardDescription = ({label, className}) => {
    return (
        <div className={className} style={styles.container}>{label}</div>
    )
}

const styles = {
    container: {
        fontWeight: '100',
        fontSize: '14px',
        lineHeight: '25px',
        textAlign: 'center',
        color: '#9A9A9A',

    }
}

export default CardDescription;