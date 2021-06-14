# Log

## 14 June 2011 - Codebase 4.0.10

* Fixed a bug in `activator.jquery.js` that interfered with resetting Activator components after moving focus off and back on to them (now they close with a single click).
* Added media query breakpoint widths to `.flex-gap` (which is handled by margins not flexbox gap, for backwards compatibility). Now the `.flex-gap` only take effect above the `.flex` (all), or `.flex-sm`/ `.flex-md`/ `.flex-lg` breakpoint (and therefore smaller layouts are not messed up by unwanted margins).
* Combined several media queries in the layout utilities.

## 4 June 2021 - Codebase 4.0.9

* Reduced the heading sizes a little.

## 19 May 2021 - Codebase 4.0.8

* Moved `scroll-behavior: smooth` from body{} to html{}.
* Minor snagging since 4.0.7.

## 30 March 2021 - Codebase 4.0.7

* Improved the UI colors (including form element focus, highlight/mark and select colors).
* Made hover states to lighten in dark theme.
* Increased H2, .h2 and .t-semibold font weight to 600.

## 23 March 2021 - Codebase 4.0.6

* Bug fixes to `activator.js` and `activator.jquery.js`, to reset the _control_ button after clicking a _close_ button.
* Refactored the _modal as lightbox_ examples for Activator.
* Removed some redundant inline utility classes (large and small sizes).
* Improved `t-long-read`.
* In the docs, moved AlpineJS (CDN source) and `activator.js` to the HTML `<head>` and added the `defer` attribute to the script tag.

## 16 March 2021 – Codebase 4.0.5

* Improvements to `.menu`
* Bug fix in `activator.js` (& `activator.jquery.js`), so that a second click on a control also releases the (optional) scroll-lock.
* Added `.table-fixed`.

## 6 March 2021 – Codebase 4.0.4

* Minor improvements to typography: 
    * slightly reducing H3 and H4 heading sizes, so that there is more difference between couplets of H2/H3 and H3/H4;
    * Adding margin below OL and UL, so that it is the same as for paragraphs and headings (instead of the space between each LI).
* Downloadable zipped `dist` folder, prepared using `gulp-zip`.
* Improvements to the docs.

## 27 February 2021 - Codebase 4.0.3

* Added the `.panel-responsive` component.
* Minor snagging.
* Improvements to the docs.

## 20 February 2021 - Codebase 4.0.2

See: [ie11-support.md](ie11-support.md)

* CSS: renamed the CSS grid `.container` as `.container-grid`, and exposed the (was false variable toggled) traditional `.container` (that has x-axis margin auto centering). Similarly exposed the full-bleed utility (uses nrgative margin and CSS transform) and renamed the CSS grid bleeds as `.container-grid-full-bleed` etc.
* CSS: added a responsive 12-column flexbox pseudo grid.
* CSS: added classless styling for the `<details>` and `<summary>` tags.
* CSS: Adjusted the UI secondary and success colors.

## 15 February 2021 - Codebase 4.0.1

* CSS: `flex-gap` is not (yet) implemented in Safari. Therefore, reverting to the old “negative margins on the flexbox wrapper; positive margins on flex items” technique (hack) to make `.flex-gap` work everywhere.
* JS: Using `Array.from()` in constants that query select for arrays of CSS classes. This fixed a bug where on Mac and iOS Safari was (correctly) not handling scroll locks on other than the first demo modals in the docs.

## 13 February 2021 – Codebase 4.0.0

* Codebase 4’s first sync with Github.