# Project spec: small town spooky cafe, game UI kit

The project is still in the design phase, so most things here are open. Figma leads and the code follows.

## What this is

A portfolio piece for a UX/UI designer and engineer, showing that I can both design and build. It is the UI kit for an imagined game about running a little cafe in a spooky small town. The same components exist in Figma and in code, driven by one set of design tokens, and are shown on a live page plus two composed game screens.

* Owner: Szabina Nagy
* Hard deadline: 5 November 2026

## Mood

A cosy cafe in a quiet New England town after dark, in the spirit of the film ParaNorman. Spooky but friendly, mysterious but never scary.

## Palette

| Colour | Hex | Current thinking |
| --- | --- | --- |
| Ink | `#1a1020` | Background, text on lime |
| Surface | `#261630` | Cards, inputs, rows, modals |
| Surface chosen | `#3a1d55` | Chosen and hovered items |
| Secondary | `#f3e7d8` | Text on dark, secondary button |
| Primary | `#a76ce8` | Control edges, placeholder text |
| Primary deep | `#7c3fbe` | Hard shadow only |
| Accent | `#c8ff00` | Lime, the one accent |
| Alert | `#ef7b4b` | Errors, destructive buttons |

Hover and pressed shades, and the ratio for every pairing, are in css/tokens.css. Values can still change.

Contrast so far:

* Secondary and lime pass on ink (15.13, 15.59), surface (13.90, 14.32) and surface chosen (11.59, 11.94).
* Primary passes as text on ink and surface (5.23, 4.80), but on surface chosen only as an edge (4.00).
* Primary deep fails as an edge on ink (2.91), so it is only used for the shadow.
* Never use lime as text or as an edge on secondary (1.03).

## Must haves

1. Tokens documented on one page.
2. Every component has all its states in Figma and in code.
3. A side by side check shows the code matching the Figma design.
4. Two composed screens: settings, and an item grid or inventory.
5. The live link works on desktop and phone.
6. One short paragraph explains the key decisions.

Constraints:

* Plain HTML, CSS and JavaScript. No framework, no build step.
* Every colour pairing passes WCAG AA: 4.5 to 1 for text, 3 to 1 for control edges and focus rings.
* Works from 360 px wide, with real semantics and full keyboard support.

## Components

A starting list of 12, open to change as the game screens take shape: button, text input, toggle, checkbox, radio group, slider, tabs, chips, card, list row, progress bar, modal.

Button states:

* Default, hover, focus, pressed, disabled. Loading only if the screens need it.
* The focus ring also shows on top of hover and pressed.
* Still to decide: whether disabled buttons stay focusable, and whether primary and secondary get a border so they keep their outline in high contrast mode.

## Open

* Name of the game and the kit
* Type, shape, color, motion and icons
* The final component list, and any game specific pieces

## References

Mood only, not assets to copy.

* ParaNorman poster
* Foggy autumn tree line in New England
* Aubergine and chartreuse colour sheet
* A cosy spooky mobile game screens set
