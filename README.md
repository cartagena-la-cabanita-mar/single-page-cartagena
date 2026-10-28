# Welcome to Cartagena

Multilingual (ES / EN / FR) welcome guide for Apartasuite 1317, Cartagena Beach Resort, in Crespo. It turns the printed manual into a single scrolling page with a Mediterranean look (blue, white and lemon yellow): a sidebar lists every section of the guide and glides to it on click.

## Stack

React 19, TypeScript, Vite, Tailwind CSS v4, `motion` (animations), `lenis` (smooth scroll and the sidebar auto-scroll), `i18next` + `react-i18next`, Radix UI primitives (shadcn style) and Lucide icons. Fonts: Fraunces, Manrope and Caveat through Fontsource.

## Scripts

```bash
bun install
bun run dev      # start the dev server
bun run build    # type-check and production build
bun run lint     # ESLint
bun run format   # Prettier check (runs on the Bun runtime to read prettier.config.ts)
bun run check    # Prettier write + ESLint fix
```

## Structure

The layout follows the VIIO corporate repo.

| Folder                                     | Purpose                                                  | File suffix                                |
| ------------------------------------------ | -------------------------------------------------------- | ------------------------------------------ |
| `src/components/ui`                        | Radix wrappers (shadcn style) and one folder per feature | `*.ui.tsx`                                 |
| `src/components/ui/home`                   | Page view (`homeView.ui.tsx`), hero, footer              | `*.ui.tsx`                                 |
| `src/hooks`                                | Shared logic (active section, scroll, document meta)     | `*.hook.ts`                                |
| `src/constants`                            | Navigation, places, venues, inventory, photo manifest    | `*.constant.ts`                            |
| `src/enums`, `src/types`, `src/interfaces` | Shared definitions                                       | `*.enum.ts`, `*.type.ts`, `*.interface.ts` |
| `src/utils`                                | Helpers (links, formatting, photos)                      | `*.util.ts`                                |
| `src/i18n`                                 | `config.ts`, `i18n.d.ts` and `<lng>/<namespace>.json`    | `*.json`                                   |

## Translations

Spanish is the source of truth. Every namespace lives in `src/i18n/es/<namespace>.json`, and `en/` and `fr/` must have the same keys: `src/i18n/config.ts` uses `satisfies typeof es`, so the build fails when a language is missing a key. Keys are type-checked in `t()` through `src/i18n/i18n.d.ts`. The language is detected from the browser and remembered in `localStorage`.

To add a section, create its namespace in the three languages, register it in `config.ts` and `i18n.d.ts`, add its id to `SectionId` and `NAV_GROUPS`, and render it in `homeView.ui.tsx`.

## Photos

- Photos of the apartment and the building come from the host's own guide.
- Photos of Cartagena come from Wikimedia Commons under free licences (CC BY-SA). Their authors and licences are listed in the footer and next to each photo in the places dialog.
- Images are optimised to WebP in several widths into `src/assets/images/`, and `src/constants/photos.constant.ts` (generated, do not edit by hand) describes them. Every slug needs an alt text in `src/i18n/<lng>/photos.json`.

## Notes

- The Wi-Fi password is shown on the page exactly as it appears in the guide. Keep that in mind before publishing the site openly.
- The `frontend-design` skill from Anthropic is installed in `.claude/skills/` to guide visual work in Claude Code sessions.
