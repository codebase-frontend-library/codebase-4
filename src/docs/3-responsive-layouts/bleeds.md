---
title: "Bleeds"
layout: layout.njk
prevPage: "/docs/3-responsive-layouts/containers"
nextPage: "/docs/3-responsive-layouts/grid"
prevButton: "Containers"
nextButton: "Grid"
---

The Codebase `.full-bleed` CSS class uses CSS grid, following [Josh W Comeau’s technique](https://joshwcomeau.com/css/full-bleed/)).

Codebase also has `.partial-bleed-left` and `.partial-bleed-right`.

<p class="bl-heavy b-color-primary bg-color-primary-alt p-2">Codebase layout bleeds only work as <em>immediate child</em> elements inside Codebase <a href="/docs/3-responsive-layouts/containers">containers</a>.</p>

<div class="full-bleed mb-3 p-6 bg-color-background-alt">Full bleed content...</div>

```html
<div class="full-bleed">Full bleed content...</div>
```

<div class="partial-bleed-left mb-3 p-6 bg-color-background-alt">Partial bleed (left) content...</div>

```html
<div class="partial-bleed-left">Partial bleed (left) content...</div>
```

<div class="partial-bleed-right mb-3 p-6 bg-color-background-alt">Partial bleed (right) content...</div>

```html
<div class="partial-bleed-right">Partial bleed (right) content...</div>
```

**Tip:** you can combine partial bleeds, (max) widths (and floats) for displaying images that deserve more space on wide screens:

<div class="partial-bleed-left mb-3">
  <div class="w-md float-right">
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="1200" height="600" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
  </div>
</div>

```html
<div class="partial-bleed-left">
  <div class="w-lg float-right">
    <img src="" alt="">
  </div>
</div>
```

## Another option: Andy Bell’s “full bleed utility”

Andy Bell’s (older) [full bleed utility](https://hankchizljaw.com/wrote/creating-a-full-bleed-css-utility/) is also useful – and Codebase includes it, but it is _not available_ unless you toggle the SCSS variable `$use-container-grid` to `false`.

Andy’s utility depends on your page layout having a single central column (it _must_ be cented for his technique to work properly), and its full bleed busts out of that column using CSS negative margins and x-axis transforms.

Whereas Codebase’s CSS grid based bleeds still work on off-centered layouts. For example, these docs have an off-center layout when viewed at 1024px width and above, since the sidebar is displayed as part of the page layout.