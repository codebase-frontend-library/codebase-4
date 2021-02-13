---
title: "SCSS Library"
headerTitle: "The Codebase SCSS Library"
layout: layout.njk
prevPage: "/codebase-4/docs/1-getting-started/simple-html-setup"
nextPage: "/codebase-4/docs/1-getting-started/alpinejs-or-activator"
prevButton: "Simple HTML setup"
nextButton: "AlpineJS or Activator"
---

<p class="t-lg t-thin">Codebase is, primarily, a highly versatile SCSS library, preprocessed and minified to CSS.</p>

You can just drop the CSS into your ptoject and use it as-is, but Sass/SCSS aficionados may wish to override the any or many of the `!default` variables in `_src/codebase/scss/00_setup/__default-variables.scss`. This can be done as follows:

```scss
// (1.) In your master SCSS file, override the
// Codebase `!default` variables, e.g.

$color-background: lightseagreen;

// (2.) After your overrides, import the 
// Codebase master file into your SCSS

@import "path/to/codebase/scss/codebase.scss";

// (3.) Set your project SCSS styles 
// after importing Codebase

body {

  // This below will now receive your override 
  // for $color-background, instead of the 
  // `$color-background: #ffffff !default` 
  // from Codebase
  background: $color-background;
}
```
```css
/* (4.) Therefore, your intended CSS 
        output will be... */

body {
  background: lightseagreen;
}
```