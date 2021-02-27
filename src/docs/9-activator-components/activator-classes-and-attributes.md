---
title: "Activator Classes and Attributes"
layout: layout.njk
prevPage: "/codebase-4/docs/9-activator-components/about-activator-components"
nextPage: "/codebase-4/docs/9-activator-components/activator-showhides"
prevButton: "About Activator components"
nextButton: "Activator showhides"
---

## Element CSS Classes (Prefixes and Suffixes)

* `class="thing-*"`
  
    The **Activator component identifier CSS class prefix**. `thing-` can be anything! In Codebase, it’s `showhide-`, `dropdown`, `modal-`, `offcanvas-`, `tab-`, `accordion-`, or `slide-`. (The `thing-` must be a single (or compound) word, followed by a hyphen.)
    
    The **same `thing-` prefix** must be used on the components’ control element(s), panel element(s), and wrapper element (if required) in your component.

* `class="thing-control"` and `class="thing-panel"`

    Components have one or more pairs of **control** elements and associated **panel** elements, identified by the CSS class suffix `-control` and `-panel`. Toggles have only one control/panel pair whereas tabs have multiple control/panel pairs. The CSS class prefix (here examplified as `thing` can be anything, but it will be the same within these pairs.)

* `class="thing-wrapper"`

    Some Activator components also require a wrapper element. E.g. to identify tabs as siblings for purposes of the familiar “dismiss siblings” operation in tab sets. E.g. The modal panel needs a wrapper around itself and its associated backdrop element.

## Activator Types

* `data-control="toggle"` or `data-control="tab"`

    Activator components are of two types: either **toggle** (e.g. showhide, dropdown, modal, offcanvas) or **tab** (e.g. for tab systems, accordions, simple slideshows). `data-control` attributes must be placed on **control** elements.

    <p class="panel-responsive bl-heavy b-color-secondary bg-color-secondary-alt">Toggle components can also be dismissed with the Escape key.</p>

## Activator Hookups

* **Control:** `aria-controls="unique-name"` / **panel:** `id="unique-name"`

    Every control element must have an `aria-controls` attribute that identifies its accociated panel element `id`.

    <p class="panel-responsive bl-heavy b-color-secondary bg-color-secondary-alt">Toggle components (showhide, dropdown, modal, offcanvas) can only have one control and one panel. Tab components (tabs, accordions, slideshows) can, and should, have more than one control/panel pair. But in either type or component, each control associates with only its respective panel, via the <code>aria-controls</code>/<code>id</code> hookup.</p>

## Activation Class (for the Active State)

* `.active`

    Clicking a control element will sometimes toggle or sometimes add an `active` CSS class on **both the control and its panel**. (Toggles can be toggled, whereas tabs can only add the active class.)
    
    <p class="panel-responsive bl-heavy b-color-warning bg-color-warning-alt">In tab sets, you must also set up (your chosen) first tab’s control/panel pair with the <code>.active</code> state in your HTML.</p>
    

## ARIA Expanded

* `aria-expanded="false"` or `aria-expanded="true"`

    Clicking a control element will also toggle its state between `aria-expanded="false"` and `aria-expanded="true"`, for indicating to visualy impaired people whether the associate panel is expanded or not.

    <p class="panel-responsive bl-heavy b-color-warning bg-color-warning-alt">In tab sets, you must also set up (your chosen) first tab’s control/panel pair with the <code>aria-expanded="true"</code> state in your HTML.</p>

## Control State Indicators

* `class="control-indicator-chevron"` or `class="control-indicator-plus"`

    **Optional – for toggles only.** Adds either an SVG chevron (pointing down) or SVG plus to the control element, using the `::after` pseudo element. When the control element has the `.active` class, the chevron flips to point up, or the plus is swapped for a minus.

## Click Away to Dismiss

* **Control:** `data-click-away="true"`

    **Optional – for toggles only.** Add the optional `data-click-away="true"` to the control element for “click away” (a.k.a. “click outside”) to dismiss functionality, e.g. on dropdowns, modals and offcanvas sidebars toggle components. Clicking anywhere outside the component’s control or panel elements will cause the `.active` class to be removed from both.
    
    (Do not use on tabs.)

## Scroll Lock

* **Control:** `data-scroll-lock="true"`

    **Optional – for toggles only.** Add the optional `data-click-away="true"` to the control element if your component needs to prevent the scrolling of the webpage while the component panel is active (e.g. for modals). When the component panel is active, CodebaseJS will add the CSS class `.body-scroll-lock` to the `<body>` element, and this is what locks the page position to prevent it being scrolled (there’s styling for this CSS class in Codebase, that actually performs the scroll lock).
    
    The reset (deacivation) of the component will trigger the removal of the scroll lock.