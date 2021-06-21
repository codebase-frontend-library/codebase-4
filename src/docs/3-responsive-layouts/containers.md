---
title: "Containers"
headerTitle: "Responsive Containers"
layout: layout.njk
prevPage: "/docs/2-codebase-basics/audio-and-video"
nextPage: "/docs/3-responsive-layouts/bleeds"
prevButton: "Audio and video"
nextButton: "Bleeds"
---

<p class="t-lg t-thin">The Codebase has two kinds of containers: a traditional <code>.container</code> and a modern <code>.container-grid</code> system that uses a <em>CSS grid</em> with 5 columns.</p>

## Traditional Containers

The Codebase `.container` class works the same way as in other CSS frameworks (e.g. Bootstrap).

The following demo shows you the max-width extent of the _content_ within traditional Codebase containers. Notice that to either side there is some padding – this is there so that your text content has some “white space” to the right and left – improving readability on small screens.

<div class="container-grid-full-bleed bg-color-background-alt mt-3 mb-6 py-6">
  <div class="container">
    <div class="mb-1 b-thin bg-color-background py-1"><code>.container</code></div>
  </div>
  <div class="container container-lg">
    <div class="mb-1 b-thin bg-color-background py-1"><code>.container.container-lg</code></div>
  </div>
  <div class="container container-md">
    <div class="mb-1 b-thin bg-color-background py-1"><code>.container.container-md</code></div>
  </div>
  <div class="container container-sm">
    <div class="mb-1 b-thin bg-color-background py-1"><code>.container.container-sm</code></div>
  </div>
</div>

_Visitors using large screens can dismiss the sidebar so that they can see these containers expand to their fullest extent – or, as far as their screen width allows._

<table class="table">
<thead>
<tr>
<th>Traditional Containers</th>
<th>Max-Width of Content</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.container</code></td>
<td>1600px – 2rem side padding = 1568px</td>
</tr>
<tr>
<td><code>.container.container-lg</code></td>
<td>1280px – 2rem side padding = 992px</td>
</tr>
<tr>
<td><code>.container.container-md</code></td>
<td>1024px – 2rem side padding = 1248px</td>
</tr>
<tr>
<td><code>.container.container-sm</code></td>
<td>768px – 2rem side padding = 736px</td>
</tr>
</tbody>
</table>

That’s all you need to know about containers.

<div class="mb-3 panel-responsive bl-heavy b-color-secondary bg-color-secondary-alt">
  <p>Codebase traditional containers are here for you if you still prefer to use them, or if you must support Internet Explorer =&lt; 11 (2013), or any ancient browser that doesn’t support <a href="https://caniuse.com/css-grid">CSS grid</a>.</p>
  <p class="mb-0">Codebase contains no browser specific prefixes on container-grid or <a href="{{ '/docs/3-responsive-layouts/grid' | url }}">grid system</a> classes.</p>
</div>

***

## Modern Container Grids

<div class="container-grid-full-bleed bg-color-background-alt mb-6 py-6">
  <div class="container-grid">
    <div class="mb-1 b-thin bg-color-background py-1"><code>.container-grid</code></div>
  </div>
  <div class="container-grid container-grid-lg">
    <div class="mb-1 b-thin bg-color-background py-1"><code>.container-grid.container-grid-lg</code></div>
  </div>
  <div class="container-grid container-grid-md">
    <div class="mb-1 b-thin bg-color-background py-1"><code>.container-grid.container-grid-md</code></div>
  </div>
  <div class="container-grid container-grid-sm">
    <div class="mb-1 b-thin bg-color-background py-1"><code>.container-grid.container-grid-sm</code></div>
  </div>
</div>

_Visitors using large screens can dismiss the sidebar so that they can see these containers expand to their fullest extent – or, as far as their screen width allows._

<div class="container-grid-full-bleed mt-3 mb-6 py-6">
<div class="container-grid container-grid-lg">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 638 147.173"><path d="M1 38.173h636v108H1z" stroke="currentColor" stroke-width=".781" stroke-dasharray="2.342,2.342" stroke-miterlimit="1.5" fill="none"/><path d="M61 38.173v108M97 38.173v108M565 38.173v108M529 38.173v108" stroke="currentColor" stroke-width=".781" stroke-dasharray="2.342,2.342" fill="none"/><path d="M637 74.173H1M637 110.173H1" stroke="currentColor" stroke-width=".751" stroke-dasharray="2.254,2.254" fill="none"/><text transform="translate(264.208 45.26) scale(2.835)"><tspan x="-58.987" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">&lt;div&gt; Your content blocks will be placed in column 3</tspan></text><text transform="translate(116.545 81.26) scale(2.835)"><tspan x="-6.895" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">&lt;div&gt;</tspan></text><text transform="translate(116.545 117.26) scale(2.835)"><tspan x="-6.895" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">&lt;div&gt;</tspan></text><text transform="translate(55 20.173) scale(2.835)"><tspan x="-19.05" y=".883" font-family="ArialMT" font-size="3.528" fill="currentColor">&lt;div class=&quot;container-grid&quot;&gt;</tspan></text><text transform="translate(79 45.26) scale(2.835)"><tspan x="-2.549" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">3%</tspan></text><text transform="translate(31 45.26) scale(2.835)"><tspan x="-2.058" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">1fr</tspan></text><text transform="translate(547 45.26) scale(2.835)"><tspan x="-2.549" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">3%</tspan></text><text transform="translate(601 45.26) scale(2.835)"><tspan x="-2.058" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">1fr</tspan></text><text transform="translate(319 7.086) scale(2.835)"><tspan x="-30.961" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">The Codebase Container-Grid Class</tspan></text></svg>
</div>
</div>

_Direct child_ elements in container-grids are placed in the middle column using a direct child combinator selector: `> * {grid-column: 3;}`. The maximum width of column 3 is constrained using `min()`. Columns 2 and 4 are used to add 3% width “white space” on the right and left sides, whereas columns 1 and 5 expand equally to take up the remaining viewport width each using `1fr`, thereby pushing columns 2-4 toward the center.

<table class="table">
<thead>
<tr>
<th>Modern Container Grids</th>
<th>Modern Container Grid Max-Width of Columns 2-4 Combined</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.container-grid</code></td>
<td>3% + 1568px + 3%</td>
</tr>
<tr>
<td><code>.container-grid.container-grid-lg</code></td>
<td>3% + 1248px + 3%</td>
</tr>
<tr>
<td><code>.container-grid.container-grid-md</code></td>
<td>3% + 902px + 3%</td>
</tr>
<tr>
<td><code>.container-grid.container-grid-sm</code></td>
<td>3% + 736px + 3%</td>
</tr>
</tbody>
</table>

So, the max-width of the middle column (column 3) of the container grids is the same as the “max-width minus side padding” of the traditional “auto margin centering” containers above.

See also Codebase [bleeds]({{ '/docs/3-responsive-layouts/bleeds' | url }}).

**Notes:**

1. The modifier container classes `.container-sm`, `.container-md` and `.container-lg` only constrain the width of column 3. (You need to pair these modifiers with `.container` on the same HTML element.)

2. Codebase `.flex` and `.grid` layouts cannot be used on _the same element_ as the Codebase `.container` class, because `.container` uses CSS grid, and this affects its _immediate child_ elements.

    You can’t do do this:

    ```html
    <div class="container grid">...</div>

    <div class="container flex">...</div>
    ```

    You need to do this:

    ```html
    <div class="container">
      <div class="grid">...</div>
    </div>

    <div class="container">
      <div class="flex">...</div>
    </div>
    ```

## Width Utilities

Codebase has another way of controlling the width of elements, by using [width utilities]({{ '/docs/4-layout-utilities/dimensions#widths' | url }}). These may also may be useful to you in some situations.

You can also push a width-constrained element horizontally to the center of its wrapper, using the `.mx-auto` margin-utility. You will also want to set side paddings using padding utilities, so that any text in your element is moved in from the edges of smaller device screens.

Here’s how you would set up a `md` i.e. medium width wrapper (default width of `md` is 1024px), with the “auto margin centering” technique, and side padding:

```html
<div class="w-md mx-auto px-3">
  Lorem ipsum dolor sit amet...
</div>

<!-- This above will render the same as the md container, below -->

<div class="container container-md">
  Lorem ipsum dolor sit amet...
</div>
```

For more information margins and paddings, see [spacing utilities]({{ '/docs/6-decoration-utilities/spacing' | url }}).