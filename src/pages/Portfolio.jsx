import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../components/atom/Title";
import CardImage from "../components/atom/CardImage";
import Anchor from '../components/atom/Anchor'
import { useEffect, useRef } from "react";
import { setReference } from "../store/metadata";
import config from "../config";

const Portfolio = () => {
    const { windowHeight } = useSelector(({ metadata }) => metadata)
    const portfolioRef = useRef(null)
    const dispatch = useDispatch()
    const { portfolio } = config

    useEffect(() => {
        dispatch(setReference({name: 'portfolio', value: portfolioRef }))
    }, [])
    

    return (
        <div 
            ref={portfolioRef}
            className={"relative flex flex-col items-center pt-10 mt-10"} 
            style={{...styles.container}}>

            <Title label={"Portfolio"} />
            
            <div className="gap-10 sm:gap-20 grid grid-flow-col mt-10">
                <Anchor label={"All"} dark={true} className={`dark:text-neutral-500 dark:hover:text-neutral-700`} onClick={ () => setBrands('all') }/>
                <Anchor label={"Desktop"} dark={true} className={`dark:text-neutral-500 dark:hover:text-neutral-700`} onClick={ () => setBrands('desktop') }/>
                <Anchor label={"Mobile"} dark={true} className={`dark:text-neutral-500 dark:hover:text-neutral-700`} onClick={ () => setBrands('mobile') }/>
                <Anchor label={"E-commerce"} dark={true} className={`dark:text-neutral-500 dark:hover:text-neutral-700`} onClick={ () => setBrands('ecommerce') }/>
            </div>

            <div className={"grid grid-rows sm:grid-cols-2 md:grid-cols-3 gap-5 my-10 mx-8"} style={styles.card}>
                { 
                    portfolio.filter(({ brand }) => brand === brands || 'all' === brands).map((items, key) => (
                            <CardImage  
                                {...items}
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