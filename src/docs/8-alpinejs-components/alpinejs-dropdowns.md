---
title: "Dropdowns (AlpineJS)"
headerTitle: "Dropdowns"
layout: layout.njk
prevPage: "/codebase-4/docs/8-alpinejs-components/alpinejs-showhides"
nextPage: "/codebase-4/docs/8-alpinejs-components/alpinejs-modals"
prevButton: "AlpineJS showhides"
nextButton: "AlpineJS modals"
---

<div x-data="{ open: false }" class="relative mb-3">
  <button
  class="btn btn-primary"
    @click="open = !open"
    :aria-expanded="open ? 'true' : 'false'"
  >Click me <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="6 9 12 15 18 9" /></svg>
  </button>
  <div
    class="absolute bs b-thin rounded-sm p-block bg-color-background"
    x-show="open"
    @click.away="open = false"
  >Dropdown content</div>
</div>

```html
<div x-data="{ open: false }" class="mb-3">
  <button
    class="btn btn-primary"
    @click="open = !open"
    :aria-expanded="open ? 'true' : 'false'"
  >Click me <!-- icon chevron down -->
  </button>
  <div
    class="absolute bs b-thin rounded-sm p-block bg-color-background"
    x-show="open"
    @click.away="open = false"
  >Dropdown content</div>
</div>
```

1. Wrap the whole component in an element with e.g. `.flex.flex-end` or `.flex.flex-space-between` that pushes it to the right
2. Add `.relative` to the dropdown component wrapper itself
3. Add `.absolute.right` to the dropdown content element
4. Right aligned dropdown content panels also require a min-width, or they will be constrained to the width of their dropdown control (the button).

<div class="flex flex-end mb-3">
  <div
    class="relative"
    x-data="{ open: false }"
  >
    <button
      class="btn btn-primary"
      @click="open = !open"
      :aria-expanded="open ? 'true' : 'false'"
    >Click-me too <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="6 9 12 15 18 9" /></svg>
    </button>
    <div
      class="absolute right bs b-thin rounded-sm p-block bg-color-background"
      x-show="open"
      @click.away="open = false"
      style="min-width: 12rem"
    >Dropdown content</div>
  </div>
</div>

```html
<div class="flex flex-end">
  <div
    class="relative"
    x-data="{ open: false }"
  >
    <button
      class="btn btn-primary"
      @click="open = !open"
      :aria-expanded="open ? 'true' : 'false'"
    >Click-me too <!-- icon chevron down -->
    </button>
    <div
      class="absolute right bs b-thin rounded-sm p-block bg-color-background"
      x-show="open"
      @click.away="open = false"
      style="min-width: 12rem"
    >Dropdown content</div>
  </div>
</div>
```