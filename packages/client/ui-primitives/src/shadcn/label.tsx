import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

import { cn } from './utils.ts'

/**
 * Render a shadcn form label.
 * @param props - Radix label props plus a className override.
 * @returns the label element.
 */
function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn('flex items-center gap-2 text-sm leading-none font-medium select-none', className)}
      {...props}
    />
  )
}

export { Label }
