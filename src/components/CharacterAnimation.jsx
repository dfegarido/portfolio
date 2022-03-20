import { useEffect, useState } from "react"


const CharacterAnimation = ({ label }) => {
    const [description, setDescription] = useState('')
    let index = 0
    let developer = label[0]
    let labelIndex = 0

    const loop = () => {
        setDescription(prevState => prevState + developer[index])
        if(index < developer.length){
            
            setTimeout(() => {
                index++;
                loop()
            }, 200)
        }else{
            index = 0;
            if(labelIndex < label.length - 1){
                labelIndex++
                developer = label[labelIndex]
                setDescription('')
                loop()
            }else{
                labelIndex = 0
                setDescription('')
                loop()
            }
            
        }
    }

    

    useEffect(() => {
        loop()
    }, [])

    return (
        <span style={styles.description}>
            {description} 
        </span>
    )
}

const styles = {
    description: {
        fontWeight: '600',
        fontSize: '50px',
    },

}

export default CharacterAnimation