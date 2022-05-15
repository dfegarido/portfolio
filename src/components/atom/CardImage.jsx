import { useState } from "react";
import Icon from "./Icon";
import '../../assets/cardImage.css'
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";

const CardImage = (props) => {
    const [flip, setFlip] = useState(false)

    return (
        <div 
            {...props} 
            className="drop-shadow-xl relative grid place-items-center justify-items-center "
        >

            <div className="vertical flip-container flex" >
                <div className={`flipper ${flip ? 'flip' : ''} flex-1 h-72 w-72`}>
                    <div 
                        style={{ backgroundImage: `url(${props.url})`}}
                        className="drop-shadow-md front rounded-md bg-cover bg-no-repeat bg-center bg-contain bg-black h-72 w-72">
                    </div>
                    <div className="drop-shadow-md back rounded-md text-center h-72 w-72">
                            <CardTitle label={props.name} className={`text-base`}/>
                            <CardDescription className={'text-justify'} label={props.description}/>
                    </div>
                </div>
            </div>


            <div className="absolute grid place-items-center justify-items-center opacity-0 hover:opacity-100 transition-all duration-300 z-10 w-full h-full p-2">
                <div className="flex flex-row gap-4">
                    <Icon 
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
        backgroundColor: 'green',
        transform: 'rotateX(-180deg)',
        transition: 'all .6s',
        transformStyle: 'preserve-3d',
        animation: 'toFront 0.3s linear normal forwards',
    },
    normal: {
        backgroundColor: 'red',
        transition: 'all .6s',
        transformStyle: 'preserve-3d',
        animation: 'toBack 0.3s linear normal  forwards',

    },
    flipper: {
        transition: '0.6s',
        transformStyle: 'preserve-3d',
        position: 'relative',
    },
    front: {
        zIndex: 1,
        backgroundColor:'red',
        animationDelay: '0.3s',
        animation: 'toBack 0.3s linear normal  forwards',
    },
    back: {
        transform: 'rotateX(-180deg)',
        backgroundColor:'green',
        animation: 'toFront 0.3s linear normal forwards',
    },
    frontBack: {
        position: 'absolute',
        top: 0,
        left: 0,
        backfaceVisibility: 'hidden',
    }
}


export default CardImage;