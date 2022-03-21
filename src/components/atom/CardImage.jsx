import { useState } from "react";
import Icon from "./Icon";


const CardImage = ({ name, image, link, children }) => {
    const [hover, setHover] = useState(false)

    const onHover = (value) => setHover(value)

    return (
        <div style={styles.container}>
            <img 
                src={image} 
                alt={name} 
                style={{
                    ...styles.image,
                    ...(hover ? styles.hover : null)
                    }}
                onMouseEnter={() => onHover(true)}
                onMouseLeave={() => onHover(false)}
            />
            {
                hover ? 
                (<div 
                    style={styles.link}
                    onMouseEnter={() => onHover(true)}>
                    <Icon name={'link'} />
                </div>)
                : null
            }
            
        </div>
    )
}

const styles = {
    container: {
       
    },
    image: {
        width: '345px',
        height: '323px',
        borderRadius: '5px',
        transition: 'opacity 1'
    },
    hover: {
        opacity: '.8',
    },
    link: {
        position: 'relative',
        width: '33.35px',
        height: '33.35px',
        left: '10rem',
        bottom: '11rem',
        background: '#000000',
        padding: '5px',
        borderRadius: '50px',
        transform: 'rotate(45deg)',
        cursor: 'pointer'

    }
}

export default CardImage;