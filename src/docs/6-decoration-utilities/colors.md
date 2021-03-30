---
title: "Color Utilities"
layout: layout.njk
prevPage: "/docs/6-decoration-utilities/box-shadows"
nextPage: "/docs/6-decoration-utilities/images"
prevButton: "Box shadows"
nextButton: "Images"
---

<p class="t-lg t-thin">Codebase’s default variable file contains six color swatches that are used for the Codebase user interface (UI) colors – i.e. <span class="label label-primary">primary</span>, <span class="label label-secondary">secondary</span>, <span class="label label-success">success</span>, <span class="label label-warning">warning</span>, <span class="label label-danger">danger</span>, and <span class="label">default</span>.</p>

These colors are deployed on utility classes for:

* backgrounds `.bg-color-{colorname}`
* borders `.b-color-{colorname}`
* text `.t-color-{colorname}`.

## UI Color Utilities

These are the Codebase colors. (All colors can be changed in the SCSS default variables.)

<div class="flex flex-space-around flex-gap flex-wrap t-center">
  <div class="mb-3 flex flex-column flex-middle">
    <div class="mb-1 square-lg rounded-full bg-color-primary"></div>
    <code>-color-primary</code>
  </div>
  <div class="mb-3 flex flex-column flex-middle">
    <div class="mb-1 square-lg rounded-full bg-color-secondary"></div>
    <code>-color-secondary</code>
  </div>
  <div class="mb-3 flex flex-column flex-middle">
    <div class="mb-1 square-lg rounded-full bg-color-success"></div>
    <code>-color-success</code>
  </div>
  <div class="flex flex-column flex-middle">
    <div class="mb-1 square-lg rounded-full bg-color-warning"></div>
    <code>-color-warning</code>
  </div>
  <div class="mb-3 flex flex-column flex-middle">
    <div class="mb-1 square-lg rounded-full bg-color-danger"></div>
    <code>-color-danger</code>
  </div>
  <div class="mb-3 flex flex-column flex-middle">
    <div class="mb-1 square-lg rounded-full bg-color-default"></div>
    <code>-color-default</code>
  </div>
</div>

`-alt` versions of the UI colors are also available as utility classes. These are much paler than the regular UI colors in light mode – or, much darker in dark mode. Use the `-alt` colors for creating call-to-action panels, notifications, highlights, highlighted table rows, etc.

As with the alternative background color (`color-background-alt`, see below), these `-alt` UI colors have been chosen so that ordinary text is still readable over these colors, whether in the light theme or the dark theme. (Hyperlinks are still readable too.)

<div class="flex flex-space-around flex-gap flex-wrap t-center">
  <div class="mb-3 flex flex-column flex-middle">
    <div class="mb-1 square-lg rounded-full bg-color-primary-alt"></div>
    <code>-color-primary-alt</code>
  </div>
  <div class="mb-3 flex flex-column flex-middle">
    <div class="mb-1 square-lg rounded-full bg-color-secondary-alt"></div>
    <code>-color-secondary-alt</code>
  </div>
  <div class="mb-3 flex flex-column flex-middle">
    <div class="mb-1 square-lg rounded-full bg-color-success-alt"></div>
    <code>-color-success-alt</code>
  </div>
  <div class="flex flex-column flex-middle">
    <div class="mb-1 square-lg rounded-full bg-color-warning-alt"></div>
    <code>-color-warning-alt</code>
  </div>
  <div class="mb-3 flex flex-column flex-middle">
    <div class="mb-1 square-lg rounded-full bg-color-danger-alt"></div>
    <code>-color-danger-alt</code>
  </div>
  <div class="mb-3 flex flex-column flex-middle">
    <div class="mb-1 square-lg rounded-full bg-color-default-alt"></div>
    <code>-color-default-alt</code>
  </div>
</div>

## Default UI colors

The gray <label class="label">default</label> color for buttons, labels and badges is also the `-color-default` utility color (see below). When creating buttons, labels and badges without assigning a UI color, that gray is the color you get. (There’s no need for `btn-default`, `label-default` or `badge-default` classes – in fact they do not exist!)

The `color-default-alt` utility classes for `bg` background-color, `b` border-color and `t` text-color is simply another name (an alias) for `color-background-alt`.

Both these grays are also part of the detail color utilities (see below).

## Detail Color Utilities

Besides the UI colors, Codebase has a set of grays used for text, lines, etc. You can change these in the default variables.

<div class="flex flex-space-around flex-gap flex-wrap t-center">
  <div class="mb-3 flex flex-column flex-middle">
    <div class="mb-1 square-lg b-thick bs rounded-full bg-color-background"></div>
    <code>-color-background</code>
  </div>
  <div class="mb-3 flex flex-column flex-middle">
    <div class="mb-1 square-lg b-thick bs rounded-full bg-color-background-alt"></div>
    <code>-color-background-alt</code>
  </div>
  <div class="mb-3 flex flex-column flex-middle">
    <div class="mb-1 square-lg b-thick bs rounded-full bg-color-fineline"></div>
    <code>-color-fineline</code>
  </div>
  <div class="flex flex-column flex-middle">
    <div class="mb-1 square-lg b-thick bs rounded-full bg-color-default"></div>
    <code>-color-default</code>
  </div>
  <div class="mb-3 flex flex-column flex-middle">
    <div class="mb-1 square-lg b-thick bs rounded-full bg-color-text"></div>
    <code>-color-text</code>
  </div>
  <div class="mb-3 flex flex-column flex-middle">
    <div class="mb-1 square-lg b-thick bs rounded-full bg-color-text-alt"></div>
    <code>-color-text-alt</code>
  </div>
</div>

## Notes on Color Usage

1. In the light theme (default), these color detail utilities above are listed in their grayscale order. But in the dark theme, the fineline color needs to be slightly lighter than the UI default color.
2. The color utility classes are all suffix named after the places where you would usually see and use them:
    * `-color-background` – self-explanatory 😀
    * `-color-background-alt` – panels, `<code>`, inactive (non-front) tab labels
    * `-color-fineline` – form element borders, table cell borders, `<hr>`, etc.
    * `-color-default` – the default background color of buttons, badges and labels (what you get if you don’t assign a UI background color.)
    * `-color-text` – base text color
    * `-color-text-alt` – headings color
3. `-color-background-alt` has an alias: `-color-default-alt` – you can use either, interchangably.
4. **These colors are deliberately not named after their colors, so that they can all be _themable_**. You can change them all in the default color SCSS variables to suit your own design, and you won’t need to go into your HTML and rename them every time you change particular colors. This is especially important if you have a light theme/dark theme combination, where you will be _inverting_ some of the colors from light to dark.
5. The detail colors don’t have to be on a “grayscale” in your own design. They could be anything that works for you, your clients, or your customers. Try a series of warm grays or cool grays.
6. You are totally free _supplement_ these colors by adding more utility classes that are in accordance with your brand colors, complimentary and/or accent colors – whatever you need.
7. You can also adjust the five UI colors (primary, secondary, success, warning and danger) so that they don’t clash with your brand colors. For example, you don’t want your brand red and your UI danger red to be the same or similar – because that could send the wrong message about your brand!

## Applying Color Utility Classes to Elements

Codebase has a full set of utility classes for background `.bg-`, border `.b-` and text `.t-` colors.

Backgrounds: `.bg-color-{colorname}:`

<p class="p-2 bg-color-success t-color-ui-text">.bg-color-success</p>
<p class="p-2 bg-color-background-alt">.bg-color-background-alt</p>

Borders: `.b-{colorname}` (will only have an effect if your element already has a visible border):

<p class="p-2 b-thick b-color-danger">.b-thick.b-color-danger</p>

**Note:** the `.b-color-{colorname}` utilities will color the border on all sides (top, right, bottom, and left).

Text `.t-color-{colorname}`:

<p class="t-color-warning"><code>.t-color-warning</code> Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>

<table class="table">
  <thead>
    <tr><th>Utility Class Prefix</th>
    <th>Color Swatch Name Suffix</th>
  </tr></thead>
  <tbody>
    <tr>
      <td style="min-width: 160px">
        <p>Background color <code>.bg</code></p>
        <p>Text color <code>.t</code></p>
        <p>Border color <code>.b</code></p>
      </td>
      <td>
        <code>-color-primary</code><br>
        <code>-color-secondary</code><br>
        <code>-color-success</code><br>
        <code>-color-warning</code><br>
        <code>-color-danger</code><br>
        <code>-color-primary-alt</code><br>
        <code>-color-secondary-alt</code><br>
        <code>-color-success-alt</code><br>
        <code>-color-warning-alt</code><br>
        <code>-color-danger-alt</code><br>
        <code>-color-background</code><br>
        <code>-color-background-alt</code> (<code>-color-default-alt</code>)<br>
        <code>-color-fineline</code><br>
        <code>-color-default</code><br>
        <code>-color-text</code><br>
        <code>-color-text-alt</code><br>
      </td>
    </tr>
  </tbody>
</table>

## Color Utility Class Extras

### `.t-color-hyperlink`

For use in situations where you need to _restore_ the color of a hyperlink. E.g. when using a heading utility that overrides the normal hyperlink color.

<a class="h1 t-color-hyperlink" href="#/">A hyperlink</a>

```html
<a class="h1 t-color-hyperlink" href="">A hyperlink</a>
```

### `.t-color-ui-text` and `.b-color-ui-text`

Seeing that sometimes you may want to use the UI colors (primary, secondary, success, warning, danger) as background colors for e.g. cards or panels, you will also want to control the text color on those elements. This is done by the special `.t-color-ui-text` utility. This will set text color to be the same as that of buttons, badges and labels – overriding the default light theme and dark theme text and border colors.

And if you place a button, label or badge into an element with a UI color background, you may also want to set the border in the same way – use `.b-color-ui-text` of the UI element to be _the same UI text color_.

Example:

<div class="mb-3 p-6 bg-color-primary t-color-ui-text">
  This text is colored using <code class="t-color-text">.t-color-ui-text</code>. The horizontal rule and the button below have their border-color set using <code class="t-color-text">.b-color-ui-text</code>.
  <hr class="b-color-ui-text">
  <button class="btn btn-primary b-color-ui-text">Button</button>
</div>