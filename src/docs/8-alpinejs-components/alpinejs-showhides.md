---
title: "Showhides (AlpineJS)"
headerTitle: "Showhides (a.k.a. Slide-Reveals)"
layout: layout.njk
prevPage: "/codebase-4/docs/8-alpinejs-components/about-alpinejs-components"
nextPage: "/codebase-4/docs/8-alpinejs-components/alpinejs-dropdowns"
prevButton: "About AlpineJS components"
nextButton: "AlpineJS dropdowns"
---

For showing and/or hiding panel content. Used in long sidebars, FAQs, and dismissable notifications.

<div class="relative b-thin rounded mb-3" x-data="{ revealed: false }">
  <button
    class="block unrounded b-0 p-block"
    @click="revealed = !revealed"
  >
    <div class="flex flex-space-between">
      <span>Showhide toggle</span>
      <svg x-show="!revealed" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="6 9 12 15 18 9" /></svg>
      <svg x-show="revealed" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="6 15 12 9 18 15" /></svg>
    </div>
  </button>
  <div
    class="relative overflow-hidden transition-all max-height-0"
    x-ref="panel"
    x-bind:style="revealed == true ? 'max-height: ' + $refs.panel.scrollHeight + 'px' : ''">
    <div class="p-2">
      <p class="mb-1"><strong>showhide panel content</strong></p>
      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</div>

```html
<div class="relative b-thin rounded mb-3" x-data="{ revealed: false }">
  <button
    class="block unrounded b-0 p-block"
    @click="revealed = !revealed"
  >
    <div class="flex flex-space-between">
      <span>Showhide toggle</span>
      <svg x-show="!revealed" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="6 9 12 15 18 9" /></svg>
      <svg x-show="revealed" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="6 15 12 9 18 15" /></svg>
    </div>
  </button>
  <div
    class="relative overflow-hidden transition-all max-height-0"
    x-ref="panel"
    x-bind:style="revealed == true ? 'max-height: ' + $refs.panel.scrollHeight + 'px' : ''">
    <div class="p-2">
      <p class="mb-1"><strong>showhide panel content</strong></p>
      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</div>
```

For a dismissable message box, put the button _inside_ the panel.

<div class="mb-3" x-data="{ show: true }">
  <div
    class="relative overflow-hidden transition-all max-height-0"
    x-ref="panel"
    x-bind:style="show == true ? 'max-height: ' + $refs.panel.scrollHeight + 'px' : ''"
  >
    <div class="bg-color-success">
      <button
        class="b-0 btn-icon bg-transparent t-lg t-color-ui-text float-right"
        @click="show = false"
      >&times;</button>
      <div class="p-2 t-color-background">
        <p class="mb-1 t-lg t-color-ui-text">Success</p>
        <p class="mb-0 t-color-ui-text">This message is just to tell you that you’ve had some success.</p>
      </div>
    </div>
  </div>
</div>

<p>(To make the panel reappear, refresh your browser.)</p>

```html
<div class="mb-3" x-data="{ show: true }">
  <div
    class="relative overflow-hidden transition-all max-height-0"
    x-ref="panel"
    x-bind:style="show == true ? 'max-height: ' + $refs.panel.scrollHeight + 'px' : ''"
  >
    <div class="bg-color-success">
      <button
        class="b-0 btn-icon bg-transparent t-lg t-color-ui-text float-right"
        @click="show = false"
      >&times;</button>
      <div class="p-2 t-color-background">
        <p class="mb-1 t-lg t-color-ui-text">Success</p>
        <p class="mb-0 t-color-ui-text">This message is just to tell you that you’ve had some success.</p>
      </div>
    </div>
  </div>
</div>
```