---
title: "Borders"
layout: layout.njk
prevPage: "/docs/6-decoration-utilities/spacing"
nextPage: "/docs/6-decoration-utilities/rounded-corners"
prevButton: "Spacing"
nextButton: "Rounded corners"
---

<p class="t-lg t-thin">A few simple border styles.</p>

* borders all `b-*`
* border-top `bt-*`
* border-right `br-*`
* border-bottom `bb-*`
* border-left `bl-*`

Examples:

<div class="mb-1 p-1 b-thin b-0"> <code>.b-0</code> 0px – for <em>removing</em> borders</div>

<div class="mb-1 p-1 b-dashed"> <code>.b-dashed</code> – 1px default</div>

<div class="mb-1 p-1 b-thin"> <code>.b-thin</code> – 1px default</div>

<div class="mb-1 p-1 b-thick"> <code>.b-thick</code> – 4px default</div>

<div class="mb-1 p-1 b-heavy"> <code>.b-heavy</code> – 8px default</div>

<div class="grid-4-cols grid-gap mt-3 mb-3">
<div class="bt-thick bg-color-background-alt p-1">.bt-thick</div>
<div class="br-thick bg-color-background-alt p-1">.br-thick</div>
<div class="bb-thick bg-color-background-alt p-1">.bb-thick</div>
<div class="bl-thick bg-color-background-alt p-1">.bl-thick</div>
</div>

Here’s the full set:

* `.b-0` / `.bt-0` / `.br-0` / `.bb-0` / `.bl-0`
* `.b-dashed` / `.bt-dashed` / `.br-dashed` / `.bb-dashed` / `.bl-dashed`
* `.b-thin` / `.bt-thin` / `.br-thin` / `.bb-thin` / `.bl-thin`
* `.b-thick` / `.bt-thick` / `.br-thick` / `.bb-thick` / `.bl-thick`
* `.b-heavy` / `.bt-heavy` / `.br-heavy` / `.bb-heavy` / `.bl-heavy`

By default, borders are colored by the variable `$color-fineline`, same as table borders, tab labels, and horizontal rules. Borders can be assigned other Codebase colors using `.b-color-{color}` classes. See [color utilities]({{ '/docs/6-decoration-utilities/colors' | url }}).

**Note:** the `.b-color-{color}` utilities will color the border on all sides (same color for all of top, right, bottom, and left).