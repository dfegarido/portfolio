import { useDispatch, useSelector } from "react-redux";
import CircleLogo from "../components/atom/CircleLogo";
import Title from "../components/atom/Title";
import Card from "../components/Card";
import CardTitle from "../components/atom/CardTitle";
import CardDescription from "../components/atom/CardDescription";
import { useEffect, useRef } from "react";
import { setReference } from "../store/metadata";


const Services = () => {
    const serviceRef = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setReference({name: 'serviceRef', value: serviceRef }))
    })
    

    const cardContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel quam tempus, scelerisque lorem quis, sollicitudin enim. Praesent at consectetur dolor, eget finibus arcu.';
    const servicesData = [
        {
            'logo':'computer',
            'title':'Web Design',
            'description':cardContent,
        },
        {
            'logo':'branding',
            'title':'Branding',
            'description':cardContent,
        },
        {
            'logo':'development',
            'title':'Development',
            'description':cardContent,
        },
        {
            'logo':'brush',
            'title':'Creative Design',
            'description':cardContent,
        },
        {
            'logo':'mobile',
            'title':'Fully Responsive',
            'description':cardContent,
        },
        {
            'logo':'cloud',
            'title':'Search Engine Optimization',
            'description':cardContent,
        },
    ]


    return (
        <div 
            ref={serviceRef}
            className={`flex flex-col items-center pt-10 pb-10`}
            style={{...styles.container}}>

            <Title label={"Services"} className="font-black text-2xl sm:text-3xl "/>
            
            <div className={"grid grid-rows sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 mx-8"} style={styles.card}>
                { 
                    servicesData.map(({ logo, title, description }, key) => (
                        <Card className={'p-2 grid items-start place-items-center'} key={key}>
                            <CircleLogo  name={logo} className={`h-12 w-12 p-2 mt-1 sm:h-20 sm:w-20 sm:p-5`}/>
                            <CardTitle className={'font-semibold'} label={title} />
                            <CardDescription className={'text-justify my-3 text-gray-500 mx-5 text-xs sm:text-sm'} label={description}/>
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
    }
}

export default Services;