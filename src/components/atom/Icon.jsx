import computer from '../../assets/computer.svg'
import branding from '../../assets/branding.svg'
import brush from '../../assets/brush.svg'
import cloud from '../../assets/cloud.svg'
import development from '../../assets/development.svg'
import mobile from '../../assets/mobile.svg'
import link from '../../assets/link.svg'
import pin from '../../assets/pin.svg'
import email from '../../assets/email.svg'
import phone from '../../assets/phone.svg'
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'

const Icon = (props) => {
    const name = props?.name
    let icon = ''
    switch (true) {
        case name === 'close' :
            icon = close
            break;
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
        case name === 'pin' :
            icon = pin
            break;
        case name === 'email' :
            icon = email
            break;
        case name === 'phone' :
            icon = phone
            break;
        case name === 'menu' :
            icon = menu
            break;
        default:
            icon = computer
            break;
    }


    return (
        <div {...props} >
            <img src={icon} alt={name} style={styles.container} />
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