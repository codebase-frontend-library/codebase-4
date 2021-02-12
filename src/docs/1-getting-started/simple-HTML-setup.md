---
title: "Simple HTML Setup"
headerTitle: "Simple HTML Setup"
layout: layout.njk
nextPage: "/docs/1-getting-started/codebase-scss-library"
nextButton: "The Codebase SCSS Library"
---

<p class="t-lg t-thin">You can start working immediately with Codebase in a simple HTML setup.</p>

If you have knowlesge of Sass/SCSS and a preprocessor, you can override the Codebase `!default` SCSS variables – see the [Codebase SCSS library](/docs/1-getting-started/codebase-scss-library).

Use use the Codebase [Activator](/docs/9-activator-components/about-activator-components/) JavaScript to power Codebase frontend components, such as dropdowns, tabs and modals. If you want even more JavaScript power, use [AlpineJS](https://github.com/alpinejs/alpine) instead. These docs will show you how to use both – see [Activator or AlpineJS components](/docs/1-getting-started/alpinejs-or-activator).

### Using the Default Codebase CSS (and Activator JS)

1. Grab `codebase.css` of your choice and, maybe, `activator.js` from the `dist/` folder in this repository, and put them in your own project directory (folder).

2. Create your first HTML page – e.g. a starter example from below.

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

4. Make the `/path/to/your/codebase.css` follow your project’s directory structure to link to your `codebase.css` file.

### Using AlpineJS Instead of Activator

If you use AlpineJS instead of Activator, then you will want the [AlpineJS components](/docs/8-alpinejs-components/about-alpinejs-components) section of these docs.

### Using the Codebase Light and Dark Themes

Link to `codebase-l-d.css` in the `<head>` instead of `codebase.css`.

Include a theme switcher JavaScript – to programatically insert either `.theme-light` or `.theme-dark` in your webpage’s opening `<body>` tag.

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

Learn about Codebase’s [light and dark themes, and example theme-switcher](/docs/1-getting-started/light-and-dark-themes).