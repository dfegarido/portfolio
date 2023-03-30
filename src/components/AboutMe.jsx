import Title from "./atom/Title";
import SubTitle from "./atom/SubTitle";
import Description from "./atom/Description";
import Button from "./atom/Button";
import Icon from "./atom/Icon";
import { 
    DESCRIPTION, 
    ABOUT_ME,
    FONT_FAMILY,
    SLATE,
    LIGHT_GRAY,
    TITLE
} from "../helpers/constants";
import { downloadPDF } from '../helpers/common'
import { useState } from "react";
import { useSelector } from "react-redux";



const AboutMe = () => {
    const { isMobile }  = useSelector(({ metadata }) => metadata)
    const [isHover, setHover] = useState(false)

    return (
        <div className="flex flex-col items-center sm:items-end mt-10 mb-10 pt-10 p-5 w-[90%] bg-neutral-100 rounded shrink-0 drop-shadow-lg" >
            <Title label={ABOUT_ME} style={styles.aboutMe}/>
            <SubTitle label={TITLE} style={styles.subtitle} className="" />
            <Description label={DESCRIPTION} style={isMobile ? styles.descriptionOnMobile : styles.description} className="font-thin text-justify mt-5 text-sm sm:text-base"/>
            <div className="grid grid-cols-1 gap-4 mt-10" >
                <Button 
                    onClick={downloadPDF} 
                    label={<DownloadResume />} 
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{
                        ...styles.downloadBtn,
                        opacity: isHover ? 1 : 0.9,
                    }} 
                    className={`text-slate-100 font-semibold border-slate-600`}/>
            </div>
        </div>
    )
}

const DownloadResume = () => {
    return (
        <div className="flex flex-row gap-2">
            <span className={`py-1`}>Resume</span> <Icon height={20} width={20} name="download" style={{color: 'red'}} className={`h-5 w-5 sm:py-1`}/>
        </div>
    )
}


const styles = {
    aboutMe: {
        fontFamily: FONT_FAMILY,
        fontWeight: '700',
        letterSpacing: '3px',
        color: SLATE
    },
    subtitle: {
        fontFamily: FONT_FAMILY,
        letterSpacing: '2px',
        color: LIGHT_GRAY,
        fontWeight: '600',
        fontSize: '20px',
        marginTop: '-7px',
    },
    descriptionOnMobile: {
        fontFamily: FONT_FAMILY,
        color: SLATE,
        letterSpacing: '0.6px',
        lineHeight: '21px',
        fontWeight: '400',
    },
    description: {
        fontFamily: FONT_FAMILY,
        color: SLATE,
        letterSpacing: '1px',
        lineHeight: '30px',
        fontWeight: '400',
    },
    downloadBtn: {
        transition: 'opacity .1s',
        fontFamily: FONT_FAMILY,
        height: '40px',
        width: '130px',
        letterSpacing: '2px',
        backgroundColor: SLATE,
        fontSize: '14px',
    },

}

export default AboutMe;


