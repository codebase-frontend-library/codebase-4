---
title: "Blocks"
headerTitle: "Block Utilities"
layout: layout.njk
prevPage: "/codebase-4/docs/3-responsive-layouts/grid"
nextPage: "/codebase-4/docs/4-layout-utilities/floats"
prevButton: "Columnar grid system"
nextButton: "Floats"
---

<p class="t-lg t-thin">Sometimes you need to override an element’s native block or inline-block behavior.</p>

`.block` – makes any element behave as a block element.

<div class="mb-3">
<span class="block bg-color-background-alt p-2">This is a <code class="b-thin">&lt;span&gt;</code> element (normally an inline element).</span>
</div>

`.inline-block` – makes any element behave as an inline-block element.

<div class="mb-3">
<div class="inline-block bg-color-background-alt p-2">This is a <code class="b-thin">&lt;div&gt;</code> element (normally a block element).</div>
</div>

<p class="bl-heavy b-color-primary bg-color-primary-alt p-2">Remember that CSS flexbox and CSS grid control the behavior of their immediate child elements. So, if you are trying to use <code>.block</code> or <code>.inline-block</code> on an immediate child of <code>.container</code>, <code>.flex</code> or <code>.grid</code>, it won’t work.</p>
