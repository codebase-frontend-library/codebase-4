---
title: "Simple Components"
headerTitle: "Simple Components in Codebase"
layout: layout.njk
prevPage: "/docs/6-decoration-utilities/images"
nextPage: "/docs/7-simple-components/menus"
prevButton: "Images"
nextButton: "Menus"
---

<p class="t-lg t-thin">Codebase has several simple component examples, that are mostly assembled from utility classes.</p>

(I’m calling a Codebase component “simple” if it _doesn’t require  JavaScript_ for functionality.)

All Codebase components have been designed and built using a “utility first” approach. This means that first, utility classes (and sometimes, flex layout classes) have been used to scaffold the component. For many components, nothing else is required. Only when a little more is required does Codebase add in some bespoke component CSS.

There are two occasions when Codebase uses bespoke component CSS classes:

1. Where it makes more sense to apply a CSS cascade that affects nested HTML elements.
2. For complex Codebase components that require some added features (e.g. for CSS transitions) for visualising their change of state.

Simple Codebase components:

* [Menus]({{ '/docs/7-simple-components/menus' | url }})
* [Heros]({{ '/docs/7-simple-components/heros' | url }})
* [Tables]({{ '/docs/7-simple-components/tables' | url }})
* [Buttons]({{ '/docs/7-simple-components/buttons' | url }})
* [Badges]({{ '/docs/7-simple-components/badges' | url }})
* [Labels]({{ '/docs/7-simple-components/labels' | url }})
* [Media objects]({{ '/docs/7-simple-components/media-objects' | url }})
* [Cards]({{ '/docs/7-simple-components/cards' | url }})