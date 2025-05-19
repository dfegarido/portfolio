import { useTheme } from "../contexts/ThemeContext";

const Card = (props) => {
    const { themeKey } = useTheme();
    
    return (
        <div 
            {...props} 
            className={`${props.className || ''} transition-all duration-300 hover:shadow-lg`}
            style={{
                background: themeKey === 'minimalist' 
                    ? 'rgba(255, 255, 255, 0.75)' 
                    : themeKey === 'tech'
                        ? 'rgba(13, 27, 42, 0.85)'
                        : 'rgba(26, 26, 26, 0.85)',
                backdropFilter: 'blur(8px)',
                borderRadius: '12px',
                border: themeKey === 'minimalist'
                    ? '1px solid rgba(255, 255, 255, 0.8)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1.0)',
                ...props.style
            }}
        >
            {props.children}
        </div>
    );
};

export default Card;

