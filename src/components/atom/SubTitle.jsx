const SubTitle = ({ label }) => {
    return (
        <div style={styles.container}>
            { label }
        </div>
    )
} 

const styles = {
    container: {
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '25px',
        lineHeight: '34px',
        color: '#9A9A9A',

    }
} 

export default SubTitle;