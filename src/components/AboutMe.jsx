import { useSelector } from "react-redux";
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



const AboutMe = () => {
    return (
        <div className="flex flex-col items-center sm:items-end mt-10 mb-20 pt-10 p-5 w-[90%] bg-neutral-100 rounded shrink-0 drop-shadow-xl" >
            <Title label={ABOUT_ME} style={styles.aboutMe}/>
            <SubTitle label={TITLE} style={styles.subtitle} className="" />
            <Description label={DESCRIPTION} style={styles.description} className="font-thin text-justify mt-5 text-sm sm:text-base"/>
            <div className="grid grid-cols-1 gap-4 mt-10" >
                <Button onClick={downloadPDF} label={<DownloadResume />} style={ styles.downloadBtn } className={` text-slate-100 font-semibold border-slate-600`} />
            </div>
        </div>
    )
}

const DownloadResume = () => {
    return (
        <div className="flex flex-row gap-2">
            <span className={`py-1`}>Resume</span> <Icon name="download" style={{color: 'red'}} className={`h-5 w-5 sm:py-1`}/>
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
    description: {
        fontFamily: FONT_FAMILY,
        color: SLATE,
        letterSpacing: '1px',
        lineHeight: '30px',
        fontWeight: '400',
    },
    downloadBtn: {
        fontFamily: FONT_FAMILY,
        height: '40px',
        width: '130px',
        letterSpacing: '2px',
        backgroundColor: SLATE,
    },

}

export default AboutMe;


