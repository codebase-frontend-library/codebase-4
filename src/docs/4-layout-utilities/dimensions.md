---
title: "Dimensions"
layout: layout.njk
prevPage: "/docs/4-layout-utilities/positions"
nextPage: "/docs/4-layout-utilities/overflows"
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

* `.h-half-vh` / `.h-full-vh` / `.h-full`

The `.h-*-vh` utilities will make a block have a _minimum_ of `50vh` or `100vh` (at whatever specified breakpoint). The `.h-full` utility will vertically stretch a block to 100% height of its containing block.

(There is also `.max-height-0`, that you may beed for some AlpineJS components. See [AlpineJS Showhides]({{ '/docs/8-alpinejs-components/alpinejs-showhides' | url }}).)

## Squares

You usually see thumbail images or avatars set in squares. That’s why Codebase has them.

* `.square-sm` / `.square-md` (alias, `.square`) / `.square-lg`

The `.square-*` sizes are equal to  `sm` 3rem<sup>2</sup> (24px devault), `md` 6rem<sup>2</sup> (48px default) and `lg` 12rem<sup>2</sup> (192px default) respectively.

<div class="flex flex-middle flex-gap mb-3">
  <div class="square-sm">
    <img src="{{ '/img/placeholder250x250.svg' | url }}" alt="A square image">
  </div>

  <div class="square">
    <img src="{{ '/img/placeholder250x250.svg' | url }}" alt="A square image">
  </div>

  <div class="square-lg">
    <img src="{{ '/img/placeholder250x250.svg' | url }}" alt="A square image">
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

That `.square-lg` is a good e.g. size for author photos in traditional two-column blog layouts. It is also good for pairing with `.rounded-full` – making it easy to create the popular three-up gallery, that’s used for showing a team, or product features, or featured products. Here’s a whole demo of this in a [full-bleed]({{ '/docs/3-responsive-layouts/bleeds' | url }}) and [container]({{ '/docs/3-responsive-layouts/containers' | url }}) pairing (required here because we’re busting out of this narrow documentation column, a 3 column [small grid]({{ '/docs/3-responsive-layouts/grid' | url }}), and various other decoration utilities:

<div class="container-grid-full-bleed container-grid container-grid-lg my-responsive py-responsive bg-color-background-alt">
  <div class="grid-sm-3-cols grid-gap t-center">
    <div>
      <img class="square-lg mx-auto b-thick rounded-full" src="{{ '/img/placeholder250x250.svg' | url }}" alt="A square image">
      <h3 class="my-2">A Short Title</h3>
      <p class="w-xxs mx-auto mb-0">A little bit of descriptive text that will wrap on to multiple lines.</p>
    </div>
    <div>
      <img class="square-lg mx-auto b-thick rounded-full" src="{{ '/img/placeholder250x250.svg' | url }}" alt="A square image">
      <h3 class="my-2">Another Short Title</h3>
      <p class="w-xxs mx-auto mb-0">A little bit of descriptive text that will wrap on to multiple lines.</p>
    </div>
    <div>
      <img class="square-lg mx-auto b-thick rounded-full" src="{{ '/img/placeholder250x250.svg' | url }}" alt="A square image">
      <h3 class="my-2">A Third Short Title</h3>
      <p class="w-xxs mx-auto mb-0">A little bit of descriptive text that will wrap on to multiple lines.</p>
    </div>
  </div>
</div>

```html
<div class="container-grid-full-bleed container-grid container-grid-lg my-responsive py-responsive bg-color-background-alt">
  <div class="grid-sm-3-cols grid-gap t-center">
    <div>
      <img class="square-lg mx-auto b-thick rounded-full" src="" alt="A square image">
      <h3 class="my-2">A Short Title</h3>
      <p class="w-xxs mx-auto mb-0">A little bit of descriptive text that will wrap on to multiple lines.</p>
    </div>
    <div>
      <img class="square-lg mx-auto b-thick rounded-full" src="" alt="A square image">
      <h3 class="my-2">Another Short Title</h3>
      <p class="w-xxs mx-auto mb-0">A little bit of descriptive text that will wrap on to multiple lines.</p>
    </div>
    <div>
      <img class="square-lg mx-auto b-thick rounded-full" src="" alt="A square image">
      <h3 class="my-2">A Third Short Title</h3>
      <p class="w-xxs mx-auto mb-0">A little bit of descriptive text that will wrap on to multiple lines.</p>
    </div>
  </div>
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

`.box` is used to overlay text over an image in the Codebase [hero component]({{ '/docs/7-simple-components/heros' | url }}).

<div class="container-grid-full-bleed mb-3 bg-color-background-alt">
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
<div class="container-grid-full-bleed mb-3 bg-color-background-alt">
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

(Interested in those colors? See [color utilities]({{ '/docs/6-decoration-utilities/colors' | url }}).)