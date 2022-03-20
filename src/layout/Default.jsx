import { useSelector, useDispatch } from 'react-redux'
import { setScrollTop, setWindowHeight } from '../store/metadata'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { useEffect } from 'react';


const Default = () => {
    const dispatch = useDispatch()

    const scrollListener = () => {
        dispatch(setScrollTop(document.documentElement.scrollTop))
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollListener )
        dispatch(setWindowHeight(window.innerHeight))
    }, [])

    return (
      <div>
          <Header />
          <Body />
          <Footer />
      </div>  
    );
}

export default Default