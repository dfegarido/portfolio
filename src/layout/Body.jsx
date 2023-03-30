import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import CharacterAnimation from "../components/CharacterAnimation"
import About from "../pages/About"
import Services from "../pages/Services"
import Portfolio from "../pages/Portfolio"
import Contact from "../pages/Contact"
import { useEffect, useRef } from "react"
import { setReference } from "../store/metadata"
import { scrollTo } from "../helpers/common";
import { 
    WHITE,
    PRIMARY,
    SECONDARY,
    FONT_FAMILY, 
    SLATE,
    LIGHT_GRAY} from '../helpers/constants'
import Button from '../components/atom/Button'
import { landingPage } from "../helpers/config"


const Body = () => {
    const [isBtnHover, setBtnHover] = useState(false)
    const { windowHeight, scrollTop, listRef, isMobile }  = useSelector(({ metadata }) => metadata)
    const homeRef = useRef(null)
    const dispatch = useDispatch()
    const { greetings, fullname: name, description: nameToAnimate } = landingPage
    

    const closeMenu = (ref) => {
        scrollTo(ref)
    }

    useEffect(() => {
        dispatch(setReference({name: 'home', value: homeRef }))
    }, [])

    const onHover = () => {
        setBtnHover(true)
    }
    const onLeaveHover = () => {
        setBtnHover(false)
    }

    const onHovering = {
        color: isBtnHover ? SECONDARY : PRIMARY,
        borderColor: isBtnHover ? SECONDARY : PRIMARY,
    }

    return (
        <div 
            ref={homeRef}
            className="flex-1 flex-row ">
            {/* Landing Page Background */}
            <div 
                className={`bg-cover bg-no-repeat bg-center bg-fixed bg-landing-two flex min-w-full`} 
                style={{ 
                    height: `${windowHeight}px` ,
                }}>
                <div 
                    style={{
                        ...styles.container,
                        ...(scrollTop > 200 ? styles.hideContainer : null),
                    }}
                    className={`flex-1 grid justify-items-center backdrop-blur-sm`}>
                    <div  style={isMobile ? styles.greetingsOnMobile : styles.greetings} className={`flex-1`}>
                        { greetings }
                    </div>
                    <div  style={isMobile ? styles.nameOnMobile : styles.name} className={`flex-1`}>
                        { name }
                    </div>
                    <div className="flex-1"  style={isMobile ? styles.iAmOnMobile : styles.iAm}>
                        <p> <CharacterAnimation label={nameToAnimate}/> </p>
                    </div>
                    <div  style={styles.contactBtn} className={`flex-1`}>
                        <Button 
                            onClick={() => {
                                closeMenu(listRef.contact)
                            }}
                            onMouseEnter={onHover}
                            onMouseLeave={onLeaveHover}
                            label={"Contact"} 
                            style={{...styles.contactLabel, ...onHovering}}/>
                    </div>
                </div>
                
            </div>
            <div>
                {/* Pages */}
                <About />
                <Services />
                <Portfolio />
                <Contact />
            </div>
        </div>
        
    )
}

const styles = {
    container: {
        transition: 'opacity .3s',
        opacity: '1',
    },
    hideContainer: {
        opacity: '0'
    },
    greetingsOnMobile: {
        position: 'absolute',
        top: '11rem',
        left: '50px',
        fontFamily: FONT_FAMILY,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '2rem',
        lineHeight: '82px',
        color: WHITE,
        letterSpacing: '3px',
    },
    greetings: {
        position: 'absolute',
        top: '15rem',
        left: '100px',
        fontFamily: FONT_FAMILY,
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '4.5rem',
        lineHeight: '82px',
        color: WHITE,
        letterSpacing: '3px',
    },
    nameOnMobile: {
        position: 'absolute',
        top: '14rem',
        left: '50px',
        fontFamily: FONT_FAMILY,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '1.5rem',
        lineHeight: '60px',
        color: WHITE,
        letterSpacing: '4px',
    },
    name: {
        position: 'absolute',
        top: '19rem',
        left: '100px',
        fontFamily: FONT_FAMILY,
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '3.5rem',
        lineHeight: '82px',
        color: WHITE,
        letterSpacing: '6px',
    },
    iAmOnMobile: {
        position: 'absolute',
        height: '68px',
        top: '16rem',
        left: '53px',
        fontFamily: FONT_FAMILY,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '15px',
        lineHeight: '40px',
        letterSpacing: '3px',
        color: LIGHT_GRAY,
    },
    iAm: {
        position: 'absolute',
        height: '68px',
        top: '23rem',
        left: '100px',

        fontFamily: FONT_FAMILY,
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '2rem',
        lineHeight: '68px',
        letterSpacing: '2px',
        color: WHITE,

    },
    contactBtn: {
        position: 'absolute',
        height: '68px',
        width: '200px',
        top: '29rem',
        left: '100px',
        color: WHITE,
    },

    contactLabel: {
        fontSize: '21px',
        fontWeight: '600',
        minHeight: '40px',
        letterSpacing: '2px',
        color: PRIMARY,
        borderColor: PRIMARY,
    }

}

export default Body;