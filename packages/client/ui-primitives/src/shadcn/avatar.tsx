import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from './utils.ts'

/**
 * Render a shadcn avatar root.
 * @param props - Radix avatar props plus a className override.
 * @returns the avatar root.
 */
function Avatar({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn('relative flex size-8 shrink-0 overflow-hidden rounded-full', className)}
      {...props}
    />
  )
}

/**
 * Render the avatar image.
 * @param props - Radix image props plus a className override.
 * @returns the avatar image.
 */
function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return <AvatarPrimitive.Image data-slot="avatar-image" className={cn('aspect-square size-full', className)} {...props} />
}

/**
 * Render the avatar fallback.
 * @param props - Radix fallback props plus a className override.
 * @returns the avatar fallback.
 */
function AvatarFallback({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn('bg-muted flex size-full items-center justify-center rounded-full text-xs', className)}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
