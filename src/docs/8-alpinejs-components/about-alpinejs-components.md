---
title: "AlpineJS Components Intro"
headerTitle: "AlpineJS Components in Codebase"
layout: layout.njk
prevPage: "/docs/7-simple-components/cards"
nextPage: "/docs/8-alpinejs-components/alpinejs-showhides"
prevButton: "Cards"
nextButton: "AlpineJS showhides"
---

<p class="t-lg t-thin">Codebase has several component examples such as dropdowns, tabs and modals, that require JavaScript for their functionality. This functionality can by supplied by <a href="https://github.com/alpinejs/alpine">AlpineJS</a>.</p>

<div class="mb-3 panel-responsive bl-heavy b-color-primary bg-color-primary-alt">
<strong>Note:</strong> Neither Codebase nor these docs include AlpineJS. You will need to source the latest version for yourself from <a href="https://github.com/alpinejs/alpine">https://github.com/alpinejs/alpine</a>, or link to it from a CDN (e.g. <a href="https://www.jsdelivr.com/package/npm/alpinejs">https://www.jsdelivr.com/package/npm/alpinejs</a>).
</div>

Simple HTML setup:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Codebase</title>
  <link rel="stylesheet" href="dist/codebase.css">
  <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.1/dist/alpine.min.js" defer></script>
</head>
<body>
  
  <h1>Hello world</h1>

</body>
</html>
```

The example above links to the default `codebase.css`. If you want to use [Codebase with light and dark styles]({{ '/docs/1-getting-started/light-and-dark-themes' | url}}), you will need to link to `codebase-l-d.css` instead, and use a theme switcher JavaScript to toggle `.theme-dark` / `.theme-light` in your HTML `<body>` tag.


The following are several examples of Codebase components that can be powered by Alpine:

* [Showhides]({{ '/docs/8-alpinejs-components/alpinejs-showhides' | url }})
* [Dropdowns]({{ '/docs/8-alpinejs-components/alpinejs-dropdowns' | url }})
* [Modals]({{ '/docs/8-alpinejs-components/alpinejs-modals' | url }})
* [Offcanvas]({{ '/docs/8-alpinejs-components/alpinejs-offcanvas' | url }})
* [Tabs]({{ '/docs/8-alpinejs-components/alpinejs-tabs' | url }})
* [Accordions]({{ '/docs/8-alpinejs-components/alpinejs-accordions' | url }})
* [Slideshows]({{ '/docs/8-alpinejs-components/alpinejs-slideshows' | url }})


