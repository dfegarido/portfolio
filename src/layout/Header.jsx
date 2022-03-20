import { useEffect, useState } from "react";


const Header = () => {
    const [state, setState] = useState()
    useEffect(() => {
        console.log('first trigger')
    }, [state])

    return (
        <div className="flex flex-row w-full fixed ">
            <div className="flex-none w-[30%] h-14" style={{backgroundColor: 'red'}}>
               <p>Fegarido</p> 
            </div>
            <div className="grow h-14" style={{backgroundColor: 'blue'}}>2</div>

        </div>
    )
}

export default Header;