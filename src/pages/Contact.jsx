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
        dispatch(setReference({name: 'contactRef', value: contactRef }))
    })



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
                ...styles.container,
                height: `${windowHeight}px`
            }}
            >
            <div className="pt-10 grid justify-center">
                <Title label={"Contact Us"}/>
            </div>
            <div className="pt-10 grid grid-cols-3 gap-4 ">
                {
                    contactUs.map((item, key) => (
                        <div className="flex flex-col  text-center place-items-center" key={key}>
                            <CircleLogo name={item.logo}/>
                            <CardTitle label={item.name} className={"mt-5"}/>
                            <CardDescription label={item.description} className={"mt-2 w-[300px] m-0 p-0"}/>
                        </div>
                    ))
                }
            </div>
            <div className={"mx-20 mt-20 mb-10 grid grid-cols-2 gap-10"}>
                <Input type="text" label="Name" />
                <Input type="email" label="Email" />
            </div>
            <div className="mx-20">
                <TextArea label={"Message"}/>
            </div>
            <div className="mt-5 mx-20">
                <Button label={"Submit"}/>
            </div>
        </div>
    )
}

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        background: '#F9F9F9',
    }
}

export default Contact;