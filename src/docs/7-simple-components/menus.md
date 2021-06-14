---
title: "Menus"
headerTitle: "Menus (and Menubars)"
layout: layout.njk
prevPage: "/docs/7-simple-components/about-simple-components"
nextPage: "/docs/7-simple-components/heros"
prevButton: "About simple components"
nextButton: "Heros"
---

<p class="t-lg t-thin"><code>.menu</code> is usually used on an <code>ul</code> or <code>ol</code>. Its styles will be applied to immediate children by <code>&gt; *</code> (usually <code>&lt;li&gt;</code>) and immediate grandchildren by <code>&gt; * &gt; *</code> (i.e. usually <code>&lt;a&gt;</code>).</p>

```html
<ul class="menu">
  <li><a href="">Item 1</a></li>
  <li><a href="">Item 2</a></li>
  <li><a href="">Item 3</a></li>
  <li><a href="">Item 4</a></li>
  <li><a href="">Item 5</a></li>
</ul>
```

How to indicate a sub menu? Codebase leaves the choice entirely up to you. You may inset a sub menu using margin or padding, or by a colored border, and/or distinguish it by adding a background color. Example using the [spacing utility]({{ '/docs/6-decoration-utilities/spacing' | url }}) class `mb-3` (that supplies `margin-left: 1.5rem`):

<ul class="menu mb-3">
  <li><a href="">Link 1</a></li>
  <li><a href="">Link 2</a></li>
  <li><a href="">Link 3</a>
    <ul class="menu ml-3">
    <li><a href="">Link 1</a></li>
    <li><a href="">Link 2</a></li>
    <li><a href="">Link 3</a></li>
    <li><a href="">Link 4</a></li>
    <li><a href="">Link 5</a></li>
    </ul>
  </li>
  <li><a href="">Link 4</a></li>
  <li><a href="">Link 5</a></li>
</ul>

```html
<ul class="menu">
  <li><a href="">Link 1</a></li>
  <li><a href="">Link 2</a></li>
  <li><a href="">Link 3</a>
    <ul class="menu ml-3">
    <li><a href="">Link 1</a></li>
    <li><a href="">Link 2</a></li>
    <li><a href="">Link 3</a></li>
    <li><a href="">Link 4</a></li>
    <li><a href="">Link 5</a></li>
    </ul>
  </li>
  <li><a href="">Link 4</a></li>
  <li><a href="">Link 5</a></li>
</ul>
```

**Note:** menus have no bottom margin – because a bottom margin causes gaps that you don’t want when you have sub-menus (a.k.a. child menus), and it messes with your layout when you are making a menubar. But if you do need some bottom margin or padding, you can easily add these using  [spacing utility classes]({{ '/docs/6-decoration-utilities/spacing' | url }}).

## Menus without side padding

Codebase menus have side padding by default. But there are some places (e.g. footers and sidebars) where you may not want menu items to have side padding.

We’ve got you covered. Simply add the `.menu-flush` modifier class.

<div class="grid grid-md-2-cols grid-gap">
  <div>
    <p><code>.menu</code></p>
    <ul class="menu b-dashed">
      <li><a href="#/">Item 1</a></li>
      <li><a href="#/">Item 2</a></li>
      <li><a href="#/">Item 3</a></li>
      <li><a href="#/">Item 4</a></li>
      <li><a href="#/">Item 5</a></li>
    </ul>
  </div>
  <div>
    <p><code>.menu.menu-flush</code></p>
    <ul class="menu menu-flush b-dashed">
      <li><a href="">Item 1</a></li>
      <li><a href="">Item 2</a></li>
      <li><a href="">Item 3</a></li>
      <li><a href="">Item 4</a></li>
      <li><a href="">Item 5</a></li>
    </ul>
  </div>
</div>

## Menubars

Combine `.menu` with [flex layout classes]({{ '/docs/3-responsive-layouts/flex' | url }}) for making menubars.

In the example below, `.flex-sm` has been used, so that the menu stays as a columnar menu below the `md` breakpoint width (i.e. below 768px, default), and becomes a menubar from that width up.

With some other simple components inside for proof of concept.

`.menu.flex-sm.flex-wrap`

<ul class="menu flex-sm flex-wrap mb-3">
  <li><a href="#/">Link 1</a></li>
  <li><a href="#/" class="t-nowrap">Link 2 with an integral badge<span class="badge bg-color-warning">1</span></a></li>
  <li><a href="#/">Link 3 with a label <span class="label bg-color-success t-white t-uppercase">New</span></a></li>
  <li><a href="#/" class="btn inline-block">Link 5</a></li>
  <li><a href="#/">Link 6</a></li>
</ul>

```html
<ul class="menu flex-sm">
  <li><a href="">Link 1</a></li>
  <li><a href="" class="t-nowrap">Link 2 with an integral badge<span class="badge bg-color-warning">1</span></a></li>
  <li><a href="">Link 3 with a label <span class="label bg-color-success t-white t-uppercase">New</span></a></li>
  <li><a href="" class="btn inline-block">Link 5</a></li>
  <li><a href="">Link 6</a></li>
</ul>
```

Example with an AplineJS powered dropdown

<div class="flex-sm flex-wrap flex-space-between bg-color-background-alt mb-3">
  <div class="p-2">
    <a class="t-lg t-bold t-decoration-none" href="#/">Brand</a>
  </div>
  <ul class="menu flex-sm flex-middle flex-end flex-wrap">
    <li><a href="#/">Home</a></li>
    <li class="flex-sm flex-end">
      <div
        class="relative"
        x-data="{ open: false }"
      >
        <a
          class="t-decoration-none flex flex-middle cursor-pointer"
          @click="open = !open"
          :aria-expanded="open ? 'true' : 'false'"
        >About <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="6 9 12 15 18 9"></polyline></svg>
        </a>
        <div
          class="absolute right-sm bs b-thin rounded-sm bg-color-background"
          x-show="open"
          @click.away="open = false"
          style="min-width: 10rem"
        >
          <ul class="menu">
            <li><a href="">Company info</a></li>
            <li><a href="">Management</a></li>
            <li><a href="">Careers</a></li>
          </ul>
        </div>
      </div>
    </li>
    <li><a href="">Contact</a></li>
  </ul>
</div>

```html
<div class="flex-sm flex-wrap flex-space-between bg-color-background-alt mb-3">
  <div class="p-2">
    <a class="t-lg t-bold t-decoration-none" href="#/">Brand</a>
  </div>
  <ul class="menu flex-sm flex-middle flex-end flex-wrap">
    <li><a href="#/">Home</a></li>
    <li class="flex-sm flex-end">
      <div
        class="relative"
        x-data="{ open: false }"
      >
        <a
          class="t-decoration-none flex flex-middle cursor-pointer"
          @click="open = !open"
          :aria-expanded="open ? 'true' : 'false'"
        >About <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="6 9 12 15 18 9"></polyline></svg>
        </a>
        <div
          class="absolute right-sm bs b-thin rounded-sm bg-color-background"
          x-show="open"
          @click.away="open = false"
          style="min-width: 10rem"
        >
          <ul class="menu">
            <li><a href="">Company info</a></li>
            <li><a href="">Management</a></li>
            <li><a href="">Careers</a></li>
          </ul>
        </div>
      </div>
    </li>
    <li><a href="">Contact</a></li>
  </ul>
</div>
```