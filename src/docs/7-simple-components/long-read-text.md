---
title: "Prose Text"
headerTitle: "The Prose Text Wrapper"
layout: layout.njk
prevPage: "/docs/5-simple-components/heros"
nextPage: "/docs/5-simple-components/tables"
---

Use the `.t-long-read` block wrapper component class around text that you want to be rendered larger on large screens, for ease of reading. For example, use on `.t-long-read` on the `<article>` tag for long-read blog post layout templates.

On narrow viewports (small devices), the text in the `.t-long-read` block below will be the Codebase default size. On wider viewports, the text is scaled up using CSS clamp to a comfortable maximum.

<div class="full-bleed">
<div class="container">
<div class="flex-md flex-gap flex-grow-equal">
<div class="b-thin p-1">
<p>Default text and heading font-sizes:</p>
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
<p>This content below is wraped in <code>.t-long-read</code>:</p>
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