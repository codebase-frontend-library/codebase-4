---
title: "Slideshows (AlpineJS Component)"
layout: layout.njk
prevPage: "/docs/8-alpinejs-components/alpinejs-accordions"
nextPage: "/docs/9-activator-components/about-activator-components"
prevButton: "AlpineJS tabs"
nextButton: "About Activator components"
---

<p class="t-lg t-thin">Codebase and AlpineJS can be used to create a simple cycling (but not self-advancing) slideshow, such as you commonly see on ecommerce product pages.</p>

This example uses dummy slides (utility styled DIVs). You can simply swap them out for your own content (that can be text and/or images).

The indicator pips are generated from a template according to the number of slides in the array. So, be sure to set the correct number of slides.

<div
  class="my-6"
  x-data="{ activeSlide: 1, slides: [1, 2, 3, 4, 5] }"
>
  <div class="relative">
    <!-- Slides -->
    <div x-show="activeSlide === 1">
      <div
        class="flex flex-center flex-middle h2 t-thin bg-color-primary-alt"
        style="height: 250px"
      >Slide 1 of 5</div>
    </div>
    <div x-show="activeSlide === 2">
      <div
        class="flex flex-center flex-middle h2 t-thin bg-color-secondary-alt"
        style="height: 250px"
      >Slide 2 of 5</div>
    </div>
    <div x-show="activeSlide === 3">
      <div
        class="flex flex-center flex-middle h2 t-thin bg-color-success-alt"
        style="height: 250px"
      >Slide 3 of 5</div>
    </div>
    <div x-show="activeSlide === 4">
      <div
        class="flex flex-center flex-middle h2 t-thin bg-color-warning-alt"
        style="height: 250px"
      >Slide 4 of 5</div>
    </div>
    <div x-show="activeSlide === 5">
      <div
        class="flex flex-center flex-middle h2 t-thin bg-color-danger-alt"
        style="height: 250px"
      >Slide 5 of 5</div>
    </div>
    <!-- Prev/Next Arrows -->
    <div class="box flex flex-space-between flex-middle">
      <span
        role="button"
        class="btn-icon bg-color-background cursor-pointer"
        x-on:click="activeSlide = activeSlide === 1 ? slides.length : activeSlide - 1">&larr;</span>
      <span
        role="button"
        class="btn-icon bg-color-background cursor-pointer"
        x-on:click="activeSlide = activeSlide === slides.length ? 1 : activeSlide + 1">&rarr;</span>
    </div>
  </div>
  <!-- Indicator buttons -->
  <div class="flex flex-center px-3">
  <template x-for="slide in slides" :key="slide">
    <span
      role="button"
      style="width: 2rem; height: 1rem"
      class="rounded-pill b-thin mx-1 cursor-pointer"
      :class="{
        'bg-color-success': activeSlide === slide,
        '': activeSlide !== slide
      }"
      x-on:click="activeSlide = slide"
    ></span>
  </template>
  </div>
</div><!-- End of Alpine component -->

```html
<div
  x-data="{ activeSlide: 1, slides: [1, 2, 3] }"
>
  <div class="relative">

    <!-- Slides -->
    <div x-show="activeSlide === 1">
      <div>
        <!-- Slide 1 content -->
      </div>
    </div>
    <div x-show="activeSlide === 2">
      <div>
        <!-- Slide 2 content -->
      </div>
    </div>
    <div x-show="activeSlide === 3">
      <div>
        <!-- Slide 3 content -->
      </div>
    </div>
    
    <!-- Prev/Next Arrows -->
    <div class="box flex flex-space-between flex-middle">
      <span
        role="button"
        class="btn-icon rounded-full bg-color-background cursor-pointer"
        x-on:click="activeSlide = activeSlide === 1 ? slides.length : activeSlide - 1">&larr;</span>
      <span
        role="button"
        class="btn-icon rounded-full bg-color-background cursor-pointer"
        x-on:click="activeSlide = activeSlide === slides.length ? 1 : activeSlide + 1">&rarr;</span>
    </div>

  </div>

  <!-- Indicator buttons -->
  <div class="flex flex-center px-3">
  <template x-for="slide in slides" :key="slide">
    <span
      role="button"
      style="width: 2rem; height: 1rem"
      class="rounded-pill b-thin mx-1 cursor-pointer"
      :class="{
        'bg-color-success': activeSlide === slide,
        '': activeSlide !== slide
      }"
      x-on:click="activeSlide = slide"
    ></span>
  </template>
  </div>
</div>
```