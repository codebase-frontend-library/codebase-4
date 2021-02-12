---
title: "Dropdowns (Activator Component)"
headerTitle: "Dropdowns"
layout: layout.njk
prevPage: "/docs/9-activator-components/activator-showhides"
nextPage: "/docs/9-activator-components/activator-modals"
prevButton: "Activator showhides"
nextButton: "Activator modals"
---

<div class="mb-3">
  <button
    aria-controls="dropdown-1"
    aria-expanded="false"
    data-control="toggle"
    data-click-away="true"
    class="dropdown-control btn btn-primary"
  >Click me <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="6 9 12 15 18 9" /></svg>
  </button>
  <div id="dropdown-1" class="dropdown-panel bs b-thin rounded-sm p-block bg-color-background">
    Dropdown content
  </div>
</div>

A toggle component with “click away” to dismiss.

```html
<button
  aria-controls="dropdown-1"
  aria-expanded="false"
  data-control="toggle"
  data-click-away="true"
  class="dropdown-control btn btn-primary"
>Click me ▾</button>
<div id="dropdown-1" class="dropdown-panel bs b-thin rounded-sm p-block bg-color-background">
  Dropdown content
</div>
```

For a right-aligned dropdown:

<div class="flex flex-end mb-3">
<div class="relative">
<button
  aria-controls="dropdown-2"
  aria-expanded="false"
  data-control="toggle"
  data-click-away="true"
  class="dropdown-control btn btn-primary"
>Click me too <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="6 9 12 15 18 9" /></svg></button>
<div id="dropdown-2" class="dropdown-panel absolute right bs b-thin rounded-sm p-block bg-color-background" style="width: 12em;">
  Dropdown content
</div>
</div>
</div>

**Notes:**

1. The control (button) needs to be within a layout system that pushes it to the right – e.g. having it as the final item a menubar, or simply by wrapping it with `<div class="flex flex-end">`.

2. Right-aligned dropdowns need another wrapper with `.relative` (or CSS `position: relative;`) because the panel alignment will need to be set using `.absolute` (or CSS `position: absolute;`) that is relative to its containing element.

3. Add `.absolute.right` to the dropdown panel.

4. Right aligned dropdown panels, being within a `.relative` wrapper, will naturally have their width constrained to the width of the control (button). To break out of that, set the panel width to be _whatever you require_ for your design. (In this example, I have used an inline style `style="12em"`.)

```html
<div class="flex flex-end">
  <div class="relative">
  <button
    aria-controls="dropdown-2"
    aria-expanded="false"
    data-control="toggle"
    data-click-away="true"
    class="dropdown-control btn btn-primary"
  >Click me ▾</button>
  <div id="dropdown-2" style="width: 12em;" class="dropdown-panel absolute position-right bs b-thin rounded-sm p-block bg-color-background">
    Dropdown content
  </div>
  </div>
</div>
```