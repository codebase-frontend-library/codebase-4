---
title: "Buttons"
layout: layout.njk
prevPage: "/docs/7-simple-components/tables"
nextPage: "/docs/7-simple-components/badges"
prevButton: "Tables"
nextButton: "Badges"
---

The `.btn` class enables you to apply button styles to `<button>` and other elements, such as input-buttons and hyperlinks.

<button>Button</button> – the Codebase basic (classless) button

<input type="submit"> – input button

<button class="btn" type="submit">Button</button> – button with `.btn` class

<input class="btn" type="submit"> – input button with `.btn` class

<a class="btn" role="button" href="">Hyperlink</a> – hyperlink dressed as a button

```html
<button>Button</button>

<input value="Input" type="submit">

<button class="btn">Button</button>

<input class="btn" value="Input" type="submit">

<a class="btn" role="button" href="">Hyperlink</a>
```

## Block Buttons

Buttons are normally inline elements. If you want a button to be a block element, simply add the `.block` layout utility class.

`.btn.block`:

<button class="btn block">Block button</button>

```html
<button class="btn block">Block button</button>
```

<h2>Button UI colors</h2>

<button>Classless</button>
<button class="btn">Default</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-danger">Danger</button>

```html
<button>Classless</button>
<button class="btn">Default</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-danger">Danger</button>
```

## Button States

`:disabled` or `.disabled` / Normal / `:hover` / `:active` or `.active`

```html
<button class="btn" disabled>Default disabled</button>
<button class="btn">Default</button>
<button class="btn active">Default active</button>
```

<p>
  <button disabled>Classless disabled</button>
  <button>Default</button>
  <button class="active">Default active</button>
</p>

<p>
  <button class="btn" disabled>Default disabled</button>
  <button class="btn">Default</button>
  <button class="btn active">Default active</button>
</p>
<p>
  <button class="btn btn-primary" disabled>Primary disabled</button>
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-primary active">Primary active</button>
</p>
<p>
  <button class="btn btn-secondary" disabled>Secondary disabled</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-secondary active">Secondary active</button>
</p>
<p>
  <button class="btn btn-success" disabled>Success disabled</button>
  <button class="btn btn-success">Success</button>
  <button class="btn btn-success active">Success active</button>
</p>
<p>
  <button class="btn btn-warning" disabled>Warning disabled</button>
  <button class="btn btn-warning">Warning</button>
  <button class="btn btn-warning active">Warning active</button>
</p>
<p>
  <button class="btn btn-danger" disabled>Danger disabled</button>
  <button class="btn btn-danger">Danger</button>
  <button class="btn btn-danger active">Danger active</button>
</p>

## Pill Buttons

<button class="btn rounded-pill">Pill-shaped button</button>

```html
<button class="btn rounded-pill">Pill-shaped button</button>
```

## Buttons with Text and Icons

<div class="flex flex-middle flex-wrap mb-3">
  <button class="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg> <span>OK</span></button>&nbsp;
  <button class="btn btn-secondary"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-folder" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" /></svg> <span>Archive</span></button>&nbsp;
  <button class="btn btn-primary"><span>Go</span> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="5" y1="12" x2="19" y2="12" /><line x1="13" y1="18" x2="19" y2="12" /><line x1="13" y1="6" x2="19" y2="12" /></svg></i></button>&nbsp;
  <button class="btn btn-warning"><span>Help</span> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-help" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="9" /><line x1="12" y1="17" x2="12" y2="17.01" /><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" /></svg></button>&nbsp;
  <button class="btn btn-danger"><span>Reset</span> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></button>&nbsp;
  <button class="btn"><span>Menu</span> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" /></svg></button>
</div>

**Notes:**

1. When you have more than one button in a row – e.g. you are creating a button group or tool bar – and you using icons and text in combination (or different text sizes in combination), buttons can become misaligned because the texts and icons have _different  baselines_. You can solve this problem by wrapping horizontally arranged groups of buttons in `.flex.flex-middle`.
2. Depending on what icon font or SVG icon set you use, you may find it necessary to put the icon in its own tag within the button, and maybe also the accompanying text within its own tag within the button.

## Buttons with Icons Only

`.btn.btn-icon` for square buttons (also use this for `.btn.btn-icon.rounded-full` below):

<button class="btn btn-icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" />
</svg></button>
<button class="btn btn-success btn-icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" />
</svg></button>
<button class="btn btn-secondary btn-icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-folder" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" /></svg></button>
<button class="btn btn-primary btn-icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="5" y1="12" x2="19" y2="12" /><line x1="13" y1="18" x2="19" y2="12" /><line x1="13" y1="6" x2="19" y2="12" />
</svg></button>
<button class="btn btn-warning btn-icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-help" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="9" /><line x1="12" y1="17" x2="12" y2="17.01" /><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
</svg></button>
<button class="btn btn-danger btn-icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></button>

Since `.btn-icon` renders a square, you can also use `.rounded-full` to make it a circle (and not an oval).

`.btn.btn-icon.rounded-full`:

<button class="btn btn-icon rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" /></svg></button>
<button class="btn btn-success btn-icon rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg></button>
<button class="btn btn-secondary btn-icon rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-folder" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" /></svg></button>
<button class="btn btn-primary btn-icon rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="5" y1="12" x2="19" y2="12" /><line x1="13" y1="18" x2="19" y2="12" /><line x1="13" y1="6" x2="19" y2="12" /></svg></button>
<button class="btn btn-warning btn-icon rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-help" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="9" /><line x1="12" y1="17" x2="12" y2="17.01" /><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" /></svg></button>
<button class="btn btn-danger btn-icon rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></button>

## Button Sizes

<div class="inline-flex flex-middle mb-3"><a class="btn btn-primary btn-sm" href="">Small</a>&nbsp;<a class="btn btn-primary" href="">Default</a>&nbsp;<a class="btn btn-primary btn-lg" href="">Large</a></div>

<div class="inline-flex flex-middle mb-3"><a class="btn btn-sucess btn-sm rounded-pill" href="">Small</a>&nbsp;<a class="btn btn-sucess rounded-pill" href="">Default</a>&nbsp;<a class="btn btn-sucess btn-lg rounded-pill" href="">Large</a></div>

```html
<a href="" class="btn btn-sm">Small</a>
<a href="" class="btn">Default</a>
<a href="" class="btn btn-lg">Large</a>
```

`.btn-icon` at different sizes is set to maintain a square shape. This also means it maintains a circle shape if used in combination with `.rounded-full` (or even `.rounded-pill`):

<button class="btn btn-sm btn-icon rounded-full">A</button>
<button class="btn btn-icon rounded-full">B</button>
<button class="btn btn-lg btn-icon rounded-full">C</button>

<div class="inline-flex flex-middle mb-3">
<a class="btn btn-secondary btn-sm btn-icon" href=""><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-smile" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="9" /><line x1="9" y1="10" x2="9.01" y2="10" /><line x1="15" y1="10" x2="15.01" y2="10" /><path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
</svg></a>&nbsp;<a class="btn btn-secondary btn-icon" href=""><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-smile" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="9" /><line x1="9" y1="10" x2="9.01" y2="10" /><line x1="15" y1="10" x2="15.01" y2="10" /><path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
</svg></a>&nbsp;<a class="btn btn-secondary btn-lg btn-icon" href=""><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-smile" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="9" /><line x1="9" y1="10" x2="9.01" y2="10" /><line x1="15" y1="10" x2="15.01" y2="10" /><path d="M9.5 15a3.5 3.5 0 0 0 5 0" /></svg></a>
</div>

<div class="inline-flex flex-middle mb-3">
<a class="btn btn-danger btn-sm btn-icon rounded-full" href=""><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg></a>&nbsp;<a class="btn btn-danger btn-icon rounded-full" href=""><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg></a>&nbsp;<a class="btn btn-danger btn-lg btn-icon rounded-full" href=""><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg></a>
</div>

```html
<button class="btn btn-sm btn-icon rounded-full">A</button>
<button class="btn btn-icon rounded-full">B</button>
<button class="btn btn-lg btn-icon rounded-full">C</button>
```

Do you want larger text and/or icon on `.btn-lg` too? Then add the `.t-lg` [text utility](/docs/4-utilities/text):

<a class="btn btn-primary btn-lg" href="">Normal text</a> – large button

<a class="btn btn-primary btn-lg t-lg" href="">Larger text</a> – large button with large text

```html
<a class="btn btn-primary btn-lg" href="">Normal text</a>
<a class="btn btn-primary btn-lg t-lg" href="">Larger text</a>
```

**Notes:**

1. Buttons will always have bold text. (Using the text weight utilities, e.g. `.t-thin` won’t work on buttons.)
2. Using `t-lg` will work for icon _fonts_, but not for SVG icons. If you want your SVG icon to be larger then make it larger directly, or apply a CSS scale transform to it.

Examples using [Tabler Icons](https://tablericons.com/) at 24px and 36px size:

<div class="flex flex-middle mb-3">
<a class="btn btn-secondary btn-lg btn-icon" href=""><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-smile" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="9" y1="10" x2="9.01" y2="10"></line><line x1="15" y1="10" x2="15.01" y2="10"></line><path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path></svg></a>&nbsp;<a class="btn btn-secondary btn-lg btn-icon" href=""><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-smile" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="9" /><line x1="9" y1="10" x2="9.01" y2="10" /><line x1="15" y1="10" x2="15.01" y2="10" /><path d="M9.5 15a3.5 3.5 0 0 0 5 0" /></svg></a>&nbsp;<a class="btn btn-danger btn-lg btn-icon rounded-full" href=""><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg></a>&nbsp;<a class="btn btn-danger btn-lg btn-icon rounded-full" href=""><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg></a>
</div>

(24px equates to the default single line height in Codebase. 36px equates to the `.t-lg` size, that is 150% larger.)

## Combining Buttons and (Other) Form Elements

A row of buttons would touch each other (buttons are ordinarily inline elements), unless you leave spaces between them. Leave no spaces if you want the buttons to touch each other, as in a “tool bar”. Or if you find it necessary, wrap them in a `.flex`.

You can remove some of the rounded corners using `.unrounded` utilities.

<div class="flex flex-center mb-3">
<button class="btn-icon unrounded-right">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bold" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z" /><path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7" /></svg>
</button>
<button class="btn-icon unrounded-left">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-italic" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="11" y1="5" x2="17" y2="5" /><line x1="7" y1="19" x2="13" y2="19" /><line x1="14" y1="5" x2="10" y2="19" /></svg>
</button>
&nbsp;
<button class="btn-icon unrounded-right">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-align-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="14" y2="12" /><line x1="4" y1="18" x2="18" y2="18" /></svg>
</button>
<button class="btn-icon unrounded">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-align-center" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="4" y1="6" x2="20" y2="6" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="6" y1="18" x2="18" y2="18" /></svg>
</button>
<button class="btn-icon unrounded-left">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-align-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="4" y1="6" x2="20" y2="6" /><line x1="10" y1="12" x2="20" y2="12" /><line x1="6" y1="18" x2="20" y2="18" /></svg>
</button>
&nbsp;
<button class="btn-icon">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" /><circle cx="7.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="12" cy="7.5" r=".5" fill="currentColor" /><circle cx="16.5" cy="10.5" r=".5" fill="currentColor" />
</svg>
</button>
</div>

```html
<button class="btn-icon unrounded-right">
  <!-- left-align icon -->
</button>
<button class="btn-icon unrounded">
  <!-- center icon -->
</button>
<button class="btn-icon unrounded-left">
  <!-- right-align icon -->
</button>
```

Go large — to grab people’s attention: 

<div class="w-xs mx-auto mb-3">
  <form class="flex">
    <input id="email-example" class="form-element-lg rounded-pill unrounded-right t-lg" name="examplename" placeholder="Your email" type="email">
    <a class="btn btn-success btn-lg rounded-pill unrounded-left px-4 t-lg" href="">Subscribe</a>
  </form>
</div>

```html
<form class="flex">
  <input id="email-example" class="form-element-lg rounded-pill unrounded-right t-lg" name="examplename" placeholder="Your email" type="email">
  <a class="btn btn-success btn-lg rounded-pill unrounded-left px-4 t-lg" href="">Subscribe</a>
</form>
```

Go small – to fit a form into a menubar, or into a table cell:

<div class="w-xxs mx-auto mb-3">
  <form class="flex" action="">
    <input type="text" class="b-color-primary unrounded-right" id="site-search" name="site-search" autocomplete="off" aria-label="" placeholder="Search...">
    <button aria-label="Search" class="btn btn-primary btn-icon unrounded-left"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="10" cy="10" r="7" /><line x1="21" y1="21" x2="15" y2="15" /></svg></button>
  </form>
</div>

```html
<form class="flex" action="">
  <input type="text" class="b-color-primary unrounded-right" id="site-search" name="site-search" autocomplete="off" aria-label="" placeholder="Search...">
  <button aria-label="Search" class="btn btn-primary btn-icon unrounded-left">
    <!-- search icon -->
  </button>
</form>
```

## Outline buttons

Outline buttons (sometimes called “ghost buttons”) can be created using utility classes. Codebase utilities do not override the hover state, focus, etc.

Do this:

1. Put `.bg-transparent` to the button, in addition to e.g. `.btn.btn-success`.
2. Put a text color on the button (in this example, `t-color-success`).

(The border is taken care of already).

Example:

`.btn.btn-success.bg-transparent.t-color-success`:

<a class="btn btn-success bg-transparent t-color-success" href="">Find out more <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="5" y1="12" x2="19" y2="12" /><line x1="13" y1="18" x2="19" y2="12" /><line x1="13" y1="6" x2="19" y2="12" /></svg></a>

```html
<a class="btn btn-success bg-transparent t-color-success" href="">Find out more →</a>
```

**Note:** `.bg-transparent` is an alias of `.bg-color-transparent` – the example above could have used either.