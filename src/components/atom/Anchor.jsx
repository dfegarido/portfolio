import { useState } from "react";
import { 
    FONT_FAMILY,
    LIGHT_GRAY,
    PRIMARY,
    SECONDARY,
    SLATE
} from "../../helpers/constants";

const Anchor = ({ label, dark=false, onClick, className, isActive=false }) => {
    const [hover, setHover] = useState(false)
    
    // Add brackets around navigation labels for code-style aesthetic
    const formattedLabel = `{ ${label} }`;

    return (
        <div 
            className={`${className} theme-nav-item transition-all duration-300`}
            style={{
                ...styles.normal, 
                ...(dark ? styles.dark : null ),
                ...(hover && dark ? styles.darkHover : null ),
                ...(hover && !dark? styles.hover : null ),
                ...(isActive && !dark? styles.hover : null),
                ...(isActive && dark? styles.darkHover : null),
            }} 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onClick}
         >
            <span className="relative">
                {formattedLabel}
                {(isActive || hover) && (
                    <span 
                        className="nav-dot-pulse"
                        style={{
                            position: 'absolute',
                            right: '-8px',
                            top: '-8px',
                            fontSize: '10px',
                            opacity: 0.7,
                            color: dark ? '#fff' : SECONDARY,
                        }}
                    >
                        ●
                    </span>
                )}
            </span>

            <div 
                style={{ 
                    ...styles.line, 
                    ...(hover && dark? styles.lineHoverDark : null),
                    ...(hover && !dark? styles.lineHover : null),
                    ...(isActive && !dark? styles.lineHover : null),
                    ...(isActive && dark? styles.lineHoverDark : null),
                }}
            ></div>
            
            {/* Animation handled via CSS class */}
        </div>
    )
}

const styles = {
    normal: {
        fontFamily: FONT_FAMILY,
        fontWeight: '600',
        fontSize: '0.95rem',
        lineHeight: '25px',
        cursor: 'pointer',
        color: 'var(--color-primary)',
        paddingBottom: '2px',
        letterSpacing: '3px',
        transition: 'all 0.25s ease-in-out',
        textShadow: '0 0 8px rgba(255,255,255,0.15)',
        position: 'relative',
        padding: '6px 12px',
        borderRadius: '6px',
        margin: '0 2px',
        backdropFilter: 'blur(5px)',
    },
    dark: {
        color: 'var(--color-secondary)',
        opacity: 0.95
    },
    darkHover: {
        color: '#fff',
        textShadow: '0 0 12px rgba(var(--color-primary-rgb), 0.6)',
        transform: 'translateY(-2px) scale(1.05)',
        backgroundColor: 'rgba(var(--color-primary-rgb), 0.1)',
        boxShadow: '0 4px 15px rgba(var(--color-primary-rgb), 0.1)',
        borderTop: '1px solid rgba(var(--color-primary-rgb), 0.15)',
        borderLeft: '1px solid rgba(var(--color-primary-rgb), 0.15)',
    },
    hover: {
        color: 'var(--color-secondary)',
        textShadow: '0 0 15px rgba(var(--color-primary-rgb), 0.5)',
        transform: 'translateY(-2px) scale(1.05)',
        backgroundColor: 'rgba(var(--color-primary-rgb), 0.1)',
        boxShadow: '0 4px 15px rgba(var(--color-primary-rgb), 0.15)',
        borderTop: '1px solid rgba(var(--color-primary-rgb), 0.15)',
        borderLeft: '1px solid rgba(var(--color-primary-rgb), 0.15)',
    },
    line: {
        transition: 'all 0.25s ease-in-out',
        width: '0px',
        height: '0px',
        paddingBottom: '1px',
        opacity: 0,
        position: 'absolute',
        bottom: '2px',
        left: '0',
        right: '0',
        margin: '0 auto',
    },
    lineHover: {
        width: '80%',
        borderBottom: `2px solid var(--color-primary)`,
        paddingBottom: '0px',
        boxShadow: '0 0 10px rgba(var(--color-primary-rgb), 0.5)',
        opacity: 1,
    },
    lineHoverDark: {
        width: '80%',
        borderBottom: `2px solid var(--color-primary)`,
        paddingBottom: '0px',
        boxShadow: '0 0 10px rgba(var(--color-primary-rgb), 0.5)',
        opacity: 1,
    }
}

export default Anchor;
