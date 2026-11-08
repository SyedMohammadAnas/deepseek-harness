// Input: single-line text input atom (search boxes, inline forms), rendered
// through the shadcn input. The leading-icon wrapper stays part of the product
// contract; the field itself follows the shadcn geometry. Multi-line inline
// edits use InlineEditor; the composer is owned by the conversation package.

import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'
import clsx from 'clsx'
import { Input as ShadInput } from './shadcn/input.tsx'

/**
 * Render a text input with an optional leading icon.
 * @param props.icon - optional 16px leading icon node.
 * @param ref - the native input, cleared when it unmounts.
 * @returns wrapper span containing the native input; input attributes pass through.
 */
export const Input = forwardRef<HTMLInputElement, {
  icon?: ReactNode
  className?: string
} & InputHTMLAttributes<HTMLInputElement>>(function Input({ icon, className, ...rest }, ref) {
  return (
    <span className={clsx('relative inline-flex w-full items-center', className)}>
      {icon != null && (
        <span className="text-muted-foreground pointer-events-none absolute left-3 flex items-center">{icon}</span>
      )}
      <ShadInput ref={ref} className={clsx(icon != null && 'pl-9')} {...rest} />
    </span>
  )
})
