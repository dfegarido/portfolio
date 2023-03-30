
import { useDispatch, useSelector } from "react-redux";
import Title from "../components/atom/Title";
import Card from "../components/Card";
import CardImage from "../components/atom/CardImage";
import Anchor from '../components/atom/Anchor'
import { useEffect, useRef } from "react";
import { setReference } from "../store/metadata";

const Portfolio = () => {
    const { windowHeight } = useSelector(({ metadata }) => metadata)
    const portfolioRef = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setReference({name: 'portfolio', value: portfolioRef }))
    }, [])
    
    const portfolioData = [
        {
            'name':'name',
            'url': require('../assets/landing-background.jpg'),
            'link':'https://www.google.com'
        },
        {
            'name':'name',
            'url': require('../assets/landing-background1.jpg'),
            'link':'https://www.google.com'
        },
        {
            'name':'name',
            'url': require('../assets/landing-background2.jpg'),
            'link':'https://www.google.com'
        },
        {
            'name':'name',
            'url': require('../assets/landing-background3.jpg'),
            'link':'https://www.google.com'
        },
        {
            'name':'name',
            'url': require('../assets/landing-background1.jpg'),
            'link':'https://www.google.com'
        },
        {
            'name':'name',
            'url': require('../assets/landing-background2.jpg'),
            'link':'https://www.google.com'
        },
    ]

    return (
        <div 
            ref={portfolioRef}
            className={"relative flex flex-col items-center pt-10 mt-10"} 
            style={{...styles.container}}>

            <Title label={"Portfolio"} />
            
            <div className="gap-10 sm:gap-20 grid grid-flow-col mt-10">
                <Anchor label={"All"} dark={true} />
                <Anchor label={"Desktop"} dark={true}/>
                <Anchor label={"Mobile"} dark={true}/>
            </div>

            <div className={"grid grid-rows sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 mx-8"} style={styles.card}>
                { 
                    portfolioData.map(({ name, url, link }, key) => (
                            <CardImage  
                                name={name} 
                                image={url} 
                                link={link} 
                                key={key}
                            />                               
                    )) 
                }
            </div>

        </div>
    )
}


const styles = {
    container: {
        background: '#FFF',
    },
    
}

export default Portfolio;