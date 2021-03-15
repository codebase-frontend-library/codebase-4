---
title: "Inline Text"
layout: layout.njk
prevPage: "/docs/4-layout-utilities/invisibility"
nextPage: "/docs/5-typographic-utilities/headings"
prevButton: "Invisibility"
nextButton: "Headings"
---

Codebase has several simple text utility classes.

* <code>.t-bolder</code> (and alias <code>.t-heavy</code>)

    <span class="t-bolder">Bolder text (default 900)</span>

* <code>.t-bold</code> (and alias <code>.t-strong</code>)

    <span class="t-bold">Bold text (default 700)</span> (same as <code>&lt;b&gt;</code> and <code>&lt;strong&gt;</code>)

* <code>.t-semibold</code>

    <span class="t-semibold">Semibold text (default 600)</span>

* <code>.t-normal</code>

    <span class="t-bold t-italic">Returns text to normal weight (default 400) and removes italicization. <span class="t-normal">Perhaps you may find this useful</span> in some circumstances.</span>

* <code>.t-lighter</code> (and alias <code>.t-thin</code>)

    <span class="t-lighter">Thin text (default 200)</span>

* <code>.t-italic</code> (and alias <code>.t-em</code>)

    <span class="t-italic">Italic text</span> (same as <code>&lt;i&gt;</code> and <code>&lt;em&gt;</code>)

<span class="t-bolder">Bolder • <span class="t-italic">Italic</span></span><br>
<span class="t-bold">Bold • <span class="t-italic">Italic</span></span><br>
<span class="t-semibold">Semibold • <span class="t-italic">Italic</span></span><br>
<span class="t-normal">Normal • <span class="t-italic">Italic</span></span><br>
<span class="t-lighter">Lighter • <span class="t-italic">Italic</span></span>

**Note:** Your visitor needs to have lighter (thin), semi-bold and bolder (heavy) fonts in your website’s  (or, webapp’s) typeface installed on their device, or else they may not see these differences.

* <code>.t-strike</code>

    <span class="t-strike">Strikethrough text</span>

* <code>.t-muted</code>

    <span class="t-muted">Muted text (opacity set to 0.5)</span>

* <code>.t-uppercase</code>

    <span class="t-uppercase">Text in uppercase</span> (all capitals)

* <code>.t-lg</code> (aliases: `.big` / `.t-big` / `.t-large`)

    Big text for making <span class="t-lg">something</span> stand out.

    `.t-lg` enlarges text by 1.25em (125%) on small to medium screens and then 1.5em (150%) on medium screens up, to make the enlargement more obvious when viewed at a distance.

    **Note:** `.t-lg` doesn’t work on [headings]({{ '/docs/2-codebase-basics/headings' | url }}) or [heading utilities]({{ '/docs/5-typographic-utilities/headings' | url }}). If you want a heading to be bigger, then use `.t-lg` on a _wrapper_ around the heading. See [large display text]({{ '/docs/5-typographic-utilities/large-display-text' | url }}).

* <code>.t-sm</code> (aliases: `.small`, `.t-small` – or use the `<small>` HTML tag)

    Small text for <span class="t-sm">small print</span>.

    `.t-sm` shrinks text to 0.85em (85%) of it’s size.

* <code>.t-loose</code>

    For when you need some text to have <span class="t-loose">a little extra letter-spacing</span>.

* <code>.t-tight</code>

    For when you need some text to have <span class="t-tight">a little less letter-spacing</span>.

* <code>.t-nowrap</code>

    For when you don’t want a portion of text to wrap on to a newline (not demonstrated here).