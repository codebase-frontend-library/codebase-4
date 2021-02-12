---
title: "Positions"
layout: layout.njk
prevPage: "/docs/4-layout-utilities/floats"
nextPage: "/docs/4-layout-utilities/dimensions"
prevButton: "Floats"
nextButton: "Dimensions"
---

<p class="t-lg t-thin">There may be some situations where you want to position a block out of the normal document flow.</p>

Codebase has utility classes for 4 kinds of positions:

* `.relative` / `.sm-relative` / `.md-relative` / `.lg-relative`
* `.absolute` / `.sm-absolute` / `.md-absolute` / `.lg-absolute`
* `.fixed` / `.sm-fixed` / `.md-fixed` / `.lg-fixed`
* `.sticky` / `.sm-sticky` / `.md-sticky` / `.lg-sticky`

**In conjunction with the _absolute_ and _fixed_ positioning utilities above**, there are are also the following for attaching elements to the edges (these will have no effect below the _absolute_ or _fixed_ specified media query breakpoint, if you use one):

* `.top` / `.sm-top` / `.md-top` / `.lg-top`
* `.right` / `.md-right` / `.md-right` / `.lg-right`
* `.bottom` / `.sm-bottom` / `.md-bottom` / `.lg-bottom`
* `.left` / `.md-left` / `.md-left` / `.lg-left`

Following is a demo of some of these position utilities. In the demo, the “always” versions of these layout utilities are demonstrated. The `*-md` and `*-lg` variants work in a similar way, except that they only take effect above their respective media query breakpoint widths.

The demo also uses [full-bleed](/docs/3-responsive-layouts/bleeds) from the Codebase layout system, and some height and width [dimension](/docs/4-layout-utilities/dimensions) utilities.

<div class="full-bleed my-responsive bg-color-background-alt">
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
<div class="full-bleed my-responsive bg-color-background-alt">
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

(Interested in those colors? See [color utilities](/docs/6-decoration-utilities/colors).)

## Getting `.sticky` to Stick

<div class="grid grid-gap grid-md-3-cols mb-3 b-dashed">
<div class="col-md-1-thru-2 mb-0">
<p><code>.sticky</code> is used for making e.g. sidebar blocks or menu bars “stick” to the top of their containing block.</p>
<p>To see <code>.sticky</code> being sticky, you will need to use it inside of a block that’s taller than the sticky element, or else it will not take effect.</p>
<p>There are two ways of setting the breakpoint width of when <code>.sticky</code> becomes sticky. One is to use one of the responsive sticky classes (<code>.sticky-sm</code>, <code>.sticky-md</code> or <code>.sticky-lg</code> – these are not demonstrated here). The other is to involve the <code>.sticky</code> in a <code>.flex</code> or a <code>.grid</code> system – and you are looking at <code>.grid</code> being demonstrated here.
<p class="mb-0">There are situations when you will want to prevent <code>.sticky</code> doing its thing. E.g. if it is a sticky sidebar element, and the visitor is viewing your webpage on a phone or a screen that’s too narrow for the <code>.sticky</code> to behave that way. For example, this demo has a sticky element that’s deliberately immobilized on small viewports – narrower than the grid system’s <code>md</code> breakpoint width (1024px default).</p>
</div>
<div class="mb-0">
<div class="sticky bg-color-danger-alt p-block" style="top: 57px;">
Look, I’m sticky on medium screens up!
</div>
</div>
</div>

```html
<div class="grid grid-gap grid-md-3-cols">
  <div class="col-md-1-thru-2" style="height: 500px">
    Main content ...
  </div>
  <div class="col-md-3">
    <div class="sticky">
      Look, I’m sticky on medium screens up!
    </div>
  </div>
</div>
```

**Notes:**

1. the example HTML code snippet above has some added height to the main column, so that if you copy-paste it, this will prove that it’s working. Delete the `style="height: 500px"` when you no longer need it.)
2. There are optional modifier classes for adding 1 line-leight (i.e. 3 <a href="/docs/6-decoration-utilities/element-grid">element grid</a> units) gap above and/or below the “stuck” positions (these are not used in the demo above):
    * `.sticky.sticky-gap-top`
    * `.sticky.sticky-gap-bottom`
3. You may also need to add extra `top` distance in your CSS, to compensate if you have a `position: fixed;` element above the sticky element in your own design. (This has been necessary in the demo above, so that the sticky element isn’t tucked under the docs top-bar.)

There are two other `.sticky` demos in the Codebase documentation: 

1. The main navbar on the [Codebase docs homepage](/) is wrapped in `.sticky`.
2. The sidebar on all pages in these docs is wrapped in a `.sticky` that takes effect on large screens up (i.e. when the viewport width is wide enough for displaying the sidebar in “sidebar mode”, not “offcanvas mode”). That’s the reason why, when you have scrolled to the bottom of these pages, you will notice the sidebar has reached the end of its sticky travel zone, and it will scroll up with the page.