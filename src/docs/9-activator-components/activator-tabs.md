---
title: "Tabs (Activator Component)"
headerTitle: "Tabs"
layout: layout.njk
prevPage: "/codebase-4/docs/9-activator-components/activator-offcanvas"
nextPage: "/codebase-4/docs/9-activator-components/activator-accordions"
prevButton: "Activator offcanvas"
nextButton: "Activator accordions"
---

The Codebase `.tab-control` and `.tab-panel` CSS classes add some minimal styling for horizontal tab systems.

<div class="tab-wrapper">
  <div class="flex">
    <label class="tab-control active" aria-controls="tab-panel-1" aria-expanded="true" data-control="tab">Tab 1</label>
    <label class="tab-control" aria-controls="tab-panel-2" aria-expanded="false" data-control="tab">Tab 2</label>
    <label class="tab-control" aria-controls="tab-panel-3" aria-expanded="false" data-control="tab">Tab 3</label>
  </div>
  <div class="tab-panel active" id="tab-panel-1" aria-expanded="false">
    <p>This is the example content of the first tab.</p>
  </div>
  <div class="tab-panel" id="tab-panel-2" aria-expanded="false">
    <p>The second tab’s example content.</p>
  </div>
  <div class="tab-panel" id="tab-panel-3" aria-expanded="false">
    <p>The content of the third and final tab in this set.</p>
  </div>
</div>

```html
<div class="tab-wrapper">
  <div class="flex">
    <label class="tab-control active" aria-controls="tab-panel-1" aria-expanded="true" data-control="tab">Tab 1</label>
    <label class="tab-control" aria-controls="tab-panel-2" aria-expanded="false" data-control="tab">Tab 2</label>
    <label class="tab-control" aria-controls="tab-panel-3" aria-expanded="false" data-control="tab">Tab 3</label>
  </div>
  <div class="tab-panel active" id="tab-panel-1" aria-expanded="false">
    <p>This is the example content of the first tab.</p>
  </div>
  <div class="tab-panel" id="tab-panel-2" aria-expanded="false">
    <p>The second tab’s example content.</p>
  </div>
  <div class="tab-panel" id="tab-panel-3" aria-expanded="false">
    <p>The content of the third and final tab in this set.</p>
  </div>
</div>
```

**Note:** In the Codebase dark theme, front tab labels and panels are lighter set using the `background-alt` color, since this made the front tab more obviously the front tab.

### Tabs setup notes

1. Your set of tabs needs to be placed inside a block element with CSS class `.tab-wrapper`, so that `activator.js` “knows” which tabs are siblings within your system. The controls (i.e. tab labels) do not necessarily need to be placed within the `.tab-wrapper`, but it will usually make sense that you do so.

2. The tab controls need to be placed within their own `.flex` block element, so that they appear in a row.

<p class="bl-heavy b-color-secondary p-2 bg-color-secondary-alt">If you have a lot of labels or label text, so that there’s not enough width to show them all on small screens, you can use <code>.flex.overflow-x</code> so that the labels can scroll horizontally.</p>

3. Tabs require `data-control="tab"` on the controls (i.e. tab labels), and they _must not have_ `data-click-away="true"` or `data-scroll-lock="true"`.

4. You also need to choose one tab to be front. Set that tab’s label and panel to “active” by adding the CSS class `.active` to both.

5. Also, set `aria-expanded="true"` on the front tab control, and set `aria-expanded="false"` on the others.

6. Your tab controls each need to be paired to their respective panels using `aria-controls="panelID"` on the control and `id="panelID"` on its panel. Choose appropriate ID names for your design. (In my example, I have just named them “tab-panel-1” etc.)

<p class="bl-heavy b-color-secondary p-2 bg-color-secondary-alt">If you don’t want the tabs styling above, but do want the tabs functionality (e.g. for vertical tabs, accordions, or an image-gallery/slideshow), then don’t use the <code>.tab-</code> prefix. Choose your own prefix for the required <code>-wrapper</code> , <code>-control</code>(s) and <code>-panel</code>(s), create your own CSS styles, and add the other HTML attributes as for tabs in this example.</p>