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
import download from '../../assets/download.svg'
import architecture from '../../assets/architecture.svg'
import developer from '../../assets/developer.svg'
import monetization from '../../assets/monetization.svg'
import description from '../../assets/description.svg'

const Icon = (props) => {
    const name = props?.name;
    let icon;
    switch (name) {
        case 'description' :
            icon = description
            break;
        case 'monetization' :
            icon = monetization
            break;
        case 'developer' :
            icon = developer
            break;
        case 'architecture' :
            icon = architecture
            break;
        case 'download' :
            icon = download
            break;
        case 'close' :
            icon = close
            break;
        case 'computer' :
            icon = computer
            break;
        case 'branding' :
            icon = branding
            break;
        case 'brush' :
            icon = brush
            break;
        case 'cloud' :
            icon = cloud
            break;
        case 'development' :
            icon = development
            break;
        case 'mobile' :
            icon = mobile
            break;
        case 'link' :
            icon = link
            break;
        case 'pin' :
            icon = pin
            break;
        case 'email' :
            icon = email
            break;
        case 'phone' :
            icon = phone
            break;
        case 'menu' :
            icon = menu
            break;
        default:
            icon = computer
            break;
    }


    return (
        <div {...props} >
            <img src={icon} alt={name}  />
        </div>
    )
}
export default Icon;