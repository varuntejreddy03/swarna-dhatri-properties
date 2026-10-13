import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'horizontal' | 'emblem' | 'full';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'horizontal'
}) => {
  // Proportional, balanced logo heights for clean navbar & footer
  const sizeClasses = {
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10 md:h-11',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20'
  };

  const srcMap = {
    horizontal: '/brand-logo-navbar.png',
    emblem: '/logo-emblem.png',
    full: '/logo.png'
  };

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src={srcMap[variant]}
        alt="Swarna Dhatri Properties Pvt Ltd"
        className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm`}
        loading="eager"
      />
    </div>
  );
};

export default Logo;

