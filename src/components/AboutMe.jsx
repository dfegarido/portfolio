import Title from "./atom/Title";
import SubTitle from "./atom/SubTitle";
import Description from "./atom/Description";
import Button from "./atom/Button";
import Icon from "./atom/Icon";



const AboutMe = () => {

    const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non volutpat turpis. Nulla nisi leo, dictum quis cursus faucibus, viverra quis orci. Praesent pulvinar, mi vitae ultricies suscipit, libero est egestas lectus, quis egestas neque diam et augue. Praesent ipsum lectus, elementum a faucibus id, vehicula convallis ligula. Sed justo lectus, tempor nec lobortis ac, eleifend eget magna. `

    return (
        <div className="flex flex-col items-center sm:items-end mt-10 mb-20 p-5 w-[90%] bg-neutral-100 rounded shrink-0" >
            <Title label={"About Me"} className="font-black text-2xl sm:text-3xl "/>
            <SubTitle label={"Fullstack Developer"} className="font-black text-lg sm:text-xl text-neutral-400" />
            <Description label={description} className="font-thin text-justify sm:text-right text-neutral-500 mt-5 text-sm sm:text-base"/>
            <div className="grid grid-cols-2 gap-4 mt-10" >
                <Button label={<DownloadResume />} className={`grid place-items-center cursor-pointer active:bg-slate-600 outline px-5 h-8 text-xs sm:text-sm text-center rounded dark:bg-slate-900 dark:text-white   `} />
                <Button label={"Contact"} className={`grid place-items-center cursor-pointer outline px-5 h-8 text-xs sm:text-sm active:bg-slate-200 text-center rounded  text-slate-900`}  />
            </div>
        </div>
    )
}

const DownloadResume = () => {
    return (
        <div className="flex flex-row gap-2">
            <span className={`py-1`}>Resume</span> <Icon name="download"className={`h-5 w-5 sm:py-1`}/>
        </div>
    )
}

export default AboutMe;