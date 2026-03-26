import React from 'react';

interface LogoProps {
  className?: string;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({
  className,
  height = 60,
}) => {
  return (
    <div
      className={`flex items-center ${className || ''}`}
      style={{ height }}
    >
      <img
        src="/logo.png"   // 🔥 your rectangle logo
        alt="Vings Tech"
        className="h-full w-auto object-contain"
      />
    </div>
  );
};