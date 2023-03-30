import { useDispatch, useSelector } from "react-redux";
import Title from '../components/atom/Title';
import CircleLogo from '../components/atom/CircleLogo';
import CardTitle from "../components/atom/CardTitle";
import CardDescription from "../components/atom/CardDescription";
import Input from "../components/atom/Input";
import TextArea from "../components/atom/TextArea";
import Button from "../components/atom/Button"
import { useEffect, useRef } from "react";
import { setReference } from "../store/metadata";

const Contact = () => {
    const { windowHeight } = useSelector(({ metadata }) => metadata)
    const contactRef = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setReference({name: 'contact', value: contactRef }))
    }, [])



    const contactUs = [
        {
            logo: 'pin',
            name: 'Address',
            description: 'Lorem Ipsum address this is another address #1234 CA.'
        },
        {
            logo: 'email',
            name: 'Email Address',
            description: 'thisisasample@example.com'
        },
        {
            logo: 'phone',
            name: 'Phone',
            description: '+23 234 2344'
        },
    ];

    return (
        <div 
            ref={contactRef}
            style={{
                ...styles.container
            }}
            >
            <div className="pt-10 grid justify-center">
                <Title label={"Contact Us"}/>
            </div>
            <div className="pt-10 flex flex-col sm:flex-row gap-4 ">
                {
                    contactUs.map((item, key) => (
                        <div className="flex flex-col flex-1 text-center items-center justify-items-center " key={key}>
                            <CircleLogo name={item.logo} />
                            <CardTitle label={item.name} className="text-xs mt-3"/>
                            <CardDescription label={item.description} className="text-center text-xs w-48 max-w-prose"/>
                        </div>
                    ))
                }
            </div>
            <div className={"mx-5 sm:mx-10 md:mx-24 my-10 flex flex-col"}>
                <div className="flex flex-col gap-12 sm:flex-row sm:gap-2 ">
                    <Input type="text" label="Name" className="flex-1 w-full"/>
                    <Input type="email" label="Email" className="flex-1"/>
                </div>
                <div className="flex flex-col mt-12 mb-3 ">
                    <TextArea label={"Message"} className="w-full"/>
                </div>
                <Button label={"Submit"} className="w-full sm:w-48"/>

                
                
            </div>
        </div>
    )
}

const styles = {
    container: {
        background: '#F9F9F9',
    }
}

export default Contact;