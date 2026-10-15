# Project spec: small town spooky cafe, game UI kit

The project is still in the design phase, so most things here are open. Figma leads and the code follows.

## What this is

A portfolio piece for a UX/UI designer and engineer, showing that I can both design and build. It is the UI kit for an imagined game about running a little cafe in a spooky small town. The same components exist in Figma and in code, driven by one set of design tokens, and are shown on a live page plus two composed game screens.

* Owner: Szabina Nagy
* Hard deadline: 31 October 2026

## Mood

A cosy cafe in a quiet New England town after dark, in the spirit of the film ParaNorman. Spooky but friendly, mysterious but never scary.

## Palette

| Colour | Hex | Current thinking |
| --- | --- | --- |
| Ink | `#1a1020` | Background |
| Paper | `#f3e7d8` | Text on dark, light surfaces |
| Purple | `#7c3fbe` | Main surface |
| Lime | `#c8ff00` | The one accent |
| Orange | `#ef7b4b` | Alerts |

Hex values were sampled from a screenshot of the Figma exploration, they can still change.

Contrast so far:

* Paper and lime pass on ink (15.13, 15.59) and on purple (5.2, 5.36).
* On purple nothing else passes, not even ink (2.91) or orange (2.3). Text and control edges on purple need paper or lime.
!! Purple needs to be explored further!!
* Never use lime as text or as an edge on paper (1.03).

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
