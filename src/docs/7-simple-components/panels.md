---
title: "Panels"
headerTitle: "Responsive Panels"
layout: layout.njk
prevPage: "/codebase-4/docs/7-simple-components/heros"
nextPage: "/codebase-4/docs/7-simple-components/tables"
prevButton: "Heros"
nextButton: "Tables"
---

<p class="t-lg t-thin">Codebase has a special <code>.panel-responsive</code> class makes a panel “pop out” of its conaining column.</p>

The `.panel-responsive` class adds negative `2vw` x-axis margins and commensurate positive `2vw` padding (to all sides), and it ises `calc()` to enable the element width to expand to the required width.

Since the side margins and paddings cancel each other out, there’s not much to see until you add some decoration, such as border(s) or a background color. So, here is a demo with a dashed border:

<div class="mb-3 panel-responsive b-dashed">This is some text in a responsive panel.</div>

```html
<div class="panel-responsive">
  This is some text in a responsive panel.
</div>
```

The decoration, of course, is up to you. Design whatever you want.

You can see several panels that look like this around the Codebase docs:

<div class="mt-3 mb-6 panel-responsive bl-heavy b-color-primary bg-color-primary-alt">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum metus sed rhoncus lobortis. Morbi pretium bibendum augue at consequat. Sed tempor lacus eget mi tristique venenatis.
</div>

```html
<div class="panel-responsive bl-heavy b-color-primary bg-color-primary-alt">
  Lorem ipsum dolor sit amet...
</div>
```

Try something like this for making an important quote to stand out:

<div class="mt-3 mb-6 panel-responsive bt-heavy bb-heavy b-color-success t-lg t-center">
  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum metus sed rhoncus lobortis. Morbi pretium bibendum augue at consequat. Sed tempor lacus eget mi tristique venenatis.”
</div>

```html
<div class="panel-responsive bt-heavy bb-heavy b-color-success t-lg t-center">
  “Lorem ipsum dolor sit amet...”
</div>
```

Another example:

<div class="mt-3 mb-6 panel-responsive rounded-lg bg-color-danger t-color-ui-text">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum metus sed rhoncus lobortis. Morbi pretium bibendum augue at consequat. Sed tempor lacus eget mi tristique venenatis.
</div>

```html
<div class="panel-responsive rounded-lg bg-color-danger t-color-ui-text">
  Lorem ipsum dolor sit amet...
</div>
```