import { useSelector, useDispatch } from 'react-redux'
import { firstName, lastName } from '../store/metadata'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { useEffect, use } from 'react';


const Default = () => {
    // const { firstname, lastname } = useSelector(({ metadata }) => metadata)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(firstName('Darwin'))
    //     dispatch(lastName('Fegarido'))
    // }, [])
   
    return (
      <div>
          <Header />
          <Body />
          <Footer />
      </div>  
    );
}

export default Default