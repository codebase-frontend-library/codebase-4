---
title: "Overflows"
layout: layout.njk
prevPage: "/docs/4-layout-utilities/dimensions"
nextPage: "/docs/4-layout-utilities/invisibility"
prevButton: "Dimensions"
nextButton: "Invisibility"
---

<p class="t-lg t-thin">Sometimes you have more content than can fit in a particular region of your layout.</p>

* `.overflow-x`

    Use `.overflow-x` when you may need a sideways scroll. E.g. when you have an [oversized table]({{ '/docs/7-simple-components/tables#oversized-tables' | url }}). Or, you may have a simply sideways-scrolling gallery.

* `.overflow-y`
    
    Use `.overflow-y` when you have content that is too tall for its wrapper. E.g. see [ActivatorJS modal with scrollable content]({{ '/docs/8-alpinejs-components/alpinejs-modals#styling-modal-panels' | url }}) and [Activator modal with scrollable content]({{ '/docs/9-activator-components/activator-modals#styling-modal-panels' | url }}).

* `.overflow-hidden`
    
    Use `.overflow-hidden` when you have too much content for displaying in a block element that has a constrained width and/or height. An example of `.overflow-hidden` in use is [ActivatorJS showhides]({{ '/docs/8-alpinejs-components/alpinejs-showhides' | url }}) and [Activator showhides]({{ '/docs/9-activator-components/activator-showhides' | url }}).