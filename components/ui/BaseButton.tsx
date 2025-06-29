import React from 'react';
import clsx from 'clsx';

interface BaseButtonProps {
  text: string;
  variant?: 'black' | 'white' | 'transparent';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  text,
  variant = 'black',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  const baseStyles =
    'px-6 py-2 my-2 rounded-lg text-sm font-semibold w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors duration-200 hover:scale-105';

  const variants: Record<string, string> = {
    black: 'bg-black text-white hover:bg-black/80 focus-visible:ring-black hover:bg-white hover:text-black transition-all duration-300',
    white: 'bg-white text-black hover:bg-gray-100 focus-visible:ring-black',
    transparent: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-black focus-visible:ring-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(baseStyles, variants[variant], className)}
      aria-disabled={disabled}
    >
      {text}
    </button>
  );
};

export default BaseButton;
