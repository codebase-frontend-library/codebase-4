---
title: "Details"
headerTitle: "Collapsible Details"
layout: layout.njk
prevPage: "/codebase-4/docs/2-codebase-basics/lists"
nextPage: "/codebase-4/docs/2-codebase-basics/horizontal-rules"
prevButton: "Lists"
nextButton: "Horizontal rules"
---

<p class="t-lg t-thin">A simple HTML5 show/hide component, with functionality provided by the browser (no JavaScript required).</p>

Clicking the (bold) <code>&lt;summary&gt;</code> will trigger the functionality of the [HTML details element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details). When the main content of the <code>&lt;details&gt;</code> element is “open” (revealed), the indicator triangle (automatically supplied by the browser) is rotated to point downwards.

<details>
  <summary>Summary (always visible)</summary>
  Here are the details – an extended discussion of what is summarised in the associated <code>&lt;summary&gt;</code> above. Hidden by default, this content becomes visible when the visitor clicks or taps the summary.
</details>

```html
<details>
  <summary>Summary (always visible)</summary>
  Here are the details – an extended discussion of what is summarised in the associated <code>&lt;summary&gt;</code> above. Hidden by default, this content becomes visible when the visitor clicks or taps the summary.
</details>
```

The Codebase basic (classless) styling is only supplying a line-space (bottom margin) below the `<details>` tag, bold rendering for the `<summary>` tag, and `cursor: pointer` for when the visitor hovers their mouse (or other pointing device) over the summary.

## Starting in the “Open” State

What if you want the a set of `<details>` to start in the “open” state? Simply add the `open` attribute to the (opening) `<details>` tag:

<details open>
  <summary>Summary</summary>
  Here are the details...
</details>

```html
<details open>
  <summary>Summary</summary>
  Here are the details...
</details>
```
