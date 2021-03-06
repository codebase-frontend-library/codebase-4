---
title: "Accordions (Activator Component)"
headerTitle: "Accordions"
layout: layout.njk
prevPage: "/docs/9-activator-components/activator-tabs"
nextPage: "/docs/9-activator-components/activator-slideshows"
prevButton: "Activator tabs"
nextButton: "Activator slideshows"
---

Codebase accordions are tab-like acrivator components.

Sometimes, when you think you need an accordion, what you really need is a set of independent [showhide]({{ '/docs/7-activator-components/activator-showhide' | url }}) components (as they are called in Codebase).

Do you really need to close one panel when you open another? If you do, then you need an accordion. And here below is a Codebase accordion implimentation.

Notes:
1. Codebase accordions are a variation on Codebase Activator tabs.
2. Aside from the `.accordion-` prefix classes being used by `activator.js`, there are no dedicated accordion styles in Codebase. This whole example below is built out of utility classes.
3. Tabs can’t self-dismiss – therefore, there will always be one accordion panel that is active (i.e. revealed).

<div class="accordion-wrapper b-thin rounded mb-3">
  <button
    aria-controls="accordion-panel-1"
    aria-expanded="true"
    data-control="tab"
    class="accordion-control block b-0 p-block t-left active"
  >Accordion tab 1</button>
  <div
    id="accordion-panel-1"
    class="accordion-panel bb-thin active"
  >
    <p class="mb-0 p-block">This is the example content of the first panel.</p>
  </div>
  <button
    aria-controls="accordion-panel-2"
    aria-expanded="false"
    data-control="tab"
    class="accordion-control block b-0 p-block t-left"
  >Accordion tab 2</button>
  <div
    id="accordion-panel-2"
    class="accordion-panel bb-thin"
  >
    <p class="mb-0 p-block">The second panel’s example content.</p>
  </div>
  <button
    aria-controls="accordion-panel-3"
    aria-expanded="false"
    data-control="tab"
    class="accordion-control block b-0 p-block t-left"
  >Accordion tab 3</button>
  <div
    id="accordion-panel-3"
    class="accordion-panel"
  >
    <p class="mb-0 p-block">The content of the third and final panel in this set.</p>
  </div>
</div>

```html
<div class="accordion-wrapper b-thin rounded mb-3">
  <button
    aria-controls="accordion-panel-1"
    aria-expanded="true"
    data-control="tab"
    class="accordion-control block b-0 p-block t-left active"
  >Accordion tab 1</button>
  <div
    id="accordion-panel-1"
    class="accordion-panel bb-thin active"
  >
    <p class="mb-0 p-block">This is the example content of the first panel.</p>
  </div>
  <button
    aria-controls="accordion-panel-2"
    aria-expanded="false"
    data-control="tab"
    class="accordion-control block b-0 p-block t-left"
  >Accordion tab 2</button>
  <div
    id="accordion-panel-2"
    class="accordion-panel bb-thin"
  >
    <p class="mb-0 p-block">The second panel’s example content.</p>
  </div>
  <button
    aria-controls="accordion-panel-3"
    aria-expanded="false"
    data-control="tab"
    class="accordion-control block b-0 p-block t-left"
  >Accordion tab 3</button>
  <div
    id="accordion-panel-3"
    class="accordion-panel"
  >
    <p class="mb-0 p-block">The content of the third and final panel in this set.</p>
  </div>
</div>
```