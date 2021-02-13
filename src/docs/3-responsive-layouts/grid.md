---
title: "Grid"
headerTitle: "Columnar Grid System"
layout: layout.njk
prevPage: "/codebase-4/docs/3-responsive-layouts/bleeds"
nextPage: "/codebase-4/docs/3-responsive-layouts/flex"
prevButton: "Bleeds"
nextButton: "Flex"
---

<p class="t-lg t-thin">Codebase’s simple columnar grid system <em>actually uses CSS grid</em>.</p>

_CSS grid_ has been designed to replace older pseudo grid systems that use table cells, floats or flexbox. Respected web developers such as Rachel Andrew have said that [a CSS grid-based grid system is unnecessary](https://rachelandrew.co.uk/archives/2017/07/01/you-do-not-need-a-css-grid-based-grid-system/)) – and that’s true: you can learn CSS grid (e.g. from [CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/) or from [Learn CSS Grid](https://learncssgrid.com/)) and then weave your own.

However I have found myself repeatedy using a simple set of CSS grid layout classes for a quick “two up”, “three up” layout. With a few extras, this has become a simple actual grid system. I have refined it over the years to its present form, and what you have here in Codebase is simple and robust enough for most of not all traditional layouts.

The Codebase grid is also good for situations where you are working within a CMS editor (where you have access to the content source code), and you want some ready-made responsive grid layout CSS classes for a local layout.

Here are three important features of the Codebase grid system:

1. The Codebase grid uses _CSS grid_. It doesn’t work the same way as a flexbox pseudo grid.
2. You get to choose how many column tracks: (2, 3, 4 or 5) at the various Codebase breakpoint widths
3. You also get to control the columns on a per-breakpoint basis

## Setting Up the Codebase Grid

The Codebase grid consists of two parts: the wrapper and the columns. In the `.grid-*` wrapper classes, you can set up a grid with _up to five columns_, that takes effect either always or from one of three breakpint widths (`sm`, `md` or `md`) You can also use more than one breakoint at the same time (e.g. if you wanted a single column on phones, three columns on tablets and four columns on laptops up).

<table class="table">
  <thead>
    <tr>
      <th>Grid system wrapper</th>
      <th>Effect</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.grid-*</code></td>
      <td>Works on all viewport widths</td>
    </tr>
    <tr>
      <td><code>.grid-sm-*</code></td>
      <td>Works from 768px up (default)</td>
    </tr>
    <tr>
      <td><code>.grid-md-*</code></td>
      <td>Works from 1024px up (default)</td>
    </tr>
    <tr>
      <td><code>.grid-lg-*</code></td>
      <td>Works from 1280px up (default)</td>
    </tr>
  </tbody>
</table>

_Why five columns? Why not twelve, like Bootstrap and other grid systems you know?_ Most other grid systems, including Bootstrap’s, are flexbox based (older systems are float based). Flexbox grids often have 12 _built in_ pseudo columns, because 12 can be divided by 2, 3 or 4 without remainder. Then, you can make your columns span 6 and 6 (making two equal width columns), 9 and 3 (making a three-quarters width column and a quarter width column) and so on.

The Codebase grid doesn’t work like that. The Codebase grid wrapper allows you to choose to have 2, 3, 4 or (bonus!) 5 _column tracks_. No need for division from 12.

A quick example before we go any further: suppose you want a layout zone within your page design, that has 3 identical width columns, and with a gap between each, that works on all screen sizes (including tiny phones).

<div class="grid-3-cols grid-gap my-6">
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">One</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Two</div>
  <div class="b-thick b-color-success rounded p-1 t-heavy t-color-success">Three</div>
</div>

```html
<div class="grid-3-cols grid-gap">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

Now, for device-width responsiveness, you could have chosen `.grid-md-3 cols`, so that the layout would be only 1 column below 1024px (default), and transform to 3 columns when the device screen width is from 1024px up.

Here are all the options for the grid wrapper:

* All viewport widths: `.grid-2-cols` / `.grid-3-cols` / `.grid-4-cols` / `.grid-5-cols`
* From 768px (default up): `.grid-sm-2-cols` / `.grid-sm-3-cols` / `.grid-sm-4-cols` / `.grid-sm-5-cols`
* From 1024px (default up): `.grid-md-2-cols` / `.grid-md-3-cols` / `.grid-md-4-cols` / `.grid-md-5-cols`
* From 1280px (default up): `.grid-lg-2-cols` / `.grid-lg-3-cols` / `.grid-lg-4-cols` / `.grid-lg-5-cols`
* And `.grid-gap`

## Controlling Grid Columns

For more advanced layouts, you can apply column `.col-*` classes. Codebase has _a lot_ column positioning and spanning classes for the child block elements. They enable you do set up something similar to the traditional “span”, “push/pull”, “offset”, and “reordering” that you may have done before in flexbox pseudo grid systems – but with the Codebase CSS grid system, all this is handled a different way.

Following are all the grid child element (i.e. column) classes available in Codebase:

* For all viewport widths:
    * `.col-1` / `.col-1-thru-2` / `.col-1-thru-3` / `.col-1-thru-4` / `.col-1-thru-5`
    * `.col-2`, `.col-2-thru-3`, `.col-2-thru-4` / `.col-2-thru-5`
    * `.col-3`, `.col-3-thru-4` / `.col-3-thru-5`
    * `.col-4` / `.col-4-thru-5`
    * `.col-5`
* For `sm` (768px default) widths up:
    * `.col-sm-1` / `.col-sm-1-thru-2` / `.col-sm-1-thru-3` / `.col-sm-1-thru-4` / `.col-sm-1-thru-5`
    * `.col-sm-2` / `.col-sm-2-thru-3` / `.col-sm-2-thru-4` / `.col-sm-5-thru-5`
    * `.col-sm-3` / `.col-sm-3-thru-4` / `.col-sm-3-thru-5`
    * `.col-sm-4` / `.col-sm-4-thru-5`
    * `.col-sm-5`
* For `md` (1024px default) widths up:
    * `.col-md-1` / `.col-md-1-thru-2` / `.col-md-1-thru-3` / `.col-md-1-thru-4` / `.col-md-1-thru-5`
    * `.col-md-2` / `.col-md-2-thru-3` / `.col-md-2-thru-4` / `.col-md-5-thru-5`
    * `.col-md-3` / `.col-md-3-thru-4` / `.col-md-3-thru-5`
    * `.col-md-4` / `.col-md-4-thru-5`
    * `.col-md-5`
* For `lg` (1280px default) widths up:
    * `.col-lg-1` / `.col-lg-1-thru-2` / `.col-lg-1-thru-3` / `.col-lg-1-thru-4` / `.col-lg-1-thru-5`
    * `.col-lg-2` / `.col-lg-2-thru-3` / `.col-lg-2-thru-4` / `.col-lg-5-thru-5`
    * `.col-lg-3` / `.col-lg-3-thru-4` / `.col-lg-3-thru-5`
    * `.col-lg-4` / `.col-lg-4-thru-5`
    * `.col-lg-5`

Three examples with `.grid-md-4-cols` (`md` works on iPad landscape up):

<div class="grid-md-4-cols my-3">
  <div class="col-md-1-thru-3 b-dashed p-1">.col-md-1-thru-3</div>
  <div class="col-md-4 b-dashed p-1">.col-md-4</div>
</div>
<div class="grid-md-4-cols mb-3">
  <div class="col-md-1-thru-2 b-dashed p-1">.col-md-1-thru-2</div>
  <div class="col-md-3-thru-4 b-dashed p-1">.col-md-3-thru-4</div>
</div>
<div class="grid-md-4-cols mb-6">
  <div class="col-md-1 b-dashed p-1">.col-md-1</div>
  <div class="col-md-2-thru-4 b-dashed p-1">.col-md-2-thru-4</div>
</div>

```html
<div class="grid-md-4-cols">
  <div class="col-md-1-thru-3">.col-md-1-thru-3</div>
  <div class="col-md-4">.col-md-4</div>
</div>

<div class="grid-md-4-cols">
  <div class="col-md-1-thru-2">.col-md-1-thru-2</div>
  <div class="col-md-3-thru-4">.col-md-3-thru-4</div>
</div>

<div class="grid-md-4-cols">
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-2-thru-4">.col-md-2-thru-4</div>
</div>
```

Example with `.grid-md-5-cols`, and offsetting (`sm` works on iPad landscape up):

<div class="grid-sm-5-cols my-6 pb-3">
  <div class="col-sm-1  b-thick b-color-success rounded p-1 t-heavy t-color-success">.col-md-1</div>
  <div class="col-sm-3  b-thick b-color-success rounded p-1 t-heavy t-color-success">.col-md-3</div>
  <div class="col-sm-5  b-thick b-color-success rounded p-1 t-heavy t-color-success">.col-md-5</div>
</div>

```html
<div class="grid-sm-5-cols">
  <div class="col-sm-1">col-md-1</div>
  <div class="col-sm-3">col-md-3</div>
  <div class="col-sm-5">col-md-5</div>
</div>
```

Notes:

1. I have used `thru` as a keyword instead of the CSS grid spec `span` because I wanted to make my grid system compatible while using other columnar systems that have already used the keyword `span` in their CSS. (E.g. the float grid built into HubSpot’s template builder has a style rule `[class*=span] {}` – preventing me from using the word `span` in Codebase, since I want to use Codebase with HubSpot.)

2. The optional `.grid-gap` class uses CSS `grid-column-gap` for the vertical gaps and `margin-bottom` for the horizontal gaps. This is done so that horizontal gaps still exist _below_ your grid layout `md` or `lg` breakpoint.

3. Each grid child element (i.e. column) get constrained to `grid-row: 1`. Therefore, you can _reorder_ grid items without CSS grid wanting to place disorderly items on a new row. So, for example, this kind of thing just works:

<div class="grid-sm-4-cols grid-gap my-6">
  <div class="col-sm-4  b-thick b-color-success rounded p-1 t-heavy t-color-success">One</div>
  <div class="col-sm-1  b-thick b-color-success rounded p-1 t-heavy t-color-success">Two</div>
  <div class="col-sm-3  b-thick b-color-success rounded p-1 t-heavy t-color-success">Three</div>
  <div class="col-sm-2  b-thick b-color-success rounded p-1 t-heavy t-color-success">Four</div>
</div>

```html
<div class="grid-sm-4-cols grid-gap">
  <div class="col-sm-4">One</div>
  <div class="col-sm-1">Two</div>
  <div class="col-sm-3">Three</div>
  <div class="col-sm-2">Four</div>
</div>
```

## Grids With More Than One Breakpoint Width

You can combine two or more grids on the same set of elements. Here's an example where the sidebar is ~<sup>2</sup>/<sub>5</sub> width for small screens and ~<sup>1</sup>/<sub>4</sub> width for large screens (I’m saying approximately, because `grid-gap` is also in play):

<div class="full-bleed my-6">
<div class="container container-lg">
  <div class="grid-sm-5-cols grid-lg-4-cols grid-gap">
    <div class="col-sm-1-thru-3 col-lg-1-thru-3 b-thick b-color-success rounded p-1 t-heavy t-color-success">Main</div>
    <div class="col-sm-4-thru-5 col-lg-4 b-thick b-color-success rounded p-1 t-heavy t-color-success">Sidebar</div>
  </div>
</div>
</div>

```html
<div class="grid-sm-5-cols grid-lg-4-cols grid-gap">
  <div class="col-sm-1-thru-3 col-lg-1-thru-3">Main</div>
  <div class="col-sm-4-thru-5 col-lg-4">Sidebar</div>
</div>
```

On medium screens up, you will see that the example above is wider than the docs text column. This is accomplished using [full bleed](/codebase-4/docs/3-responsive-layouts/bleeds) wrapped around another container.