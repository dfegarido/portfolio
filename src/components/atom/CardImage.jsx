import { useState } from "react";
import Icon from "./Icon";
import '../../assets/cardImage.css'
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import { FONT_FAMILY, LIGHT_GRAY, SLATE } from "../../helpers/constants";

const CardImage = (props) => {
    const [flip, setFlip] = useState(false)

    return (
        <div {...props} className=" relative grid place-items-center justify-items-center ">

            <div className=" vertical flip-container flex" >
                <div className={` border border-solid rounded-xl flipper ${flip ? 'flip' : ''} flex-1 h-72 w-72`}>
                    <div 
                        style={{ backgroundImage: `url(${props.url})`}}
                        className=" front rounded-xl bg-cover bg-no-repeat bg-center bg-contain bg-black h-72 w-72">
                    </div>
                    <div className=" back rounded-xl text-center h-72 w-72 pt-5">
                            <CardTitle style={styles.cardTitle} label={props.name} className={`text-base`}/>
                            <CardDescription style={styles.cardDescription} className={'text-justify'} label={props.description}/>
                    </div>
                </div>
            </div>


            <div className="absolute grid place-items-center justify-items-center opacity-0 hover:opacity-100 transition-all duration-300 z-10 w-full h-full p-2">
                <div className="flex flex-row gap-4">
                    <Icon 
                        height={24}
                        width={24}
                        className="cursor-pointer rotate-45 bg-black hover:bg-slate-900 rounded-full p-1"
                        name={'link'}
                        onClick={() => {
                            window.open(
                                props?.link,
                                '_blank'
                            )
                        }}
                    />  
                    <Icon 
                        height={24}
                        width={24}
                        className="cursor-pointer bg-black hover:bg-slate-900 rounded-full p-1"
                        name={'description'}
                        onClick={() => {
                            setFlip(prevState => !prevState)
                        }}
                    /> 
                </div>
                 
            </div>
                   
        </div>
    )
}

const styles = {
    flip: {
        transform: 'rotateX(-180deg)',
        transformStyle: 'preserve-3d',
        animation: 'toFront 0.5s linear normal forwards',
    },
    normal: {
        transition: 'all .6s',
        transformStyle: 'preserve-3d',
        animation: 'toBack 0.5s linear normal  forwards',

    },
    flipper: {
        transition: 'animation .5s',
        transformStyle: 'preserve-3d',
        position: 'relative',
    },
    front: {
        zIndex: 1,
        backgroundColor:'red',
        animationDelay: '0.3s',
        animation: 'toBack 0.5s linear normal  forwards',
    },
    back: {
        transform: 'rotateX(-180deg)',
        backgroundColor:'green',
        animation: 'toFront 0.5s linear normal forwards',
    },
    frontBack: {
        position: 'absolute',
        top: 0,
        left: 0,
        backfaceVisibility: 'hidden',
    },
    cardTitle: {
        fontFamily: FONT_FAMILY,
        color: SLATE,
        letterSpacing: '1px',
    },
    cardDescription: {
        fontFamily: FONT_FAMILY,
        color: LIGHT_GRAY,
        letterSpacing: '1px',
    }
}


export default CardImage;