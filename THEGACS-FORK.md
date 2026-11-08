# thegacs UI fork

This checkout is a private fork of the DeepSeek Harness web client, rebuilt around the thegacs brand. It is not intended for upstream contribution; the styling system was deliberately changed.

## Brand

| Role | Value |
|---|---|
| Primary action | `#E85002` |
| Canvas (dark) | `#000000` |
| Elevated surface | `#333333` |
| Secondary text | `#A7A7A7` / `#646464` |
| Foreground | `#F9F9F9` |
| Brand gradient | `#000000` → `#C10801` → `#F16001` → `#D9C3AB` |

The mark is the single-path SVG from `~/Downloads/Aphex_Twin_logo.svg`, normalised to its true bounding box (`0 0 5271.1 4851.59`) and rendered through `FISH_LOGO_PATH` so the sidebar, favicons, PWA icons and the empty-state hero all draw the same geometry.

## What changed

- **Theme layer** (`ui-theme/src/styles/design-platform.css`): the `--dsw-*` alias block is remapped to the brand palette for both themes, including the accent statics, menu surfaces and scrollbar pairs. Dark is the black canvas; light is `#F9F9F9`.
- **Radius scale** (`ui-theme/src/styles/base.css`): forked to the shadcn scale — `xs 4 / sm 6 / md 8 / lg 10 / xl 14 / panel 18`. `docs/ui-radius.md` documents the new values.
- **shadcn layer** (`apps/web/src/theme/shadcn.css`): Tailwind v4 utilities scoped to the shadcn token names, with preflight deliberately omitted so inherited screens are untouched. Content scanning covers every client package.
- **Component kit** (`ui-primitives/src/shadcn/`): 17 shadcn components (button, input, card, badge, dialog, dropdown-menu, tooltip, tabs, popover, scroll-area, separator, avatar, switch, label, skeleton, utils, barrel). Exported with a `Shad` prefix to coexist with inherited primitives.
- **Shared primitives converted to shadcn**: Button, Input, UserMessageBubble, Tooltip, MenuSurface geometry, Menu item and group geometry, CodeCard, DisclosureRow, ConfigField, Modal, HoverCard (now theme-aware rather than a fixed dark card).
- **Shell**: sidebar surface + CTA + search controls + selected-row accent, composer card + controls + mode chips, conversation header tabs, settings panel + nav + close + permission selector, goal bar controls, hero workspace chip, right-sidebar chrome, queue-dock row actions, and the per-message copy/branch actions.
- **Mark orientation**: the source SVG carries `matrix(.13333 0 0 -.13333 0 852.413)` — a vertical flip. The path data stays in source coordinates and `FISH_LOGO_TRANSFORM` restores the authored orientation in every consumer (sidebar, hero, favicons, app icons).
- **Hairline borders**: every kit border is `0.5px` (outline buttons, inputs, cards, badges, dialogs, popovers, menus, tabs, switches). The legacy `.newSession` hover and macOS vibrancy overrides were removed so the shadcn primary variant owns the sidebar CTA's fill.
- **Third-party plugin localization**: `@irerc/dsh-deepseek-web` ships ~645 hardcoded Chinese strings with no locale layer. `localize-deepseek-web.mjs` (repo root) patches the installed bundle with whole-literal matching and is re-runnable after plugin updates; backups live beside the bundle as `*.orig`. Page chrome, cards, buttons and status labels are English; ~346 strings remain in advanced tooltips and logs.
- **Brand gradient in use**: the composer's primary send/stop action carries `#F16001 → #C10801` on hover-shift, and the empty-state hero carries the radial glow behind the mark.
- **Identity**: brand mark, favicons (black on light / orange on dark), PWA manifest (`thegacs`, theme `#E85002`), 192/512/maskable/apple-touch icons, document title.
- **English-only UI**: the web shell supplies an English locale bridge in `apps/web/src/main.ts`, so the product never opens in another language while the locale mechanism and its tests stay intact.
- **Hero**: the whale morph animation was removed — it interpolated the brand glyph into whale geometry — and replaced with a brand-gradient glow.
- **Running status**: the whale-tail APNG spinner and its 28px mask asset were retired; the status now pulses the brand mark, honouring reduced motion with no animation asset.

## Running it

```sh
pnpm run dev:web            # build + watchers + dsh web (client bundle HMR)
pnpm run build:artifacts    # one-shot artifact rebuild
pnpm run test:gui           # client + host GUI suites
```

The running server serves built artifacts; refresh the page after a rebuild.

## Known gaps

- Roughly 500 raw `<button>` elements remain across the 60 client packages; the shared layer is converted, the per-screen markup largely is not.
- Menu surfaces keep their translucent material and backdrop blur by design. Flattening them to an opaque shadcn popover was considered and declined; the theme gate enforces the current material contract.
- The plan-mode chip keeps a bespoke hover glyph swap (plan mark → circled close) that the shadcn button does not model.
- Density and typography have not been retuned; the transcript still uses the inherited 14/24 rhythm.

## File inventory

83 files modified, 5 deleted, 3 new paths:

- **New**: `apps/web/src/theme/` (Tailwind + shadcn token layer), `packages/client/ui-primitives/src/shadcn/` (the 17-component kit and its barrel), this file.
- **Deleted**: `ui-primitives/src/Button.module.css`, `Input.module.css`, `UserMessageBubble.module.css` (their primitives render through the shadcn kit), `ui-primitives/tests/button-styles.client.spec.ts` (policed the retired inset-stroke contract), `ui-chat/src/client/assets/running-whale@2x.png` (the spinner APNG).
- **Modified**: theme sheets (`design-platform.css`, `base.css`), the web shell entry and Vite config, 20+ client packages, the radius standard doc, and the specs whose expectations the fork intentionally changed.

## Reverting

The fork is a working-tree change set, not a branch:

```sh
git status                 # 60+ modified files, two new directories
git checkout -- .          # discard
git clean -fd apps/web/src/theme packages/client/ui-primitives/src/shadcn
```

Revert the untracked directories as well, or the converted primitives import missing modules.
