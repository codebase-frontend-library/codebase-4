---
title: "Text Alignment"
layout: layout.njk
prevPage: "/codebase-4/docs/5-typographic-utilities/headings"
nextPage: "/codebase-4/docs/5-typographic-utilities/large-display-text"
prevButton: "Headings"
nextButton: "Large display text"
---

<p><code>.t-left</code></p>
<p class="t-left">Lorem ipsum dolor sit amet...</p>

<p><code>.t-center</code></p>
<p class="t-center">Lorem ipsum dolor sit amet...</p>

<p><code>.t-right</code></p>
<p class="t-right">Lorem ipsum dolor sit amet...</p>

Besides the text alignment classes above, there are other text alignment classes that take effect at the different media query breakpoint widths. So, here’s the full set of text alignment utility classes:

* `.t-left` / `.t-md-left` / `.t-lg-left`
* `.t-center` / `.t-md-center` / `.t-lg-center`
* `.t-right` / `.t-md-right` / `.t-lg-right`

With these, you can set the text alignment for phones first, and then _override_ with a different text alignment for medium or large screens up. For example, consider this card design:

<div class="flex-md flex-grow-equal flex-gap">
  <div class="mb-3 rounded p-2 bg-color-warning-alt">
    <h4 class="t-md-center">Card header</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a viverra nisi. In vel porttitor mauris, id ullamcorper odio. Morbi id ornare neque. Aenean faucibus risus quis ipsum malesuada, iaculis semper lectus pellentesque. In ornare lectus dui, tempor ultricies felis commodo nec.</p>
  </div>
  <div class="mb-3 rounded p-2 bg-color-warning-alt">
    <h4 class="t-md-center">Card header</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a viverra nisi. In vel porttitor mauris, id ullamcorper odio. Morbi id ornare neque. Aenean faucibus risus quis ipsum malesuada, iaculis semper lectus pellentesque. In ornare lectus dui, tempor ultricies felis commodo nec.</p>
  </div>
</div>

In this card the header is (default) left aligned for small devices, but for medium up, it becomes centered.

```html
<div class="mb-3 rounded p-2 bg-color-warning-alt">
  <h4 class="t-md-center">Card header</h4>
  <p>Lorem ipsum dolor sit amet ...</p>
</div>
```