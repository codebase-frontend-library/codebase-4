---
title: "Offcanvas (Activator Component)"
headerTitle: "Offcanvas Side Panels"
layout: layout.njk
prevPage: "/codebase-4/docs/9-activator-components/activator-modals"
nextPage: "/codebase-4/docs/9-activator-components/activator-tabs"
prevButton: "Activator modals"
nextButton: "Activator tabs"
---

<p class="t-lg t-thin">Codebase’s offcanvas side panels can slide in from the right of the left; they can be dismissed by a close button and/or by clicking outside; and they can become like a normal on-canvas panel above a breakpoint of your choice.</p>

## Example 1: Simple offcanvas

This first example has an offcanvas panel at all viewport widths. 

<button
  class="offcanvas-control btn btn-primary"
  aria-controls="offcanvas-1"
  aria-expanded="false"
  data-control="toggle"
  data-click-away="true"
  data-scroll-lock="true">
  &larr; Offcanvas demo 1
</button> — clicking this button will open a demo offcanvas panel to the left.

<div class="offcanvas-wrapper">
  <div class="offcanvas-panel offcanvas-panel-all offcanvas-panel-left bg-color-primary t-color-ui-text bs p-3" id="offcanvas-1">
    <div class="mb-3 t-right clearfix">
      <button
        class="offcanvas-close btn btn-primary b-color-ui-text float-right">
        Close <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </button>
    </div>
    <p>Here is some text on the offcanvas panel.</p>
  </div>
</div>

```html
<button
  class="offcanvas-control btn btn-primary"
  aria-controls="offcanvas-1"
  aria-expanded="false"
  data-control="toggle"
  data-click-away="true"
  data-scroll-lock="true">
  &larr; Offcanvas demo 1
</button> – offcanvas panel will slide in from the left

<div class="offcanvas-wrapper">
  <div class="offcanvas-panel offcanvas-panel-all offcanvas-panel-left bg-color-secondary-alt bs p-3" id="offcanvas-1">
    <div class="mb-3 t-right clearfix">
      <button
        class="offcanvas-close btn btn-secondary float-right">
        Close
      </button>
    </div>

    <p>Here is some text on the offcanvas panel.</p>
  </div>
</div>
```

## Example 2: Responsive Offcanvas Panels

Let’s add two more things:

1. Using some Codebase CSS classes, the trigger button can be hidden above a breakpoint (e.g. for large screens up), and the offcanvas panel can become like a normal on-canvas element. You could use this for creating a sidebar that only operates as an offcanvas sidebar on small tablets and phones.

2. As the viewport width expands through or contracts through your chosen breakpoint (in this example, medium = 1024px (default)) you will want the offcanvas component to deactivate, so that the page layout is not messed up e.g. when rotating an tablet or large phone between landscape and portrait orientation.

**Note:** Codebase responsive offcanvas panels also have a _box-shadow removal override_ that kicks in when the panel is being displayed like a normal on-canvas panel. So, `.bs` utility classes won’t work on a responsive offcanvas panels _above_ its breakpoint.

<button
  class="btn btn-secondary offcanvas-control hide-md-up"
  aria-controls="offcanvas-2"
  aria-expanded="false"
  data-control="toggle"
  data-click-away="true"
  data-scroll-lock="true">
  Offcanvas demo 2 &rarr;
</button> <span class="hide-md-up">– offcanvas panel will slide in from the right</span>

<div class="offcanvas-wrapper mb-3">
  <div class="offcanvas-panel offcanvas-panel-below-md offcanvas-panel-right bg-color-secondary t-color-ui-text p-3 bs" id="offcanvas-2">
    <div class="mb-3 hide-md-up">
      <button
        class="offcanvas-close btn btn-secondary b-color-ui-text">
        Close <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </button>
    </div>
    <p>This is an offcanvas panel that becomes a normal panel above the breakpoint for medium viewports (default 1024px).</p>
    <p>Your browser window will need to be narrower than 1024px so that you can see this example in operation. Also, if you can open the offcanvas sidebar and then adjust your browser width, you’ll see that the panel is automatically dismissed.</p>
  </div>
</div>


```html
<button
  class="btn btn-primary offcanvas-control hide-md-up"
  aria-controls="offcanvas-2"
  aria-expanded="false"
  data-control="toggle"
  data-click-away="true"
  data-scroll-lock="true">
  Offcanvas demo 2 &rarr;
</button>

<div class="offcanvas-wrapper">
  <div class="offcanvas-panel offcanvas-panel-below-md offcanvas-panel-right bg-color-secondary t-color-ui-text p-3 bs" id="offcanvas-2">
    <div class="mb-3 hide-md-up">
      <button
        class="offcanvas-close btn btn-secondary b-color-ui-text">
        Close
      </button>
    </div>
    <p>This is an offcanvas panel that becomes a normal panel above the breakpoint for medium viewports (default 1024px).</p>
    <p>Your browser window will need to be narrower than 1024px so that you can see this example in operation. Also, if you can open the offcanvas sidebar and then adjust your browser width, you’ll see that the panel is automatically dismissed.</p>
  </div>
</div>
```

## Offcanvas Panel Options

The example above has CSS classes...

```html
offcanvas-panel offcanvas-panel-right offcanvas-panel-below-md
```

...to make the offcanvas panel slide in from the right, and only operate as an offcanvas panel on smaller screens _below_ the `md` breakpoint width (i.e. up to 1023px, or anything _narrower than_ an iPad in landscape orientation).

<div class="overflow-x">
<table class="table">
  <thead class="bg-color-background-alt">
    <tr>
      <th>Offcanvas Panel Classes</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.offcanvas-panel</code></td>
      <td>Use <code class="t-nowrap">.offcanvas-panel</code> on all offcanvas panels.</td>
    </tr>
    <tr>
      <td colspan="2" class="bg-color-background-alt"><strong>Directional Modifiers</strong> – added as supplemental to <code class="b-thin">.offcanvas-panel</code></td>
    </tr>
    <tr>
      <td><code>.offcanvas-panel-right</code></td>
      <td>The offcanvas panel will slide in from the right.</td>
    </tr>
    <tr>
      <td><code>.offcanvas-panel-left</code></td>
      <td>The offcanvas panel will slide in from the left.</td>
    </tr>
    <tr>
      <td colspan="2" class="bg-color-background-alt"><strong>Responsive Layout Modifiers</strong> – added as supplemental to <code class="b-thin">.offcanvas-panel</code></td>
    </tr>
    <tr>
      <td><code>.offcanvas-panel-all</code></td>
      <td>Panel will operate as an offcanvas panel on all screens, no matter how wide</td>
    </tr>
    <tr>
      <td><code class="t-nowrap">.offcanvas-panel-below-lg</code></td>
      <td>Panel will only operate as an offcanvas panel when the screen width is below <code>lg</code> (&lt;1280px default). Use <code>.hide-lg-up</code> to hide your <code>.offcanvas-control</code> and <code>.offcanvas-close</code> buttons above this breakpoint width.</td>
    </tr>
    <tr>
      <td><code>.offcanvas-panel-below-md</code></td>
      <td>Panel will only operate as an offcanvas panel when the screen width is below <code>md</code> (&lt;1024px default). Use <code>.hide-md-up</code> to hide your <code>.offcanvas-control</code> and <code>.offcanvas-close</code> buttons above this breakpoint width.</td>
    </tr>
    <tr>
      <td><code>.offcanvas-panel-below-sm</code></td>
      <td>Panel will only operate as an offcanvas panel when the screen width is below <code>sm</code> (&lt;768px default). Use <code>.hide-sm-up</code> to hide your <code>.offcanvas-control</code> and <code>.offcanvas-close</code> buttons above this breakpoint width.</td>
    </tr>
  </tbody>
</table>
</div>