---
title: "Labels"
layout: layout.njk
prevPage: "/docs/7-simple-components/badges"
nextPage: "/docs/7-simple-components/media-objects"
prevButton: "Badges"
nextButton: "Media objects"
---

This is a default, using the `<label>` form element:

<label>Label</label>

```html
<label>Label</label>
```

Now, if you add the `.label` class, you get this:

<label class="label">Label</label>

```html
<label class="label">Label</label>
```

(Or you could apply `.label` to a `<span>` or other inline element.)

<span class="label">Default</span> <span class="label bg-color-primary">Author</span> <span class="label bg-color-secondary">Tag</span> <span class="label bg-color-warning">Really?</span> <span class="label bg-color-danger">Required</span> <span class="label bg-color-success">Winner</span>

```html
<span class="label">Default</span>
<span class="label bg-color-primary">Author</span>
<span class="label bg-color-secondary">Tag</span>
<span class="label bg-color-warning">Really?</span>
<span class="label bg-color-danger">Required</span>
<span class="label bg-color-success">Winner</span>
```

Labels can sit <span class="label">comfortably</span> within a block of text, as you can see for yourself. That text can occupy multiple lines, and the <span class="label">label</span> will not disturb the vertical rhythm.
