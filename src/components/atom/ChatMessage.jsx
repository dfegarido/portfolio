import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { FONT_FAMILY } from "../../helpers/constants";

const ChatMessage = ({ message, isUser, timestamp, type }) => {
  const { theme } = useTheme();
  
  // Support both isUser prop and type="USER" format
  const isUserMessage = isUser || type === "USER";
  
  return (
    <div 
      className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'} mb-4`}
      style={{
        animation: 'fadeIn 0.3s ease-out forwards',
      }}
    >
      {!isUserMessage && (
        <div className="flex-shrink-0 h-8 w-8 rounded-full mr-2 overflow-hidden flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          <span className="text-white text-xs font-bold">DF</span>
        </div>
      )}
      
      <div className={`max-w-[80%] relative`}>
        <div 
          className={`rounded-2xl py-2 px-4 ${isUserMessage ? 'rounded-tr-sm' : 'rounded-tl-sm'}`}
          style={{
            background: isUserMessage 
              ? 'linear-gradient(135deg, var(--color-primary), var(--color-accent))'
              : 'rgba(var(--color-secondary-rgb), 0.6)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
            backdropFilter: 'blur(4px)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            borderLeft: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {/* Message content */}
          <p style={{
            fontFamily: FONT_FAMILY,
            color: isUserMessage ? '#fff' : 'var(--color-primary)',
            lineHeight: '1.5',
            letterSpacing: '0.3px'
          }}>
            {message}
          </p>
          
          {/* Timestamp */}
          <div className={`text-xs mt-1 ${isUserMessage ? 'text-gray-200' : 'text-gray-400'}`}
            style={{
              opacity: 0.7,
              fontFamily: FONT_FAMILY,
            }}
          >
            {timestamp}
          </div>
        </div>
        
        {/* Message corner */}
        <div 
          className={`absolute ${isUserMessage ? 'right-0 rounded-bl-lg' : 'left-0 rounded-br-lg'} h-3 w-3 top-0`}
          style={{
            background: isUserMessage 
              ? 'var(--color-primary)'
              : 'rgba(var(--color-secondary-rgb), 0.6)',
          }}
        ></div>
      </div>
      
      {isUserMessage && (
        <div className="flex-shrink-0 h-8 w-8 rounded-full ml-2 overflow-hidden">
          <div className="h-full w-full bg-gray-300 flex items-center justify-center"
            style={{
              background: 'rgba(var(--color-secondary-rgb), 0.6)',
              backdropFilter: 'blur(4px)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <span className="text-xs font-bold" style={{ color: 'var(--color-primary)' }}>You</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
