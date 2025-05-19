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
import { useTheme } from "../contexts/ThemeContext";



// Helper function for theme-specific skill category colors
const getSkillCategoryColor = (category) => {
    const baseColors = {
        frontend: "52, 211, 153",     // Green-ish
        backend: "59, 130, 246",      // Blue-ish
        ai: "139, 92, 246",           // Purple-ish
        tools: "249, 115, 22"         // Orange-ish
    };
    
    return baseColors[category] || "var(--color-primary-rgb)";
};

// CSS keyframes for fade animations
const fadeAnimations = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes fadeOut {
    from { opacity: 1; transform: translateY(0) scale(1); }
    to { opacity: 0; transform: translateY(-10px) scale(0.95); }
}

@keyframes scaleIn {
    from { transform: scale(0.9); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}

@keyframes slideIn {
    from { transform: translateX(15px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

.skill-section-slide-in-1 { animation: slideIn 0.5s ease-out forwards 0.1s; }
.skill-section-slide-in-2 { animation: slideIn 0.5s ease-out forwards 0.2s; }
.skill-section-slide-in-3 { animation: slideIn 0.5s ease-out forwards 0.3s; }
`;

// Skill Card Component for displaying individual skills with enhanced visual effects
const SkillCard = ({ skill, activeSkill, setActiveSkill }) => {
    const { theme } = useTheme();
    
    return (
        <div 
            className="flex flex-row items-center p-3 sm:p-4 rounded-lg transition-all duration-500 hover:scale-105 hover:shadow-lg group relative"
            style={{
                background: activeSkill === skill.name 
                    ? `linear-gradient(135deg, rgba(var(--color-background-rgb), 0.94), rgba(var(--color-background-rgb), 0.8))` 
                    : `rgba(var(--color-background-rgb), 0.8)`,
                boxShadow: activeSkill === skill.name
                    ? `0 8px 20px rgba(0, 0, 0, 0.15), 0 2px 5px rgba(var(--color-primary-rgb), 0.2)`
                    : `0 4px 15px rgba(0, 0, 0, 0.05)`,
                border: activeSkill === skill.name
                    ? `1px solid rgba(var(--color-primary-rgb), 0.3)`
                    : `1px solid rgba(var(--color-secondary-rgb), 0.6)`,
                cursor: "pointer",
                backdropFilter: "blur(8px)",
                transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                transform: activeSkill === skill.name ? 'translateY(-2px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setActiveSkill(skill.name)}
            onMouseLeave={() => setActiveSkill(null)}
        >
            {/* Subtle glow effect when active */}
            {activeSkill === skill.name && (
                <div 
                    className="absolute inset-0 -z-10 rounded-lg opacity-40"
                    style={{ 
                        background: skill.category 
                            ? `radial-gradient(circle at center, rgba(${getSkillCategoryColor(skill.category)}, 0.3) 0%, transparent 70%)`
                            : `radial-gradient(circle at center, rgba(var(--color-primary-rgb), 0.3) 0%, transparent 70%)`,
                        filter: 'blur(10px)'
                    }}
                ></div>
            )}

            <div className="min-w-[40px] h-10 sm:min-w-[48px] sm:h-12 rounded-full flex items-center justify-center mr-3 p-1.5 transition-all duration-500 group-hover:shadow-lg relative shrink-0" 
                style={{
                    background: activeSkill === skill.name
                        ? `linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.25) 0%, rgba(var(--color-accent-rgb), 0.35) 100%)`
                        : `linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.1) 0%, rgba(var(--color-accent-rgb), 0.2) 100%)`,
                    boxShadow: activeSkill === skill.name 
                        ? "0 5px 15px rgba(0,0,0,0.12)" 
                        : "0 3px 10px rgba(0,0,0,0.08)",
                    border: `1px solid rgba(var(--color-secondary-rgb), ${activeSkill === skill.name ? '0.8' : '0.6'})`,
                    transform: activeSkill === skill.name ? 'scale(1.08) rotate(5deg)' : 'scale(1)',
                    overflow: 'hidden',
                }}>
                {/* Animated ring when active */}
                {activeSkill === skill.name && (
                    <div 
                        className="absolute inset-0 rounded-full animate-pulse"
                        style={{ 
                            border: `2px solid rgba(var(--color-primary-rgb), 0.6)`,
                            boxShadow: `0 0 10px rgba(var(--color-primary-rgb), 0.4)`,
                        }}
                    ></div>
                )}
                <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-full h-full object-contain transition-all duration-500"
                    style={{
                        filter: skill.customIcon ? "" : (activeSkill === skill.name ? `drop-shadow(0 0 4px rgba(var(--color-primary-rgb), 0.8))` : "none"),
                        transform: activeSkill === skill.name ? "scale(1.15)" : "scale(1)",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        background: (skill.name === "OpenAI") ? "white" : "transparent",
                        borderRadius: (skill.name === "OpenAI") ? "50%" : "0",
                        padding: (skill.name === "Tailwind CSS" || skill.name === "AWS" || skill.name === "OpenAI") ? "2px" : "0",
                        objectFit: "contain"
                    }}
                />
            </div>
            <div className="flex-grow min-w-0">
                <div className="flex justify-between items-center flex-wrap">
                    <p className="font-semibold text-sm sm:text-base truncate mr-2" 
                        style={{ 
                            color: "var(--color-primary)", 
                            textShadow: "0px 0px 1px rgba(0,0,0,0.2)",
                            transition: "all 0.4s ease",
                            transform: activeSkill === skill.name ? 'translateY(-1px)' : 'translateY(0)',
                            letterSpacing: '0.5px'
                        }}>
                        {skill.name}
                    </p>
                    <span 
                        className="text-xs font-medium transition-all duration-500 whitespace-nowrap"
                        style={{
                            opacity: activeSkill === skill.name ? 1 : 0,
                            transform: activeSkill === skill.name ? 'translateX(0)' : 'translateX(10px)',
                            color: "var(--color-primary)",
                            background: `rgba(var(--color-primary-rgb), 0.15)`,
                            padding: "2px 6px",
                            borderRadius: "10px",
                        }}
                    >
                        {skill.level}%
                    </span>
                </div>
                <div className="w-full rounded-full h-2 mt-2 overflow-hidden" 
                    style={{ 
                        backgroundColor: "rgba(0,0,0,0.2)",
                        boxShadow: "inset 0 1px 3px rgba(0,0,0,0.12)"
                    }}>
                    <div 
                        className="h-2 rounded-full transition-all duration-700"
                        style={{ 
                            width: `${activeSkill === skill.name ? skill.level : 0}%`,
                            minWidth: activeSkill === skill.name ? "4px" : "0",
                            background: skill.category 
                                ? `linear-gradient(to right, rgba(${getSkillCategoryColor(skill.category)}, 0.8), rgba(${getSkillCategoryColor(skill.category)}, 0.6))`
                                : `linear-gradient(to right, var(--color-primary), var(--color-accent))`,
                            boxShadow: activeSkill === skill.name 
                                ? skill.category 
                                    ? `0 0 10px rgba(${getSkillCategoryColor(skill.category)}, 0.5)` 
                                    : `0 0 8px rgba(var(--color-primary-rgb), 0.6)` 
                                : "none",
                            transition: "width 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67), box-shadow 0.4s ease"
                        }}
                    >
                        {/* Animated particles effect */}
                        {activeSkill === skill.name && (
                            <div className="h-full w-full relative overflow-hidden">
                                <div className="absolute top-0 right-0 h-full w-1/4 animate-pulse opacity-80"
                                    style={{
                                        background: `linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)`,
                                        animation: `pulse 1.5s infinite`
                                    }}></div>
                            </div>
                        )}
                    </div>
                </div>
                {skill.years && (
                    <div 
                        className="text-xs mt-2 transition-all duration-500 overflow-hidden flex items-center"
                        style={{
                            height: activeSkill === skill.name ? '16px' : '0',
                            opacity: activeSkill === skill.name ? 0.9 : 0,
                            color: "var(--color-accent)",
                            whiteSpace: "nowrap",
                        }}
                    >
                        <span className="inline-block mr-1 flex-shrink-0" style={{ fontSize: '10px' }}>⌛</span>
                        <span className="truncate">{skill.years} {skill.years === 1 ? 'year' : 'years'} experience</span>
                    </div>
                )}
            </div>
        </div>
    );
};



const AboutMe = () => {
    const { isMobile }  = useSelector(({ metadata }) => metadata)
    const [isHover, setHover] = useState(false)
    const [activeSkill, setActiveSkill] = useState(null)
    const [activeFilter, setActiveFilter] = useState('all')
    const [prevFilter, setPrevFilter] = useState('all')
    const [isFilterTransitioning, setIsFilterTransitioning] = useState(false)
    const [skillBreakdown, setSkillBreakdown] = useState({})
    const { theme, themeKey } = useTheme();
    
    // Inject CSS animations into document head
    useEffect(() => {
        // Create style element
        const styleEl = document.createElement('style');
        styleEl.type = 'text/css';
        styleEl.id = 'skill-animations';
        styleEl.appendChild(document.createTextNode(fadeAnimations));
        
        // Add to head if not already there
        if (!document.getElementById('skill-animations')) {
            document.head.appendChild(styleEl);
        }
        
        // Cleanup function
        return () => {
            const existingStyle = document.getElementById('skill-animations');
            if (existingStyle) {
                document.head.removeChild(existingStyle);
            }
        };
    }, []);

    // Calculate skill statistics for visualization
    useEffect(() => {
        const allSkills = [...frontendSkills, ...backendSkills, ...aiSkills];
        const breakdown = {
            frontend: {
                count: frontendSkills.length,
                avgLevel: frontendSkills.reduce((acc, skill) => acc + skill.level, 0) / frontendSkills.length,
                topSkill: frontendSkills.sort((a, b) => b.level - a.level)[0]
            },
            backend: {
                count: backendSkills.length,
                avgLevel: backendSkills.reduce((acc, skill) => acc + skill.level, 0) / backendSkills.length,
                topSkill: backendSkills.sort((a, b) => b.level - a.level)[0]
            },
            ai: {
                count: aiSkills.length,
                avgLevel: aiSkills.reduce((acc, skill) => acc + skill.level, 0) / aiSkills.length,
                topSkill: aiSkills.sort((a, b) => b.level - a.level)[0]
            }
        };
        setSkillBreakdown(breakdown);
    }, []);
    
    // Define skills with CDN icons, experience years and descriptions
    const frontendSkills = [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 95, years: 5, category: "frontend" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 90, years: 4, category: "frontend" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 85, years: 3, category: "frontend" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95, years: 6, category: "frontend" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 90, years: 6, category: "frontend" },
        { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", level: 88, years: 4, category: "frontend" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", level: 92, years: 3, category: "frontend", customIcon: true },
    ];
    
    const backendSkills = [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 90, years: 4, category: "backend" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 88, years: 4, category: "backend" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 85, years: 3, category: "backend" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: 80, years: 3, category: "backend" },
        { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", level: 75, years: 2, category: "backend" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: 70, years: 2, category: "backend" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", level: 78, years: 2, category: "backend", customIcon: true },
    ];
    
    const aiSkills = [
        { name: "PySpark", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg", level: 82, years: 3, customIcon: true, category: "ai" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 80, years: 4, category: "ai" },
        { 
            name: "OpenAI", 
            icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", 
            level: 85,
            years: 2,
            customIcon: true,
            category: "ai"
        },
        { 
            name: "Generative AI", 
            icon: "https://static.vecteezy.com/system/resources/previews/021/495/996/original/chatgpt-openai-logo-icon-free-png.png", 
            level: 78,
            years: 1,
            customIcon: true,
            category: "ai"
        },
        { name: "TensorFlow", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", 
          level: 75, 
          years: 2,
          category: "ai"
        },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 92, years: 5, category: "tools" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: 90, years: 5, category: "tools" },
    ];

    // Determine appropriate editor background based on theme
    const getEditorBackgroundStyle = () => {
        // Use darker background for editor regardless of theme
        return {
            backgroundColor: themeKey === 'minimalist' ? 'rgba(35, 35, 35, 0.95)' : 
                             themeKey === 'tech' ? 'rgba(5, 15, 25, 0.95)' : 
                             'rgba(15, 15, 15, 0.95)',
        };
    };
    
    // Using the globally defined getSkillCategoryColor function

    // Handle smooth filter transitions with enhanced animation control
    const handleFilterChange = (filter) => {
        if (filter === activeFilter) return;
        
        // Reset any active skill to avoid visual conflicts during transition
        setActiveSkill(null);
        
        // Start transition with fade-out effect
        setIsFilterTransitioning(true);
        setPrevFilter(activeFilter);
        
        // Slight delay before changing the filter to allow fade-out to start
        setTimeout(() => {
            setActiveFilter(filter);
            
            // Longer delay before ending transition state to ensure smooth fade-in
            setTimeout(() => {
                setIsFilterTransitioning(false);
            }, 650); // Match this with the CSS transition duration plus a buffer
        }, 100);
    };

    const editorStyle = getEditorBackgroundStyle();

    return (
        <div className="flex flex-col items-center sm:items-end mt-10 mb-10 pt-10 p-6 w-[95%] rounded-xl shrink-0 drop-shadow-xl transition-all duration-300" 
             style={{
                 background: "rgba(var(--color-background-rgb), 0.9)",
                 backdropFilter: "blur(10px)",
                 borderTop: "1px solid rgba(var(--color-accent-rgb), 0.3)",
                 borderLeft: "1px solid rgba(var(--color-accent-rgb), 0.3)",
                 boxShadow: "0 10px 30px rgba(var(--color-primary-rgb), 0.1)",
                 transition: "var(--theme-transition)",
             }}>
            
            {/* Title with decorative elements */}
            <div className="w-full flex items-center mb-2">
                <div className="h-[3px] w-[30px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mr-4 rounded-full"></div>
                <Title label={ABOUT_ME} style={{ color: "var(--color-primary)", fontFamily: FONT_FAMILY, textShadow: "0px 0px 2px rgba(0,0,0,0.15)" }} />
                <div className="h-[3px] flex-grow bg-gradient-to-r from-[var(--color-accent)] to-transparent ml-4 rounded-full"></div>
            </div>
            
            {/* Description with Python code styling */}
            <div className="relative w-full mb-8 rounded-lg overflow-hidden p-1" style={{ background: editorStyle.backgroundColor, boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
                <div className="w-full flex items-center px-3 py-1 text-xs text-slate-300" style={{ background: 'rgba(0,0,0,0.4)' }}>
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
                        <span className="pl-8 text-blue-400">self</span>.<span className="text-emerald-300">experience</span> <span className="text-slate-200">=</span> <span className="text-amber-300">{new Date().getFullYear() - 2018}</span> <span className="text-slate-200">+</span> <span className="text-slate-400"># years and counting</span>
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
                        <span className="pl-12 text-amber-300">"ai_tools"</span><span className="text-slate-200">: [</span><span className="text-amber-300">"LLM RAG"</span><span className="text-slate-200">,</span> <span className="text-amber-300">"OpenAI"</span><span className="text-slate-200">,</span> <span className="text-amber-300">"Gen AI"</span><span className="text-slate-200">]</span>
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
            
            {/* Skills section with enhanced styling */}
            <div className="w-full mb-8">
                {/* Tech Stack Header with animated underline */}
                <div className="flex items-center mb-6 relative">
                    <div className="h-[3px] w-[30px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mr-4 rounded-full"></div>
                    <span className="text-xl font-bold tracking-wider relative" 
                        style={{ 
                            color: "var(--color-primary)", 
                            textShadow: "0px 0px 3px rgba(0,0,0,0.15)",
                            fontFamily: FONT_FAMILY,
                            letterSpacing: '2px'
                        }}>
                        Tech Stack
                        {/* Animated underline effect */}
                        <span 
                            className="absolute bottom-0 left-0 w-full h-[2px] rounded-full animate-pulse"
                            style={{
                                background: `linear-gradient(to right, var(--color-primary), var(--color-accent), var(--color-primary))`,
                                opacity: 0.7,
                                transform: 'translateY(5px)'
                            }}
                        ></span>
                    </span>
                    <div className="h-[3px] flex-grow bg-gradient-to-r from-[var(--color-accent)] to-transparent ml-4 rounded-full"></div>
                </div>
                
                {/* Skill stats summary */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                    <div className="bg-gradient-to-br from-[rgba(var(--color-background-rgb),0.7)] to-[rgba(var(--color-background-rgb),0.5)] p-3 rounded-lg border border-opacity-20 overflow-hidden" 
                        style={{ borderColor: `rgba(${getSkillCategoryColor('frontend')}, 0.3)` }}>
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-medium truncate" style={{ color: 'var(--color-accent)' }}>Frontend</span>
                            <div className="w-2 h-2 rounded-full flex-shrink-0 ml-2" style={{ background: `rgba(${getSkillCategoryColor('frontend')}, 0.8)` }}></div>
                        </div>
                        <div className="mt-1 flex items-baseline flex-wrap">
                            <span className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>{frontendSkills.length}</span>
                            <span className="text-xs ml-1 opacity-70 truncate" style={{ color: 'var(--color-accent)' }}>technologies</span>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-[rgba(var(--color-background-rgb),0.7)] to-[rgba(var(--color-background-rgb),0.5)] p-3 rounded-lg border border-opacity-20 overflow-hidden"
                        style={{ borderColor: `rgba(${getSkillCategoryColor('backend')}, 0.3)` }}>
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-medium truncate" style={{ color: 'var(--color-accent)' }}>Backend</span>
                            <div className="w-2 h-2 rounded-full flex-shrink-0 ml-2" style={{ background: `rgba(${getSkillCategoryColor('backend')}, 0.8)` }}></div>
                        </div>
                        <div className="mt-1 flex items-baseline flex-wrap">
                            <span className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>{backendSkills.length}</span>
                            <span className="text-xs ml-1 opacity-70 truncate" style={{ color: 'var(--color-accent)' }}>technologies</span>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-[rgba(var(--color-background-rgb),0.7)] to-[rgba(var(--color-background-rgb),0.5)] p-3 rounded-lg border border-opacity-20 overflow-hidden"
                        style={{ borderColor: `rgba(${getSkillCategoryColor('ai')}, 0.3)` }}>
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-medium truncate" style={{ color: 'var(--color-accent)' }}>AI & ML</span>
                            <div className="w-2 h-2 rounded-full flex-shrink-0 ml-2" style={{ background: `rgba(${getSkillCategoryColor('ai')}, 0.8)` }}></div>
                        </div>
                        <div className="mt-1 flex items-baseline flex-wrap">
                            <span className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>{aiSkills.filter(s => s.category === 'ai').length}</span>
                            <span className="text-xs ml-1 opacity-70 truncate" style={{ color: 'var(--color-accent)' }}>technologies</span>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-[rgba(var(--color-background-rgb),0.7)] to-[rgba(var(--color-background-rgb),0.5)] p-3 rounded-lg border border-opacity-20 overflow-hidden"
                        style={{ borderColor: 'rgba(var(--color-accent-rgb), 0.3)' }}>
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-medium truncate" style={{ color: 'var(--color-accent)' }}>Total Mastery</span>
                            <div className="w-2 h-2 rounded-full flex-shrink-0 ml-2" style={{ background: 'var(--color-accent)' }}></div>
                        </div>
                        <div className="mt-1 flex items-baseline flex-wrap">
                            <span className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
                                {Math.round(([...frontendSkills, ...backendSkills, ...aiSkills].reduce((acc, skill) => acc + skill.level, 0) / 
                                ([...frontendSkills, ...backendSkills, ...aiSkills].length * 100)) * 100)}%
                            </span>
                            <span className="text-xs ml-1 opacity-70 truncate" style={{ color: 'var(--color-accent)' }}>avg. proficiency</span>
                        </div>
                    </div>
                </div>

                {/* Filter tabs for skills with enhanced transitions */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center sm:justify-start">
                    {['all', 'frontend', 'backend', 'ai', 'tools'].map(filter => {
                        // Calculate item count for each filter
                        const itemCount = filter === 'all' 
                            ? [...frontendSkills, ...backendSkills, ...aiSkills].length
                            : [...frontendSkills, ...backendSkills, ...aiSkills].filter(skill => skill.category === filter).length;
                            
                        return (
                            <button
                                key={filter}
                                onClick={() => handleFilterChange(filter)}
                                className="px-4 py-1.5 text-sm rounded-full transition-all duration-300 relative"
                                style={{
                                    background: activeFilter === filter 
                                        ? filter !== 'all' 
                                            ? `linear-gradient(120deg, rgba(${getSkillCategoryColor(filter)}, 0.2), rgba(${getSkillCategoryColor(filter)}, 0.1))`
                                            : `linear-gradient(120deg, rgba(var(--color-primary-rgb), 0.2), rgba(var(--color-accent-rgb), 0.3))`
                                        : 'rgba(var(--color-background-rgb), 0.7)',
                                    color: activeFilter === filter ? 
                                        filter !== 'all' 
                                            ? `rgba(${getSkillCategoryColor(filter)}, 1)` 
                                            : 'var(--color-primary)' 
                                        : 'var(--color-accent)',
                                    border: `1px solid ${activeFilter === filter ? 
                                        filter !== 'all'
                                            ? `rgba(${getSkillCategoryColor(filter)}, 0.4)` 
                                            : 'rgba(var(--color-primary-rgb), 0.4)' 
                                        : 'rgba(var(--color-accent-rgb), 0.2)'}`,
                                    transform: activeFilter === filter ? 'translateY(-2px)' : 'translateY(0)',
                                    boxShadow: activeFilter === filter ? 
                                        filter !== 'all' 
                                            ? `0 4px 12px rgba(${getSkillCategoryColor(filter)}, 0.15)` 
                                            : '0 4px 12px rgba(var(--color-primary-rgb), 0.15)' 
                                        : 'none',
                                    fontWeight: activeFilter === filter ? '600' : '400',
                                }}
                            >
                                <div className="flex items-center space-x-1">
                                    <span>{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
                                    {/* Item count badge */}
                                    <span 
                                        className="inline-block rounded-full text-[0.65rem] min-w-[18px] text-center transition-all duration-300"
                                        style={{
                                            background: activeFilter === filter 
                                                ? filter !== 'all' 
                                                    ? `rgba(${getSkillCategoryColor(filter)}, 0.25)` 
                                                    : 'rgba(var(--color-primary-rgb), 0.25)'
                                                : 'rgba(var(--color-accent-rgb), 0.15)',
                                            color: activeFilter === filter 
                                                ? filter !== 'all' 
                                                    ? `rgba(${getSkillCategoryColor(filter)}, 1)` 
                                                    : 'var(--color-primary)'
                                                : 'var(--color-accent)',
                                            padding: '1px 5px',
                                            fontWeight: '600',
                                            opacity: activeFilter === filter ? 1 : 0.7,
                                            transform: activeFilter === filter ? 'scale(1.1)' : 'scale(1)'
                                        }}
                                    >
                                        {itemCount}
                                    </span>
                                </div>
                                
                                {/* Enhanced active indicator with smooth animation */}
                                {activeFilter === filter && (
                                    <span className="absolute -bottom-2 left-0 right-0 mx-auto flex justify-center items-center animate-pulse" 
                                        style={{ 
                                            animation: 'pulse 1.5s infinite'
                                        }}>
                                        <span className="inline-block w-1 h-1 rounded-full"
                                            style={{
                                                background: filter !== 'all' 
                                                    ? `rgba(${getSkillCategoryColor(filter)}, 0.8)` 
                                                    : 'var(--color-primary)'
                                            }}></span>
                                        <span className="inline-block w-[3px] h-[3px] rounded-full mx-[2px]"
                                            style={{
                                                background: filter !== 'all' 
                                                    ? `rgba(${getSkillCategoryColor(filter)}, 0.6)` 
                                                    : 'rgba(var(--color-primary-rgb), 0.6)'
                                            }}></span>
                                        <span className="inline-block w-1 h-1 rounded-full"
                                            style={{
                                                background: filter !== 'all' 
                                                    ? `rgba(${getSkillCategoryColor(filter)}, 0.8)` 
                                                    : 'var(--color-primary)'
                                            }}></span>
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Combined skill display with filtering */}
                <div className="relative overflow-hidden rounded-xl mb-2">
                    {/* Skills section background animations */}
                    <div className={`absolute -inset-1.5 rounded-xl bg-gradient-to-br opacity-10 blur-lg -z-10 transition-all duration-500`}
                        style={{
                            background: activeFilter !== 'all' ? 
                                `linear-gradient(135deg, rgba(${getSkillCategoryColor(activeFilter)}, 0.8), rgba(${getSkillCategoryColor(activeFilter)}, 0.3))` :
                                `linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.8), rgba(var(--color-accent-rgb), 0.3))`,
                            opacity: isFilterTransitioning ? '0.15' : '0.1',
                        }}
                    ></div>
                    <div className="absolute -inset-1 rounded-xl bg-[var(--color-background)] opacity-80 -z-10"></div>
                    
                    {/* Category label that appears during transitions */}
                    <div 
                        className="absolute top-0 left-0 right-0 text-center py-2 -translate-y-full"
                        style={{
                            transform: isFilterTransitioning ? 'translateY(0)' : 'translateY(-100%)',
                            opacity: isFilterTransitioning ? 0.9 : 0,
                            transition: 'all 400ms ease',
                            color: activeFilter !== 'all' ? 
                                `rgba(${getSkillCategoryColor(activeFilter)}, 1)` : 
                                'var(--color-primary)',
                            fontWeight: 'bold',
                            letterSpacing: '1px',
                            textShadow: '0 1px 3px rgba(0,0,0,0.2)',
                            backdropFilter: 'blur(8px)',
                            background: 'rgba(var(--color-background-rgb), 0.4)',
                            borderBottom: '1px solid rgba(var(--color-accent-rgb), 0.1)',
                            zIndex: 5
                        }}
                    >
                        {activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} Skills
                    </div>

                    {/* Skills grid with transition effects */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 transition-all duration-500 min-h-[400px] p-2 relative">
                        {/* Animated category indicator - only visible during transitions */}
                        {isFilterTransitioning && activeFilter !== 'all' && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                                <div className="flex flex-col items-center justify-center opacity-0 scale-50 transition-all duration-300" 
                                    style={{ 
                                        animation: 'scaleIn 0.3s ease forwards', 
                                        color: `rgba(${getSkillCategoryColor(activeFilter)}, 1)`,
                                    }}>
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm mb-2"
                                        style={{
                                            background: `rgba(${getSkillCategoryColor(activeFilter)}, 0.1)`,
                                            border: `2px solid rgba(${getSkillCategoryColor(activeFilter)}, 0.4)`,
                                            boxShadow: `0 0 15px rgba(${getSkillCategoryColor(activeFilter)}, 0.3)`,
                                        }}>
                                        <span className="text-3xl font-bold transition-all duration-500 animate-pulse">
                                            {activeFilter === 'frontend' ? '⚛️' : 
                                             activeFilter === 'backend' ? '🖥️' : 
                                             activeFilter === 'ai' ? '🧠' : '🛠️'}
                                        </span>
                                    </div>
                                    <span className="text-sm font-semibold tracking-wider" 
                                        style={{ 
                                            textShadow: `0 1px 3px rgba(0,0,0,0.2)`,
                                            letterSpacing: '1px'
                                        }}>
                                        {activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}
                                    </span>
                                </div>
                            </div>
                        )}
                        
                        {/* Current filter skills with staggered animation */}
                        {[...frontendSkills, ...backendSkills, ...aiSkills]
                            .filter(skill => activeFilter === 'all' || skill.category === activeFilter)
                            .sort((a, b) => b.level - a.level)
                            .map((skill, index) => (
                                <div 
                                    key={skill.name}
                                    style={{
                                        opacity: isFilterTransitioning ? 0 : 1,
                                        transform: isFilterTransitioning ? 'translateY(10px)' : 'translateY(0)',
                                        transition: `all 500ms ease ${isFilterTransitioning ? 0 : index * 50}ms`,
                                        animation: isFilterTransitioning ? 'none' : `scaleIn 600ms ease forwards ${index * 70}ms`
                                    }}
                                >
                                    <SkillCard 
                                        skill={skill} 
                                        activeSkill={activeSkill}
                                        setActiveSkill={setActiveSkill}
                                    />
                                </div>
                            ))
                        }

                        {/* Empty state when no skills match the filter */}
                        {[...frontendSkills, ...backendSkills, ...aiSkills]
                            .filter(skill => activeFilter === 'all' || skill.category === activeFilter).length === 0 && (
                            <div className="col-span-full flex flex-col items-center justify-center py-10 opacity-0 animate-fadeIn" 
                                style={{ animation: 'fadeIn 0.5s forwards 0.3s' }}>
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[rgba(var(--color-primary-rgb),0.1)] to-[rgba(var(--color-accent-rgb),0.1)] flex items-center justify-center mb-3 animate-pulse">
                                    <span className="text-2xl">🔍</span>
                                </div>
                                <p className="text-center opacity-80" style={{ color: 'var(--color-secondary)' }}>
                                    No {activeFilter} skills found
                                </p>
                                <button 
                                    className="mt-3 px-3 py-1 text-xs rounded-full transition-all duration-300"
                                    style={{
                                        background: 'rgba(var(--color-primary-rgb), 0.1)',
                                        color: 'var(--color-primary)',
                                        border: '1px solid rgba(var(--color-primary-rgb), 0.2)',
                                    }}
                                    onClick={() => handleFilterChange('all')}
                                >
                                    View All Skills
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                
                {/* Skill breakdown sections with animations */}
                <div 
                    className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-5 border-t border-opacity-10 transition-all duration-500`} 
                    style={{ 
                        borderColor: 'var(--color-accent)',
                        height: activeFilter === 'all' ? 'auto' : '0',
                        opacity: activeFilter === 'all' ? 1 : 0,
                        marginBottom: activeFilter === 'all' ? '2rem' : '0',
                        overflow: 'hidden',
                        transform: activeFilter === 'all' ? 'translateY(0)' : 'translateY(-20px)',
                    }}>
                    {/* Frontend Breakdown */}
                    <div className={`p-4 rounded-lg transform transition-all duration-500 ${activeFilter === 'all' ? 'skill-section-slide-in-1' : ''}`}
                        style={{ 
                            background: 'rgba(var(--color-background-rgb), 0.6)', 
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            border: '1px solid rgba(var(--color-accent-rgb), 0.1)',
                            opacity: activeFilter === 'all' ? 1 : 0,
                            transform: activeFilter === 'all' ? 'translateY(0)' : 'translateY(20px)'
                        }}>
                        <h4 className="text-md font-medium mb-3 flex items-center" 
                            style={{ 
                                color: "var(--color-primary)", 
                                textShadow: "0px 0px 2px rgba(0,0,0,0.1)",
                                letterSpacing: '1px'
                            }}>
                            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mr-2"></span>
                            <span className="relative">
                                Frontend Development
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary)] opacity-60 group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </h4>
                        <p className="text-sm opacity-80" style={{ color: 'var(--color-secondary)' }}>
                            Specialized in building responsive, interactive UIs with React, TypeScript and modern CSS frameworks.
                            Focused on creating exceptional user experiences with smooth animations and performant code.
                        </p>
                    </div>
                    
                    {/* Backend Breakdown */}
                    <div className={`p-4 rounded-lg transform transition-all duration-500 ${activeFilter === 'all' ? 'skill-section-slide-in-2' : ''}`}
                        style={{ 
                            background: 'rgba(var(--color-background-rgb), 0.6)', 
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            border: '1px solid rgba(var(--color-accent-rgb), 0.1)',
                            opacity: activeFilter === 'all' ? 1 : 0,
                            transform: activeFilter === 'all' ? 'translateY(0)' : 'translateY(20px)'
                        }}>
                        <h4 className="text-md font-medium mb-3 flex items-center" 
                            style={{ 
                                color: "var(--color-primary)", 
                                textShadow: "0px 0px 2px rgba(0,0,0,0.1)",
                                letterSpacing: '1px'
                            }}>
                            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mr-2"></span>
                            <span className="relative">
                                Backend & Infrastructure
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary)] opacity-60 group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </h4>
                        <p className="text-sm opacity-80" style={{ color: 'var(--color-secondary)' }}>
                            Proficient in building scalable APIs, database design, and cloud infrastructure. 
                            Experience with Node.js, Express, various databases, and deploying to AWS.
                        </p>
                    </div>

                    {/* AI & Tools Breakdown */}
                    <div className={`p-4 rounded-lg transform transition-all duration-500 ${activeFilter === 'all' ? 'skill-section-slide-in-3' : ''}`}
                        style={{ 
                            background: 'rgba(var(--color-background-rgb), 0.6)', 
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            border: '1px solid rgba(var(--color-accent-rgb), 0.1)',
                            opacity: activeFilter === 'all' ? 1 : 0,
                            transform: activeFilter === 'all' ? 'translateY(0)' : 'translateY(20px)'
                        }}>
                        <h4 className="text-md font-medium mb-3 flex items-center" 
                            style={{ 
                                color: "var(--color-primary)", 
                                textShadow: "0px 0px 2px rgba(0,0,0,0.1)",
                                letterSpacing: '1px'
                            }}>
                            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mr-2"></span>
                            <span className="relative">
                                AI & ML Technologies
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary)] opacity-60 group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </h4>
                        <p className="text-sm opacity-80" style={{ color: 'var(--color-secondary)' }}>
                            Experienced with modern AI/ML frameworks and tools including OpenAI technologies, 
                            Python ecosystem for data science, and implementing machine learning solutions.
                        </p>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

// Styles are now mostly inline with theme variables
const styles = {
    aboutMe: {
        fontFamily: FONT_FAMILY,
        fontWeight: '700',
        letterSpacing: '4px',
        position: 'relative',
        display: 'inline-block',
    },
    subtitle: {
        fontFamily: FONT_FAMILY,
        letterSpacing: '2px',
        fontWeight: '500',
        fontSize: '18px',
        marginTop: '0px',
        position: 'relative',
        textShadow: '0 2px 5px rgba(0,0,0,0.05)',
        display: 'inline-block',
        paddingBottom: '6px',
        transform: 'translateX(15px)',
    },
    descriptionOnMobile: {
        fontFamily: FONT_FAMILY,
        letterSpacing: '0.6px',
        lineHeight: '22px',
        fontWeight: '400',
        fontSize: '0.95rem',
        marginTop: '10px',
    },
    description: {
        fontFamily: FONT_FAMILY,
        letterSpacing: '1px',
        lineHeight: '30px',
        fontWeight: '400',
        textShadow: '0 1px 2px rgba(0,0,0,0.03)',
        position: 'relative',
        padding: '0 12px',
    },
}

export default AboutMe;


