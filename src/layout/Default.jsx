import { useDispatch } from 'react-redux'
import { setScrollTop, setWindowHeight, setWindowWidth, setIsMobile } from '../store/metadata'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { useEffect } from 'react';

const Default = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const scrollListener = () => {
            dispatch(setScrollTop(document.documentElement.scrollTop))
        }

        const resizeListener = () => {
            dispatch(setWindowWidth(document.body.offsetWidth))
            dispatch(setIsMobile(document.body.offsetWidth < 640))
        }

        dispatch(setWindowWidth(document.body.offsetWidth))
        dispatch(setIsMobile(document.body.offsetWidth < 600))
        window.addEventListener('scroll', scrollListener)
        window.addEventListener('resize', resizeListener)
        dispatch(setWindowHeight(window.innerHeight))

        // Cleanup
        return () => {
            window.removeEventListener('scroll', scrollListener)
            window.removeEventListener('resize', resizeListener)
        }
    }, [dispatch])

    return (
        <div className={`h-fit overflow-hidden`}>
            <Header />
            <Body />
            <Footer />
            <ThemeSwitcher />
        </div>  
    );
}

export default Default