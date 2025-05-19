import React, { useState } from "react";
import { FONT_FAMILY } from "../../helpers/constants";
import { useTheme } from "../../contexts/ThemeContext";

const ChatInput = ({ onSendMessage, isDisabled }) => {
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const textareaRef = React.useRef(null);
  
  // Auto-resize textarea based on content
  React.useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "50px"; // Reset height
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = Math.min(scrollHeight, 120) + "px";
    }
  }, [message]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !isDisabled) {
      onSendMessage(message);
      setMessage("");
      // Reset height after sending
      if (textareaRef.current) {
        textareaRef.current.style.height = "50px";
      }
    }
  };
  
  return (
    <div 
      className="p-4 pt-2 border-t"
      style={{
        borderTopColor: 'rgba(var(--color-primary-rgb), 0.1)',
        backdropFilter: 'blur(5px)',
        background: 'rgba(var(--color-background-rgb), 0.3)',
      }}
    >
      <form onSubmit={handleSubmit} className="flex items-end gap-2">
        <div className="flex-grow relative">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="Type your message..."
            className="w-full rounded-2xl py-3 px-4 pr-12 resize-none"
            rows={1}
            style={{
              fontFamily: FONT_FAMILY,
              color: 'var(--color-primary)',
              backgroundColor: 'rgba(var(--color-secondary-rgb), 0.6)',
              backdropFilter: 'blur(4px)',
              border: isFocused ? '1px solid var(--color-primary)' : '1px solid rgba(var(--color-primary-rgb), 0.3)',
              boxShadow: isFocused ? '0 0 0 2px rgba(var(--color-primary-rgb), 0.2)' : 'none',
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              minHeight: '50px'
            }}
            disabled={isDisabled}
          />
          
          {/* Emoji button (not functional yet, just for UI) */}
          <button
            type="button"
            className="absolute right-3 bottom-3 text-gray-400 hover:text-gray-600 transition-colors"
            style={{ color: 'var(--color-primary)', opacity: 0.6 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
        
        <button
          type="submit"
          disabled={!message.trim() || isDisabled}
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            cursor: !message.trim() || isDisabled ? 'not-allowed' : 'pointer'
          }}
        >
          {/* Glowing background effect */}
          <div 
            className={`absolute inset-0 rounded-full blur-sm transition-opacity duration-300 ${!message.trim() || isDisabled ? 'opacity-30' : (isHovered ? 'opacity-100' : 'opacity-70')} pointer-events-none`}
            style={{
              background: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`,
              zIndex: 0
            }}
          ></div>
          
          <div 
            className="relative flex items-center justify-center w-12 h-12 rounded-full transition-transform duration-300"
            style={{
              transform: isHovered && message.trim() && !isDisabled ? 'scale(1.05)' : 'scale(1)',
              background: 'rgba(var(--color-primary-rgb), 0.8)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: isHovered && message.trim() && !isDisabled
                ? '0 5px 15px -3px rgba(var(--color-primary-rgb), 0.3)'
                : 'none',
              opacity: !message.trim() || isDisabled ? 0.7 : 1,
              zIndex: 1
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-6 w-6 transition-transform duration-300 ${isHovered ? 'transform translate-x-0.5' : ''}`}
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
              style={{ 
                color: 'white',
                position: 'relative',
                zIndex: 2
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            
            {/* Moving light effect */}
            <div 
              className="absolute inset-0 w-full h-full rounded-full overflow-hidden pointer-events-none"
              style={{ opacity: isDisabled ? 0 : 0.5, zIndex: 0 }}
            >
              <div
                className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{
                  transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
                  transition: 'transform 0.8s ease',
                  left: '-100%'
                }}
              ></div>
            </div>
          </div>
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
