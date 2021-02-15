# Log

**Codebase 4 is very different from Codebase 3, and is not backwards compatible.**

(v.3 will recieve no further development, and will be archived.)

## 15 February 2021 - Codebase 4.0.1

* CSS: `flex-gap` is not (yet) implemented in Safari. Therefore, reverting to the old “negative margins on the flexbox wrapper; positive margins on flex items” technique (hack) to make `.flex-gap` work everywhere.
* JS: Using `Array.from()` in constants that query select for arrays of CSS classes. This fixed a bug where on Mac and iOS Safari was (correctly) not handling scroll locks on other than the first demo modals in the docs.
* Docs: Added scroll locks to demo offcanvas (in AlpineJS components and Activator components).

## 13 February 2021 – Codebase 4.0.0

Codebase 4’s first sync with Github.