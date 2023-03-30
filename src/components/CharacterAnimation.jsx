import { useEffect, useState } from "react"


const CharacterAnimation = ({ style, label }) => {
    const [description, setDescription] = useState('')
    let index = 0
    let developer = label[0]
    let labelIndex = 0

    const loop = () => {
        if(index < developer?.length){
            setDescription(prevState => prevState + developer[index])
            setTimeout(() => {
                index++;
                loop()
            }, 200)
        }else{
            index = 0;
            if(labelIndex < label?.length){
                labelIndex++
                developer = label[labelIndex]
                setDescription('')
                loop()
            }else{
                labelIndex = 0
                developer = label[labelIndex]
                setDescription('')
                loop()
            }
            
        }
    }

    useEffect(() => {
        loop()
    }, [])

    return (
        <span style={style}>
            {description} 
        </span>
    )
}

export default CharacterAnimation