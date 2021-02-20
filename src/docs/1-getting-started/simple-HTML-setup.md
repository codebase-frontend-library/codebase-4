---
title: "Simple HTML Setup"
headerTitle: "Simple HTML Setup"
layout: layout.njk
nextPage: "/codebase-4/docs/1-getting-started/codebase-scss-library"
nextButton: "The Codebase SCSS Library"
---

<p class="t-lg t-thin">You can start working immediately with Codebase in a simple HTML setup.</p>

<div class="grid-sm-2-cols grid-gap my-6 t-center">
  <a class="mb-3 btn btn-primary rounded-pill" href="https://github.com/codebase-frontend-library/codebase-4/archive/master.zip">Download Codebase (.zip)</a>
  <a class="mb-3 btn btn-secondary rounded-pill" href="https://github.com/codebase-frontend-library/codebase-4">Codebase GitHub repostory</a>
</div>

Codebase itself is in the [dist/](https://github.com/codebase-frontend-library/codebase-4/tree/master/docs/dist) folder.

## The Codebase Stylesheets

In the `dist/` folder you will find the default version of Codebase stylesheet `codebase.css`. The default has only the Codebase light theme applied throughout. Then there is Codebase with light and and dark theme classes `codebase-l-d.css`.

If you have knowledge of Sass/SCSS and a preprocessor, you can override the Codebase `!default` SCSS variables – see the [Codebase SCSS library](/codebase-4/docs/1-getting-started/codebase-scss-library).

## The Codebase JavaScript, `activator.js`

You will find Codebase’s optional JavaScript `activator.js` also in the `dist/` folder.

There are two ways of powering HTML components (and therefore, two kinds of HTML/JS components) in Codebase:

* [Activator](/codebase-4/docs/9-activator-components/about-activator-components/) can power components such as dropdowns, tabs and modals.

* If you want even more JavaScript power, use [AlpineJS](https://github.com/alpinejs/alpine) instead.

These docs will show you how to use both – see [Activator or AlpineJS components](/codebase-4/docs/1-getting-started/alpinejs-or-activator).

### Getting Started

_The first time you use Codebase, you’ll want to start with_ `codebase.css`.

`codebase.css` has everything except the switchable colors for [light and dark themes](#using-the-codebase-light-and-dark-themes). Even if you intend to develop a website with light and dark themes, you’ll probably want to use `codebase.css` in your early prototyping.

1. Grab `codebase.css` and, maybe, `activator.js` from the `dist/` folder in this repository, and put them in your own project directory (folder).

2. Create your first HTML page – e.g. copying the starter example below.

3. Link to `codebase.css` in the HTML `<head>`, and either `activator.js` just inside the closing  `</body>` tag.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Codebase</title>
  <link rel="stylesheet" href="codebase.css">
</head>
<body>
  
  <h1>Hello world</h1>

  <script src="activator.js"></script>
  <!-- Or link to AlpineJS -->
</body>
</html>
```

Be sure to make the `/path/to/your/codebase.css` follow your project’s directory structure to link to your `codebase.css` file.

If you want to use AlpineJS instead of Activator, then you will want the [AlpineJS components](/codebase-4/docs/8-alpinejs-components/about-alpinejs-components) section of these docs.

## Using the Codebase Light and Dark Themes

`codebase-l-d.css` contains a system of [descendant combinator selector classes](https://www.w3schools.com/css/css_combinators.asp) for switching between light and dark themes.

This means that you don’t need to change your HTML or chosen Codebase CSS classes – you can easily swap from `codebase.css` to `codebase-l-d.css`. Simply link to `codebase-l-d.css` in the `<head>` instead of `codebase.css`.

If you do that, you may see no change at all – if you are using device that has no theme preference in its operating system settings, or if you have set your OS preferences to “light theme”. But if you have your OS set to “dark theme”, then your web browser knows about this, and it will render your Codebase based project with a `@media (prefers-color-scheme: dark) {...}` powered dark theme.

You could just stay with this arrangement: letting the visitor’s OK determine whether your website renders as light or dark. Alternatigely, you can include a theme switcher JavaScript – to programatically insert either `.theme-light` or `.theme-dark` in your webpage’s opening `<body>` tag. These two `<body>` classes will override the default (light) or `@media (prefers-color-scheme: dark) {...}` dark mode.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Codebase</title>
  <link rel="stylesheet" href="codebase-l-d.css">
</head>
<body>
  
  <h1>Hello world</h1>

  <script src="activator.js"></script>
  <!-- Or link to AlpineJS -->
  
  <!-- Add your theme-switcher script here. -->
</body>
</html>
```

Learn more about Codebase’s [light and dark themes, and example theme-switcher](/codebase-4/docs/1-getting-started/light-and-dark-themes).