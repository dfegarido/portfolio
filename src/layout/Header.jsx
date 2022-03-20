import { useEffect, useState } from "react";


const Header = () => {
    const [state, setState] = useState()
    useEffect(() => {
        console.log('first trigger')
    }, [state])

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl">this is header</h1>
        </div>
    )
}

export default Header;