import { useDispatch } from "react-redux";
import Title from '../components/atom/Title';
import CircleLogo from '../components/atom/CircleLogo';
import CardTitle from "../components/atom/CardTitle";
import Input from "../components/atom/Input";
import TextArea from "../components/atom/TextArea";
import Button from "../components/atom/Button"
import { useEffect, useRef, useState } from "react";
import { setReference } from "../store/metadata";
import { useForm, ValidationError } from '@formspree/react';
import config from "../helpers/config";
import { FONT_FAMILY, SLATE } from "../helpers/constants";

const Contact = () => {
    const contactRef = useRef(null)
    const dispatch = useDispatch()
    const [error, setError] = useState()
    const [state, handleSubmit] = useForm("meqplwan");
    const { contact:contactUs } = config

    useEffect(() => {
        dispatch(setReference({name: 'contact', value: contactRef }))
    }, [])

    useEffect(() => {
        if(state.result !== null && state.succeeded) setError(0)
        if(state.errors.length > 0) setError(1)
        if(!state.submitting) setError(undefined)
    },[state])

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
            <div style={styles.logoContainer} className="pt-5 sm:pt-10 flex flex-row gap-1">
                {
                    contactUs.map((item, key) => (
                        <div style={styles.logo} className="flex flex-col flex-1 text-center items-center " key={key}>
                            <CircleLogo 
                                name={item.logo} 
                                style={styles.circleLogo}
                                className='cursor-pointer'
                                onClick={() => {
                                    window.open(
                                        item.link,
                                        '_blank'
                                    )
                                }}
                            />
                            <CardTitle style={styles.circleTitle} label={item.name} />
                        </div>
                    ))
                }
            </div>
            <div className={"mx-5 sm:mx-10 md:mx-24 lg:mx-80 pb-10 flex flex-col "}>
                <form onSubmit={handleSubmit}>
                    <div className={`transition-all flex flex-col ${error === undefined ? 'opacity-0' : 'opacity-100'}`}>
                        <div className={`flex-1 w-full ${error ? 'bg-red-300' : 'bg-green-300'} rounded-md h-48 text-center py-2 mb-4 font-bold text-slate-700`}>{error ? 'Failed' : "Success" }</div>
                    </div>
                    <div className="flex flex-col gap-12 sm:flex-row sm:gap-2 ">
                        <Input type="text" label="Name" className="flex-1" error={error}/>
                        <Input type="email" label="Email" className="flex-1" error={error}/>
                    </div>
                    <div className="flex flex-col mt-12 mb-3 ">
                        <TextArea label={"Message"} className="w-full" error={error}/>
                    </div>
                    <button 
                        style={styles.button}
                        label={"Submit"} 
                        type="submit" 
                        disabled={state.submitting} 
                        className="transition-all text-slate-100 bg-slate-900 hover:bg-slate-700 font-semibold border-slate-900 hover:border-slate-700 border-2 border-solid p-1 rounded-full w-full sm:w-48">
                            Submit
                    </button>
                </form>
                
            </div>
        </div>
    )
}

const styles = {
    container: {
        background: '#F9F9F9',
    },
    logoContainer: {
        justifyContent: 'center',
    },
    logo: {
        maxWidth: '100px',
    },
    circleTitle: {
        fontFamily: FONT_FAMILY,
        color: SLATE,
    },
    button: {

    }
}

export default Contact;