# My Special Soup

A three-page chicken and potato soup website built with HTML, CSS, and a little JavaScript.

**Website:** https://thechristianboss.github.io/campus/

## Accessibility fixes

- **All three pages:** Replaced the linked site title with plain text so it does not repeat the Home navigation link.
- **About page:** Added matching `label` and input IDs so screen readers announce what each contact field is for.
- **About page:** Put the message-topic radio buttons inside a `fieldset` with a `legend` so they are read as one group.
- **About page:** Added inline error messages, `aria-invalid`, a form-level alert, and focus on the first invalid field so users can find mistakes.
- **About page:** Added a keyboard-focusable confirmation message that clearly says this practice form does not send anything.
- **All three pages:** Kept visible keyboard focus styles and reused the same dark green, cream, and warm brown colors across the site.

## Gestalt principles used

- **Proximity:** The two recipe stages and their ingredients are grouped in separate cards so readers can tell which details belong together.
- **Similarity:** Cards, section headings, buttons, and page navigation use repeated styling so the same kinds of items look and work alike.

## Colors and contrast

The same palette is used across all three pages: dark green (`#263B2E`), cream (`#FFFAF0`), light green (`#F1F3E9`), warm brown (`#913A25`), and white (`#FFFFFF`).

These ratios were calculated with the WCAG relative-luminance contrast formula; each one is above the 4.5:1 AA requirement for normal text. Verify the combinations in the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

| Foreground | Background | Calculated ratio |
| --- | --- | --- |
| Dark green `#263B2E` | Cream `#FFFAF0` | 11.55:1 |
| Dark green `#263B2E` | Light green `#F1F3E9` | 10.72:1 |
| Dark green `#263B2E` | White `#FFFFFF` | 12.02:1 |
| Warm brown `#913A25` | Cream `#FFFAF0` | 7.12:1 |
| Warm brown `#913A25` | Light green `#F1F3E9` | 6.61:1 |
| Warm brown `#913A25` | White `#FFFFFF` | 7.41:1 |
| White `#FFFFFF` | Dark green `#263B2E` | 12.02:1 |
| White `#FFFFFF` | Warm brown `#913A25` | 7.41:1 |

## WAVE test links

Use WAVE on each published page after GitHub Pages updates:

- [Home page WAVE check](https://wave.webaim.org/report?url=https%3A%2F%2Fthechristianboss.github.io%2Fcampus%2F)
- [Recipe page WAVE check](https://wave.webaim.org/report?url=https%3A%2F%2Fthechristianboss.github.io%2Fcampus%2Frecipe.html)
- [About page WAVE check](https://wave.webaim.org/report?url=https%3A%2F%2Fthechristianboss.github.io%2Fcampus%2Fabout.html)

**Testing note:** The earlier class WAVE scan reported zero errors and redundant-link alerts. The redundant site-title link has now been removed; a new WAVE run on each deployed page is still needed to confirm the current error and contrast counts. The contact form is a client-side practice example and does not send messages.
