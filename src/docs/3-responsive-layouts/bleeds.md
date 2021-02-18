---
title: "Bleeds"
layout: layout.njk
prevPage: "/codebase-4/docs/3-responsive-layouts/containers"
nextPage: "/codebase-4/docs/3-responsive-layouts/flex"
prevButton: "Containers"
nextButton: "Flex system"
---

<p class="t-lg t-thin">Codebase utilises two full-bleed layout techniques, depending on what kind of responsive <a href="/codebase-4/docs/3-responsive-layouts/containers">container</a> you’re using.<p>

## Full Bleed Using CSS Transform

Andy Bell’s [full bleed utility](https://hankchizljaw.com/wrote/creating-a-full-bleed-css-utility/) us useful, but as it is based on CSS transforms, it only works on _centered layouts_ – e.g. the traditional container that uses x-axis margin auto centering.

Codebase contains this utility in the `.full-bleed` CSS class. It _must_ be cented for this technique to work properly, because its technique busts out of a centered column using CSS negative margins and x-axis transforms.

`.full-bleed` can’t be demonstrated here, because this documentation uses a [modern container system using _CSS grid_](/codebase-4/docs/3-responsive-layouts/containers/#modern-container-grids).

```html
<div class="full-bleed">
  Full bleed content...
</div>
```

Whereas Codebase’s CSS grid based bleeds still work on off-centered layouts. For example, these docs have an off-center layout when viewed at 1024px width and above, since the sidebar is displayed as part of the page layout.

## Container Grid Full Bleed

The Codebase `.container-grid-full-bleed` class uses _CSS grid_, following [Josh W Comeau’s technique](https://joshwcomeau.com/css/full-bleed/)).

<p class="bl-heavy b-color-primary bg-color-primary-alt p-2">Codebase layout bleeds only work as <em>immediate child</em> elements inside Codebase <a href="/codebase-4/docs/3-responsive-layouts/containers">containers</a>.</p>

<div class="container-grid-full-bleed mb-3 p-6 bg-color-background-alt">Container grid full bleed content...</div>

```html
<div class="container-grid-full-bleed">
  Container grid full bleed content...
</div>
```

Codebase also has `.container-grid-partial-bleed-left` and `.container-grid-partial-bleed-right`.

<div class="container-grid-partial-bleed-left mb-3 p-6 bg-color-background-alt">Container grid partial bleed (left) content...</div>

```html
<div class="container-grid-partial-bleed-left">
  Container grid partial bleed (left) content...
</div>
```

<div class="container-grid-partial-bleed-right mb-3 p-6 bg-color-background-alt">Container grid partial bleed (right) content...</div>

```html
<div class="container-grid-partial-bleed-right">
  Container grid partial bleed (right) content...
</div>
```

You can combine partial bleeds, (max) widths (and floats) for displaying images that deserve more space on wide screens:

<div class="container-grid-partial-bleed-left mb-3">
  <div class="w-md float-right">
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="1200" height="600" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
  </div>
</div>

```html
<div class="container-grid-partial-bleed-left">
  <div class="w-lg float-right">
    <img src="" alt="">
  </div>
</div>
```