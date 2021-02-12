---
title: "Spacing"
headerTitle: "Spacing (Margins and Paddings)"
layout: layout.njk
prevPage: "/docs/5-typographic-utilities/text-columns"
nextPage: "/docs/6-decoration-utilities/borders"
prevButton: "Text columns"
nextButton: "Borders"
---

<p class="t-lg t-thin">Codebase decoration utilities for margins and paddings have been set according to a “soft” 0.5rem element grid.</p>

<table class="table">
  <thead>
    <tr>
      <th>Element grid measure</th>
      <th>Utility class suffix</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0.25rem</td>
      <td><code>-half</code></td>
    </tr>
    <tr>
      <td>0.5rem</td>
      <td><code>-1</code></td>
    </tr>
    <tr>
      <td>1rem</td>
      <td><code>-2</code></td>
    </tr>
    <tr>
      <td>1.5rem</td>
      <td><code>-3</code></td>
    </tr>
    <tr>
      <td>2rem</td>
      <td><code>-4</code></td>
    </tr>
    <tr>
      <td>2.5rem</td>
      <td><code>-5</code></td>
    </tr>
    <tr>
      <td>3rem</td>
      <td><code>-6</code></td>
    </tr>
  </tbody>
</table>

Margins and paddings utility class prefixes:

<div class="grid grid-gap grid-md-2-cols">
  <div class="col-1 mb-3">
    <ul>
      <li>Margins all: <code>m-*</code></li>
      <li>Margin top: <code>mt-*</code></li>
      <li>Margin right: <code>mr-*</code></li>
      <li>Margin bottom: <code>mb-*</code></li>
      <li>Margin left: <code>ml-*</code></li>
      <li>Margins top and bottom: <code>my-*</code></li>
      <li>Margins left and right: <code>mx-*</code></li>
    </ul>
    <p>Margin examples:</p>
    <div class="mb-1 b-thin">
      <div class="mr-0 bg-color-background-alt">.mr-0</div>
    </div>
    <div class="mb-1 b-thin">
      <div class="mr-half bg-color-background-alt">.mr-half</div>
    </div>
    <div class="mb-1 b-thin">
      <div class="mr-1 bg-color-background-alt">.mr-1</div>
    </div>
    <div class="mb-1 b-thin">
      <div class="mr-2 bg-color-background-alt">.mr-2</div>
    </div>
    <div class="mb-1 b-thin">
      <div class="mr-3 bg-color-background-alt">.mr-3</div>
    </div>
    <div class="mb-1 b-thin">
      <div class="mr-4 bg-color-background-alt">.mr-4</div>
    </div>
    <div class="mb-1 b-thin">
      <div class="mr-5 bg-color-background-alt">.mr-5</div>
    </div>
    <div class="mb-1 b-thin">
      <div class="mr-6 bg-color-background-alt">.mr-6</div>
    </div>
  </div>
  <div class="col-2 mb-3">
    <ul>
      <li>Paddings all: <code>p-*</code></li>
      <li>Padding top: <code>pt-*</code></li>
      <li>Padding right: <code>pr-*</code></li>
      <li>Padding bottom: <code>pb-*</code></li>
      <li>Padding left: <code>pl-*</code></li>
      <li>Paddings top and bottom: <code>py-*</code></li>
      <li>Paddings left and right: <code>px-*</code></li>
    </ul>
    <p>Padding examples:</p>
    <div class="mb-1 bg-color-background-alt pl-0">
      <div class="b-thin">.pl-0</div>
    </div>
    <div class="mb-1 bg-color-background-alt pl-half">
      <div class="b-thin">.pl-half</div>
    </div>
    <div class="mb-1 bg-color-background-alt pl-1">
      <div class="b-thin">.pl-1</div>
    </div>
    <div class="mb-1 bg-color-background-alt pl-2">
      <div class="b-thin">.pl-2</div>
    </div>
    <div class="mb-1 bg-color-background-alt pl-3">
      <div class="b-thin">.pl-3</div>
    </div>
    <div class="mb-1 bg-color-background-alt pl-4">
      <div class="b-thin">.pl-4</div>
    </div>
    <div class="mb-1 bg-color-background-alt pl-5">
      <div class="b-thin">.pl-5</div>
    </div>
    <div class="mb-1 bg-color-background-alt pl-6">
      <div class="b-thin">.pl-6</div>
    </div>
  </div>
</div>

## X-Axis Auto Pushing

`.mx-auto` / `.mr-auto` / `.ml-auto`

These class applies `margin-right: auto` and/or `margin-left: auto` to push an item away from siblings or wrapper walls.

If you use `.mx` (that’s for margings on the x-axis), this push will happen equally from the left and right – resulting in your element being _centered_, provising that its width is smaller than the width of its wrapper.

Example:

<div class="mb-3 b-dashed">
  <div class="mx-auto bg-color-background-alt" style="width:65%;">.mx-auto</div>
</div>

```html
<div class="mb-3 b-dashed">
  <div class="mx-auto bg-color-background-alt" style="width:65%;">.mx-auto</div>
</div>
```


## Block Padding

Table cells (`th` and `td`), menu-item hyperlinks and tab labels already have built into them the same “block padding” – `padding: 0.5rem 1rem;`.

This same block padding is available as the utility class `.p-block`:

<div class="mb-3 b-dashed p-block">This has block padding supplied by the utility class <code>.p-block</code>.</div>

(Buttons also appear to have this same block padding but they do not. The height of the default button comes entirely from its line-height.)

## Extra Line Spacing

You may sometimes need to add extra spacing above or below an element equivalent to the spacing between paragraphs (i.e. one line height, or `1.5rem`) or two lines (`3rem`).

This can be done by top or bottoms margin or padding, using the element grid suffix `-3` or `-6`:

As margins:

<div class="mb-3 b-dashed">
  <div class="mt-3 bg-color-background-alt">.mt-3</div>
</div>

<div class="mb-3 b-dashed">
  <div class="mb-3 bg-color-background-alt">.mb-3</div>
</div>

<div class="mb-3 b-dashed">
  <div class="mt-6 bg-color-background-alt">.mt-6</div>
</div>

<div class="mb-3 b-dashed">
  <div class="mb-6 bg-color-background-alt">.mb-6</div>
</div>

As paddings:

<div class="mb-3 bg-color-background-alt pt-3">
  <div class="b-dashed">.pt-3</div>
</div>

<div class="mb-3 bg-color-background-alt pb-3">
  <div class="b-dashed">.pb-3</div>
</div>

<div class="mb-3 bg-color-background-alt pt-6">
  <div class="b-dashed">.pt-6</div>
</div>

<div class="mb-3 bg-color-background-alt pb-6">
  <div class="b-dashed">.pb-6</div>
</div>

## Responsive Y-Axis Spacing

For adding extra vertical “negative space” (a.k.a. “white space”, though it can be any color, of course), but an amount that will be automatically smaller on phones and larger on larger screens. Expands from 48px (3rem, or 2&times; normal line height) to 120px (7.5rem, or 5&times; normal line height).

Useful e.g. for designing homepages and landing pages.

* As margins: `.mt-responsive` / `.mb-responsive` / `.my-responsive`
* As paddings: `.pt-responsive` / `.pb-responsive` / `.py-responsive`

Examples:

<div class="mb-responsive p-1 bg-color-background-alt">This is in a DIV that has margin-bottom <code class="b-thin">.mb-responsive</code></div>
<div class="px-1 py-responsive bg-color-background-alt"><div>This is in a DIV that has y-axis paddings <code class="b-thin">.py-responsive</code></div></div>
<div class="mt-responsive mb-3 p-1 bg-color-background-alt">This is in a DIV that has margin-top <code class="b-thin">.mt-responsive</code></div>

If you are on a large device, you see the examples above “work” by making the browser window narrower.