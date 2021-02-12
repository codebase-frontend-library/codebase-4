---
title: "Offcanvas (AlpineJS)"
headerTitle: "Offcanvas Side Panels"
layout: layout.njk
prevPage: "/docs/8-alpinejs-components/alpinejs-modals"
nextPage: "/docs/8-alpinejs-components/alpinejs-tabs"
prevButton: "AlpineJS modals"
nextButton: "AlpineJS tabs"
---

<p class="t-lg t-thin">Codebase’s offcanvas side panels can slide in from the right of the left; they can be dismissed by a close button and/or by clicking outside; and they can become like a normal on-canvas panel above a media query breakpoint of your choice.</p>

More important, however, is to understand the way any offcanvas panel can be built using AlpineJS.

## Example 1: Simple offcanvas

This first example has an offcanvas panel at all viewport widths. The toggler (open/close) button is in a separate Alpine component to the offcanvas panel itself.

The toggler button “talks” to the offcanvas panel using a _communication event bus_ (see [https://codewithhugo.com/alpinejs-component-communication-event-bus/](https://codewithhugo.com/alpinejs-component-communication-event-bus/)) to dispatch `offcanvastoggler`, and the close button (required) and the “click away to dismiss” backdrop (optional) both use another bus to dispatch `offcanvasclose`.

The state is managed by an additional tiny JavaScript function that you will need to include: `offcanvas()`.

<div
  x-data="offcanvas()"
  @load.window="offcanvasState()"
>
  <button
    class="btn btn-primary"
    aria-label="Offcanvas demo"
    aria-expanded="false"
    :aria-expanded="offcanvasOpen ? 'true' : 'false'"
    x-on:offcanvasclose.window="offcanvasOpen = !offcanvasOpen"
    @click="{offcanvasOpen = !offcanvasOpen, $dispatch('offcanvastoggler')}"
  >&larr; Offcanvas 1</button> – opens a demo offcanvas panel to the left
</div>

<div
  x-data="{ isOpen: false }"
  :class="{ 'active': isOpen }"
>
  <div class="backdrop" x-show="isOpen" @click="isOpen = false, $dispatch('offcanvasclose')"></div>

  <div class="offcanvas-panel offcanvas-panel-all offcanvas-panel-left bg-color-primary-alt bs p-2" :class="{ 'active': isOpen }" x-on:offcanvastoggler.window="isOpen = !isOpen">
    <div class="flex flex-end mb-3">
      <button class="btn btn-primary" @click="isOpen = false, $dispatch('offcanvasclose')">
        Close &times;
      </button>
    </div>
    <p>This offcanvas panel is toggled from a separate button component outside. It is also closed by the closure button and the invisible dismisser backdrop.</p>
  </div>
</div>

<script>
  function offcanvas() {
    return {
      offcanvasOpen: false,
      offcanvasState() {
        this.offcanvasOpen = true;
      },
      offcanvasClose() {
        this.offcanvasOpen = false;
      }
    }
  }
</script>

<br>

```html
<div
  x-data="offcanvas()"
  @load.window="offcanvasState()"
>
  <button
    class="btn btn-primary"
    aria-label="Offcanvas demo"
    aria-expanded="false"
    :aria-expanded="offcanvasOpen ? 'true' : 'false'"
    x-on:offcanvasclose.window="offcanvasOpen = !offcanvasOpen"
    @click="{offcanvasOpen = !offcanvasOpen, $dispatch('offcanvastoggler')}"
  >Offcanvas</button> – opens to the left.
</div>

<div
  x-data="{ isOpen: false }"
  :class="{ 'active': isOpen }"
>
  <div class="backdrop" x-show="isOpen" @click="isOpen = false, $dispatch('offcanvasclose')"></div>

  <div class="offcanvas-panel offcanvas-panel-all offcanvas-panel-left bg-color-primary-alt bs p-2" :class="{ 'active': isOpen }" x-on:offcanvastoggler.window="isOpen = !isOpen">
    <div class="flex flex-end mb-3">
      <button class="btn btn-primary" @click="isOpen = false, $dispatch('offcanvasclose')">
        Close &times;
      </button>
    </div>
    <p>Offcanvas panel content...</p>
  </div>
</div>

<script>
  function offcanvas() {
    return {
      offcanvasOpen: false,
      offcanvasState() {
        this.offcanvasOpen = true;
      },
      offcanvasClose() {
        this.offcanvasOpen = false;
      }
    }
  }
</script>
```

## Example 2: Responsive Offcanvas Panels

Let’s add two more things:

1. Using some Codebase CSS classes, the trigger button can be hidden above a media query threshold (e.g. for medium screens up), and the offcanvas panel can become like a normal on-canvas element. You could use this for creating a sidebar that only operates as an offcanvas sidebar on small tablets and phones.

2. As the viewport width expands through or contracts through your chosen media query threshold (in this example, medium = 1024px (default)) you will want the offcanvas Alpine component to deactivate, so that the page layout is not messed up e.g. when rotating an tablet or large phone between landscape and portrait orientation.

<div
  class="hide-md-up"
  x-data="offcanvas2md()"
  @load.window="offcanvas2mdState()"
  @resize.window="offcanvas2mdState()"
>
  <button
    class="btn btn-secondary"
    aria-label="Offcanvas 2md demo"
    aria-expanded="false"
    :aria-expanded="offcanvas2mdOpen ? 'true' : 'false'"
    x-on:offcanvasclose.window="offcanvas2mdOpen = !offcanvas2mdOpen"
    @click="{offcanvas2mdOpen = !offcanvas2mdOpen, $dispatch('offcanvas2mdtoggler')}"
  >Offcanvas 2 &rarr;</button> – opens a demo offcanvas to the right
</div>

<div class="mb-3">
  <div
    x-data="{ isOpen: false }"
    @resize.window="isOpen = false"
    class="offcanvas-wrap"
    :class="{ 'active': isOpen }"
  >
    <div class="backdrop hide-md-up" x-show="isOpen" @click="isOpen = false, $dispatch('offcanvas2mdclose')"></div>
    <div class="offcanvas-panel offcanvas-panel-right offcanvas-panel-below-md bg-color-secondary-alt p-2" :class="{ 'active bs': isOpen }" x-on:offcanvas2mdtoggler.window="isOpen = !isOpen">
      <div class="hide-md-up mb-3">
        <button class="btn btn-secondary" @click="isOpen = false, $dispatch('offcanvas2mdclose')">
          Close &times;
        </button>
      </div>
      <p>This is an offcanvas panel that becomes a normal panel above the media query for medium viewports (default 1024px).</p>
      <p>Your browser window will need to be narrower than 1024px so that you can see this example in operation. Also, if you can open the offcanvas sidebar and then adjust your browser width, you’ll see that the panel is automatically dismissed.</p>
    </div>
  </div>
</div>

<script>
  function offcanvas2md() {
    return {
      offcanvas2mdOpen: false,
      offcanvas2mdState() {
        let viewportWidth = window.innerWidth;
        if (viewportWidth < 1024) {
          this.offcanvas2mdOpen = false;
        } else {
          this.offcanvas2mdOpen = true;
        }
      },
      offcanvas2mdClose() {
        this.offcanvas2mdOpen = false;
      }
    }
  }
</script>

(I have added `2md` to the labels, variables and function names in this complex demo, to distinguish these from the simple demo above.)

```html
<div
  class="hide-md-up"
  x-data="offcanvas2md()"
  @load.window="offcanvas2mdState()"
  @resize.window="offcanvas2mdState()"
>
  <button
    class="btn btn-secondary"
    aria-label="Offcanvas 2md demo"
    aria-expanded="false"
    :aria-expanded="offcanvas2mdOpen ? 'true' : 'false'"
    x-on:offcanvasclose.window="offcanvas2mdOpen = !offcanvas2mdOpen"
    @click="{offcanvas2mdOpen = !offcanvas2mdOpen, $dispatch('offcanvas2mdtoggler')}"
  >Offcanvas 2 &rarr;</button> – opens a demo offcanvas to the right
</div>

<div
  x-data="{ isOpen: false }"
  @resize.window="isOpen = false"
  class="offcanvas-wrap"
  :class="{ 'active': isOpen }"
>
  <div class="backdrop hide-md-up" x-show="isOpen" @click="isOpen = false, $dispatch('offcanvas2mdclose')"></div>
  <div class="offcanvas-panel offcanvas-panel-right offcanvas-panel-below-md bg-color-secondary-alt p-2" :class="{ 'active bs': isOpen }" x-on:offcanvas2mdtoggler.window="isOpen = !isOpen">
    <div class="hide-md-up mb-3">
      <button class="btn btn-secondary" @click="isOpen = false, $dispatch('offcanvas2mdclose')">
        Close &times;
      </button>
    </div>
    <p>Offcanvas panel content...</p>
  </div>
</div>

<script>
  function offcanvas2md() {
    return {
      offcanvas2mdOpen: false,
      offcanvas2mdState() {
        let viewportWidth = window.innerWidth;
        if (viewportWidth < 1024) {
          this.offcanvas2mdOpen = false;
        } else {
          this.offcanvas2mdOpen = true;
        }
      },
      offcanvas2mdClose() {
        this.offcanvas2mdOpen = false;
      }
    }
  }
</script>
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

As a further development of example 2, you may want the trigger button to do a double duty, so that it is not hidden for large screens up but it has a different operation: to slide the (now on-canvas) sodebar away so that your main content can take up the full width of the viewport. E.g. as per these docs, and as you’ve no doubt seen on Google News, and YouTube.

Examine the code for the sidebar/offcanvas sidebar of these docs, to see how I did it here using Alpine.