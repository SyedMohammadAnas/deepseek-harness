// Button: the shared action control, rendered through the shadcn button so the
// whole client inherits one variant system. The public props stay stable for
// existing consumers; the variant names map onto shadcn's families.

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Button as ShadButton } from './shadcn/button.tsx'
import type { ButtonProps as ShadButtonProps } from './shadcn/button.tsx'

/** Visual variant, mapped onto a shadcn button family. */
export type ButtonVariant = 'primary' | 'ghost' | 'outline' | 'toolbar'

/** shadcn variant selected for each product variant. */
const VARIANT = {
  primary: 'default',
  ghost: 'ghost',
  outline: 'outline',
  toolbar: 'secondary',
} as const satisfies Record<ButtonVariant, NonNullable<ShadButtonProps['variant']>>

/** shadcn size selected for each product size. */
const SIZE = { md: 'default', sm: 'sm' } as const

type ButtonProps = {
  variant?: ButtonVariant
  size?: 'md' | 'sm'
  icon?: ReactNode
  className?: string | undefined
  children?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

/**
 * Render a button.
 * @param props.variant - visual family (default 'ghost'); outlined buttons keep the DPR-aware inset stroke from the shadcn outline family.
 * @param props.size - 'md' 36px control or 'sm' 28px control.
 * @param props.icon - optional leading icon node.
 * @param ref - native button for focus management and overlay anchors.
 * @returns the button element; native button attributes pass through.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({
  variant = 'ghost', size = 'md', icon, className, children, ...rest
}, ref) {
  return (
    <ShadButton
      ref={ref}
      type="button"
      {...rest}
      variant={VARIANT[variant]}
      size={SIZE[size]}
      className={className}
    >
      {icon != null && <span className="inline-flex shrink-0 items-center">{icon}</span>}
      {children}
    </ShadButton>
  )
})
