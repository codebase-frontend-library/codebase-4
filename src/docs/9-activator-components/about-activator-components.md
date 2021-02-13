---
title: "Activator Components"
headerTitle: "Codebase Activator Components"
layout: layout.njk
prevPage: "/codebase-4/docs/8-alpinejs-components/alpinejs-accordions"
nextPage: "/codebase-4/docs/9-activator-components/activator-classes-and-attributes"
prevButton: "AlpineJS accordions"
nextButton: "Activator classes and attributes"
---

<p class="t-lg t-thin">
  <a href="https://github.com/alpinejs/alpine" target="_blank">AlpineJS</a> does all that you need for Codebase – and much more. I would recommend you learn and <a href="/codebase-4/docs/6-alpinejs-components/alpinejs-components-intro">use Alpine with Codebase</a> in most circumstances.
</p>

However, Codebase 4 does have its own tiny script `activator.js` (3 KB, minified).

If you only have an offcanvas sidebar or a few dropdowns, then it’s easier just to go with with Activator.

Also, Activator can be useful if you are using Codebase on a CMS frontend project and you have a need (or, your client has a need) to add a tab system or some showhide from within the CMS editor, then you may find AlpineJS doesn’t work for that purpose – i.e. if the CMS editor doesn’t allow you to add AlpineJS directives and supplementary JavaScript.

**Note:** Activator and AlpineJS components can’t dismiss each other by clicking away. So, you might not want to use both Activator and AlpineJS together in a project.

## How Codebase’s Activator Works

1. `activator.js` looks for the Codebase `-control` and `-panel` suffixed CSS classes in your HTML.
2.  When you click the control element (usually a button or a tab), it adds and/or removes some `.active` classes – all depending on what you have put into some `aria-controls` and `data` attributes on your control element.
3. Activator also toggles `aria-expanded="false"` ⇄ `aria-expanded="true"`. And it can optionally add a body _scroll lock_ when you need it, e.g. behind modal panels.

There are no JS based animations in `codebase.js` (e.g. no slide-down and slide-up). In Codebase, all animations are done using CSS3 transitions and transforms.

<p class="bl-heavy b-color-secondary p-2 bg-color-secondary-alt">As with <a href="/codebase-4/docs/7-simple-components/about-simple-components">simple Codebase components</a>, Codebase Activator components are mostly built from utility classes with minimal or no special CSS classes of their own. Usually the unique component CSS has only to do with the transitions between the inactive and active states.</p>

Besides the several Activator components shown in these docs, feel free to roll your own too, if there’s anything else you need. Follow the concepts outlined in the [Activator classes and attributes](/codebase-4/docs/9-activator-components/activator-classes-and-attributes).

## The Simplest Activator Component

The simplest Activator component is the [showhide](/codebase-4/docs/9-activator-components/activator-showhides) slide revealer. Showhide is the simplest Activator component, in that it has the fewest number of HTML atttibutes and is therefore the easiest to understand:

<div class="b-thin rounded mb-3 flex flex-column">
  <button
    aria-controls="showhide-1"
    aria-expanded="false"
    data-control="toggle"
    class="showhide-control control-indicator-chevron unrounded b-0 p-block flex flex-space-between"
  >
    Click me
  </button>
  <div id="showhide-1" class="showhide-panel">
    <div class="p-2">
      <p class="mb-1"><strong>Showhide panel content</strong></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</div>

```html
<div class="b-thin rounded mb-3 flex flex-column">
  <button
    aria-controls="showhide-1"
    aria-expanded="false"
    data-control="toggle"
    class="showhide-control control-indicator-chevron unrounded b-0 p-block flex flex-space-between"
  >
    Click me
  </button>
  <div id="showhide-1" class="showhide-panel">
    <div class="p-2">
      <p class="mb-1"><strong>Showhide panel content</strong></p>
      <p>Lorem ipsum dolor sit amet ...</p>
    </div>
  </div>
</div>
```

See [Activator classes and attributes](/codebase-4/docs/9-activator-components/activator-classes-and-attributes).