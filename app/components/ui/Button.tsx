'use client';

import { cn } from '@/app/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', loading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'relative overflow-hidden z-10 px-4 py-2 font-medium transition-all duration-300 rounded-sm',
          'before:content-[""] before:absolute before:top-0 before:left-[-100%] before:bottom-[100%] before:w-full before:h-full before:z-[-1]',
          'before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.75,0,0.125,1)]',
          'after:content-[""] after:absolute after:top-0 after:left-[-100%] after:bottom-[100%] after:w-full after:h-full after:z-[-1]',
          'after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.75,0,0.125,1)] after:delay-[175ms]',
          'hover:before:translate-x-full hover:after:translate-x-full',
          variant === 'primary' && [
            'bg-primary text-white',
            'before:bg-primary-hover after:bg-primary-dark',
          ],
          variant === 'secondary' && [
            'bg-white text-dark border border-dark-border',
            'before:bg-gray-100 after:bg-gray-200',
          ],
          (disabled || loading) && 'opacity-50 cursor-not-allowed',
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

