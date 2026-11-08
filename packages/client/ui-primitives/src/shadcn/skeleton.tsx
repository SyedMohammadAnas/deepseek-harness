import { cn } from './utils.ts'

/**
 * Render a loading placeholder block.
 * @param props - element props plus a className override.
 * @returns the skeleton element.
 */
function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="skeleton" className={cn('bg-muted animate-pulse rounded-md', className)} {...props} />
}

export { Skeleton }
