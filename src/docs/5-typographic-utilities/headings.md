---
title: "Headings"
headerTitle: "Heading Formats"
layout: layout.njk
prevPage: "/docs/5-typographic-utilities/inline-text"
nextPage: "/docs/5-typographic-utilities/text-alignment"
prevButton: "Inline text"
nextButton: "Text alignment"
---

<p class="t-lg t-thin">Sometimes you may need to make some text as large as a heading – but without it actually being a heading. Or, sometimes you may need to change a heading size without breaking the semantic heirarchical ordering (because that woud be bad for SEO).</p>

These heading format utility classes will help you out. They are styled the same as the Codebase basic (classless) styling for `<h1>` through `<h6>` [headings]({{ '/docs/2-codebase-basics/headings' | url }}).

These are all `<div>` elements, in disguise:

<div class="h1"><code>.h1</code> Heading level 1</div>

<div class="h2"><code>.h2</code> Heading level 2</div>

<div class="h3"><code>.h3</code> Heading level 3</div>

<div class="h4"><code>.h4</code> Heading level 4</div>

<div class="h5"><code>.h5</code> Heading level 5</div>

<div class="h6"><code>.h6</code> Heading level 6</div>

```html
<div class="h1">Heading level 1</div>

<div class="h2">Heading level 2</div>

<div class="h3">Heading level 3</div>

<div class="h4">Heading level 4</div>

<div class="h5">Heading level 5</div>

<div class="h6">Heading level 6</div>
```