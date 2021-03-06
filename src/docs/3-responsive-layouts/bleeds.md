---
title: "Bleeds"
layout: layout.njk
prevPage: "/docs/3-responsive-layouts/containers"
nextPage: "/docs/3-responsive-layouts/flex"
prevButton: "Containers"
nextButton: "Flex system"
---

<p class="t-lg t-thin">Codebase has two full-bleed layout techniques, depending on what kind of responsive <a href="/codebase-4/docs/3-responsive-layouts/containers">container</a> you’re using.<p>

## Full Bleed Using CSS Transform

This uses Andy Bell’s [full bleed utility](https://hankchizljaw.com/wrote/creating-a-full-bleed-css-utility/). This is a useful technique, but it has its limitations. Since it is based on CSS transforms, it only works on _centered layouts_ – such as the traditional container that uses x-axis margin auto centering.

Codebase contains this utility in the `.full-bleed` CSS class. It _must_ be cented for this technique to work properly, because its technique busts out of a centered column using CSS negative margins and x-axis transforms.

<p class="panel-responsive bl-heavy b-color-warning bg-color-warning-alt">Below is a demo of the <code>.full-bleed</code> utility. However, the layout of this documentation is off-center on wider screens, to accommodate the sidebar. Therefore, the demo will look wrong on wider screens. To make it look right, simply dismiss the sidebar.</p>

<div class="container-grid-full-bleed my-6">
  <div class="container container-md">
    <div class="full-bleed py-6 bg-color-warning-alt">
      <em>CSS transform</em> full bleed content...
    </div>
  </div>
</div>

```html
<div class="full-bleed">
  <em>CSS transform</em> full bleed content...
</div>
```

## Container Grid Full Bleed

The Codebase `.container-grid-full-bleed` class uses _CSS grid_, following [Josh W Comeau’s technique](https://joshwcomeau.com/css/full-bleed/)).

<p class="panel-responsive bl-heavy b-color-primary bg-color-primary-alt">Codebase layout bleeds only work as <em>immediate child</em> elements inside Codebase <a href="{{ '/docs/3-responsive-layouts/containers' | url }}">containers</a>.</p>

<div class="container-grid-full-bleed mb-3 py-6 bg-color-primary-alt">Container grid full bleed content...</div>

```html
<div class="container-grid-full-bleed">
  Container grid full bleed content...
</div>
```

Codebase also has `.container-grid-partial-bleed-left` and `.container-grid-partial-bleed-right`.

<div class="container-grid-partial-bleed-left mb-3 py-6 bg-color-primary-alt">Container grid partial bleed (left) content...</div>

```html
<div class="container-grid-partial-bleed-left">
  Container grid partial bleed (left) content...
</div>
```

<div class="container-grid-partial-bleed-right mb-3 py-6 bg-color-primary-alt">Container grid partial bleed (right) content...</div>

```html
<div class="container-grid-partial-bleed-right">
  Container grid partial bleed (right) content...
</div>
```

So, what could you use partial bleeds for?

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

A partial bleed is great for having your main text in a centered column, with a sidebar alongside it (perhaps a [sticky]({{ '/docs/4-layout-utilities/positions/#position-.sticky' | url }}), e.g. for ads or social sharing buttons. The partial bleed can then be used to protrude oversized images to the opposite side, so that it doesn’t interfere with the sidebar.