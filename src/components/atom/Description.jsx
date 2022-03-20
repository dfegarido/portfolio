
const Description = ({ label }) => {
    return (
        <div style={styles.container}>
            { label }
        </div>
    )
}

const styles = {
    container: {
        position: 'relative',
        top: '30px',
        fontWeight: '100',
        fontSize: '20px',
        lineHeight: '34px',
        /* or 148% */
        textAlign: 'right',
        color: '#827F7F',
    }
}


export default Description;
