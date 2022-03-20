import Icon from "./Icon";


const CircleLogo = ({ name }) => {
    return (
        <div className="p-5" style={styles.container}>
            <Icon name={name} />
        </div>
    )
}

const styles = {
    container: {
        width: '90px',
        height: '90px',
        background: '#E5E5E561',
        borderRadius: '50px',
    }
}

export default CircleLogo;