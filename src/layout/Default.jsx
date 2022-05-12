import { useDispatch } from 'react-redux'
import { setScrollTop, setWindowHeight, setWindowWidth, setIsMobile } from '../store/metadata'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { useEffect } from 'react';


const Default = () => {
    const dispatch = useDispatch()

    const scrollListener = () => {
        dispatch(setScrollTop(document.documentElement.scrollTop))
    }

    const resizeListener = () => {
        dispatch(setWindowWidth(document.body.offsetWidth))
        dispatch(setIsMobile(document.body.offsetWidth < 640))
    }

    useEffect(() => {
        dispatch(setWindowWidth(document.body.offsetWidth))
        dispatch(setIsMobile(document.body.offsetWidth < 600))
        window.addEventListener('scroll', scrollListener)
        window.addEventListener('resize', resizeListener)
        dispatch(setWindowHeight(window.innerHeight))
    }, [])

    return (
      <div className={`grid grid-rows-1 h-fit overflow-hidden`}>
          <Header />
          <Body />
          <Footer />
      </div>  
    );
}

export default Default