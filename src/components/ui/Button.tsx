import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'link';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
          {
            'bg-primary text-black hover:bg-primary-hover': variant === 'primary',
            'border-2 border-primary text-primary hover:bg-primary hover:text-black': variant === 'outline',
            'text-primary hover:underline px-0 py-0': variant === 'link',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
