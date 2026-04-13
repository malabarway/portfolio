import React from 'react';

interface WindowBoxProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

export const WindowBox: React.FC<WindowBoxProps> = ({ title, children, className = '', onClose }) => {
  return (
    <div className={`window-box ${className}`}>
      <div className="window-header">
        <span className="window-title">{title}</span>
        <div className="window-controls">
          <span></span>
          <span></span>
          <span style={{ cursor: onClose ? 'pointer' : 'default', backgroundColor: onClose ? 'var(--accent-red)' : '' }} onClick={onClose}></span>
        </div>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  );
};
