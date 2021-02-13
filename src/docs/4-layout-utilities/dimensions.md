---
title: "Dimensions"
layout: layout.njk
prevPage: "/codebase-4/docs/4-layout-utilities/positions"
nextPage: "/codebase-4/docs/4-layout-utilities/overflows"
prevButton: "Positions"
nextButton: "Overflows"
---

<p class="t-lg t-thin">Controlling widths and heights of blocks.</p>

## Max-width Wrappers

Codebase has several width utilities. Each of the following will set the _max-width_ of a block element (if the viewport or containing block width is below the specified max width, then these utilities are set to make their block to be 100% of the available width):

* `.w-xxs` — max-width: 320px
* `.w-xs` — max-width: 568px
* `.w-sm` — max-width: 768px
* `.w-md` — max-width: 1024px
* `.w-lg` — max-width: 1280px
* `.w-xl` — max-width: 1440px
* `.w-xxl` (or `.x-max`) — max-width: 1600px
* `.w-full` — max-width: 100% (i.e. 100% of the a)
* `.w-auto` — max-width: auto

All the `xxs` to `xl` max widths above can be adjusted or overridden, because they are `!default` Sass variables.

## Heights

Codebase has three kinds of height utilities:

* `.height-half-vh` / `.height-full-vh` / `.height-full`

The `.height-*-vh` utilities will make a block have a _minimum_ of `50vh` or `100vh` (at whatever specified breakpoint). The `.height-full` utility will vertically stretch a block to 100% height of its containing block.

## Squares

You usually see thumbail images or avatars set in squares. That’s why Codebase has them.

* `.square-sm` / `.square-md` (alias, `.square`) / `.square-lg`

The `.square-*` sizes are equal to  `sm` 3rem<sup>2</sup> (24px devault), `md` 6rem<sup>2</sup> (48px default) and `lg` 12rem<sup>2</sup> (192px default) respectively.

<div class="flex flex-wrap flex-middle flex-gap mb-3">
  <div class="square-sm">
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="200" height="200" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
  </div>

  <div class="square">
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="200" height="200" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
  </div>

  <div class="square-lg">
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="200" height="200" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
  </div>
</div>

```html
<div class="square-sm">
  <img src="" alt="">
</div>

<div class="square">
  <img src="" alt="">
</div>

<div class="square-lg">
  <img src="" alt="">
</div>
```

## Box

The `.box` utility expands a block to the full width and height of its containing block, no matter what its siblings are, using the following CSS:

```css
.box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
```

**Note:** the _wrapper_ around the `.box` must have `position: relative`, or `.box` will break out of its place in your layout.

See `.box` demonstrated in the _positions demo_ below. The centered/middled label is inside a `.box`.

`.box` is used to overlay text over an image in the Codebase [hero component](/codebase-4/docs/7-simple-components/heros).

<div class="full-bleed mb-3 bg-color-background-alt">
  <div class="relative h-half-vh">
    <div class="absolute top w-full flex flex-center">
      <label class="label bg-color-primary">.absolute.top</label>
    </div>
    <div class="absolute right h-full flex flex-middle">
      <label class="label bg-color-danger">.absolute.right</label>
    </div>
    <div class="absolute bottom w-full flex flex-center">
    <label class="label bg-color-secondary">.absolute.bottom</label>
      </div>
    <div class="absolute left h-full flex flex-middle">
      <label class="label bg-color-success">.absolute.left</label>
    </div>
    <div class="box flex flex-center flex-middle">
      <label class="label bg-color-warning">Centered and middled by flexbox</label>
    </div>
  </div>
</div>

```html
<div class="full-bleed mb-3 bg-color-background-alt">
  <div class="relative h-half-vh">
    <div class="absolute top w-full flex flex-center">
      <label class="label bg-color-primary">.absolute.top</label>
    </div>
    <div class="absolute right h-full flex flex-middle">
      <label class="label bg-color-danger">.absolute.right</label>
    </div>
    <div class="absolute bottom w-full flex flex-center">
    <label class="label bg-color-secondary">.absolute.bottom</label>
      </div>
    <div class="absolute left h-full flex flex-middle">
      <label class="label bg-color-success">.absolute.left</label>
    </div>
    <div class="box flex flex-center flex-middle">
      <label class="label bg-color-warning">Centered and middled by flexbox</label>
    </div>
  </div>
</div>
```

(Interested in those colors? See [color utilities](/codebase-4/docs/6-decoration-utilities/colors).)