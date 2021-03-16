---
title: "Flex Pseudo Grids"
layout: layout.njk
prevPage: "/docs/3-responsive-layouts/flex"
nextPage: "/docs/3-responsive-layouts/grid"
prevButton: "Flex"
nextButton: "Real grid system"
---

<p class="t-lg t-thin">Codebase has a simple flexbox 12-column <em>pseudo grid</em> system for traditional layouts – and for supporting ancient browsers.</p>

While Codebase’s [real grid system]({{ '/docs/3-responsive-layouts/grid' | url }}) works on modern (2017 and up) browsers that support [CSS grid](https://caniuse.com/css-grid) (that’s [vast the vast majoity of internet users in 2021](https://www.stetic.com/market-share/browser/)), some people prefer the old way of setting up a page layout. And if they must support Internet Explorer 11 or other ancient browsers, then they have to go with the flex pseudo grid.

To use Codebase’s 12-column pseudo grid system, all you need to do is use prefix `.flex-cols-` with a suffix from `1` to `12`:

<div class="flex mt-3 mb-6">
  <div class="flex-cols-4 rounded p-2 bg-color-secondary t-color-ui-text">cols-4</div>
  <div class="flex-cols-6 rounded p-2 bg-color-secondary t-color-ui-text">cols-6</div>
  <div class="flex-cols-2 rounded p-2 bg-color-secondary t-color-ui-text">cols-2</div>
</div>

```html
<div class="flex">
  <div class="flex-cols-4">cols-4</div>
  <div class="flex-cols-6">cols-6</div>
  <div class="flex-cols-2">cols-2</div>
</div>
```

**Notes:**

1. **Why twelve?** A 12-column grid is often used in page layout design because 12 divides without remainder into 6+6, 4+4+4, 3+3+3+3; 8+4, 9+3, etc.
2. If you want some equal width flex columns, it’s easier too create them using `.flex.flex-grow-equal` instead of using the pseudo grid. See [flex system]({{ '/docs/3-responsive-layouts/flex/' | url }}).
3. All Codebase `.flex` wrappers only affect their immediate child (direct descendant) elements.
4. The same “responsiveness” is baked in to the `.flex` pseudo grid, as is in whole [flex system]({{ '/docs/3-responsive-layouts/flex' | url }}). _Use one_ of these flex wrapper classes to get your grid to take effect from your desired viewport width up:

<table class="table">
  <thead>
    <tr>
      <th>Flexbox system wrapper</th>
      <th>Effect</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.flex</code></td>
      <td>Works on all viewport widths</td>
    </tr>
    <tr>
      <td><code>.flex-sm</code></td>
      <td>Works from 768px (default) up</td>
    </tr>
    <tr>
      <td><code>.flex-md</code></td>
      <td>Works from 1024px (default) up</td>
    </tr>
    <tr>
      <td><code>.flex-lg</code></td>
      <td>Works from 1280px (default) up</td>
    </tr>
  </tbody>
</table>

5. You can also use the flex system wrapper and flex item modifiers on flex pseudo grids:

    * `.flex-gap` – see demo below
    * `.flex-row-reverse` – see demo below
    * `.flex-item-order-start`
    * `.flex-item-order-end`

<div class="flex-md flex-gap flex-row-reverse my-6">
  <div class="flex-cols-3 rounded p-2 bg-color-secondary t-color-ui-text">One quarter</div>
  <div class="flex-cols-9 rounded p-2 bg-color-secondary t-color-ui-text">Three quarters</div>
</div>

```html
<div class="flex-md flex-gap flex-row-reverse">
  <div class="flex-cols-3">One quarter</div>
  <div class="flex-cols-9">Three quarters</div>
</div>
```

6. Since the responsive viewport-width control is on the wrapper, you can’t _combine_ these pseudo grids on the same HTML elements.
7. The pseudo grid only works on _widths_. Therefore, do not use with the `.flex-column` wrapper modifier.
8. If you want a more versatile (and true) columnar grid, then you need the Codebase [grid system]({{ '/docs/3-responsive-layouts/grid' | url }}).
