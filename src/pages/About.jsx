import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import AboutMe from '../components/AboutMe'
import { setReference } from '../store/metadata'
import profile from '../assets/profile-image.webp'

const About = () => {
    const aboutRef = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setReference({name: 'about', value: aboutRef }))
    }, [dispatch])

    return (
        <div 
            ref={aboutRef}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-8 relative`}
        >
            {/* Profile image section for mobile */}
            <div className='flex justify-center sm:hidden my-6'>
                <div className="relative profile-container">
                    <div className="accent-shape accent-shape-1"></div>
                    <div className="accent-shape accent-shape-2"></div>
                    
                    <div className="profile-frame">
                        <img src={profile} alt="Profile" className="profile-image-mobile" />
                    </div>
                    <div className="absolute inset-0 profile-overlay"></div>
                    <div className="profile-name-badge">
                        Darwin Fegarido
                    </div>
                    
                    {/* Mobile badge */}
                    <div className="role-badge">
                        Full Stack Engineer
                    </div>
                </div>
            </div>
            
            {/* About Me content */}
            <div className="w-full grid justify-items-center" >
                <AboutMe />
            </div>
            
            {/* Profile image section for desktop */}
            <div className='place-items-center hidden sm:flex items-center justify-center mt-10 relative' >
                <div className="relative profile-container">
                    {/* Background accent shapes */}
                    <div className="accent-shape accent-shape-1"></div>
                    <div className="accent-shape accent-shape-2"></div>
                    
                    {/* Added animated particles */}
                    <div className="particles">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className={`particle particle-${i+1}`}></div>
                        ))}
                    </div>
                    
                    <div className="profile-frame">
                        <img src={profile} alt="Profile" className="profile-image" />
                        
                        {/* Inner glow effect */}
                        <div className="profile-inner-glow"></div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="code-bracket code-bracket-open">{"{"}</div>
                    <div className="code-bracket code-bracket-close">{"}"}</div>
                    
                    {/* Name badge appears on hover */}
                    <div className="profile-name-badge">
                        Darwin Fegarido
                    </div>
                    
                    {/* Badge */}
                    <div className="role-badge">
                        Full Stack Engineer
                    </div>
                </div>
            </div>
        </div>
    )
}

// Styles moved to CSS for better theme integration

export default About