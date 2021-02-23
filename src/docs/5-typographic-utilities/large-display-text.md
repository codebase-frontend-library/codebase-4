---
title: "Display Text"
headerTitle: "Large Display Text"
layout: layout.njk
prevPage: "/codebase-4/docs/5-typographic-utilities/text-alignment"
nextPage: "/codebase-4/docs/5-typographic-utilities/long-read-text"
prevButton: "Text alignment"
nextButton: "Long-read text"
---

<p class="t-lg t-thin">The same <code>.t-lg</code> inline text utility class also works as a block utility class. Use it on a wrapper around your important messaging on homepages and marketing landing pages.</p>

`.t-lg` enlarges text by 1.25em (125%) on small to medium screens and then 1.5em (150%) on medium screens up, to make the enlargement more obvious when viewed at a distance.

As a wrapper utility, `.t-lg` does not make text _grow_ like `.t-long-read` does. `.t-lg` simply enlarges the text wrapped within by 1.25em (125%) on small screens and 1.5em (150%) on large screens.

This makes using the `.t-lg` wrapper good for “hero” display headings and statements, or for making an important quote or message really stand out.

You can also use `.t-lg` on the first paragraph in your page or blog post, to lake it an enlarged _lead_ paragraph.

What power you have now! When your client or boss says “make that text really _pop_” — this is what they are talking about. 😎

With great power comes great responsibility.

<div class="t-lg">
  <div class="t-lg">
    <div class="h1 t-center">
      <span class="t-lg t-heavy">Use wisely! 😬</span>
    </div>
  </div>
</div>

You probably wouldn’t want to do this kind of thing:

```html
<div class="t-lg">
  <div class="t-lg">
    <div class="h1 t-center">
      <span class="t-lg t-heavy">Use wisely! 😬</span>
    </div>
  </div>
</div>
```

Notes:

1. The breakpoint width for `.t-lg` is 1024px (default) while the headings’ downsizing breakpoint is 768px (default). So, wrapping `.t-lg` around headings will cause them to have _two_ downsize steps. _This is good_ – this is what you want, for making your impressively large display headings and messages play well on phones in portrait orientation.
2. You can’t combine or nest `.t-lg` and `.t-long-read` (see [long-read text](/codebase-4/docs/5-typographic-utilities/long-read-text)), because `.t-long-read` overrules `.t-lg`. 

Example from the _cover_ of the [Codebase docs](/):

<div class="py-6 t-lg">
  <p class="h1 mb-1">Codebase is a super tiny website frontend library.</p>
      <p class="mb-2 t-thin t-loose">Developed for content management systems and static site generators, Codebase is a small but powerful package of lessons learned from semantic CSS/JS component frameworks (e.g. Bootstrap, Foundation) and utility libraries (Tachyons, Tailwind) – plus some shiny new techniques.</p>
      <p class="mb-2 t-thin t-loose">Codebase pairs well with AlpineJS.</p>
</div>

```html
<div class="t-lg">
  <p class="h1 mb-1">Codebase is a super tiny website frontend library.</p>
    <p class="mb-2 t-thin t-loose">Developed for content management systems and static site generators, Codebase is a small but powerful package of lessons learned from semantic CSS/JS component frameworks (e.g. Bootstrap, Foundation) and utility libraries (Tachyons, Tailwind) – plus some shiny new techniques.</p>
    <p class="mb-2 t-thin t-loose">Codebase pairs well with AlpineJS.</p>
</div>
```