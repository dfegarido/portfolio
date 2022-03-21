import computer from '../../assets/computer.svg'
import branding from '../../assets/branding.svg'
import brush from '../../assets/brush.svg'
import cloud from '../../assets/cloud.svg'
import development from '../../assets/development.svg'
import mobile from '../../assets/mobile.svg'
import link from '../../assets/link.svg'

const Icon = ({ name }) => {
    let icon = ''
    switch (true) {
        case name === 'computer' :
            icon = computer
            break;
        case name === 'branding' :
            icon = branding
            break;
        case name === 'brush' :
            icon = brush
            break;
        case name === 'cloud' :
            icon = cloud
            break;
        case name === 'development' :
            icon = development
            break;
        case name === 'mobile' :
            icon = mobile
            break;
        case name === 'link' :
            icon = link
            break;
        default:
            icon = computer
            break;
    }


    return (
        <div style={styles.container} >
            <img src={icon} alt={name} />
        </div>
    )
}

const styles = {
    container: {
        width: '50px',
        height: '50px',
    }
}

export default Icon;