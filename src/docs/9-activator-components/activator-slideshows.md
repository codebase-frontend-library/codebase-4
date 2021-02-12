---
title: "Slideshows (Activator Component)"
headerTitle: "Slideshows"
layout: layout.njk
prevPage: "/docs/9-activator-components/activator-accordions"
prevButton: "Activator accordions"
---

<p class="t-lg t-thin">The Codebase slideshow component is a variation on tabs. It is intended only for manually showing and hiding content, e.g. product images in an ecommerce single product page.</p>

<div class="slide-wrapper my-6">
  <div class="slide-panel active" id="slide-panel-1">
    <div class="flex flex-center flex-middle h2 t-thin bg-color-primary-alt" style="height: 250px;">Slide 1</div>
  </div>
  <div class="slide-panel" id="slide-panel-2">
    <div class="flex flex-center flex-middle h2 t-thin bg-color-secondary-alt" style="height: 250px;">Slide 2</div>
  </div>
  <div class="slide-panel" id="slide-panel-3">
    <div class="flex flex-center flex-middle h2 t-thin bg-color-success-alt" style="height: 250px;">Slide 3</div>
  </div>
  <div class="slide-panel" id="slide-panel-4">
    <div class="flex flex-center flex-middle h2 t-thin bg-color-warning-alt" style="height: 250px;">Slide 4</div>
  </div>
  <div class="slide-panel" id="slide-panel-5">
    <div class="flex flex-center flex-middle h2 t-thin bg-color-danger-alt" style="height: 250px;">Slide 5</div>
  </div>
  <div class="flex flex-center">
    <button class="slide-control rounded-pill b-thin mx-1 active" aria-controls="slide-panel-1" aria-expanded="true" data-control="tab" style="width: 2rem; height: 1rem"></button>
    <button class="slide-control rounded-pill b-thin mx-1" aria-controls="slide-panel-2" aria-expanded="false" data-control="tab" style="width: 2rem; height: 1rem"></button>
    <button class="slide-control rounded-pill b-thin mx-1" aria-controls="slide-panel-3" aria-expanded="false" data-control="tab" style="width: 2rem; height: 1rem"></button>
    <button class="slide-control rounded-pill b-thin mx-1" aria-controls="slide-panel-4" aria-expanded="false" data-control="tab" style="width: 2rem; height: 1rem"></button>
    <button class="slide-control rounded-pill b-thin mx-1" aria-controls="slide-panel-5" aria-expanded="false" data-control="tab" style="width: 2rem; height: 1rem"></button>
  </div>
</div>

The slide control indicator pips are simply buttons with no content, with a set width and height.

```html
<div class="slide-wrapper">
  <div class="slide-panel active" id="slide-panel-1">
    <!-- Slide 1 goes in here -->
  </div>
  <div class="slide-panel" id="slide-panel-2">
    <!-- Slide 2 goes in here -->
  </div>
  <div class="slide-panel" id="slide-panel-3">
    <!-- Slide 3 goes in here -->
  </div>
  <div class="flex flex-center py-3">
    <button
      class="slide-control rounded-pill b-thin mx-1 active"
      aria-controls="slide-panel-1"
      aria-expanded="true"
      data-control="tab"
      style="width: 2rem; height: 1rem"></button>
    <button
      class="slide-control rounded-pill b-thin mx-1"
      aria-controls="slide-panel-2"
      aria-expanded="false"
      data-control="tab"
      style="width: 2rem; height: 1rem"></button>
    <button
      class="slide-control rounded-pill b-thin mx-1"
      aria-controls="slide-panel-3"
      aria-expanded="false"
      data-control="tab"
      style="width: 2rem; height: 1rem"></button>
  </div>
</div>
```