import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AboutMe from '../components/AboutMe'

const About = () => {
    const { windowHeight } = useSelector(({ metadata }) => metadata)
    const [innerHeight, setInnerHeight] = useState('')

    useEffect(() => {
        setInnerHeight(windowHeight)
    }, [windowHeight])

    const profileImage = require('../assets/profile-image.png')
    return (
        <div className={`grid grid-flow-row-dense grid-cols-2 h-[${innerHeight}px] w-full`} >
            <div className="grow h-full place-content-end" >
                <AboutMe />
            </div>
            <div className='grid h-full place-content-end -z-10' >
                <img  src={profileImage} alt="Profile Image" style={styles.profileImage} />
            </div>
        </div>
    )
}

const styles = {
    profileImage: {
        width: '599px',
        height: '701px',
    }
}

export default About