---
title: "Image Utilities"
layout: layout.njk
prevPage: "/docs/6-decoration-utilities/colors"
nextPage: "/docs/7-simple-components/about-simple-components"
prevButton: "Colors"
nextButton: "About simple components"
---

<p class="t-lg t-thin">A few image manipulation classes.</p>

## Cover images

`.img-cover` – this class sets the image to expand (or contract) to the full width and height of its wrapping block, without distortion.

_You will need to narrow and widen your browser window to see the effect of this utility class._

<div class="mb-3 overflow-hidden" style="height: 460px">
  <img class="img-cover" src="{{ '/img/placeholder1000x1000.svg' | url }}">
</div>

```html
<img class="img-cover" src="">
```

Notes:

1. This utility class works on the `<img>` tag. It does not work very well on an _embedded_ `<svg>`. But it works fine on an SVG image inserted into a page the normal way for images: `<img src="filename.svg">`.
2. Your image will need to be approximately a square. Also, ensure that the most important part of your image is in the center and middle – otherwise it may get “cropped” when viewed on some device sizes (or browser widths).

<div class="container-grid-full-bleed my-6">
<div class="container-grid container-grid-md">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 769.343 445"><path d="M517 144h216v216H517V144z" fill="none"/><path d="M517 144h216v216H517V144z" stroke="currentColor" fill="none"/><path d="M564.25 360V144h121.5v216h-121.5z" fill="rgba(204,204,204,.2)"/><path d="M564.25 360V144h121.5v216h-121.5z" stroke="currentColor" stroke-dasharray="3,3" fill="none"/><path d="M1 60h384v384H1V60z" fill="none"/><path d="M1 60h384v384H1V60z" stroke="currentColor" fill="none"/><path d="M1 144h384v216H1V144z" fill="rgba(204,204,204,.2)"/><path d="M1 144h384v216H1V144z" stroke="currentColor" stroke-dasharray="3,3" fill="none"/><path d="M301 60v384H85V60h216zM733 312.75H517v-121.5h216v121.5z" stroke="currentColor" stroke-dasharray="3,3" fill="none"/><text transform="translate(193 44.5)"><tspan x="-138.171" y="4.5" font-family="ArialMT" font-size="14" fill="currentColor">Your &quot;image-cover&quot; image on a larger device</tspan></text><text transform="translate(625.171 132)"><tspan x="-142.833" y="1" font-family="ArialMT" font-size="14" fill="currentColor">Your &quot;image-cover&quot; image on a smaller device</tspan></text><text transform="translate(625.171 252.5)"><tspan x="-34.487" y="-11.5" font-family="ArialMT" font-size="14" fill="currentColor">Visitors will </tspan> <tspan x="-38.91" y="4.5" font-family="ArialMT" font-size="14" fill="currentColor">only see this </tspan> <tspan x="-38.121" y="20.5" font-family="ArialMT" font-size="14" fill="currentColor">vertical slice</tspan></text><text transform="translate(400 12)"><tspan x="-201.923" y="1" font-family="Arial-BoldMT" font-size="14" fill="currentColor">Why &quot;image-cover&quot; images need to be approximately square</tspan></text><g stroke="currentColor"><path d="M409 351V153" fill="none"/><path d="M406 351l3 8 3-8zM412 153l-3-8-3 8z"/></g><text transform="translate(455.586 252.5)"><tspan x="-34.586" y="-11.5" font-family="ArialMT" font-size="14" fill="currentColor">You set </tspan> <tspan x="-34.586" y="4.5" font-family="ArialMT" font-size="14" fill="currentColor">this height </tspan> <tspan x="-34.586" y="20.5" font-family="ArialMT" font-size="14" fill="currentColor">constraint*</tspan></text><path d="M397 144h108M397 360h108" stroke="currentColor" stroke-dasharray="3,3" fill="none"/><text transform="translate(571 414)"><tspan x="-138" y="-5" font-family="ArialMT" font-size="14" fill="currentColor">* Best practice is to make this set height</tspan> <tspan x="-138" y="11" font-family="ArialMT" font-size="14" fill="currentColor">responsive, or smaller for smaller viewports.</tspan></text><text transform="translate(193 252.5)"><tspan x="-34.487" y="-11.5" font-family="ArialMT" font-size="14" fill="currentColor">Visitors will </tspan> <tspan x="-38.91" y="4.5" font-family="ArialMT" font-size="14" fill="currentColor">only see this </tspan> <tspan x="-46.3" y="20.5" font-family="ArialMT" font-size="14" fill="currentColor">horizontal slice</tspan></text></svg>
</div>
</div>

## Grayscale filter

<svg class="img-grayscale" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="800" height="400" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>

```html
<img class="img-grayscale" src="">
```

## Blur filter

<svg class="img-blur" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="800" height="400" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>

```html
<img class="img-blur" src="">
```

Don’t like the blurry edges spreading outside of the image rectangle? Then wrap the image in a block that has the `.overflow-hidden` utility class.

<div class="overflow-hidden">
<svg class="img-blur" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="800" height="400" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
</div>

```html
<div class="overflow-hidden">
  <img class="img-blur" src="">
</div>
```