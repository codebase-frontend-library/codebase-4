---
title: "Light and Dark Themes"
layout: layout.njk
prevPage: "/docs/1-getting-started/responsive-design"
nextPage: "/docs/2-codebase-basics/element-grid"
prevButton: "Responsive design"
nextButton: "Element grid"
---

<p class="t-lg t-thin">Codebase has simple built-in light and dark CSS themes in <code>codebase-l-d.css</code> – to get you started.</p>

Switch between the light and dark themes in these docs: 

<a class="btn btn-primary theme-toggle mb-3" style="width: 156px;">
  <span class="theme-sun flex flex-middle">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="4" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>
    <span>Light Theme</span>
  </span>
  <span class="theme-moon flex flex-middle">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon-stars" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /><path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" /><path d="M19 11h2m-1 -1v2" /></svg>
    <span>Dark Theme</span>
  </span>
</a>

It is possible to implement light and dark themes entirely in CSS, without using a JavaScript theme switcher to apply the light or dark theme classes (where the visitor’s browser figures out what styles to use, depending on their operating system preferance for light mode or dark mode). Here’s how:

```css
/* Default light theme goes here */

@media (prefers-color-scheme: dark) {

  /* Dark theme override goes here */

}
```

Codebase contains the above as an option for you. You can simply let the visitor’s operating system preferences decide whether your Codebase based website is rendered with its light or dark theme. (or default to light theme, if the they have an older browser or operating system that doesn’t influence `@media (prefers-color-scheme: dark) {...}`).

If that’s the way you want to go, then all you need to do is not include the JavaScript toggler.

But then you’re not making use of the light and dark theme [descendant combinator selector classes](https://www.w3schools.com/css/css_combinators.asp) inside `codebase-l-d.css`. Since you won’t be needing them, you can remove them (comment out their partials) from the SCSS master `codebase-l-d.css` and then preprocess `codebase-l-d.css` again. That will make the CSS 18 KB smaller.

## An Example Theme Switcher JavaScript

What if you want to give your visitors the option to choose between your website’s light and dark themes? 

Then you need a JavaScript powered switcher to insert either the light theme or dark theme _descendant combinator selector classes_, and to enable this selection to be recorded – so that the visitor’s choice persists when they go from one page to another thoughout your website.

What should the initial state be?

It would be good to start on either the light or dark theme depending on the visitor’s preference for light mode or dark mode, that they have set in their device’s operating system.

`codebase-l-d.css` has all the styling you need for this – as a base upon which you design your own website or webapp. In addition, you will need a JavaScipt switcher like the simplest example below, plus a switcher button.

Here is the simplest theme switcher that you can have, comprised of three parts: JavaScript, HTML and CSS:

1. The JavaScript:

    ```js
    (function () {
      'use strict';

      const themeToggle = document.getElementById('theme-toggle');

      themeToggle.addEventListener('click', function() {
        themeSwitcher();
      });

      function themeDark() {
        sessionStorage.setItem("codebase", "dark");
        document.body.classList.remove('theme-light');
        document.body.classList.add('theme-dark');
      }

      function themeLight() {
        sessionStorage.setItem("codebase", "light");
        document.body.classList.remove('theme-dark');
        document.body.classList.add('theme-light');
      }

      function themeSwitcher() {
        if ( sessionStorage.getItem('codebase') === 'dark' ) {
          themeLight();
        } else
        if ( sessionStorage.getItem('codebase') === 'light' ) {
          themeDark();
        }
      }

      function themePref() {
        if ( window.matchMedia('(prefers-color-scheme: dark)').matches ) {
          themeDark();
        } else
        if ( window.matchMedia('(prefers-color-scheme: light)').matches ) {
          themeLight();
        } else {
          // Default is light
          themeLight();
        }
      }

      function themeInit() {
        if ( sessionStorage.getItem('codebase') === 'dark' ) {
          themeDark();
        } else
        if ( sessionStorage.getItem('codebase') === 'light' ) {
          themeLight();
        } else {
          themePref();
        }
      }

      themeInit();

    }());
    ```

2. In the HTML, the theme toggler is simply an `<a>` tag in the site header bar:

    ```html
    <a id="theme-toggle">Theme</a>
    ```

3. And the accompanying CSS is as follows:

    ```css
    #theme-toggle:hover {
      cursor: pointer;
    }
    body.theme-light #theme-toggle::before {
      content: 'Dark ';
    }

    body.theme-dark #theme-toggle::before {
      content: 'Light ';
    }
    ```
    Be sure to include the necessary _spaces_ after the added content words `Light ` and `Dark `.

What this JavaScript theme switcher is doing:

1. When the visitor first comes to the website, the theme switcher initially sets a [sessionStorage data item](https://javascript.info/localstorage#sessionstorage) in their browser cache, for storing the visitor’s operating system preference for light or dark theme. The toggler script then adds either `.theme-dark` or `.theme-light` to the `<body>` tag of the page that the visitor is visiting. And the website will be dressed with dark or light styling, from `codebase-l-d.css`.

2. When the visitor clicks the theme switcher button, the theme switcher script swaps the state setting in the sessionStorage data item _and_ it swaps the `.theme-dark` / `.theme-light` class in the `<body>` tag. And the current webpage will be dressed dark or light, accordingly.

3. When the visitor clicks on a link to visit another page in your website, for each page being visited the sessionStorage is read and the theme class is selected and added accordingly. This enables the selected theme (light or dark) to persist while the visitor ges from page to page through the website. And this next webpage will be dressed dark or light, accordingly.

4. Finally, when the visitor closes the tab or closes or the browser (either way, they’ve finished their session on our website), then this sessionStorage data item is deleted – it is only a _session_ storage item, therefore it does not persist after the visitor’s has ended their session on your website.

## The Codebase Light and Dark Themes CSS

The Codebase SCSS library is built from _two_ index files: `codebase.scss` and `codebase-l-d.scss`.

* `codebase.scss` gets only the default partials
* `codebase-l-d.scss` also gets the default partials plus three more:

```scss
// THEMES
@import "05_themes/__theme-dark"; // uses `prefers-color-scheme: dark`
// Want dark the theme but won’t be using a theme-switcher? Comment out the last two imports below.
@import "05_themes/_theme-dark-classes";
@import "05_themes/_theme-light-classes";
```

The first SCSS partial `__theme-dark.scss` overrides the default light theme in Codebase by using:

```scss
@media (prefers-color-scheme: dark) {
  // Dark theme overrides
}
```

The final two partials contain the `body.theme-dark` and `body.theme-light` _descendant combinator selector classes_ that override all of the colors of text, borders and backgrounds throughout the default [Codebase SCSS library]({{ '/docs/1-getting-started/codebase-scss-library' | url }}).

***

If you want the light and dark themes in your design, but you don’t want a toggler (i.e. you don’t want to give the visitor a _choice_), then don’t import final two partials. The simplest way is to comment them them out from your `codebase-l-d.scss` so that they won't be pre-processed and included in your `codebase-l-d.css`:

```scss
// THEMES
@import "05_themes/__theme-dark"; // uses `prefers-color-scheme: dark`
// Want dark the theme but won’t be using a theme-switcher? Comment out the last two imports below.
// @import "05_themes/_theme-dark-classes";
// @import "05_themes/_theme-light-classes";
```

This will make your own preprocessed `codebase-l-d.scss` 18 KB smaller in filesize.

(And then you won’t need a theme switcher JavaScript at all, or a theme toggler button.)