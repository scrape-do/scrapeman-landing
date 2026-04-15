import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { tv, type VariantProps } from '@/utils/tv';

const buttonVariants = tv({
  base: [
    'relative inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'font-medium transition duration-200 ease-out outline-none',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary-base)]',
    'disabled:pointer-events-none disabled:opacity-40',
  ],
  variants: {
    variant: {
      primary:
        'bg-[var(--primary-base)] text-white hover:bg-[var(--primary-dark)] shadow-sm',
      neutral:
        'bg-[var(--bg-soft-200)] text-[var(--text-strong-950)] hover:bg-[var(--bg-sub-300)] ring-1 ring-inset ring-[var(--stroke-soft-200)]',
      ghost:
        'text-[var(--text-sub-600)] hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]',
      error: 'bg-[var(--error-base)] text-white hover:opacity-90',
    },
    size: {
      sm: 'h-8 rounded-lg px-3 text-xs',
      md: 'h-10 rounded-xl px-4 text-sm',
      lg: 'h-12 rounded-xl px-6 text-base',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
