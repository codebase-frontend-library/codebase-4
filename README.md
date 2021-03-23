# Codebase

The super tiny website frontend library.

_Version 4.0.6_

## Features

* Designed as a frontend CSS/JS codebase for content management system themes and static site generator projects
* Just use it in your HTML: no NPM or other installation required – no config – no need to purge unused CSS
* Small but powerful CSS:
  * Base (default light theme only): `codebase.css` (37 KB)
  * With dark and light theme CSS classes: `codebase-l-d.css` (62 KB)
* JS options:
  * Use Codebase’s own `activator.js` (3 KB) for dropdowns, modals, tabs etc.
  * Alternatively, use [AlpineJS](https://github.com/alpinejs/alpine) for more component functionality
* Sass (SCSS) library
* Responsive layouts and typography
* Does most things most web designers want:
  * Columnar grid system (uses _CSS grid_)
  * Flexbox system
  * Utility classes for layout positioning, dimensions, overflows, etc.
  * Utility classes for decoration and enhanced typography, using a soft element grid (0.5rem units)
  * “Utility first” approach for building HTML components.
* Highly customizable
* Modern browser compatible
* Extensive documentation

***

[View the docs](https://codebase-frontend-library.github.io/codebase-4/) &rarr;

***

Production Codebase CSS and Activator JS (ES5) are in the Docs `dist/` folder - see [https://github.com/codebase-frontend-library/codebase-4/tree/master/docs/dist](https://github.com/codebase-frontend-library/codebase-4/tree/master/docs/dist)

Codebase SCSS and Activator JS ES6 are in the Source `codebase/` folder - see https://github.com/codebase-frontend-library/codebase-4/tree/master/src/codebase

***

If you still need to support Internet Explorer 11 – Codebase can do that, although IE11 is not officially supported by Codebase. There are some things with IE11 that you can’t do; and if you want to use Activator then you need to switch to using jQuery v.2.x and `alpine.jquery.js`. For more information See [Codebase and Internet Explorer 11](https://github.com/codebase-frontend-library/codebase-4/blob/master/ie11-support.md).

***

Codebase CSS and Activator JS have been built using [Gulp](https://gulpjs.com/) with plugins for [Sass](https://sass-lang.com/) and [Babel](https://babeljs.io/). Documentation has been built using [Eleventy](https://www.11ty.dev/). Docs demo icons are from [Tabler icons](https://tablericons.com/).