import Title from "./atom/Title";
import { 
    ABOUT_ME,
    FONT_FAMILY,
} from "../helpers/constants";
import { useState, useEffect, memo, useMemo, useCallback, Suspense, lazy } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { usePerformanceOptimization } from "../hooks/usePerformanceOptimization";
import { OptimizedSkillIcon } from "../helpers/skillIcons";

// Lazy load the virtualized skill grid
const VirtualizedSkillGrid = lazy(() => import('./atom/VirtualizedSkillGrid'));



// Helper function for theme-specific skill category colors (moved to top for better performance)
const getSkillCategoryColor = (category) => {
    const baseColors = {
        frontend: "52, 211, 153",     // Green-ish
        backend: "59, 130, 246",      // Blue-ish
        ai: "139, 92, 246",           // Purple-ish
        tools: "249, 115, 22"         // Orange-ish
    };
    
    return baseColors[category] || "var(--color-primary-rgb)";
};

// Memoized skill summary component to reduce re-renders
const SkillSummary = memo(({ frontendSkills, backendSkills, aiSkills, activeFilter }) => {
    const totalSkills = frontendSkills.length + backendSkills.length + aiSkills.length;
    const avgProficiency = Math.round(
        [...frontendSkills, ...backendSkills, ...aiSkills]
            .reduce((acc, skill) => acc + skill.level, 0) / totalSkills
    );

    if (activeFilter !== 'all') return null;

    return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6">
            <div className="bg-gradient-to-br from-[rgba(var(--color-background-rgb),0.7)] to-[rgba(var(--color-background-rgb),0.5)] p-3 rounded-lg border border-opacity-20" 
                style={{ borderColor: `rgba(${getSkillCategoryColor('frontend')}, 0.3)` }}>
                <div className="flex justify-between items-center">
                    <span className="text-xs font-medium truncate" style={{ color: 'var(--color-accent)' }}>Frontend</span>
                    <div className="w-2 h-2 rounded-full flex-shrink-0 ml-2" style={{ background: `rgba(${getSkillCategoryColor('frontend')}, 0.8)` }}></div>
                </div>
                <div className="mt-1 flex items-baseline">
                    <span className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>{frontendSkills.length}</span>
                    <span className="text-xs ml-1 opacity-70" style={{ color: 'var(--color-accent)' }}>technologies</span>
                </div>
            </div>
            
            <div className="bg-gradient-to-br from-[rgba(var(--color-background-rgb),0.7)] to-[rgba(var(--color-background-rgb),0.5)] p-3 rounded-lg border border-opacity-20"
                style={{ borderColor: `rgba(${getSkillCategoryColor('backend')}, 0.3)` }}>
                <div className="flex justify-between items-center">
                    <span className="text-xs font-medium truncate" style={{ color: 'var(--color-accent)' }}>Backend</span>
                    <div className="w-2 h-2 rounded-full flex-shrink-0 ml-2" style={{ background: `rgba(${getSkillCategoryColor('backend')}, 0.8)` }}></div>
                </div>
                <div className="mt-1 flex items-baseline">
                    <span className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>{backendSkills.length}</span>
                    <span className="text-xs ml-1 opacity-70" style={{ color: 'var(--color-accent)' }}>technologies</span>
                </div>
            </div>
            
            <div className="bg-gradient-to-br from-[rgba(var(--color-background-rgb),0.7)] to-[rgba(var(--color-background-rgb),0.5)] p-3 rounded-lg border border-opacity-20"
                style={{ borderColor: 'rgba(var(--color-accent-rgb), 0.3)' }}>
                <div className="flex justify-between items-center">
                    <span className="text-xs font-medium truncate" style={{ color: 'var(--color-accent)' }}>Total Mastery</span>
                    <div className="w-2 h-2 rounded-full flex-shrink-0 ml-2" style={{ background: 'var(--color-accent)' }}></div>
                </div>
                <div className="mt-1 flex items-baseline">
                    <span className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>{avgProficiency}%</span>
                    <span className="text-xs ml-1 opacity-70" style={{ color: 'var(--color-accent)' }}>avg. proficiency</span>
                </div>
            </div>
        </div>
    );
});

SkillSummary.displayName = 'SkillSummary';

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

// SkillCard component removed - now using VirtualizedSkillGrid for better performance



const AboutMe = () => {
    const [activeSkill, setActiveSkill] = useState(null)
    const [activeFilter, setActiveFilter] = useState('all')
    const [isFilterTransitioning, setIsFilterTransitioning] = useState(false)
    const { themeKey } = useTheme();
    
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

    // This useEffect for skill breakdown has been removed as it was not being used
    
    // Define skills without CDN icons - OptimizedSkillIcon will handle icons locally
    const frontendSkills = [
        { name: "JavaScript", level: 95, years: 7, category: "frontend" },
        { name: "React", level: 92, years: 5, category: "frontend" },
        { name: "VueJs", level: 88, years: 4, category: "frontend" },
        { name: "HTML5", level: 95, years: 7, category: "frontend" },
        { name: "CSS3", level: 90, years: 7, category: "frontend" },
        { name: "Redux", level: 88, years: 4, category: "frontend" },
        { name: "React Native", level: 85, years: 3, category: "frontend" },
    ];
    
    const backendSkills = [
        { name: "Node.js", level: 95, years: 7, category: "backend" },
        { name: "Express", level: 92, years: 7, category: "backend" },
        { name: "Python", level: 90, years: 6, category: "backend" },
        { name: "MongoDB", level: 88, years: 5, category: "backend" },
        { name: "PostgreSQL", level: 85, years: 4, category: "backend" },
        { name: "Firebase", level: 87, years: 4, category: "backend" },
        { name: "Docker", level: 82, years: 3, category: "backend" },
        { name: "AWS", level: 85, years: 4, category: "backend" },
    ];
    
    const aiSkills = [
        { name: "PySpark", level: 88, years: 4, category: "ai" },
        { name: "OpenAI", level: 90, years: 3, category: "ai" },
        { name: "RAG Systems", level: 85, years: 2, category: "ai" },
        { name: "Vector Databases", level: 82, years: 2, category: "ai" },
        { name: "LLM Integration", level: 87, years: 2, category: "ai" },
        { name: "ChatGPT API", level: 88, years: 2, category: "ai" },
        { name: "Git", level: 95, years: 7, category: "tools" },
        { name: "GitHub", level: 92, years: 7, category: "tools" },
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
        <div className="flex flex-col items-center sm:items-end mt-6 md:mt-10 mb-6 md:mb-10 pt-6 md:pt-10 px-3 md:px-6 py-6 w-full max-w-full rounded-xl shrink-0 drop-shadow-xl transition-all duration-300 box-border" 
             style={{
                 background: "rgba(var(--color-background-rgb), 0.9)",
                 backdropFilter: "blur(10px)",
                 borderTop: "1px solid rgba(var(--color-accent-rgb), 0.3)",
                 borderLeft: "1px solid rgba(var(--color-accent-rgb), 0.3)",
                 boxShadow: "0 10px 30px rgba(var(--color-primary-rgb), 0.1)",
                 transition: "var(--theme-transition)",
             }}>
            
            {/* Title with decorative elements */}
            <div className="w-full flex flex-wrap items-center gap-2 mb-2">
                <div className="h-[3px] w-[30px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mr-4 rounded-full"></div>
                <Title label={ABOUT_ME} style={{ color: "var(--color-primary)", fontFamily: FONT_FAMILY, textShadow: "0px 0px 2px rgba(0,0,0,0.15)" }} />
                <div className="h-[3px] flex-grow bg-gradient-to-r from-[var(--color-accent)] to-transparent ml-4 rounded-full"></div>
            </div>
            
            {/* Description with Python code styling */}
            <div className="relative w-full mb-8 rounded-lg overflow-hidden overflow-x-auto p-1" style={{ background: editorStyle.backgroundColor, boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
                <div className="w-full flex items-center px-3 py-1 text-xs text-slate-300" style={{ background: 'rgba(0,0,0,0.4)' }}>
                    <span className="mr-auto font-mono">about_me.py</span>
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500 opacity-70"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 opacity-70"></div>
                    </div>
                </div>
                <div className="px-3 md:px-5 py-4 overflow-auto text-left" style={{ maxHeight: '380px', wordBreak: 'break-word' }}>
                    <pre className="text-xs sm:text-sm md:text-base font-mono whitespace-pre-wrap break-words">
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
            <div className="w-full max-w-full mb-8 overflow-hidden">
                {/* Tech Stack Header - simplified for better performance */}
                <div className="flex flex-wrap items-center gap-3 mb-6 relative">
                    <div className="h-[3px] w-[30px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mr-4 rounded-full"></div>
                    <span className="text-xl font-bold tracking-wider" 
                        style={{ 
                            color: "var(--color-primary)", 
                            fontFamily: FONT_FAMILY,
                            letterSpacing: '2px'
                        }}>
                        Tech Stack
                    </span>
                    <div className="h-[3px] flex-grow bg-gradient-to-r from-[var(--color-accent)] to-transparent ml-4 rounded-full"></div>
                </div>
                
                {/* Optimized Skill stats summary - use existing memoized component */}
                <SkillSummary 
                    frontendSkills={frontendSkills} 
                    backendSkills={backendSkills} 
                    aiSkills={aiSkills} 
                    activeFilter={activeFilter} 
                />

                {/* Filter tabs for skills with enhanced transitions */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center sm:justify-start overflow-x-auto pb-2">
                    {['all', 'frontend', 'backend', 'ai', 'tools'].map(filter => {
                        // Calculate item count for each filter
                        const itemCount = filter === 'all' 
                            ? [...frontendSkills, ...backendSkills, ...aiSkills].length
                            : [...frontendSkills, ...backendSkills, ...aiSkills].filter(skill => skill.category === filter).length;
                            
                        return (
                            <button
                                key={filter}
                                onClick={() => handleFilterChange(filter)}
                                className="px-3 md:px-4 py-1.5 text-xs md:text-sm rounded-full transition-all duration-300 relative"
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
                                
                                {/* Simplified active indicator */}
                                {activeFilter === filter && (
                                    <span className="absolute -bottom-1 left-0 right-0 mx-auto flex justify-center items-center">
                                        <span className="inline-block w-2 h-2 rounded-full"
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

                {/* Skills grid with transition effects - Virtualized for performance */}
                <div className="relative overflow-hidden rounded-xl mb-2 max-w-full">
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

                    {/* Virtualized skills grid for better performance */}
                    <div className="p-1 md:p-2 min-h-[400px]">
                        <Suspense fallback={
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="animate-pulse">
                                        <div className="flex items-center p-3 rounded-lg bg-gray-200 h-20"></div>
                                    </div>
                                ))}
                            </div>
                        }>
                            <VirtualizedSkillGrid
                                skills={[...frontendSkills, ...backendSkills, ...aiSkills]}
                                activeSkill={activeSkill}
                                setActiveSkill={setActiveSkill}
                                isFilterTransitioning={isFilterTransitioning}
                                activeFilter={activeFilter}
                            />
                        </Suspense>
                    </div>
                </div>
                
                {/* Skill breakdown sections with animations */}
                <div 
                    className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-5 border-t border-opacity-10 transition-all duration-500 max-w-full`} 
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

// Removed unused styles object that was replaced by inline styles

export default AboutMe;


