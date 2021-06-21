---
title: "Flex Pseudo Grids"
layout: layout.njk
prevPage: "/docs/3-responsive-layouts/flex"
nextPage: "/docs/3-responsive-layouts/grid"
prevButton: "Flex"
nextButton: "Real grid system"
---

<p class="t-lg t-thin">Codebase has a simple flexbox 12-column <code>.flex-grid</code> <em>pseudo grid</em> system for traditional layouts – and for supporting old browsers.</p>

If you want a more versatile (and true) columnar grid, then you need the [Codebase real grid system]({{ '/docs/3-responsive-layouts/grid' | url }}). The real grid system works on modern (2017 and up) browsers that support [CSS grid](https://caniuse.com/css-grid) – that’s the [vast majority of internet users in 2021](https://www.stetic.com/market-share/browser/). However, the old way of setting up a webpage still works. And if you must support Internet Explorer 11 or other ancient browsers, then that’s what you’ll have to stick with a flexbox layout in the short term.

To use Codebase’s 12-column flexbox pseudo grid system, use the special `.flex-grid` wrapper and give the flex-items classes with the prefix `.flex-cols-` and a suffix from `1` to `12`:

<div class="flex-grid mt-3 mb-6">
  <div class="flex-cols-4 b-thin pb-6 bg-color-background-alt">flex-cols-4</div>
  <div class="flex-cols-6 b-thin pb-6 bg-color-background-alt">flex-cols-6</div>
  <div class="flex-cols-2 b-thin pb-6 bg-color-background-alt">flex-cols-2</div>
</div>

```html
<div class="flex-grid">
  <div class="flex-cols-4">cols-4</div>
  <div class="flex-cols-6">cols-6</div>
  <div class="flex-cols-2">cols-2</div>
</div>
```

**Notes:**

1. **Why twelve columns?** A [dozenal (a.k.a duodecimal)](https://www.science.org.au/curious/video/dozenal-system) columnar grid is often used in page layout design because 12 divides without remainder into 6+6, 4+4+4, 3+3+3+3, 3+6+3, 8+4, 9+3, etc.
2. The pseudo grid flex-item widths are controlled by `max-width`, so that the layout behaves better. 
3. The Codebase `.flex-grid` class causes flex-items to _wrap_. This means that if your flex-item (max) widths total more than 12, then they will begin on _a new row within_ the same `.flex-grid`. This can be used e.g. as a simple way of setting up a tile or image gallery.
4. Why not name the `.flex-grid` a _row_ and the `.flex-cols` as _cols_ (same as Bootstrap, etc.)? Three reasons.
    1. We can avoid some CSS code duplication by combining the pseudo grid and the simple `.flex` system (see point 5).
    2. We can _wrap_ the content of a `.flex-grid` to form more than one row within a “row” (see the card gallery example below) – and so to call it a “row” wold be confusing.
    3. The keywords _rows_ and _cols_ (columns) are then available to use in a real CSS grid.
5. You can use the `.flex-grid` wrapper with the same flex wrapper modifiers as are used by the simpler `.flex` system:

  * `.flex-gap` – see demo below
  * `.flex-row-reverse`
  * `.flex-item-order-start`
  * `.flex-item-order-end`

## Pseudo grids using `.flex-gap`

For the [simple flex system]({{ '/docs/3-responsive-layouts/flex/' | url }}), `.flex-gap`</code>` creates a gutter between flex-items using _x-axis margins_. This is necessary for use in e.g. menubars. However, for the flex pseudo grid, the gutter is created using _x-axis paddings_. This is the normal for many flexbox pseudo-grid systems (e.g. Bootstrap).

<table class="table">
<thead>
<tr>
<th>Flex system</th>
<th>Vertical gutter are created by</th>
</tr>
</thead>
<tbody>
<tr>
<td>Simple</td>
<td><code>margin-right</code> and <code>margin-left</code></td>
</tr>
<tr>
<td>Pseudo grid</td>
<td><code>padding-right</code> and <code>padding-left</code></td>
</tr>
</tbody>
</table>

Example (columns are visualized by  placing another `<div>` with a dashed border inside each):

<div class="flex-grid flex-gap">
  <div class="flex-cols-3"><div class="b-dashed pb-6 bg-color-background-alt">One quarter</div></div>
  <div class="flex-cols-9"><div class="b-dashed pb-6 bg-color-background-alt">Three quarters</div></div>
</div>

```html
<div class="flex-grid flex-gap">
  <div class="flex-cols-3"><div class="b-dashed">One quarter</div></div>
  <div class="flex-cols-9"><div class="b-dashed">Three quarters</div></div>
</div>
```

## Flex Pseudo-Grids and Media Query Breakpoints

Instead of using the Codebase media-query breakpoint width modifiers (`-sm`, `-md` and `-lg`) on the `.flex-grid`  wrapper, you hav have more versatility and power by placing breakpoint modifiers on each flex-item individually, as in the following example:

<div class="container-grid-full-bleed my-3">
<div class="container-grid container-grid-lg">
<div class="flex-grid flex-gap">
<div class="flex-sm-cols-3 flex-lg-cols-4"><div class="b-dashed h-full bg-color-background-alt">This column will be full width below <code class="b-thin">-sm</code>, then one quarter until <code class="b-thin">-lg</code>, then one third.</div></div>
<div class="flex-sm-cols-9 flex-lg-cols-8"><div class="b-dashed h-full bg-color-background-alt">This column will be full width below <code class="b-thin">-sm</code>, then three quarters until <code class="b-thin">-lg</code>, then two thirds.</div></div>
</div>
</div>
</div>

```html
<div class="flex-grid flex-gap">
<div class="flex-sm-cols-3 flex-lg-cols-4"><div class="b-dashed h-full">This column will be full width below <code>-sm</code>, then one quarter until <code>-lg</code> then one third.</div></div>
<div class="flex-sm-cols-9 flex-lg-cols-8"><div class="b-dashed h-full">This column will be full width below <code>-sm</code>, then three quarters until <code>-lg</code> then two thirds.</div></div>
</div>
```

(The dashed borders on additional `<div>`’s are there to show you where the flex-item “columns” are.)

Below `-sm` the columns in the example above will be _full width, stacked_.

**Note:** you can easily make the _content_ elements of flex-items expand to fit the height of flex items (sometimes called “equalizing column heights”) using the [dimension utility]({{ '/docs/4-layout-utilities/dimensions' | url }}) class `.h-full`.) This has also been demonstrated in the example above.

Here ia an example [card]({{ '/docs/7-simple-components/cards/' | url }}) gallery, where within the `.flex-grid`, items are stacked in a single column on small viewports, arranged in two columns on `-sm` viewports (i.e. tablets) and four columns on `-lg` viewports (i.e. laptops up):

<div class="container-grid-full-bleed my-3">
<div class="container-grid container-grid-lg">
<div class="flex-grid flex-gap">
<div class="flex-sm-cols-6 flex-lg-cols-3">
  <div class="flex flex-column w-xs mx-auto b-thin rounded mb-3">
    <a href="">
      <img class="img-cover" src="{{ '/img/placeholder1000x600.svg' | url }}">
    </a>
    <div class="flex-item-grow-1 p-2">
      <h4 class="mb-2">Card Title</h4>
      <p class="mb-2">
        Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in.
      </p>
      <a href="" class="btn btn-primary">Button</a>
    </div>
  </div>
</div>
<div class="flex-sm-cols-6 flex-lg-cols-3">
  <div class="flex flex-column w-xs mx-auto b-thin rounded mb-3">
    <a href="">
      <img class="img-cover" src="{{ '/img/placeholder1000x600.svg' | url }}">
    </a>
    <div class="flex-item-grow-1 p-2">
      <h4 class="mb-2">Card Title</h4>
      <p class="mb-2">
        Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in.
      </p>
      <a href="" class="btn btn-primary">Button</a>
    </div>
  </div>
</div>
<div class="flex-sm-cols-6 flex-lg-cols-3">
  <div class="flex flex-column w-xs mx-auto b-thin rounded mb-3">
    <a href="">
      <img class="img-cover" src="{{ '/img/placeholder1000x600.svg' | url }}">
    </a>
    <div class="flex-item-grow-1 p-2">
      <h4 class="mb-2">Card Title</h4>
      <p class="mb-2">
        Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in.
      </p>
      <a href="" class="btn btn-primary">Button</a>
    </div>
  </div>
</div>
<div class="flex-sm-cols-6 flex-lg-cols-3">
  <div class="flex flex-column w-xs mx-auto b-thin rounded mb-3">
    <a href="">
      <img class="img-cover" src="{{ '/img/placeholder1000x600.svg' | url }}">
    </a>
    <div class="flex-item-grow-1 p-2">
      <h4 class="mb-2">Card Title</h4>
      <p class="mb-2">
        Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in.
      </p>
      <a href="" class="btn btn-primary">Button</a>
    </div>
  </div>
</div>
</div>
</div>
</div>

```html
<div class="flex-grid flex-gap">
  <div class="flex-sm-cols-6 flex-lg-cols-3">
    <!-- Card -->
    <div class="flex flex-column w-xs mx-auto b-thin rounded mb-3">...</div>
    <!-- Card -->
    <div class="flex flex-column w-xs mx-auto b-thin rounded mb-3">...</div>
    <!-- Card -->
    <div class="flex flex-column w-xs mx-auto b-thin rounded mb-3">...</div>
    <!-- Card -->
    <div class="flex flex-column w-xs mx-auto b-thin rounded mb-3">...</div>
  </div>
</div>
```