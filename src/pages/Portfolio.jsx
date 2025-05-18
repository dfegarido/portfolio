import { useState, Suspense, lazy, useEffect, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../components/atom/Title";
import Anchor from '../components/atom/Anchor'
import { setReference } from "../store/metadata";
import { portfolio } from "../helpers/config";
import { PORTFOLIO } from "../helpers/constants";


const CardImage = lazy(() => import('../components/atom/CardImage'));


const Portfolio = () => {
    const { isMobile }  = useSelector(({ metadata }) => metadata)

    const portfolioRef = useRef(null)
    const dispatch = useDispatch()
    const [ brands, setBrands ] = useState('all')


    useEffect(() => {
            dispatch(setReference({name: 'portfolio', value: portfolioRef }))
    }, [dispatch])

    let labels = [
        "Website",
        "Mobile",
        "Ecommerce"
    ]

    if(!isMobile){
        labels = ['All', ...labels]
    }

    useEffect(() => {
        if(isMobile) setBrands('website')
    }, [isMobile])

    

    return (
        <div 
            ref={portfolioRef}
            className={"relative flex flex-col items-center py-10"} 
            style={{...styles.container}}>

            <Title label={PORTFOLIO} />
            
            <div className="gap-5 sm:gap-20 mt-5 grid grid-flow-col sm:mt-10">
                {
                    labels.map( label => (
                        <Anchor 
                            key={label}
                            label={label} 
                            dark={true}
                            isActive={ brands === label.toLocaleLowerCase() }
                            onClick={ () => setBrands(label.toLocaleLowerCase()) }/>
                    ))
                }
            </div>

            <div className={"grid grid-rows sm:grid-cols-2 md:grid-cols-3 gap-5 mt-3 mx-8"} style={styles.card}>
                { 
                    portfolio.filter(({ brand }) => brand === brands || 'all' === brands).map((items, key) => (
                        <Suspense key={key} fallback={<div>Loading...</div>}>
                            <CardImage  {...items} />
                        </Suspense>                             
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