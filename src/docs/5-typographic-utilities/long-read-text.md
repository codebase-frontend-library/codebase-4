---
title: "Long-Read Text"
layout: layout.njk
prevPage: "/codebase-4/docs/5-typographic-utilities/large-display-text"
nextPage: "/codebase-4/docs/5-typographic-utilities/text-columns"
prevButton: "Large display text"
nextButton: "Text columns"
---

<p class="t-lg t-thin">Use the <code>.t-long-read</code> block wrapper utility class around text that you want to be larger on large screens, for ease of reading. For example, use on the <code>&lt;article&gt;</code> tag for blog post templates.</p>

On narrow viewports (small devices), the text within the example `.t-long-read` wrapper below will be the Codebase default size (1rem, i.e. 16px). On wider viewports, the text is scaled up using CSS clamp to a comfortable maximum.

<div class="full-bleed mb-6">
<div class="container">
<div class="flex-md flex-gap flex-grow-equal">
<div class="b-thin p-1">
<p>Default sizes:</p>
<hr>
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident sint totam minus nisi, ab dolore. Velit ullam consequatur qui nihil omnis temporibus sequi quia asperiores, sit obcaecati quae veritatis eum deleniti labore est aut fugit, provident cum. Provident mollitia neque perferendis alias accusamus quae, aut ullam quo totam nostrum!</p>
</div>
<div class="b-thin p-1">
<p><code>.t-long-read</code> sizes:</p>
<hr>
<div class="t-long-read">
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident sint totam minus nisi, ab dolore. Velit ullam consequatur qui nihil omnis temporibus sequi quia asperiores, sit obcaecati quae veritatis eum deleniti labore est aut fugit, provident cum. Provident mollitia neque perferendis alias accusamus quae, aut ullam quo totam nostrum!</p>
</div>
</div>
</div>
</div>
</div>

```html
<div class="t-long-read">
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <p>Lorem ipsum dolor sit amet ...</p>
</div>
```