import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AboutMe from '../components/AboutMe'
import { setReference } from '../store/metadata'

const About = () => {
    const aboutRef = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setReference({name: 'aboutRef', value: aboutRef }))
    })

    const profile = require('../assets/profile-image.png')
    return (
        <div 
            ref={aboutRef}
            className={`grid grid-cols-1 sm:grid-cols-2 mb-10`}
        >
            <div className=" w-full grid justify-items-center" >
                <AboutMe />
            </div>
            <div className=' place-items-end -z-10 hidden sm:grid ' >
                <img  src={profile} alt="Profile" style={styles.profileImage} />
            </div>
        </div>
    )
}

const styles = {
    profileImage: {
        // width: '599px',
        // height: '701px',
    }
}

export default About