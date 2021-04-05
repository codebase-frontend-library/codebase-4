---
title: "Cards"
layout: layout.njk
prevPage: "/docs/7-simple-components/media-objects"
nextPage: "/docs/8-alpinejs-components/about-alpinejs-components"
prevButton: "Media objects"
nextButton: "About AlpineJS components"
---

<p class="t-lg t-thin">Codebase cards are built entirely of utility classes – they have no unique card CSS.</p>

Control the width of a card any way that makes sense in your design. “Raise” cards with a [box-shadow]({{ '/docs/4-utilities/box-shadows' | url }}) – or not. Give them [rounded corners](/4-utilities/rounded-corners' | url }}) – or not. Add an image if you need to. Or a header and footer. You’ll probably want a call-to-action button or link. But it’s all up to you.

<div class="flex flex-column w-xxs mx-auto b-thin rounded bs-1 mb-3">
  <a href="">
    <img class="img-cover" src="{{ '/img/placeholder1000x600.svg' | url }}">
  </a>
  <div class="flex-item-grow-1 p-2">
    <h4 class="mb-2">Card Title</h4>
    <p class="mb-2">
      Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in.
    </p>
    <a href="" class="btn btn-primary">Button</a>
  </div>
</div>

```html
<div class="flex flex-column b-thin rounded bs-1">
  <a href="">
    <img src="" alt="">
  </a>
  <div class="flex-item-grow-1 p-2">
    <h4 class="mb-2">Card Title</h4>
    <p class="mb-2">
      Explanation text...
    </p>
    <a href="" class="btn btn-primary">Button</a>
  </div>
</div>
```

Another example, with a header and a footer:

<div class="mx-auto b-thin rounded w-xxs mx-auto mb-3">
  <div class="bb-thin p-block">Header</div>
  <div class="flex flex-column">
    <a href="">
      <img class="img-cover" src="{{ '/img/placeholder1000x600.svg' | url }}">
    </a>
    <div class="p-2">
      <h4 class="mb-0">Card Title</h4>
      <p class="mb-0">Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in. Imperdiet evertitur no usu, his te suavitate salutatus. </p>
    </div>
  </div>
  <div class="bt-thin p-block">Footer</div>
</div>

```html
<div class="mx-auto b-thin rounded">
  <div class="bb-thin p-block">Header</div>
  <div class="flex flex-column">
    <a href="">
      <img src="" alt="">
    </a>
    <div class="p-2">
      <h4 class="mb-0">Card Title</h4>
      <p class="mb-0">Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in. Imperdiet evertitur no usu, his te suavitate salutatus. </p>
    </div>
  </div>
  <div class="bt-thin p-block">Footer</div>
</div>
```

Another example, with multiple mid-sections:

<div class="w-xxs mx-auto mb-3 b-thin rounded">
  <div class="bb-thin p-block">
    Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in.
  </div>
  <div class="bb-thin p-block">
    Imperdiet evertitur no usu, his te suavitate salutatus.
  </div>
  <div class="bb-thin p-block">
    Nullam ridens deterruisset an duo.
  </div>
  <div class="p-block">
    Cum harum insolens ei, cum probo placerat praesent et.
  </div>
</div>

```html
<div class="b-thin rounded">
  <div class="bb-thin p-block">
    Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in.
  </div>
  <div class="bb-thin p-block">
    Imperdiet evertitur no usu, his te suavitate salutatus.
  </div>
  <div class="bb-thin p-block">
    Nullam ridens deterruisset an duo.
  </div>
  <div class="p-block">
    Cum harum insolens ei, cum probo placerat praesent et.
  </div>
</div>
```

Example with a scrollable main content (and a specified height that’s less than the main content height):

<div class="flex flex-column w-xxs mx-auto mb-3 b-thin rounded" style="height: 390px;">
  <div class="bb-thin p-block">Header</div>
  <div class="flex-item-grow-1 overflow-y p-2">
    <h4>This Card has a Scrollable Body</h4>
    <p>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim.</p>
    <p>Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>
    <p>Movet voluptaria voluptatum has at, qui cu timeam ancillae democritum. Ad veniam detraxit his. In est bonorum fabulas deleniti, eam ex soluta verear albucius. Sale aperiri repudiandae eu cum, at cum sint dicunt. Prima tibique constituto cum ne, quidam dolorem detraxit pro no, sea an aeque zril.</p>
    <p>Et ponderum tacimates vim. Laudem ornatus intellegam no cum. Porro omittantur pro te. Iisque mandamus ei eum. Pri idque iudico appetere ex. Has no altera veritus civibus.</p>
    <p>At civibus aliquando usu. Vide libris has ut, eum illum luptatum ad. Quando scripta nusquam est te. Eleifend principes pertinacia sed cu, vix ut meis diceret salutandi, ea inermis ocurreret voluptatibus eam. Ei vidisse conclusionemque eam, vix eros mediocrem at. Graeco laboramus te mea, ius fabellas consequat voluptatum et.</p>
  </div>
  <div class="bt-thin p-block">Footer</div>
</div>

```html
<div class="flex flex-column w-xxs mx-auto mb-3 b-thin rounded" style="height: 400px;">
  <div class="bb-thin p-block">Header</div>
  <div class="flex-item-grow-1 overflow-y p-2">
    <h4>Title</h4>
    <p>Lorem ipsum dolor sit amet...</p>
  </div>
  <div class="bt-thin p-block">Footer</div>
</div>
```