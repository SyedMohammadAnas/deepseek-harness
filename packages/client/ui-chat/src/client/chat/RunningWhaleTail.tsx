/** Decorative running mark for the Chat status: the brand glyph, pulsing. */
import { FishLogo } from '@deepseek-ai/dsh-client-ui-primitives'

import css from './ChatView.module.css'

/**
 * Render the running status mark. The brand glyph replaces the inherited
 * whale-tail APNG: a single currentColor path, so the indicator follows the
 * status ink and costs no animation asset.
 * @returns the aria-hidden icon seat.
 */
export function RunningWhaleTail() {
  return (
    <span className={css.runningIcon} aria-hidden="true">
      <FishLogo className={css.runningMark} />
    </span>
  )
}
