import React from "react";

const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4 relative">
      <div className="flex-shrink-0 h-8 w-8 rounded-full mr-2 overflow-hidden flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        <span className="text-white text-xs font-bold">DF</span>
      </div>

      <div 
        className="py-3 px-4 rounded-2xl rounded-tl-sm relative"
        style={{
          background: 'rgba(var(--color-secondary-rgb), 0.6)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
          backdropFilter: 'blur(4px)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          borderLeft: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div className="flex space-x-2">
          <div className="typing-dot typing-dot-delay-0"></div>
          <div className="typing-dot typing-dot-delay-1"></div>
          <div className="typing-dot typing-dot-delay-2"></div>
        </div>
      </div>
      
      {/* Message corner */}
      <div 
        className="absolute rounded-br-lg h-3 w-3"
        style={{
          background: 'rgba(var(--color-secondary-rgb), 0.6)',
          left: '38px',  /* Width of avatar (32px) + right margin (8px) - 2px offset */
          top: '0'
        }}
      ></div>
    </div>
  );
};

// Updated CSS with class-based animation delays
export const typingIndicatorCSS = `
  .typing-dot {
    width: 8px;
    height: 8px;
    background-color: var(--color-primary);
    border-radius: 50%;
    opacity: 0.7;
    display: inline-block;
    animation-name: typingAnimation;
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  
  .typing-dot-delay-0 {
    animation-delay: 0s;
  }
  
  .typing-dot-delay-1 {
    animation-delay: 0.2s;
  }
  
  .typing-dot-delay-2 {
    animation-delay: 0.4s;
  }
  
  @keyframes typingAnimation {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
      opacity: 0.5;
    }
  }
`;

export default TypingIndicator;
