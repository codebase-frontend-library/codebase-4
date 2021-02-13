---
title: "Headings"
layout: layout.njk
prevPage: "/codebase-4/docs/2-codebase-basics/element-grid"
nextPage: "/codebase-4/docs/2-codebase-basics/paragraphs"
prevButton: "Element grid"
nextButton: "Paragraphs"
---

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

```html
<h2>h2 Heading</h2>
<h1>h1 Heading</h1>
<h3>h3 Heading</h3>
<h4>h4 Heading</h4>
<h5>h5 Heading</h5>
<h6>h6 Heading</h6>
```

Same as with [paragraphs](/codebase-4/docs/2-codebase-basics/paragraphs), headings have zero top margin while the bottom margin is set as equal to _one line-height of the default text size_, i.e. 1.5rem – thereby leaving an “empty line” gap between paragraphs and headings.

Heading sizes, weights and line heights are set using three SCSS maps in the default variables file – you can control the rhythm of each from there.

Below the small media query breakpoint (768px, default), all headings are size reduced to 87.5%, so that they do not look too big on small devices.

All these same styles are also available as `.h1` to `.h6` block [text utility classes](/codebase-4/docs/5-typographic-utilities/inline-text).