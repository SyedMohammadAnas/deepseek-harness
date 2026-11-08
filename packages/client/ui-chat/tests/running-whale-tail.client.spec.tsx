// @vitest-environment jsdom

import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { RunningWhaleTail } from '../src/client/chat/RunningWhaleTail.tsx'

afterEach(cleanup)

describe('RunningWhaleTail', () => {
  it('renders the brand mark as one decorative currentColor path without inline styles', () => {
    const view = render(<RunningWhaleTail />)
    const icon = view.container.firstElementChild!
    expect(icon.tagName).toBe('SPAN')
    expect(icon.getAttribute('aria-hidden')).toBe('true')
    const svg = icon.querySelector('svg')!
    expect(svg.getAttribute('viewBox')).toBe('0 0 5271.1 4851.59')
    expect(svg.querySelectorAll('path')).toHaveLength(1)
    expect(svg.querySelector('path')?.getAttribute('d')).toMatch(/^M/)
    expect(svg.innerHTML).toContain('currentColor')
    expect(view.container.querySelector('animate')).toBeNull()
    expect(view.container.querySelector('[style]')).toBeNull()
  })
})
