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
  // Base classes that apply to all buttons
  const baseClasses = 'rounded border-none font-medium transition-all duration-200 ease-in-out';

  // Size classes - full strings, no dynamic construction
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  }[size];

  // Variant classes - full strings, no dynamic construction
  const variantClasses = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }[variant];

  // Disabled classes
  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer';

  // Combine all classes
  const className = `${baseClasses} ${sizeClasses} ${variantClasses} ${disabledClasses}`;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
