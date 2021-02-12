---
title: "Responsive Design"
headerTitle: "Responsive Design"
layout: layout.njk
prevPage: "/docs/1-getting-started/alpinejs-or-activator"
nextPage: "/docs/1-getting-started/light-and-dark-themes"
prevButton: "AlpineJS or activator"
nextButton: "Light and dark themes"
---

<p class="t-lg t-thin">Responsive design in Codebase is accomplished by containers and max-width wrappers, flexbox and CSS grid systems, media query breakpoint widths, and CSS clamp controlled prose typography.</p>

Layouts in Codebase follow the familiar responsive “from small screens up” design methodology. For controlling layouts on increasingly wider viewports, all the following are available:

* A series of _CSS grid_ based [containers](/docs/3-responsive-layouts/containers) are available for centered layouts with max-width constraints
* [bleed](/docs/3-responsive-layouts/bleeds) inserts to enable to content to extend wider than container columns
* [Flexbox](/docs/3-responsive-layouts/flex) and [CSS grid](/docs/3-responsive-layouts/grid) systems have three media query breakpoint width variants
* [max-width wrappers](/docs/4-layout-utilities/dimensions/#max-width-wrappers) and [heights](/docs/4-layout-utilities/dimensions/#heights) utilities
* Responsive [floats](/docs/4-layout-utilities/floats) and [positions](/docs/4-layout-utilities/positions) utilities
* Responsive [y-axis spacing](/docs/6-decoration-utilities/spacing#responsive-y-axis-spacing) (margins and paddings) using [CSS clamp](https://chipcullen.com/css-min-max-clamp-functions/).
* Responsive [invisibility](/docs/4-layout-utilities/invisibility) utilities
* Responsive offcanvas side panel components (powered by [AlpineJS](/docs/8-alpinejs-components/alpinejs-offcanvas) or the Codebase [Activator](/docs/9-activator-components/activator-offcanvas))

Codebase typography is also responsive to viewport width (device size):

* [Headings](/docs/2-codebase-basics/headings) `<h1>` to `<h6>` have a slight downsize for phones. Below 768px (default), headings become 0.875em (87.5%) their base size.
* [Large display text](/docs/5-typographic-utilities/large-display-text) (using the `.t-lg` wrapper) is 1.25em (125%) the size of base headings for medium screens, and 1.5em (150%) for large screens up.
* [Prose text](/docs/5-typographic-utilities/long-read-text) starts as the normal size for small screens, and then base text and headings grow proportionately using [CSS clamp](https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/) to a comfortable maximum. Use the `.t-long-read` wrapper for long read articles and blog posts.
* Responsive [text alignment](/docs/5-typographic-utilities/text-alignment) utilities

## Codebase Media Query Breakpoint Widths

There are three media query breakpoint widths in Codebase. These are used in CSS classes for responsive flex and grid layouts, floats, headings, display text, text alignments, offcanvas side panels and invisibility utilities.

```scss
// Small
$mq-sm: 768px !default;

// Medium
$mq-md: 1024px !default;

// Large
$mq-lg: 1280px !default;
```

<div class="full-bleed my-6">
<div class="container container-md">
<svg xmlns="http://www.w3.org/2000/svg" width="1176" height="194" viewBox="0 0 588 97"><text transform="translate(150 12)"><tspan x="-10.117" y="1" font-family="Arial-BoldMT" font-size="14" fill="currentColor">sm</tspan></text><path d="M150.5 96.5v-72" fill="#FFF"/><path d="M150.5 96.5v-72" stroke="currentColor" fill="none"/><text transform="translate(294 12)"><tspan x="-10.5" y="1" font-family="Arial-BoldMT" font-size="14" fill="currentColor">md</tspan></text><path d="M294.5 96.5v-72" fill="#FFF"/><path d="M294.5 96.5v-72" stroke="currentColor" fill="none"/><text transform="translate(438 12)"><tspan x="-6.221" y="1" font-family="Arial-BoldMT" font-size="14" fill="currentColor">lg</tspan></text><path d="M438.5 96.5v-72" fill="#FFF"/><path d="M438.5 96.5v-72" stroke="currentColor" fill="none"/><text transform="translate(171 29)"><tspan x="-18" y="2" font-family="ArialMT" font-size="8" fill="currentColor">768px</tspan></text><text transform="translate(123.667 29)"><tspan x="-18.479" y="2" font-family="ArialMT" font-size="8" fill="currentColor">up to 767px </tspan></text><text transform="translate(315 29)"><tspan x="-18" y="2" font-family="ArialMT" font-size="8" fill="currentColor">1024px</tspan></text><text transform="translate(273 29)"><tspan x="-8.246" y="2" font-family="ArialMT" font-size="8" fill="currentColor">1023px</tspan></text><text transform="translate(474.667 29)"><tspan x="-33.667" y="2" font-family="ArialMT" font-size="8" fill="currentColor">1280px and up</tspan></text><text transform="translate(417 29)"><tspan x="-8.246" y="2" font-family="ArialMT" font-size="8" fill="currentColor">1279px</tspan></text><g stroke="currentColor"><path d="M15.5 48.5h126" fill="none"/><path d="M15.5 45.5l-8 3 8 3zM141.5 51.5l8-3-8-3z" fill="currentColor"/></g><g stroke="currentColor"><path d="M159.5 48.5h126" fill="none"/><path d="M159.5 45.5l-8 3 8 3zM285.5 51.5l8-3-8-3z" fill="currentColor"/></g><g stroke="currentColor"><path d="M303.5 48.5h126" fill="none"/><path d="M303.5 45.5l-8 3 8 3zM429.5 51.5l8-3-8-3z" fill="currentColor"/></g><g stroke="currentColor"><path d="M447.5 48.5h126" fill="none"/><path d="M447.5 45.5l-8 3 8 3zM573.5 51.5l8-3-8-3z" fill="currentColor"/></g><text transform="translate(78 66)"><tspan x="-14.678" y="1" font-family="ArialMT" font-size="8" fill="currentColor"> Phones</tspan></text><text transform="translate(222 66)"><tspan x="-47.588" y="1" font-family="ArialMT" font-size="8" fill="currentColor"> Large phones (landscape)</tspan></text><text transform="translate(222 78)"><tspan x="-29.938" y="1" font-family="ArialMT" font-size="8" fill="currentColor"> Tablets (portrait)</tspan></text><text transform="translate(366 66)"><tspan x="-35.725" y="1" font-family="ArialMT" font-size="8" fill="currentColor"> Tablets (landscape)</tspan></text><text transform="translate(510 66)"><tspan x="-51.51" y="1" font-family="ArialMT" font-size="8" fill="currentColor"> Laptops, desktops, TVs, etc.</tspan></text></svg>
</div>
</div>