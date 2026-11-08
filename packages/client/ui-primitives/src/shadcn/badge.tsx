import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

import { cn } from './utils.ts'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md border-[0.2px] px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        destructive: 'border-transparent bg-destructive text-destructive-foreground',
        outline: 'text-foreground',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

/** Prop contract for {@link Badge}. */
export interface BadgeProps extends React.ComponentProps<'span'>, VariantProps<typeof badgeVariants> {
  /** Render the badge styles onto the child element. */
  asChild?: boolean
}

/**
 * Render a shadcn badge.
 * @param props - element props plus variant selection.
 * @returns the badge element.
 */
function Badge({ className, variant, asChild = false, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : 'span'
  return <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
