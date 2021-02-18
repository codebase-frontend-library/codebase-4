# Log

## 18 February 2021 - Codebase 4.0.2

* CSS: [Breaking change:] renamed the CSS grid `.container` as `.container-grid`, and exposed the (was false variable toggled) traditional `.container` (that has x-axis margin auto centering). Similarly exposed the full-bleed utility (uses nrgative margin and CSS transform) and renamed the CSS grid bleeds as `.container-grid-full-bleed` etc. All in an effort to support IE11 (2013) - as is the 12-column flexbod pseudo grid, logged below.
* CSS: added a responsive 12-column flexbox pseudo grid.
* CSS: added classless styling for the `<details>` and `<summary>` tags.
* Docs: updated the container and bleeds pages.
* Docs: added 12-column flexbox pseudo grid to the flex system page.
* Docs: added a Details page.

## 15 February 2021 - Codebase 4.0.1

* CSS: `flex-gap` is not (yet) implemented in Safari. Therefore, reverting to the old “negative margins on the flexbox wrapper; positive margins on flex items” technique (hack) to make `.flex-gap` work everywhere.
* JS: Using `Array.from()` in constants that query select for arrays of CSS classes. This fixed a bug where on Mac and iOS Safari was (correctly) not handling scroll locks on other than the first demo modals in the docs.
* Docs: Added scroll locks to demo offcanvas (in AlpineJS components and Activator components).

## 13 February 2021 – Codebase 4.0.0

Codebase 4’s first sync with Github.