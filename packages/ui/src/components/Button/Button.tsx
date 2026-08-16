import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const classNames = [
      styles.button,
      styles[variant],
      styles[size],
      className
    ].filter(Boolean).join(' ');

    return (
      <button ref={ref} className={classNames} {...props} />
    );
  }
);

Button.displayName = 'Button';
