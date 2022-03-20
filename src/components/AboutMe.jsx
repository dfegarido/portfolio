import Title from "./atom/Title";
import SubTitle from "./atom/SubTitle";
import Description from "./atom/Description";
import Button from "./atom/Button";

const AboutMe = () => {

    const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non volutpat turpis. Nulla nisi leo, dictum quis cursus faucibus, viverra quis orci. Praesent pulvinar, mi vitae ultricies suscipit, libero est egestas lectus, quis egestas neque diam et augue. Praesent ipsum lectus, elementum a faucibus id, vehicula convallis ligula. Sed justo lectus, tempor nec lobortis ac, eleifend eget magna. `

    return (
        <div className="flex flex-col items-end mt-10 mb-20 p-10" style={styles.aboutContainer}>
            <Title label={"About Me"} />
            <SubTitle label={"Fullstack Developer"} />
            <Description label={description} />
            <div className="grid grid-cols-2 gap-4" style={styles.buttonContainer}>
                <Button label={"Download Resume"} dark={true} />
                <Button label={"Contact Us"} dark={false} />
            </div>
        </div>
    )
}

const styles = {
    aboutContainer: {
        marginLeft: '57px',
        width: '855px',
        height: '735px',
        background: '#F9F9F9',
        borderRadius: '10px',
    },

    buttonContainer: {
        position: 'relative',
        top: '304px'
    }
    
}


export default AboutMe;