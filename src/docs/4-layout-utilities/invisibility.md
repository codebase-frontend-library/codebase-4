---
title: "Invisibility"
headerTitle: "Invisibility (Hiding Stuff)"
layout: layout.njk
prevPage: "/docs/4-layout-utilities/overflows"
nextPage: "/docs/5-typographic-utilities/inline-text"
prevButton: "Overflows"
nextButton: "Inline text"
---

<p class="t-lg t-thin">You commonly see this technique (or not see, if you see what I mean 😄) being used to hide different configurations of navigation menus – such as hiding a menubar on small devices, and showing an offcanvas sidebar instead.</p>

The “Hide below” classes hide stuff on viewport widths from zero to (max-width: variable - 1px). E.g. `.hide-below-sm` hides an element upto viewport width 767px (default). And from `sm` 768px and up, the element will be visible.

So, e.g. if you want to hide a sidebar on an iPad in portrait orientation but not on an iPad in landscape orientation, then you’ll want to use `.hide-below-md`.

<p class="t-center"> &check; = visible; &cross; = invisible (hidden)</p>

<div class="overflow-x">
<table class="table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
      <th>&le;767px</th>
      <th>768px–1023px</th>
      <th>1024px–1280px</th>
      <th>&ge;1280px</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bt-thick">
      <td><code>.hide-below-sm</code></td>
      <td>
        <div class="hide-below-sm p-block bg-color-success-alt">Example</div>
      </td>
      <td>&cross;</td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&check;</td>
    </tr>
    <tr>
      <td><code class="t-nowrap">.hide-below-md</code></td>
      <td>
        <div class="hide-below-md p-block bg-color-success-alt">Example</div>
      </td>
      <td>&cross;</td>
      <td>&cross;</td>
      <td>&check;</td>
      <td>&check;</td>
    </tr>
    <tr>
      <td><code>.hide-below-lg</code></td>
      <td>
        <div class="hide-below-lg p-block bg-color-success-alt">Example</div>
      </td>
      <td>&cross;</td>
      <td>&cross;</td>
      <td>&cross;</td>
      <td>&check;</td>
    </tr>
    <tr class="bt-thick">
      <td><code>.hide-sm-up</code></td>
      <td>
        <div class="hide-sm-up p-block bg-color-success-alt">Example</div>
      </td>
      <td>&check;</td>
      <td>&cross;</td>
      <td>&cross;</td>
      <td>&cross;</td>
    </tr>
    <tr>
      <td><code>.hide-md-up</code></td>
      <td>
        <div class="hide-md-up p-block bg-color-success-alt">Example</div>
      </td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&cross;</td>
      <td>&cross;</td>
    </tr>
    <tr>
      <td><code>.hide-lg-up</code></td>
      <td>
        <div class="hide-lg-up p-block bg-color-success-alt">Example</div>
      </td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&cross;</td>
    </tr>
  </tbody>
</table>
</div>

## The Special `.hidden` Class

There is also a special `.hidden` CSS class for hiding anything, whenever it is applied, by `display: none !important;`. This class is for adding and removing _programatically_ by JavaScript.

<p class="hidden">
  You can’t see me!
</p>

Just for fun, I have demonstrated `.hidden` above this paragraph. But you won’t be able to see it unless you inspect this page’s source code.

```html
<p class="hidden">
  You can’t see me!
</p>
```