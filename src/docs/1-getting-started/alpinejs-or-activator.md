---
title: "AlpineJS or Activator"
headerTitle: "Using AlpineJS or Activator in Codebase"
layout: layout.njk
prevPage: "/docs/1-getting-started/codebase-scss"
nextPage: "/docs/1-getting-started/responsive-design"
prevButton: "Codebase SCSS"
nextButton: "Responsive design"
---

<p class="t-lg t-thin">Codebase plays well with <a href="https://github.com/alpinejs/alpine">AlpineJS</a>. Alpine is recommended with Codebase in most circumstances.</p>

But if you only need really simple functionality, Codebase also has its own miniscule script called [Activator]({{ '/docs/8-alpinejs-components/about-alpinejs-components' | url }}).

The JavaScript powered components of earlier versions of Codebase required jQuery, until Codebase 3 went totally “vanilla JavaScript” in 2019. While working on Codebase 4, I discovered the AlpineJS frontend JavaScript framework. I soon saw that it could do all that I wanted and much more.

For a while I considered not having any accompanying JavaScipt for Codebase 4, and just demonstrating how Codebase plays well with Alpine JS. Then I found a situation where Alpine couldn’t be used. For a CMS project where we needed to add a simple tab system directly into a page _via the editor_ (it happened to be the HubSpot editor, but the same thing happens in other CMS editors), the unrecognised Alpine declarations (`x-show`, `x-bind`, `x-model`, etc.) were stripped out, removing the functionality that I needed. So, Codebase 4 comes with a tiny JavaScript called `activator.js` – only 3 KB, minified.

Veteran web designers may still prefer the way `activator.js` does things. But do try to discover for yourself that AlpineJS is more powerful, because of its declarative approach to DOM manipulation. I recommend Alpine over `activator.js` for most use cases. It really is worth you taking time to learn something new.

Besides the Codebase-based AlpineJS demos in these docs, there are plenty of tutorials and videos out there showing you how to use Alpine.

<div class="grid-sm-2-cols grid-gap my-6 t-center">
  <a class="mb-3 btn btn-primary btn-lg rounded-pill" href="{{ '/docs/8-alpinejs-components/about-alpinejs-components' | url }}">Codebase with AlpineJS</a>
  <a class="mb-3 btn btn-secondary btn-lg rounded-pill" href="{{ '/docs/9-activator-components/about-activator-components' | url }}">Codebase with Activator</a>
</div>

**Note:** Converting Codebase components from Activator to AlpineJS, or _vise versa_, involves more than simply swapping out one script for the other. The HTML also needs to be reconfigured. AlpineJS uses its own _declarations_ as HTML attributes. The way that the Codebase `activator.js` works is completely different – it uses `id`, `aria` attributes, `data` attributes.