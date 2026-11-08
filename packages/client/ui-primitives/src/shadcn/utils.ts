import { clsx } from 'clsx'
import type { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge conditional class names, resolving conflicting Tailwind utilities in
 * favor of the caller's last value.
 * @param inputs - class values accepted by clsx.
 * @returns the merged class string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
