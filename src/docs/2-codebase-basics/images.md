---
title: "Images"
layout: layout.njk
prevPage: "/codebase-4/docs/2-codebase-basics/form-elements"
nextPage: "/codebase-4/docs/2-codebase-basics/audio-and-video"
prevButton: "Form elements"
nextButton: "Audio and video"
---

<p class="t-lg t-thin">In Codebase, images are set with <code>max-width: 100%</code> so that large images are “responsive”, shrinking to fit within containers (or viewports) narrower than the actual image width. This is done so that oversized images do not break your webpage layout.</p>

<div class="mb-3">
  <img src="/codebase-4/img/placeholder250x250.svg">
</div>

The image below is wider than this column of text, but it made to downsize proportionately to the width of the wrapper.

<div class="mb-3">
  <img src="/codebase-4/img/placeholder1000x400.svg">
<div>

```html
<img src="" alt="">
```

An image with a `<figcaption>`, all enclosed in `<figure>`:

<div class="mb-3">
  <figure>
    <img src="/codebase-4/img/placeholder250x250.svg">
    <figcaption>Here is the caption for the image above.</figcaption>
  </figure>
</div>

```html
<figure>
  <img src="" alt=""> 
  <figcaption>Here is the caption for the image above.</figcaption>
</figure>
```