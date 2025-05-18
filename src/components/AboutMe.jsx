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
    TITLE,
    LIME,
    WHITE
} from "../helpers/constants";
import { downloadPDF } from '../helpers/common'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";



// Skill Card Component for displaying individual skills
const SkillCard = ({ skill, activeSkill, setActiveSkill }) => {
    return (
        <div 
            className="flex items-center p-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
                background: activeSkill === skill.name 
                    ? "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))" 
                    : "rgba(255, 255, 255, 0.7)",
                boxShadow: activeSkill === skill.name
                    ? "0 8px 20px rgba(0, 0, 0, 0.1), 0 2px 5px rgba(132, 204, 22, 0.15)"
                    : "0 4px 15px rgba(0, 0, 0, 0.05)",
                border: activeSkill === skill.name
                    ? "1px solid rgba(132, 204, 22, 0.2)"
                    : "1px solid rgba(255, 255, 255, 0.8)",
                cursor: "pointer"
            }}
            onMouseEnter={() => setActiveSkill(skill.name)}
            onMouseLeave={() => setActiveSkill(null)}
        >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 p-2" 
                style={{
                    background: "linear-gradient(135deg, rgba(132, 204, 22, 0.1) 0%, rgba(163, 230, 53, 0.2) 100%)",
                    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                    border: "1px solid rgba(255,255,255,0.7)"
                }}>
                <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-full h-full object-contain transition-all duration-300"
                    style={{
                        filter: skill.customIcon ? "" : (activeSkill === skill.name ? "drop-shadow(0 0 3px rgba(132, 204, 22, 0.7))" : "none"),
                        transform: activeSkill === skill.name ? "scale(1.15)" : "scale(1)"
                    }}
                />
            </div>
            <div>
                <p className="font-semibold text-slate-700 text-sm sm:text-base">{skill.name}</p>
                <div className="w-full bg-slate-200 rounded-full h-1.5 mt-1">
                    <div 
                        className="bg-gradient-to-r from-[#84cc16] to-[#a3e635] h-1.5 rounded-full transition-all duration-700"
                        style={{ 
                            width: `${activeSkill === skill.name ? skill.level : 0}%`,
                            boxShadow: activeSkill === skill.name ? "0 0 8px rgba(132, 204, 22, 0.5)" : "none"
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};



const AboutMe = () => {
    const { isMobile }  = useSelector(({ metadata }) => metadata)
    const [isHover, setHover] = useState(false)
    const [activeSkill, setActiveSkill] = useState(null)
    
    // Define skills with CDN icons and descriptions
    const frontendSkills = [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 95 },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 90 },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 85 },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95 },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 90 },
        { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", level: 88 },
    ];
    
    const backendSkills = [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 90 },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 88 },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 85 },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: 80 },
        { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", level: 75 },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: 70 },
    ];
    
    const aiSkills = [
        { name: "PySpark", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg", level: 82, customIcon: true },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 80 },
        { 
            name: "OpenAI", 
            icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg", 
            level: 85,
            customIcon: true
        },
        { 
            name: "Generative AI", 
            icon: "https://static.vecteezy.com/system/resources/previews/021/495/996/original/chatgpt-openai-logo-icon-free-png.png", 
            level: 78,
            customIcon: true
        },
        { 
            name: "AWS", 
            icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", 
            level: 72,
            customIcon: true
        },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 92 },
    ];

    return (
        <div className="flex flex-col items-center sm:items-end mt-10 mb-10 pt-10 p-6 w-[95%] rounded-xl shrink-0 drop-shadow-xl transition-all duration-300" 
             style={{
                 background: "var(--color-secondary)",
                 backdropFilter: "blur(10px)",
                 borderTop: "1px solid rgba(255, 255, 255, 0.5)",
                 borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
             }}>
            
            {/* Title with decorative elements */}
            <div className="w-full flex items-center mb-2">
                <div className="h-[3px] w-[30px] bg-gradient-to-r from-[#84cc16] to-[#a3e635] mr-4 rounded-full"></div>
                <Title label={ABOUT_ME} style={styles.aboutMe}/>
                <div className="h-[3px] flex-grow bg-gradient-to-r from-[#a3e635] to-transparent ml-4 rounded-full"></div>
            </div>
            
            {/* Description with Python code styling */}
            <div className="relative w-full mb-8 rounded-lg overflow-hidden bg-gray-800 bg-opacity-90 p-1">
                <div className="w-full flex items-center px-3 py-1 bg-gray-900 bg-opacity-80 text-xs text-slate-400">
                    <span className="mr-auto font-mono">about_me.py</span>
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500 opacity-70"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 opacity-70"></div>
                    </div>
                </div>
                <div className="px-5 py-4 overflow-auto text-left" style={{maxHeight: '380px'}}>
                    <pre className="text-sm sm:text-base font-mono">
                        <span className="text-blue-400">class</span> <span className="text-green-400">DeveloperProfile</span>:
                        <br/>
                        <span className="pl-4 text-slate-400"># Initialize developer profile</span>
                        <br/>
                        <span className="pl-4 text-blue-400">def</span> <span className="text-yellow-300">__init__</span><span className="text-slate-200">(self):</span>
                        <br/>
                        <span className="pl-8 text-blue-400">self</span>.<span className="text-emerald-300">role</span> <span className="text-slate-200">=</span> <span className="text-amber-300">"Senior Full Stack Engineer"</span>
                        <br/>
                        <span className="pl-8 text-blue-400">self</span>.<span className="text-emerald-300">experience</span> <span className="text-slate-200">=</span> <span className="text-amber-300">9</span> <span className="text-slate-200">+</span> <span className="text-slate-400"># years</span>
                        <br/><br/>
                        <span className="pl-4 text-blue-400">def</span> <span className="text-yellow-300">get_skills</span><span className="text-slate-200">(self):</span>
                        <br/>
                        <span className="pl-8 text-blue-400">return</span> <span className="text-slate-200">{"{"}</span>
                        <br/>
                        <span className="pl-12 text-amber-300">"frontend"</span><span className="text-slate-200">: [</span><span className="text-amber-300">"React"</span><span className="text-slate-200">,</span> <span className="text-amber-300">"TypeScript"</span><span className="text-slate-200">,</span> <span className="text-amber-300">"Redux"</span><span className="text-slate-200">],</span>
                        <br/>
                        <span className="pl-12 text-amber-300">"backend"</span><span className="text-slate-200">: [</span><span className="text-amber-300">"Node.js"</span><span className="text-slate-200">,</span> <span className="text-amber-300">"Express"</span><span className="text-slate-200">,</span> <span className="text-amber-300">"GraphQL"</span><span className="text-slate-200">],</span>
                        <br/>
                        <span className="pl-12 text-amber-300">"databases"</span><span className="text-slate-200">: [</span><span className="text-amber-300">"PostgreSQL"</span><span className="text-slate-200">,</span> <span className="text-amber-300">"MongoDB"</span><span className="text-slate-200">],</span>
                        <br/>
                        <span className="pl-12 text-amber-300">"ai_tools"</span><span className="text-slate-200">: [</span><span className="text-amber-300">"PySpark"</span><span className="text-slate-200">,</span> <span className="text-amber-300">"OpenAI"</span><span className="text-slate-200">,</span> <span className="text-amber-300">"Gen AI"</span><span className="text-slate-200">]</span>
                        <br/>
                        <span className="pl-8 text-slate-200">{"}"}</span>
                        <br/><br/>
                        <span className="pl-4 text-blue-400">def</span> <span className="text-yellow-300">describe</span><span className="text-slate-200">(self):</span>
                        <br/>
                        <span className="pl-8 text-violet-400">"""</span>
                        <br/>
                        <span className="pl-8 text-violet-400">I transform complex ideas into elegant, high-performance applications</span>
                        <br/>
                        <span className="pl-8 text-violet-400">using modern Python, JavaScript frameworks and best practices.</span>
                        <br/>
                        <span className="pl-8 text-violet-400">My approach combines technical precision with creative vision —</span>
                        <br/>
                        <span className="pl-8 text-violet-400">building solutions that not only function flawlessly but provide</span>
                        <br/>
                        <span className="pl-8 text-violet-400">compelling user experiences that drive business success.</span>
                        <br/>
                        <span className="pl-8 text-violet-400">"""</span>
                        <br/>
                        <span className="pl-8 text-blue-400">return</span> <span className="text-amber-300">"Let's build something amazing together!"</span>
                    </pre>
                </div>
            </div>
            
            {/* Skills section */}
            <div className="w-full mb-8">
                <div className="flex items-center mb-6">
                    <span className="text-lg font-semibold text-slate-700 tracking-wider">{ `{ Tech Stack }` }</span>
                    <div className="h-[2px] flex-grow bg-gradient-to-r from-[#84cc16] to-transparent ml-4 rounded-full"></div>
                </div>
                
                {/* Frontend Skills */}
                <div className="mb-6">
                    <h4 className="text-md font-medium text-slate-600 mb-3 pl-2 border-l-4 border-[#84cc16]">Frontend Development</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                        {frontendSkills.map((skill) => (
                            <SkillCard 
                                key={skill.name} 
                                skill={skill} 
                                activeSkill={activeSkill}
                                setActiveSkill={setActiveSkill}
                            />
                        ))}
                    </div>
                </div>
                
                {/* Backend Skills */}
                <div className="mb-6">
                    <h4 className="text-md font-medium text-slate-600 mb-3 pl-2 border-l-4 border-[#84cc16]">Backend Development</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                        {backendSkills.map((skill) => (
                            <SkillCard 
                                key={skill.name} 
                                skill={skill} 
                                activeSkill={activeSkill}
                                setActiveSkill={setActiveSkill}
                            />
                        ))}
                    </div>
                </div>
                
                {/* AI & Tools Skills */}
                <div className="mb-2">
                    <h4 className="text-md font-medium text-slate-600 mb-3 pl-2 border-l-4 border-[#84cc16]">AI Integration & Tools</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                        {aiSkills.map((skill) => (
                            <SkillCard 
                                key={skill.name} 
                                skill={skill} 
                                activeSkill={activeSkill}
                                setActiveSkill={setActiveSkill}
                            />
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Download resume button with elegant and futuristic design */}
            <div className="w-full flex justify-center sm:justify-start mt-10">
                <div className="relative group">
                    {/* Light effects */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] opacity-70 blur-md rounded-lg group-hover:opacity-100 group-hover:blur-lg transition-all duration-300"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-30 group-hover:opacity-50 animate-gradient-x rounded-lg"></div>
                    
                    {/* Button */}
                    <button 
                        onClick={downloadPDF} 
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className="relative flex items-center justify-center gap-3 px-6 py-3 bg-black/80 backdrop-blur-sm text-white rounded-lg transition-all duration-300 overflow-hidden group-hover:shadow-lg"
                        style={{
                            transform: isHover ? "translateY(-2px)" : "translateY(0)",
                            border: "1px solid rgba(255,255,255,0.1)",
                        }}
                    >
                        {/* Button content wrapper */}
                        <div className="flex items-center gap-3 z-10">
                            {/* Download icon */}
                            <div className={`relative rounded-full p-2 ${isHover ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]' : 'bg-[var(--color-primary)]'} transition-all duration-300`}>
                                <Icon 
                                    height={18} 
                                    width={18} 
                                    name="download" 
                                    className={`transition-transform duration-300 ${isHover ? 'animate-bounce-subtle' : ''}`}
                                />
                            </div>
                            
                            {/* Text content */}
                            <div className="flex flex-col items-start">
                                <span className="font-bold tracking-wider text-sm">RESUME</span>
                                <span className="text-xs opacity-70 tracking-widest">DOWNLOAD CV</span>
                            </div>
                        </div>
                        
                        {/* Moving light effect */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-30 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </button>
                </div>
            </div>
        </div>
    )
}

// We've removed the DownloadResume component as it's no longer needed
// The download button now has a direct elegant design


const styles = {
    aboutMe: {
        fontFamily: FONT_FAMILY,
        fontWeight: '700',
        letterSpacing: '4px',
        color: SLATE,
        position: 'relative',
        display: 'inline-block',
    },
    subtitle: {
        fontFamily: FONT_FAMILY,
        letterSpacing: '2px',
        color: LIGHT_GRAY,
        fontWeight: '500',
        fontSize: '18px',
        marginTop: '0px',
        position: 'relative',
        textShadow: '0 2px 5px rgba(0,0,0,0.05)',
        display: 'inline-block',
        borderBottom: '1px solid rgba(132, 204, 22, 0.3)',
        paddingBottom: '6px',
        transform: 'translateX(15px)',
    },
    descriptionOnMobile: {
        fontFamily: FONT_FAMILY,
        color: '#475569',
        letterSpacing: '0.6px',
        lineHeight: '22px',
        fontWeight: '400',
        fontSize: '0.95rem',
        marginTop: '10px',
    },
    description: {
        fontFamily: FONT_FAMILY,
        color: '#475569',
        letterSpacing: '1px',
        lineHeight: '30px',
        fontWeight: '400',
        textShadow: '0 1px 2px rgba(0,0,0,0.03)',
        position: 'relative',
        padding: '0 12px',
    },
    // We've moved all the styles to inline Tailwind classes for the new download button
    skillProgressBg: {
        height: '6px',
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: '3px',
        overflow: 'hidden',
        marginTop: '6px',
    },
    skillProgress: {
        height: '100%',
        transition: 'width 1s ease-in-out',
        borderRadius: '3px',
        background: `linear-gradient(90deg, ${LIME} 0%, ${WHITE} 100%)`,
        boxShadow: '0 0 10px rgba(132,204,22,0.5)',
    },
}

export default AboutMe;


