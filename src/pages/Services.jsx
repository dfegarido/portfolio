import { useDispatch, useSelector } from "react-redux";
import CircleLogo from "../components/atom/CircleLogo";
import Title from "../components/atom/Title";
import Card from "../components/Card";
import CardTitle from "../components/atom/CardTitle";
import CardDescription from "../components/atom/CardDescription";
import { useEffect, useRef } from "react";
import { setReference } from "../store/metadata";
import config from "../helpers/config";
import { FONT_FAMILY, GRAY, LIGHT_GRAY, SERVICE, SLATE } from "../helpers/constants";


const Services = () => {
    const serviceRef = useRef(null)
    const dispatch = useDispatch()
    const { services } = config

    useEffect(() => {
        dispatch(setReference({name: 'service', value: serviceRef }))
    }, [])
    

    

    return (
        <div 
            ref={serviceRef}
            className={`flex flex-col items-center pt-10 pb-10`}
            style={{...styles.container}}>

            <Title style={styles.title} label={SERVICE}/>
            
            <div className={"grid grid-rows sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 mx-8"} style={styles.card}>
                { 
                    services?.map(({ logo, title, description }, key) => (
                        <Card className={'p-2 pt-5 grid items-start place-items-center max-w-xs drop-shadow-lg'} key={key}>
                            <CircleLogo  name={logo} />
                            <CardTitle style={styles.cardTitle} label={title} className={`text-base`}/>
                            <CardDescription style={styles.cardDescription} className={'text-justify'} label={description}/>
                        </Card>
                    )) 
                }
            </div>
        </div>
    )
}

const styles = {
    container: {
        background: '#F9F9F9',
    },
    title: {
        fontFamily: FONT_FAMILY,
        letterSpacing: '3px',
        fontWeight: '700',
        color: SLATE,
    },
    cardTitle: {
        fontFamily: FONT_FAMILY,
        letterSpacing: '3px',
        color: GRAY
    },
    cardDescription: {
        fontFamily: FONT_FAMILY,
        color: LIGHT_GRAY,
        letterSpacing: '1px',
    }
}

export default Services;