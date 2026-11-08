import { FishLogo } from './FishLogo.tsx'
import type { IconProps } from './icons/props.ts'

/** Display options for the thegacs wordmark. */
export interface BrandWordmarkProps extends IconProps {
  /** Whether to include the leading brand mark; defaults to true. */
  includeMark?: boolean | undefined
}

/**
 * Render the thegacs wordmark as live text so it follows the brand font and
 * the active label color.
 * @param props.size - font size in px (default 24).
 * @param props.className - extra class for layout placement.
 * @param props.includeMark - whether to include the leading brand mark.
 * @returns the wordmark (aria-hidden decorative brand art).
 */
export function BrandWordmark({ size = 24, className, includeMark = true }: BrandWordmarkProps) {
  return (
    <span
      className={className}
      aria-hidden="true"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size * 0.3,
        fontFamily: 'var(--dsw-font-family-brand)',
        fontSize: size,
        fontWeight: 500,
        letterSpacing: '-0.02em',
        lineHeight: 1,
        whiteSpace: 'nowrap',
      }}
    >
      {includeMark && <FishLogo size={size * 0.9} />}
      <span>
        thegacs<span style={{ color: 'var(--brand-orange, #E85002)' }}>.</span>
      </span>
    </span>
  )
}
