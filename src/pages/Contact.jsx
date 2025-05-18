import { useDispatch } from "react-redux";
import Title from '../components/atom/Title';
import CircleLogo from '../components/atom/CircleLogo';
import CardTitle from "../components/atom/CardTitle";
import Input from "../components/atom/Input";
import TextArea from "../components/atom/TextArea";
import { useEffect, useRef, useState } from "react";
import { setReference } from "../store/metadata";
import { useForm } from '@formspree/react';
import config from "../helpers/config";
import { FONT_FAMILY, SLATE } from "../helpers/constants";
import { useTheme } from "../contexts/ThemeContext";

const Contact = () => {
    const contactRef = useRef(null)
    const dispatch = useDispatch()
    const [error, setError] = useState()
    const [state, handleSubmit] = useForm("meqplwan");
    const { contact:contactUs } = config
    const { theme, themeKey } = useTheme()
    const [hoveredSocial, setHoveredSocial] = useState(null)
    const [isSubmitHovered, setIsSubmitHovered] = useState(false)

    useEffect(() => {
        if (contactRef.current) {
            // Use an ID-based approach instead of passing the ref directly
            contactRef.current.id = 'contact-section';
            dispatch(setReference({name: 'contact', value: 'contact-section' }))
        }
    }, [dispatch])

    useEffect(() => {
        if(state.result !== null && state.succeeded) setError(0)
        if(state.errors.length > 0) setError(1)
        if(!state.submitting) setError(undefined)
    },[state])

    return (
        <div 
            ref={contactRef}
            className="py-10"
            style={{
                background: 'var(--color-secondary)',
                transition: 'var(--theme-transition)'
            }}
        >
            <div className="w-full flex items-center mb-8 px-8">
                <div className="h-[3px] w-[30px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mr-4 rounded-full"></div>
                <Title label={"Contact Me"} style={{color: 'var(--color-primary)'}}/>
                <div className="h-[3px] flex-grow bg-gradient-to-r from-[var(--color-accent)] to-transparent ml-4 rounded-full"></div>
            </div>
            
            <div className="pt-5 sm:pt-10 flex flex-row justify-center gap-8">
                {
                    contactUs.map((item, key) => (
                        <div 
                            className="flex flex-col text-center items-center relative"
                            key={key}
                            onMouseEnter={() => setHoveredSocial(key)}
                            onMouseLeave={() => setHoveredSocial(null)}
                        >
                            {/* Animated background for social icons */}
                            <div 
                                className={`absolute -inset-3 rounded-xl opacity-0 blur-md transition-all duration-300 ${hoveredSocial === key ? 'opacity-70' : ''}`}
                                style={{
                                    background: `radial-gradient(circle at center, var(--color-primary) 0%, transparent 70%)`,
                                }}
                            ></div>
                            
                            <div 
                                className="relative z-10 transform transition-all duration-300"
                                style={{
                                    transform: hoveredSocial === key ? 'scale(1.15)' : 'scale(1)'
                                }}
                            >
                                <CircleLogo 
                                    name={item.logo} 
                                    className='cursor-pointer'
                                    onClick={() => {
                                        window.open(
                                            item.link,
                                            '_blank'
                                        )
                                    }}
                                    style={{
                                        filter: hoveredSocial === key ? 'drop-shadow(0 0 8px rgba(var(--color-primary-rgb), 0.7))' : 'none'
                                    }}
                                />
                                <CardTitle 
                                    label={item.name}
                                    style={{
                                        fontFamily: FONT_FAMILY,
                                        color: 'var(--color-primary)',
                                        transition: 'var(--theme-transition)',
                                        opacity: hoveredSocial === key ? 1 : 0.7
                                    }}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
            
            <div className="mx-5 sm:mx-10 md:mx-24 lg:mx-80 mt-16 pb-10">
                {/* Contact form with glassmorphism */}
                <div 
                    className="backdrop-blur-sm rounded-xl p-8 relative overflow-hidden"
                    style={{
                        background: 'rgba(var(--color-secondary-rgb), 0.3)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                        borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    {/* Form accent lighting */}
                    <div 
                        className="absolute -inset-1 opacity-30"
                        style={{
                            background: `radial-gradient(circle at 50% 0%, var(--color-primary) 0%, transparent 70%)`,
                            filter: 'blur(40px)'
                        }}
                    ></div>
                    
                    <form onSubmit={handleSubmit} className="relative z-10">
                        <div className={`transition-all flex flex-col ${error === undefined ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-96 opacity-100 mb-8'}`}>
                            <div 
                                className={`w-full rounded-lg p-4 text-center font-semibold shadow-md`}
                                style={{
                                    background: error ? 'rgba(239, 68, 68, 0.2)' : 'rgba(34, 197, 94, 0.2)',
                                    color: error ? 'rgba(239, 68, 68, 0.9)' : 'rgba(34, 197, 94, 0.9)',
                                    backdropFilter: 'blur(5px)',
                                    border: error ? '1px solid rgba(239, 68, 68, 0.3)' : '1px solid rgba(34, 197, 94, 0.3)',
                                }}
                            >
                                {error ? 'There was a problem sending your message. Please try again.' : "Your message has been sent successfully!"}
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-8 sm:flex-row sm:gap-4">
                            <Input 
                                type="text" 
                                name="name"
                                required
                                label="Name" 
                                className="flex-1" 
                                error={error}
                                key={`name-input-${themeKey}`}
                                style={{
                                    color: 'var(--color-primary)',
                                    borderColor: 'rgba(var(--color-primary-rgb), 0.3)'
                                }}
                                labelStyle={{
                                    color: 'rgba(var(--color-primary-rgb), 0.7)'
                                }}
                            />
                            <Input 
                                type="email" 
                                name="email"
                                required
                                label="Email" 
                                className="flex-1" 
                                error={error}
                                key={`email-input-${themeKey}`}
                                style={{
                                    color: 'var(--color-primary)',
                                    borderColor: 'rgba(var(--color-primary-rgb), 0.3)'
                                }}
                                labelStyle={{
                                    color: 'rgba(var(--color-primary-rgb), 0.7)'
                                }}
                            />
                        </div>
                        
                        <div className="flex flex-col mt-8 mb-6">
                            <TextArea 
                                label="Message" 
                                name="message"
                                required
                                className="w-full" 
                                error={error}
                                key={`message-textarea-${themeKey}`}
                                style={{
                                    color: 'var(--color-primary)',
                                    borderColor: 'rgba(var(--color-primary-rgb), 0.3)'
                                }}
                                labelStyle={{
                                    color: 'rgba(var(--color-primary-rgb), 0.7)'
                                }}
                            />
                        </div>
                        
                        <div className="relative group">
                            {/* Submit button with theme-aware styling */}
                            <div 
                                className="absolute -inset-0.5 opacity-70 rounded-full blur-sm group-hover:opacity-100 group-hover:blur transition-all duration-300"
                                style={{
                                    background: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`,
                                }}
                            ></div>
                            
                            <button 
                                type="submit" 
                                disabled={state.submitting}
                                onMouseEnter={() => setIsSubmitHovered(true)}
                                onMouseLeave={() => setIsSubmitHovered(false)}
                                className="relative flex items-center justify-center px-8 py-3 backdrop-blur-sm text-white rounded-full transition-all duration-300 overflow-hidden font-semibold tracking-wider"
                                style={{
                                    transform: isSubmitHovered ? 'translateY(-2px)' : 'translateY(0)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    backgroundColor: 'rgba(var(--color-primary-rgb), 0.8)',
                                    boxShadow: isSubmitHovered ? 
                                        '0 10px 15px -3px rgba(var(--color-primary-rgb), 0.2)' : 
                                        'none',
                                    transition: 'var(--theme-transition)'
                                }}
                            >
                                <div className="flex items-center gap-2 z-10">
                                    <span>{state.submitting ? "Sending..." : "Send Message"}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${isSubmitHovered ? 'transform translate-x-1' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                
                                {/* Moving light effect */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-30 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

// Styles now incorporated inline with theme variables

export default Contact;