---
title: "Responsive Design"
headerTitle: "Responsive Design"
layout: layout.njk
prevPage: "/docs/1-getting-started/alpinejs-or-activator"
nextPage: "/docs/1-getting-started/light-and-dark-themes"
prevButton: "AlpineJS or activator"
nextButton: "Light and dark themes"
---

<p class="t-lg t-thin">Responsive design in Codebase is accomplished by containers, flexbox, and grid systems controlled by media query breakpoint widths, and various utility classes breakpoints and/or CSS clamp.</p>

## Responsive Layouts

Layouts in Codebase follow the familiar responsive “from small screens up” design methodology. For controlling layouts on increasingly wider viewports, all the following are available:

* A series of [containers]({{ '/docs/3-responsive-layouts/containers' | url }}) are available for centered layouts with max-width constraints
* [bleed]({{ '/docs/3-responsive-layouts/bleeds' | url }}) inserts to enable to content to “burst out” wider than container columns
* [Flexbox]({{ '/docs/3-responsive-layouts/flex' | url }}) and [CSS grid]({{ '/docs/3-responsive-layouts/grid' | url }}) systems have three breakpoint width variants: `sm` (768px default' | url }}), `md` (1024px default' | url }}) and `lg` (1280px default' | url }})
* A seried of [max-width wrappers]({{ '/docs/4-layout-utilities/dimensions/#max-width-wrappers' | url }}) and viewport-height based [heights]({{ '/docs/4-layout-utilities/dimensions/#heights' | url }}) utilities
* Responsive [floats]({{ '/docs/4-layout-utilities/floats' | url }}) and [block positioning]({{ '/docs/4-layout-utilities/positions' | url }}) utilities
* Responsive [y-axis spacing]({{ '/docs/6-decoration-utilities/spacing#responsive-y-axis-spacing' | url }}) (margins and paddings' | url }}) using [CSS clamp(' | url }})](https://chipcullen.com/css-min-max-clamp-functions/' | url }})
* Responsive [invisibility]({{ '/docs/4-layout-utilities/invisibility' | url }}) utilities
* Responsive offcanvas side panel components (powered by [AlpineJS]({{ '/docs/8-alpinejs-components/alpinejs-offcanvas' | url }}) or the Codebase [Activator]({{ '/docs/9-activator-components/activator-offcanvas' | url }})' | url }})

## Responsive Typography

Codebase typography is also responsive to viewport width (device size' | url }}):

* [Headings]({{ '/docs/2-codebase-basics/headings' | url }}) `<h1>` to `<h6>` have a slight downsize for phones. Below 768px (default' | url }}), headings become 0.875em (87.5%' | url }}) their base size
* [Large display text]({{ '/docs/5-typographic-utilities/large-display-text' | url }}) (using the `.t-lg` wrapper' | url }}) is 1.25em (125%' | url }}) the size of base headings for medium screens, and 1.5em (150%' | url }}) for large screens up
* [Long read text]({{ '/docs/5-typographic-utilities/long-read-text' | url }}) starts as the normal size for small screens, and then base text and headings grow proportionately using [CSS clamp(' | url }})](https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/' | url }}) to a comfortable maximum. Use the `.t-long-read` wrapper for long read articles and blog posts
* Responsive [text alignment]({{ '/docs/5-typographic-utilities/text-alignment' | url }}) utilities

## Codebase Media Query Breakpoint Widths

There are three breakpoint widths in Codebase. These are used in CSS classes for responsive flex and grid layouts, floats, headings, display text, text alignments, offcanvas side panels and invisibility utilities.

```scss
// Small
$mq-sm: 768px !default;

// Medium
$mq-md: 1024px !default;

// Large
$mq-lg: 1280px !default;
```

<div class="container-grid-full-bleed my-6">
<div class="container-grid container-grid-lg">
<svg xmlns="http://www.w3.org/2000/svg" width="1176" height="194" viewBox="0 0 588 97"><text transform="translate(150 12)"><tspan x="-10.117" y="1" font-family="Arial-BoldMT" font-size="14" fill="currentColor">sm</tspan></text><path d="M150.5 96.5v-72" fill="#FFF"/><path d="M150.5 96.5v-72" stroke="currentColor" fill="none"/><text transform="translate(294 12)"><tspan x="-10.5" y="1" font-family="Arial-BoldMT" font-size="14" fill="currentColor">md</tspan></text><path d="M294.5 96.5v-72" fill="#FFF"/><path d="M294.5 96.5v-72" stroke="currentColor" fill="none"/><text transform="translate(438 12)"><tspan x="-6.221" y="1" font-family="Arial-BoldMT" font-size="14" fill="currentColor">lg</tspan></text><path d="M438.5 96.5v-72" fill="#FFF"/><path d="M438.5 96.5v-72" stroke="currentColor" fill="none"/><text transform="translate(171 29)"><tspan x="-18" y="2" font-family="ArialMT" font-size="8" fill="currentColor">768px</tspan></text><text transform="translate(123.667 29)"><tspan x="-18.479" y="2" font-family="ArialMT" font-size="8" fill="currentColor">up to 767px </tspan></text><text transform="translate(315 29)"><tspan x="-18" y="2" font-family="ArialMT" font-size="8" fill="currentColor">1024px</tspan></text><text transform="translate(273 29)"><tspan x="-8.246" y="2" font-family="ArialMT" font-size="8" fill="currentColor">1023px</tspan></text><text transform="translate(474.667 29)"><tspan x="-33.667" y="2" font-family="ArialMT" font-size="8" fill="currentColor">1280px and up</tspan></text><text transform="translate(417 29)"><tspan x="-8.246" y="2" font-family="ArialMT" font-size="8" fill="currentColor">1279px</tspan></text><g stroke="currentColor"><path d="M15.5 48.5h126" fill="none"/><path d="M15.5 45.5l-8 3 8 3zM141.5 51.5l8-3-8-3z" fill="currentColor"/></g><g stroke="currentColor"><path d="M159.5 48.5h126" fill="none"/><path d="M159.5 45.5l-8 3 8 3zM285.5 51.5l8-3-8-3z" fill="currentColor"/></g><g stroke="currentColor"><path d="M303.5 48.5h126" fill="none"/><path d="M303.5 45.5l-8 3 8 3zM429.5 51.5l8-3-8-3z" fill="currentColor"/></g><g stroke="currentColor"><path d="M447.5 48.5h126" fill="none"/><path d="M447.5 45.5l-8 3 8 3zM573.5 51.5l8-3-8-3z" fill="currentColor"/></g><text transform="translate(78 66)"><tspan x="-14.678" y="1" font-family="ArialMT" font-size="8" fill="currentColor"> Phones</tspan></text><text transform="translate(222 66)"><tspan x="-47.588" y="1" font-family="ArialMT" font-size="8" fill="currentColor"> Large phones (landscape)</tspan></text><text transform="translate(222 78)"><tspan x="-29.938" y="1" font-family="ArialMT" font-size="8" fill="currentColor"> Tablets (portrait)</tspan></text><text transform="translate(366 66)"><tspan x="-35.725" y="1" font-family="ArialMT" font-size="8" fill="currentColor"> Tablets (landscape)</tspan></text><text transform="translate(510 66)"><tspan x="-51.51" y="1" font-family="ArialMT" font-size="8" fill="currentColor"> Laptops, desktops, TVs, etc.</tspan></text></svg>
</div>
</div>