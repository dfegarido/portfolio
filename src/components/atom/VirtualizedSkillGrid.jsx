import React, { memo, useMemo, useState, useCallback } from 'react';
import { OptimizedSkillIcon } from '../../helpers/skillIcons';
import '../../assets/virtualized-skills.css';

// Simplified skill card component with CSS classes instead of inline styles
const SkillCard = memo(({ skill, isActive, onHover, onLeave }) => {
    // Remove throttling and simplify event handlers to reduce complexity
    const handleMouseEnter = useCallback(() => {
        onHover(skill.name);
    }, [onHover, skill.name]);

    const handleMouseLeave = useCallback(() => {
        onLeave();
    }, [onLeave]);

    return (
        <div 
            className={`skill-card ${isActive ? 'skill-card--active' : ''}`}
            data-category={skill.category}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Optimized skill icon with local fallbacks */}
            <div className={`skill-icon ${isActive ? 'skill-icon--active' : ''}`}>
                <OptimizedSkillIcon
                    skill={skill}
                    className={`skill-icon__image ${skill.name === "OpenAI" ? 'skill-icon__image--openai' : ''}`}
                />
            </div>

            {/* Simplified content structure */}
            <div className="skill-content">
                <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    {isActive && <span className="skill-level">{skill.level}%</span>}
                </div>

                {/* Simplified progress bar */}
                <div className="skill-progress">
                    <div 
                        className={`skill-progress__bar ${isActive ? 'skill-progress__bar--active' : ''}`}
                        style={{ width: `${isActive ? skill.level : 0}%` }}
                    />
                </div>

                {/* Experience - only show if available and active */}
                {skill.years && isActive && (
                    <div className="skill-experience">
                        ⌛ {skill.years} {skill.years === 1 ? 'year' : 'years'}
                    </div>
                )}
            </div>
        </div>
    );
});

// Simplified virtualized skill grid component
const VirtualizedSkillGrid = memo(({ 
    skills, 
    activeSkill, 
    setActiveSkill, 
    isFilterTransitioning,
    activeFilter 
}) => {
    // Increase initial visible items but remove complex lazy loading
    const [visibleItems, setVisibleItems] = useState(16);
    
    // Filter and sort skills
    const filteredSkills = useMemo(() => {
        return skills
            .filter(skill => activeFilter === 'all' || skill.category === activeFilter)
            .sort((a, b) => b.level - a.level);
    }, [skills, activeFilter]);

    // Show only visible skills - simplified virtualization
    const displayedSkills = useMemo(() => {
        return filteredSkills.slice(0, Math.min(visibleItems, filteredSkills.length));
    }, [filteredSkills, visibleItems]);

    const handleHover = useCallback((skillName) => {
        setActiveSkill(skillName);
    }, [setActiveSkill]);

    const handleLeave = useCallback(() => {
        setActiveSkill(null);
    }, [setActiveSkill]);

    // Simplified load more
    const loadMore = useCallback(() => {
        if (visibleItems < filteredSkills.length) {
            setVisibleItems(prev => Math.min(prev + 8, filteredSkills.length));
        }
    }, [visibleItems, filteredSkills.length]);

    // Reset on filter change
    React.useEffect(() => {
        setVisibleItems(16);
    }, [activeFilter]);

    if (filteredSkills.length === 0) {
        return (
            <div className="skill-grid-empty">
                <div className="skill-grid-empty__icon">🔍</div>
                <p className="skill-grid-empty__text">
                    No {activeFilter} skills found
                </p>
            </div>
        );
    }

    return (
        <div className="skill-grid-container">
            <div className={`skill-grid ${isFilterTransitioning ? 'skill-grid--transitioning' : ''}`}>
                {displayedSkills.map((skill) => (
                    <SkillCard 
                        key={skill.name}
                        skill={skill} 
                        isActive={activeSkill === skill.name}
                        onHover={handleHover}
                        onLeave={handleLeave}
                    />
                ))}
            </div>

            {/* Simplified load more button */}
            {visibleItems < filteredSkills.length && (
                <button
                    onClick={loadMore}
                    className="skill-grid-load-more"
                >
                    Load More ({filteredSkills.length - visibleItems} remaining)
                </button>
            )}
        </div>
    );
});

export default VirtualizedSkillGrid;