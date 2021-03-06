---
title: "Box Shadows"
layout: layout.njk
prevPage: "/docs/6-decoration-utilities/rounded-corners"
nextPage: "/docs/6-decoration-utilities/colors"
prevButton: "Rounded corners"
nextButton: "Colors"
---

<p class="t-lg t-thin">A few box shadows, to take your design to a new level! 😂</p>

Inspiration for these layered box shadows is from Tobias Ahlin Bjerrome’s excellent blog post on [smoother & sharper shadows with layered box-shadows](https://tobiasahlin.com/blog/layered-smooth-box-shadows/).

The units are meant to represent layer “lifts” along the z-axis. The higher a layer is lifted from the page, the less sharpness and more spread it has.

`.bs-1` / `.bs-2` (alias `.bs`) / `.bs-3`

<div class="bs-1 mb-6 p-2">.bs-1</div>

<div class="bs mb-6 p-2">.bs-2 ( .bs )</div>

<div class="bs-3 mb-6 p-2">.bs-3</div>

Box shadows are not clearly visible in the dark theme, of course. So, you may prefer to pair a box shadow with a [border]({{ '/docs/6-decoration-utilities/borders' | url }}), same as I have done in the first [card component]({{ '/docs/7-simple-components/cards' | url }}) example.