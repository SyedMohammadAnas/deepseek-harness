import * as React from 'react'

import { cn } from './utils.ts'

/**
 * Render a shadcn card surface.
 * @param props - element props plus a className override.
 * @returns the card root.
 */
function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-[0.2px] py-6 shadow-sm', className)}
      {...props}
    />
  )
}

/**
 * Render the card header region.
 * @param props - element props plus a className override.
 * @returns the header element.
 */
function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-header" className={cn('flex flex-col gap-1.5 px-6', className)} {...props} />
}

/**
 * Render the card title.
 * @param props - element props plus a className override.
 * @returns the title element.
 */
function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-title" className={cn('leading-none font-semibold', className)} {...props} />
}

/**
 * Render the card description.
 * @param props - element props plus a className override.
 * @returns the description element.
 */
function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-description" className={cn('text-muted-foreground text-sm', className)} {...props} />
}

/**
 * Render the card content region.
 * @param props - element props plus a className override.
 * @returns the content element.
 */
function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn('px-6', className)} {...props} />
}

/**
 * Render the card footer region.
 * @param props - element props plus a className override.
 * @returns the footer element.
 */
function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-footer" className={cn('flex items-center px-6', className)} {...props} />
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
