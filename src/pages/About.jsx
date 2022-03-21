import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AboutMe from '../components/AboutMe'
import { setReference } from '../store/metadata'

const About = () => {
    const { windowHeight } = useSelector(({ metadata }) => metadata)
    const aboutRef = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setReference({name: 'aboutRef', value: aboutRef }))
    })

    const profile = require('../assets/profile-image.png')
    return (
        <div 
            ref={aboutRef}
            className={`grid grid-flow-row-dense grid-cols-2 w-full`}
            style={{ height: `${windowHeight}px`}}
        >
            <div className="grow h-full place-content-end" >
                <AboutMe />
            </div>
            <div className='grid h-full place-content-end -z-10' >
                <img  src={profile} alt="Profile" style={styles.profileImage} />
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