---
title: "Introduction"
layout: layout.njk
nextPage: "/docs/1-getting-started/codebase-scss-library"
nextButton: "The Codebase SCSS library"
---

<p class="t-lg t-thin">You can start working immediately with Codebase in a simple HTML setup.</p>

<div class="grid-sm-2-cols grid-gap my-6 t-center">
  <a class="mb-3 btn btn-primary btn-lg rounded-pill" href="{{ '/dist.zip' | url }}">Download Codebase (dist.zip)</a>
  <a class="mb-3 btn btn-secondary btn-lg rounded-pill" href="https://github.com/codebase-frontend-library/codebase-4">Codebase GitHub repostory</a>
</div>

Download `dist.zip`, extract (unzip) it and you will find the `dist/` folder containing production-ready stylesheets, scripts and cource maps:

```js
dist/
 |  // CSS
 ├─ codebase.css        // Codebase ── with default light theme only.
 ├─ codebase-l-d.css    // Codebase & built-in light and dark themes.
 |  // JS
 ├─ activator.js        // Optional: use for Activator Components.
 ├─ activator.jquery.js // Optional: use if you need to support IE11.
 |  // Sourcemaps
 ├─ codebase.css.map
 ├─ codebase-l-d.css.map
 └─ activator.js.map
```

## The Stylesheets

The default version of Codebase stylesheet `codebase.css` has everything with the default light theme applied throughout.

`codebase-l-d.css` is the same as `codebase.css` but with built-in light and dark themes. These are:

* A dark theme media query preference override
* CSS classes light an dark themes that require either `.theme-light` or `.theme-dark` applied to the `<body>` tag by a theme switcher Javascript.

<p class="panel-responsive bl-heavy b-color-primary bg-color-primary-alt">Get to know Codebase by using <code>codebase.css</code> first. It may be all you need, if you don’t want both light and dark themes. If you do want light and dark themes, you will probably want to start with <code>codebase.css</code> when you begin your prototyping.</p>

See below for more information on [light and dark themes](#using-the-codebase-light-and-dark-themes) in Codebase.

## The SCSS

The SCSS files are [also available in this repository](https://github.com/codebase-frontend-library/codebase-4/tree/master/src/codebase/scss). If you have knowledge of Sass/SCSS and a preprocessor, you can override the Codebase `!default` SCSS variables.

See the [Codebase SCSS library]({{ '/codebase-4/docs/1-getting-started/codebase-scss-library' | url }}) for more information.

## The JavaScripts

Codebase comes with a tiny, dependency-free JavaScript named `activator.js` for powering HTML components such as dropdowns, tabs, and modals. See [Codebase Activator Components]({{ '/docs/9-activator-components/about-activator-components' | url }}).

There is also a jQuery dependant version named `activator.jquery.js` that you may use instead or `activator.js` – if you need to support old browsers such as IE11. See [Codebase and Internet Explorer 11](https://github.com/codebase-frontend-library/codebase-4/blob/master/ie11-support.md). (Requires an older version of jQuery, &lt;= 2.x).

## Using AlpineJS Instead of Activator

If you want more power, and if you are famililar with the modern _declarative_ approach to building JS controlled HTML components, then I recommend you switch to using [AlpineJS](https://github.com/alpinejs/alpine) with Codebase instead of Activator.

For more information see [Using AlpineJS or Activator in Codebase]({{ '/docs/1-getting-started/alpinejs-or-activator/' | url}}).

<p class="panel-responsive bl-heavy b-color-secondary bg-color-secondary-alt">Alpine components are built differently to Activator components – it’s not simply about swapping the JS.If you want to use AlpineJS instead of Activator, then you will want the <a href="{{ '/docs/8-alpinejs-components/about-alpinejs-components/' | url}}">AlpineJS Components</a> section of these docs.</p>

## Simple HTML Setup

1. [Download]({{ '/dist.zip' | url }}) and extract (unzip) the Codebase `dist/` folder into your project.

2. Create your first HTML page – e.g. copying the starter example below.

3. Link to `codebase.css` in the HTML `<head>`, and either `activator.js` or `alpine.js` just inside the closing  `</body>` tag.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Codebase</title>
  <link rel="stylesheet" href="dist/codebase.css">
</head>
<body>
  
  <h1>Hello world</h1>

  <script src="dist/activator.js"></script>
  <!-- Or link to alpine.js -->
</body>
</html>
```

Be sure to make the `/path/to/your/codebase.css` (and `/path/to/your/activator.js`) follow your project’s directory structure to link to your files.

## Using the Codebase Light and Dark Themes

`codebase-l-d.css` contains a system of [descendant combinator selector classes](https://www.w3schools.com/css/css_combinators.asp) for switching between light and dark themes.

This means that you don’t need to change your HTML or chosen Codebase CSS classes – you can easily swap from `codebase.css` to `codebase-l-d.css`. Simply link to `codebase-l-d.css` in the `<head>` instead of `codebase.css`.

If you do that, you may see no change at all – if you are using device that has no theme preference in its operating system settings, or if you have set your OS preferences to “light theme”. But if you have your OS set to “dark theme”, then your web browser knows about this, and it will render your Codebase based project with a `@media (prefers-color-scheme: dark) {...}` powered dark theme.

You could just stay with this arrangement: letting the visitor’s OS determine whether your website renders on their device as light or dark. Alternatively, you can include a theme switcher JavaScript – to programatically insert either `.theme-light` or `.theme-dark` in your webpage’s opening `<body>` tag. These two `<body>` classes will override the default (light) or `@media (prefers-color-scheme: dark) {...}` dark mode.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Codebase</title>
  <link rel="stylesheet" href="dist/codebase-l-d.css">
</head>
<body>
  
  <h1>Hello world</h1>

  <script src="dist/activator.js"></script>
  <!-- Or link to alpine.js -->
  
  <!-- Add your theme-switcher script here. -->
</body>
</html>
```

Learn more about Codebase’s [light and dark themes, and example theme-switcher]({{ '/docs/1-getting-started/light-and-dark-themes' | url }}).