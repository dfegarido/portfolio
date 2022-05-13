import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import AboutMe from '../components/AboutMe'
import { setReference } from '../store/metadata'
import config from '../config'

const About = () => {
    const aboutRef = useRef(null)
    const dispatch = useDispatch()
    const { about } = config

    useEffect(() => {
        dispatch(setReference({name: 'about', value: aboutRef }))
    }, [])

    return (
        <div 
            ref={aboutRef}
            className={`grid grid-cols-1 sm:grid-cols-2`}
        >
            <div className=" w-full grid justify-items-center" >
                <AboutMe />
            </div>
            <div className='saturate-[120%] place-items-end -z-10 hidden sm:grid mt-10' >
                <img  src={profile} alt="Profile" style={styles.profileImage} />
            </div>
        </div>
    )
}

const styles = {
    profileImage: {
        filter: 'blur(0.2px)'
    }
}

export default About