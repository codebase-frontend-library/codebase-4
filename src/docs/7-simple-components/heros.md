---
title: "Heros"
layout: layout.njk
prevPage: "/docs/7-simple-components/menus"
nextPage: "/docs/7-simple-components/tables"
prevButton: "Menus"
nextButton: "Tables"
---

<p class="t-lg t-thin">Creating a hero image with a text overlay is simple using Codebase utilities.</p>

Notes:

1. You will need a big enough image, of course, with its most important content in the center and middle, so that it is not “cropped off”. Any the image will need to be square or approximately square. For the reason why – see [cover images](/docs/6-decoration-utilities/images/#cover-images).
2. Also, you will need to figure out what colour is best for the text over your choice of image, for the obtaining the best legibility.</p>

<div class="relative" style="height: 400px;">
  <img class="img-cover" src="/img/placeholder1000x1000.svg" alt="Image alt text">
  <div class="box flex flex-column flex-center flex-middle t-center">
    <h1>Overlay title</h1>
    <p>Lorem ipsum dolor sit amet...</p>
  </div>
</div>

```html
<div class="relative">

  <img src="" alt="">
  <img class="img-cover" src="" alt="">

  <div class="box flex flex-column flex-center flex-middle t-center">
    <h1>Overlay title</h1>
    <p>Lorem ipsum dolor sit amet...</p>
  </div>
</div>
```

Go large using `.full-bleed` on the wrapper, and controlling the wrapper height:

<div class="full-bleed mb-3">
  <div class="relative" style="height: 500px">
    <img class="img-cover" src="/img/placeholder1000x1000.svg" alt="Image alt text">
    <div class="box flex flex-column flex-center flex-middle t-center">
      <h1>Overlay title</h1>
      <p>Lorem ipsum dolor sit amet...</p>
    </div>
  </div>
</div>

```html
<div class="full-bleed mb-3">
  <div class="relative" style="height: 500px">
    <img class="img-cover" src="" alt="">
    <div class="box flex flex-column flex-center flex-middle t-center">
      <h1>Overlay title</h1>
      <p>Lorem ipsum dolor sit amet...</p>
    </div>
  </div>
</div>
```