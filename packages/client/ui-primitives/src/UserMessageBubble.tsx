/** Shared user-message background, typography, and content inset. */
import type { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'

/** Native div attributes for user-authored message content. */
export type UserMessageBubbleProps = ComponentPropsWithoutRef<'div'>

/**
 * Render user-style message content without row placement or actions. The
 * surface is the shadcn secondary bubble: a 16px radius card that follows the
 * active theme's secondary fill and the content font-size preference.
 * @param props - Native div attributes and the caller-owned content.
 * @returns A theme-aware message surface that wraps its content.
 */
export function UserMessageBubble({ className, ...props }: UserMessageBubbleProps) {
  return (
    <div
      {...props}
      className={clsx(
        'max-w-full rounded-2xl bg-secondary px-4 py-2.5 text-foreground whitespace-pre-wrap break-words',
        'text-[length:var(--dsh-content-font-size,14px)] leading-[calc(22px+var(--dsh-content-font-delta,0px))]',
        className,
      )}
    />
  )
}
