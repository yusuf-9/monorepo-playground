import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
}) => {
  const baseStyles: React.CSSProperties = {
    padding:
      size === 'small' ? '6px 12px' : size === 'large' ? '12px 24px' : '8px 16px',
    fontSize: size === 'small' ? '14px' : size === 'large' ? '18px' : '16px',
    borderRadius: '4px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    fontWeight: 500,
    transition: 'all 0.2s ease',
  };

  const variantStyles: React.CSSProperties = {
    primary: {
      backgroundColor: '#646cff',
      color: 'white',
    },
    danger: {
      backgroundColor: '#f0f0f0',
      color: '#333',
    },
    secondary: {
      backgroundColor: '#ff4444',
      color: 'white',
    },
  }[variant];

  return (
    <button
      style={{ ...baseStyles, ...variantStyles }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
