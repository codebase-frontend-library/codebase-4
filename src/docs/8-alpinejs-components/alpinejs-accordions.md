---
title: "Accordions (AlpineJS)"
headerTitle: "Accordions"
layout: layout.njk
prevPage: "/codebase-4/docs/8-alpinejs-components/alpinejs-tabs"
nextPage: "/codebase-4/docs/8-alpinejs-components/alpinejs-slideshows"
prevButton: "AlpineJS tabs"
nextButton: "AlpineJS slideshows"
---

Codebase AlpineJS accordions can begin and end fully closed.

<div class="b-thin rounded mb-3" x-data="{selected:null}">
  <div>
    <button class="block b-0 t-left" @click="selected !== 1 ? selected = 1 : selected = null">
      Accordion tab 1
    </button>
    <div class="overflow-hidden transition-all max-height-0" style="" x-ref="container1" x-bind:style="selected == 1 ? 'max-height: ' + $refs.container1.scrollHeight + 'px' : ''">
      <p class="mb-0 p-block">This is the example content of the first tab.</p>
    </div>
  </div>
  <div class="bt-thin">
    <button class="block b-0 t-left" @click="selected !== 2 ? selected = 2 : selected = null">
      Accordion tab 2
    </button>
    <div class="overflow-hidden transition-all max-height-0" style="" x-ref="container2" x-bind:style="selected == 2 ? 'max-height: ' + $refs.container2.scrollHeight + 'px' : ''">
      <p class="mb-0 p-block">The second tab’s example content.</p>
    </div>
  </div>
  <div class="bt-thin">
    <button class="block b-0 t-left" @click="selected !== 3 ? selected = 3 : selected = null">
      Accordion tab 3
    </button>
    <div class="overflow-hidden transition-all max-height-0" style="" x-ref="container3" x-bind:style="selected == 3 ? 'max-height: ' + $refs.container3.scrollHeight + 'px' : ''">
      <p class="mb-0 p-block">The content of the third and final tab in this set.</p>
    </div>
  </div>
</div>

```html
<div class="b-thin rounded mb-3" x-data="{selected:null}">
  <div>
    <button class="block b-0 t-left" @click="selected !== 1 ? selected = 1 : selected = null">
      Accordion tab 1
    </button>
    <div class="overflow-hidden transition-all max-height-0" style="" x-ref="container1" x-bind:style="selected == 1 ? 'max-height: ' + $refs.container1.scrollHeight + 'px' : ''">
      <p class="mb-0 p-block">This is the example content of the first tab.</p>
    </div>
  </div>
  <div class="bt-thin">
    <button class="block b-0 t-left" @click="selected !== 2 ? selected = 2 : selected = null">
      Accordion tab 2
    </button>
    <div class="overflow-hidden transition-all max-height-0" style="" x-ref="container2" x-bind:style="selected == 2 ? 'max-height: ' + $refs.container2.scrollHeight + 'px' : ''">
      <p class="mb-0 p-block">The second tab’s example content.</p>
    </div>
  </div>
  <div class="bt-thin">
    <button class="block b-0 t-left" @click="selected !== 3 ? selected = 3 : selected = null">
      Accordion tab 3
    </button>
    <div class="overflow-hidden transition-all max-height-0" style="" x-ref="container3" x-bind:style="selected == 3 ? 'max-height: ' + $refs.container3.scrollHeight + 'px' : ''">
      <p class="mb-0 p-block">The content of the third and final tab in this set.</p>
    </div>
  </div>
</div>
```