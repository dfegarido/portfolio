
import { useSelector } from "react-redux";
import Title from "../components/atom/Title";
import Card from "../components/Card";
import CardImage from "../components/atom/CardImage";
import Anchor from '../components/atom/Anchor'
import Icon from '../components/atom/Icon'

const Portfolio = () => {
    const { windowHeight } = useSelector(({ metadata }) => metadata)
    
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
            className={"relative flex flex-col items-center pt-10 mt-10"} 
            style={{...styles.container, height: `${windowHeight}px`}}>

            <Title label={"Portfolio"} />
            
            <div className="grid grid-cols-3 gap-[200px]  mt-10">
                <Anchor label={"All"} dark={true} />
                <Anchor label={"Desktop"} dark={true}/>
                <Anchor label={"Mobile"} dark={true}/>
            </div>

            <div className={"grid grid-cols-3 gap-20 mt-10"} style={styles.card}>
                { 
                    portfolioData.map(({ name, url, link }, key) => (
                        <Card className={'grid grid-rows-3 items-start place-items-center'} key={key}>
                            <CardImage name={name} image={url} link={link} />   
                        </Card>
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