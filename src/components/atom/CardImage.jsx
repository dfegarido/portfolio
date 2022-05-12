import { useState } from "react";
import Icon from "./Icon";


const CardImage = (props) => {

    return (
        <div {...props} className="relative grid place-items-center justify-items-center">
            <img 
                className="rounded-md h-full w-full max-w-xs"
                src={props.image} 
                alt={props.name} 
            /> 
            <Icon 
                className="absolute cursor-pointer grid place-items-center justify-items-center opacity-0 hover:opacity-100 transition-all duration-300 z-10 w-full  w-full h-full p-2 hover:animate-pulse"
                name={'link'}
            />         
        </div>
    )
}


export default CardImage;