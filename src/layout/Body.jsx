import { useDispatch, useSelector } from "react-redux"
import CharacterAnimation from "../components/CharacterAnimation"
import About from "../pages/About"
import Services from "../pages/Services"
import Portfolio from "../pages/Portfolio"
import Contact from "../pages/Contact"
import { useEffect, useRef } from "react"
import { setReference } from "../store/metadata"


const Body = () => {

    const { windowHeight, scrollTop }  = useSelector(({ metadata }) => metadata)
    const homeRef = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setReference({name: 'homeRef', value: homeRef }))
    })

    const nameToAnimate = [
        "Darwin Fegarido",
        "Javascript Developer",
        "Python Developer",
        "Frontend Developer",
        "Backend Developer",
        "Solution Architect",
        "UI / UX Designer", 
        "Shopify Developer",
    ]

    return (
        <div 
            ref={homeRef}
            className="flex-1 flex-row "
        >
            {/* Landing Page Background */}
            <div 
                className={`bg-cover bg-no-repeat bg-center bg-fixed bg-landing-two flex min-w-full`} 
                style={{ 
                    height: `${windowHeight}px` ,
                }}
            >
                <div 
                    style={{
                        ...styles.container,
                        ...(scrollTop > 100 ? styles.hideContainer : null),
                    }}
                    className={`flex-1 grid justify-items-center`}
                >
                    <div  style={styles.hello} className={`flex-1`}>
                        HELLO
                    </div>
                    <div className="flex-1"  style={styles.iAm}>
                        <p>I am <CharacterAnimation label={nameToAnimate}/> </p>
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
    hello: {
        position: 'absolute',
        top: '15rem',
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '3rem',
        lineHeight: '82px',
        color: '#FFFFFF',
    },
    iAm: {
        position: 'absolute',
        height: '68px',
        top: '303px',

        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '2rem',
        lineHeight: '68px',

        color: '#FFFFFF',

    },
}

export default Body;