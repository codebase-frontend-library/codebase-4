---
title: "Offcanvas (AlpineJS)"
headerTitle: "Offcanvas Side Panels"
layout: layout.njk
prevPage: "/docs/8-alpinejs-components/alpinejs-modals"
nextPage: "/docs/8-alpinejs-components/alpinejs-tabs"
prevButton: "AlpineJS modals"
nextButton: "AlpineJS tabs"
---

<p class="t-lg t-thin">Codebase’s offcanvas side panels can slide in from the right of the left; they can be dismissed by a close button and/or by clicking outside; and they can become like a normal on-canvas panel above a breakpoint of your choice.</p>

More important, however, is to understand the way any offcanvas panel can be built using AlpineJS.

## Example 1: Simple offcanvas

This first example has an offcanvas panel at all viewport widths. The toggler (open/close) button is in a separate Alpine component to the offcanvas panel itself.

The Codebase AlpineJS offcanvas works in a similar way to the [modal control button as a separate component]({{ '/docs/8-alpinejs-components/alpinejs-modals/#modal-control-button-as-a-separate-component' | url }}) example: the toggler button is a separate Alpine component that “talks” to the offcanvas panel component using a _communication event bus_ (see [https://codewithhugo.com/alpinejs-component-communication-event-bus/](https://codewithhugo.com/alpinejs-component-communication-event-bus/)).

<!-- The button component -->
<div x-data="{}" class="mb-3">
  <button class="btn btn-primary scroll-lock" @click="$dispatch('offcanvas-ex')">Offcanvas example 1</button> – opens a demo offcanvas panel to the left
</div>

<!-- The offcanvas component -->
<div x-data="{ offcanvas: false }">
  <div
    class="offcanvas-wrapper"
    :class="{ 'active': offcanvas }"
    x-on:offcanvas-ex.window="offcanvas = !offcanvas"
    >
    <div class="backdrop scroll-unlock" x-show="offcanvas" @click="offcanvas = false"></div>
    <div class="offcanvas-panel offcanvas-panel-all offcanvas-panel-left bg-color-primary t-color-ui-text bs p-2" :class="{ 'active': offcanvas }">
      <div class="flex flex-end mb-3">
        <button class="btn btn-sm btn-primary btn-icon rounded-full" @click="offcanvas = false">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
      <p>This offcanvas panel is toggled from a separate button component outside. It is also closed by the closure button and the invisible dismisser backdrop.</p>
    </div>
  </div>
</div>

<br>

```html
<!-- The button component -->
<div x-data="{}" class="mb-3">
  <button class="btn btn-primary scroll-lock" @click="$dispatch('offcanvas-ex')">Offcanvas example 1</button> – opens a demo offcanvas panel to the left
</div>

<!-- The offcanvas component -->
<div x-data="{ offcanvas: false }">
  <div
    class="offcanvas-wrapper"
    :class="{ 'active': offcanvas }"
    x-on:offcanvas-ex.window="offcanvas = !offcanvas"
    >
    <div class="backdrop scroll-unlock" x-show="offcanvas" @click="offcanvas = false"></div>
    <div class="offcanvas-panel offcanvas-panel-all offcanvas-panel-left bg-color-primary t-color-ui-text bs p-2" :class="{ 'active': offcanvas }">
      <div class="flex flex-end mb-3">
        <button class="btn btn-sm btn-primary btn-icon rounded-full" @click="offcanvas = false">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
      <p>This offcanvas panel is toggled from a separate button component outside. It is also closed by the closure button and the invisible dismisser backdrop.</p>
    </div>
  </div>
</div>
```

## Example 2: Responsive Offcanvas Panels

Let’s add two more things:

1. Using some Codebase CSS classes, the trigger button can be hidden above a breakpoint threshold (e.g. for medium screens up), and the offcanvas panel can become like a normal on-canvas element. You could use this for creating a sidebar that only operates as an offcanvas sidebar on small tablets and phones.

2. As the viewport width expands through or contracts through your chosen breakpoint (in this example, medium = 1024px (default)) you will want the offcanvas Alpine component to deactivate, so that the page layout is not messed up e.g. when rotating an tablet or large phone between landscape and portrait orientation.

<!-- The button component (separate) -->
<div x-data="{}" class="mb-3 hide-md-up">
  <button class="btn btn-secondary scroll-lock" @click="$dispatch('offcanvas2-ex')">Offcanvas example 2</button> – opens a demo offcanvas panel to the right
</div>

<!-- The offcanvas component (without button) -->
<div x-data="{ offcanvas: false }">
  <div
    class="offcanvas-wrapper"
    :class="{ 'active': offcanvas }"
    x-on:offcanvas2-ex.window="offcanvas = !offcanvas"
    >
    <div class="backdrop scroll-unlock" x-show="offcanvas" @click="offcanvas = false"></div>
    <div class="offcanvas-panel offcanvas-panel-right offcanvas-panel-below-md mb-3 bs p-2 bg-color-secondary t-color-ui-text " :class="{ 'active': offcanvas }">
      <div class="mb-3 hide-md-up">
        <button class="btn btn-sm btn-secondary btn-icon rounded-full" @click="offcanvas = false">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
      <p>This is an offcanvas panel that becomes a normal panel above the breakpoint for medium viewports (default 1024px).</p>
      <p>Your browser window will need to be narrower than 1024px so that you can see this example in operation. Also, if you can open the offcanvas sidebar and then adjust your browser width, you’ll see that the panel is automatically dismissed.</p>
    </div>
  </div>
</div>


```html
<!-- The button component (separate) -->
<div x-data="{}" class="mb-3 hide-md-up">
  <button class="btn btn-secondary scroll-lock" @click="$dispatch('offcanvas2-ex')">Offcanvas example 2</button> – opens a demo offcanvas panel to the right
</div>

<!-- The offcanvas component (without button) -->
<div x-data="{ offcanvas: false }">
  <div
    class="offcanvas-wrapper"
    :class="{ 'active': offcanvas }"
    x-on:offcanvas2-ex.window="offcanvas = !offcanvas"
    >
    <div class="backdrop scroll-unlock" x-show="offcanvas" @click="offcanvas = false"></div>
    <div class="offcanvas-panel offcanvas-panel-right offcanvas-panel-below-md mb-3 bs p-2 bg-color-secondary t-color-ui-text " :class="{ 'active': offcanvas }">
      <div class="mb-3 hide-md-up">
        <button class="btn btn-sm btn-secondary btn-icon rounded-full" @click="offcanvas = false">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
      <p>This is an offcanvas panel that becomes a normal panel above the breakpoint for medium viewports (default 1024px).</p>
      <p>Your browser window will need to be narrower than 1024px so that you can see this example in operation. Also, if you can open the offcanvas sidebar and then adjust your browser width, you’ll see that the panel is automatically dismissed.</p>
    </div>
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

## Example 3: Super-Complex Offcanvas

As a further development of example 2, you may want the trigger button to do a _double duty_, so that it is not hidden for large screens up but has a different operation: to slide the (now on-canvas) sidebar away so that your main content can take up the full width of the viewport. E.g. as per these docs, and as you’ve no doubt seen on Google News, and YouTube.

Examine the code for the sidebar/offcanvas sidebar of these docs, to see how I did it here using Alpine.