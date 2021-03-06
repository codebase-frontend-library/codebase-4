---
title: "Showhides (Activator Component)"
headerTitle: "Showhides (a.k.a. Slide-Reveals)"
layout: layout.njk
prevPage: "/docs/9-activator-components/activator-classes-and-attributes"
nextPage: "/docs/9-activator-components/activator-dropdowns"
prevButton: "Activator classes and attributes"
nextButton: "Activator dropdowns"
---

For showing and hiding panel content. Used in long sidebars, FAQs, and dismissable notifications.

<div class="relative b-thin rounded mb-3 flex flex-column">
  <button
    aria-controls="showhide-1"
    aria-expanded="false"
    data-control="toggle"
    class="showhide-control control-indicator-chevron unrounded b-0 p-block flex flex-space-between"
  >
    Showhide toggle
  </button>
  <div id="showhide-1" class="showhide-panel">
    <div class="p-2">
      <p class="mb-1"><strong>Showhide panel content</strong></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</div>

```html
<div class="relative b-thin rounded mb-3 flex flex-column">
  <button
    aria-controls="showhide-1"
    aria-expanded="false"
    data-control="toggle"
    class="showhide-control control-indicator-chevron unrounded b-0 p-block flex flex-space-between"
  >
    Showhide toggle
  </button>
  <div id="showhide-1" class="showhide-panel">
    <div class="p-2">
      <p class="mb-1"><strong>Showhide panel content</strong></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</div>
```

For a dismissable panel:

1. Place the control (button) _within_ the panel
2. Set the control as `aria-expanded="true"`
3. Set the control and the panel as `.active`


<div id="showhide-2" class="showhide-panel active bg-color-success">
  <button
    aria-controls="showhide-2"
    aria-expanded="true"
    data-control="toggle"
    class="btn btn-icon bg-transparent showhide-control active b-0 unrounded t-color-background t-lg float-right"
  >
    &times;
  </button>
  <div class="p-2">
    <p class="mb-1 t-lg t-color-ui-text">Success</p>
    <p class="mb-0 t-color-ui-text">This message is just to tell you that you’ve had some success.</p>
  </div>
</div>

(Refresh yor browser to see the panel again.)

```html
<div id="showhide-2" class="showhide-panel active bg-color-success">
  <button
    aria-controls="showhide-2"
    aria-expanded="true"
    data-control="toggle"
    class="btn-icon showhide-control active b-0 bg-transparent t-color-background t-lg float-right"
  >
    &times;
  </button>
  <div class="p-2">
    <p class="mb-1 t-lg t-color-ui-text">Success</p>
    <p class="mb-0 t-color-ui-text">This message is just to tell you that you’ve had some success.</p>
  </div>
</div>
```