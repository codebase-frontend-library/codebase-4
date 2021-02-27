---
title: "Flex"
headerTitle: "Flex System"
layout: layout.njk
prevPage: "/codebase-4/docs/3-responsive-layouts/bleeds"
nextPage: "/codebase-4/docs/3-responsive-layouts/flex-pseudo-grids"
prevButton: "Bleeds"
nextButton: "Flex pseudo grids"
---

<p class="t-lg t-thin">Codebase’s <code>.flex</code> flexbox layout system enables you to organize wrapped groups of elements in a row (e.g. for a menubar, or a media object) or in a column (e.g. for a card).</p>

All the following examples below use `.flex` as-is, so that the demos can be seen at all screen widths. There are also alternative (not modifier) responsive flex wrappers `.flex-sm`, `.flex-md` and `.flex-lg` that can be used _instead_ of `.flex`. Thus the flexbox effect will kick in at small, medium or large viewport widths – below these breakpoints the child block element layout will be as normal, stacked in a single column of 100% width. The same modifier classes below will all just work with these alternative responsive `.flex-` wrappers.

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

**Notes:**

1. All flexbox system wrappers affect their immediate child elements.
2. The Codebase flexbox systems don’t constrain the immediate child elements to proportional widths (in a row) or heights (in a column). So, if you need something like “25% with sidebar with 75% main content”, then you need the Codebase [flex pseudo grid](/codebase-4/docs/3-responsive-layouts/flex-pseudo-grids) – or, better – the Codebase [real grid system](/codebase-4/docs/3-responsive-layouts/grid).

`.flex`:

<div class="flex mb-3">
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">One</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Two</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Three</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Four</div>
</div>

```html
<div class="flex">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

The `.flex` wrapper, and its breakpoint width variants (see above), is great for making [menubars](/codebase-4/docs/7-simple-components/menus/#menubars).

`.flex.flex-grow-equal` :

<div class="flex flex-grow-equal mb-3">
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">One</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Two</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Three</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Four</div>
</div>

```html
<div class="flex flex-grow-equal">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

`.flex-grow-equal` may be all you need if you want a number of equal width columns (e.g. for a “two up” or “three up”). You can easily combine it with  a flex system wrapper with built-in breakpoint width (e.g. `.flex-md`) instead of `.flex`, so that your mini “pseudo grid” takes effect only above that device width (or window width).

<p class="panel-responsive bl-heavy b-color-secondary bg-color-secondary-alt">Codebase also contains a simple 12-column flexbox <a href="#flex-pseudo-grids">pseudo grid</a> if you need it – e.g. if you need a (pseudo) grid system that supports ancient web browsers. But for more power, go for Codebase’s real <em>CSS grid</em> [grid system](/codebase-4/docs/3-responsive-layouts/grid).</p>


`.flex.flex-grow-auto` :

<div class="flex flex-grow-auto mb-3">
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">First flex-item</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Another flex-item</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Third</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Last flex-item in this flexbox set</div>
</div>

`.flex.flex-gap.flex-grow-auto.flex-wrap` :

<div class="flex flex-gap flex-grow-auto flex-wrap mb-3">
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">First flex-item</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Another flex-item</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Third</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Last flex-item in this flexbox set.</div>
</div>

`.flex.flex-space-between` :

<div class="flex flex-space-between mb-3">
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Item</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Item</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Item</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Item</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Item</div>
</div>

`.flex.flex-space-around` :

<div class="flex flex-space-around mb-3">
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Item</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Item</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Item</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Item</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Item</div>
</div>

`.flex.flex-start` / `.flex.flex-center` / `.flex.flex-end` :

<div class="flex flex-start mb-3 b-thick">
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">One</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Two</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Three</div>
</div>

<div class="flex flex-center mb-3 b-thick">
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">One</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Two</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Three</div>
</div>

<div class="flex flex-end mb-3 b-thick">
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">One</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Two</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Three</div>
</div>

`.flex.flex-top` / `.flex.flex-middle` / `.flex.flex-bottom` :

<div class="flex flex-top b-thick mb-3" style="height: 150px">
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">One</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Two</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Three</div>
</div>

<div class="flex flex-middle mb-3 b-thick" style="height: 150px">
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">One</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Two</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Three</div>
</div>

<div class="flex flex-bottom mb-3 b-thick" style="height: 150px">
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">One</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Two</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Three</div>
</div>

`.flex.flex-center.flex-middle` :

<div class="flex flex-center flex-middle b-thick mb-3" style="height: 150px">
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">One</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Two</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Three</div>
</div>

Same as above but with `.flex-column`:

`.flex.flex-column.flex-center.flex-middle` :

<div class="flex flex-column flex-center flex-middle b-thick mb-3" style="height: 150px">
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">One</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Two</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Three</div>
</div>

## Flex items

* `.flex-item-grow-1` – does not have a max-width – it will simply expand to occupy the available space.
* `.flex-item-order-start` - re-orders a flex-item to `order: 0`
* `.flex-item-order-end` - re-orders a flex-item to `order: 9999`

Note that these flex item will only take effect inside of a `.flex` wrapper (and only then if above your specified breakpoint width, whether `sm`, `md` or `lg`).

Examples of `.flex-item-grow-1`:

<div class="flex b-dashed mb-3">
  <div class="flex-item-grow-1 b-thick b-color-success rounded p-1 t-heavy t-color-success"><code>.flex-item-grow-1</code></div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Other</div>
</div>

<div class="flex b-dashed mb-3">
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">other</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">other</div>
  <div class="flex-item-grow-1 b-thick b-color-success rounded p-1 t-heavy t-color-success"><code>.flex-item-grow-1</code></div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">other</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">other</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">other</div>
</div>

With `.flex.flex-column`:

<div class="flex flex-column b-thin mb-3" style="height: 250px">
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">other</div>
  <div class="flex-item-grow-1 b-thick b-color-success rounded p-1 t-heavy t-color-success"><code>.flex-item-grow-1</code></div>
</div>