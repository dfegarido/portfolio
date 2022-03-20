import { useState } from "react";


const CardImage = ({ name, image, link }) => {
    const [hover, setHover] = useState(false)

    const onHover = () => setHover(prevState => !prevState)

    return (
        <div style={styles.container}>
            <img 
                src={image} 
                alt={name} 
                style={{
                    ...styles.image,
                    ...(hover ? styles.hover : null)
                    }}
                onMouseEnter={onHover}
                onMouseLeave={onHover}
            />
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
    },
    hover: {
        opacity: '.5',
        cursor: 'pointer'
    }
}

export default CardImage;