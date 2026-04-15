import * as React from 'react';
import { tv, type VariantProps } from '@/utils/tv';

const badgeVariants = tv({
  base: 'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
  variants: {
    variant: {
      success: 'bg-[var(--success-alpha-10)] text-[var(--success-base)]',
      error: 'bg-[var(--error-alpha-10)] text-[var(--error-base)]',
      primary: 'bg-[var(--primary-alpha-10)] text-[var(--primary-light)]',
      neutral:
        'bg-[var(--bg-soft-200)] text-[var(--text-sub-600)] ring-1 ring-inset ring-[var(--stroke-soft-200)]',
    },
  },
  defaultVariants: { variant: 'neutral' },
});

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={badgeVariants({ variant, className })} {...props} />;
}

export { Badge, badgeVariants };
