---
title: "Badges"
layout: layout.njk
prevPage: "/codebase-4/docs/7-simple-components/buttons"
nextPage: "/codebase-4/docs/7-simple-components/labels"
prevButton: "Buttons"
nextButton: "Labels"
---

Badges appear in a “superscript” position, but you can create them using `<span>` elements: <span class="badge">1</span> <span class="badge bg-color-primary">2</span> <span class="badge bg-color-secondary">345</span> <span class="badge bg-color-warning">678</span> <span class="badge bg-color-danger">9</span> <span class="badge bg-color-success">10</span>

```html
<span class="badge">1</span>
<span class="badge bg-color-primary">2</span>
<span class="badge bg-color-secondary">345</span>
<span class="badge bg-color-warning">678</span>
<span class="badge bg-color-danger">9</span>
<span class="badge bg-color-success">10</span>
```

Place a badge _within_ a button, and the badge will be positioned in the top right corner:

<button class="btn btn-icon bg-color-primary">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3 7 12 13 21 7" /></svg>
  <span class="badge bg-color-warning">37</span>
</button>

```html
<button class="btn btn-icon bg-color-primary">
  <!-- icon -->
  <span class="badge bg-color-warning">37</span>
</button>
```

Codebase badges are sized im `em` units, so that they grow according to the size of the text they are on:

<p style="font-size: 36px">This is bigger<span class="badge bg-color-warning">1</span></p>

```html
<p style="font-size: 36px">This is bigger<span class="badge bg-color-warning">1</span></p>
``