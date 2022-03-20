import { useSelector } from "react-redux";
import CircleLogo from "../components/atom/CircleLogo";
import Title from "../components/atom/Title";
import Card from "../components/Card";
import CardTitle from "../components/atom/CardTitle";
import CardDescription from "../components/atom/CardDescription";


const Services = () => {

    const { windowHeight } = useSelector(({ metadata }) => metadata)

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
            className={`relative flex flex-col items-center pt-10 pb-10`}
            style={{...styles.container, height: `${windowHeight}px`}}>

            <Title label={"Services"} />
            
            <div className={"grid grid-cols-3 gap-20 mt-10"} style={styles.card}>
                { 
                    servicesData.map(({ logo, title, description }, key) => (
                        <Card className={'p-10 grid grid-rows-3 items-start place-items-center'} key={key}>
                            <CircleLogo  name={logo} />
                            <CardTitle className={'pt-5'} label={title} />
                            <CardDescription className={'-mt-7'} label={description}/>
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
    card: {

    }
}

export default Services;