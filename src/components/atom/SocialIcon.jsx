import React from "react";
import { useSelector } from "react-redux";

const SocialIcon = ({ name, className, style, onClick, isHovered }) => {
  const { isMobile } = useSelector(({ metadata }) => metadata);
  
  // Map social platform names to their Font Awesome classes and modern gradient colors
  const iconMap = {
    facebook: {
      icon: "fa-brands fa-facebook-f",
      gradient: "linear-gradient(135deg, #3b5998, #0078ff)",
    },
    instagram: {
      icon: "fa-brands fa-instagram",
      gradient: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    },
    linkedin: {
      icon: "fa-brands fa-linkedin-in",
      gradient: "linear-gradient(135deg, #0077b5, #00a0dc)",
    },
    twitter: {
      icon: "fa-brands fa-twitter",
      gradient: "linear-gradient(135deg, #1DA1F2, #19608F)",
    },
    github: {
      icon: "fa-brands fa-github",
      gradient: "linear-gradient(135deg, #333333, #2b2b2b)",
    },
    dribbble: {
      icon: "fa-brands fa-dribbble",
      gradient: "linear-gradient(135deg, #ea4c89, #c32aa3)",
    },
    behance: {
      icon: "fa-brands fa-behance",
      gradient: "linear-gradient(135deg, #1769ff, #0057ff)",
    },
    medium: {
      icon: "fa-brands fa-medium",
      gradient: "linear-gradient(135deg, #12100e, #30302f)",
    },
  };

  const iconData = iconMap[name.toLowerCase()] || {
    icon: "fa-solid fa-link", 
    gradient: "linear-gradient(135deg, var(--color-primary), var(--color-accent))"
  };

  return (
    <div
      className={`social-icon-container ${className}`}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        ...style
      }}
      onClick={onClick}
    >
      <div 
        className="social-icon-inner"
        style={{
          width: isMobile ? "50px" : "60px",
          height: isMobile ? "50px" : "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.3s ease-in-out",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          boxShadow: isHovered 
            ? "0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.1)" 
            : "0 4px 12px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.05)",
          willChange: "transform, box-shadow"
        }}
      >
        {/* Background gradient with animated effects */}
        <div 
          className="social-icon-bg" 
          style={{
            position: "absolute",
            inset: 0,
            background: iconData.gradient,
            opacity: isHovered ? 1 : 0.85,
            transition: "opacity 0.3s ease, transform 0.5s ease",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
            willChange: "opacity, transform",
          }}
        />
        
        {/* Shimmer effect overlay */}
        <div 
          className="social-icon-shimmer"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)",
            opacity: 0, // Start with opacity 0
            transition: "opacity 0.3s ease",
            transform: "translateX(-100%) rotate(45deg)", // Initial position
            ...(isHovered && {
              animation: "socialIconShimmer 1.5s ease-in-out infinite",
              opacity: 1
            })
          }}
        />
        
        {/* Icon */}
        <i 
          className={`${iconData.icon}`}
          style={{
            fontSize: isMobile ? "18px" : "22px",
            color: "#ffffff",
            position: "relative", 
            zIndex: 2,
            textShadow: isHovered ? "0 1px 5px rgba(0,0,0,0.2)" : "none",
            transition: "all 0.3s ease",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        />
      </div>
    </div>
  );
};

export default SocialIcon;
