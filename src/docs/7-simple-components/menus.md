---
title: "Menus"
headerTitle: "Menus (and Menubars)"
layout: layout.njk
prevPage: "/codebase-4/docs/7-simple-components/about-simple-components"
nextPage: "/codebase-4/docs/7-simple-components/heros"
prevButton: "About simple components"
nextButton: "Heros"
---

<p class="t-lg t-thin"><code>.menu</code> is usually used on an <code>ul</code> or <code>ol</code>. Its styles will be applied to immediate children by <code>&gt; *</code> (usually <code>&lt;li&gt;</code>) and immediate grandchildren by <code>&gt; *l &gt; *</code> (i.e. usually <code>&lt;a&gt;</code>).</p>

```html
<ul class="menu">
  <li><a href="">Item 1</a></li>
  <li><a href="">Item 2</a></li>
  <li><a href="">Item 3</a></li>
  <li><a href="">Item 4</a></li>
  <li><a href="">Item 5</a></li>
</ul>
```

Add your own inset padding if you want to make sub-menus.

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

**Note:** menus have no bottom margin – because a bottom margin causes gaps that you don’t want when you have sub-menus (a.k.a. child menus), and it messes with your layout when you are making a menubar. But if you do need some bottom margin or padding, you can easily add these using  [spacing utility classes](/codebase-4/docs/6-decoration-utilities/spacing).

## Menus without side padding

Codebase menus have side padding by default. But there are some places (e.g. footers and sidebars) where you may not want menu items to have side padding.

We’ve got you covered. Simply add the `.menu-flush` modifier class.

<div class="grid grid-md-2-cols grid-gap">
  <div>
    <p><code>.menu</code></p>
    <ul class="menu b-dashed">
      <li><a href="">Item 1</a></li>
      <li><a href="">Item 2</a></li>
      <li><a href="">Item 3</a></li>
      <li><a href="">Item 4</a></li>
      <li><a href="">Item 5</a></li>
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

Combine `.menu` with [flex layout classes](/codebase-4/docs/3-responsive-layouts/flex) for making menubars.

In the example below, `.flex-sm` has been used, so that the menu stays as a columnar menu below the `md` breakpoint width (i.e. below 768px, default), and becomes a menubar from that width up.

With some other simple components inside for proof of concept.

`.menu.flex-sm.flex-wrap`

<ul class="menu flex-sm flex-wrap mb-3">
  <li><a href="">Link 1</a></li>
  <li><a href="" class="t-nowrap">Link 2 with an integral badge<span class="badge bg-color-warning">1</span></a></li>
  <li><a href="">Link 3 with a label <span class="label bg-color-success t-white t-uppercase">New</span></a></li>
  <li><a href="" class="btn inline-block">Link 5</a></li>
  <li><a href="">Link 6</a></li>
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