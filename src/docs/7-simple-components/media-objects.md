---
title: "Media Objects"
layout: layout.njk
prevPage: "/codebase-4/docs/7-simple-components/labels"
nextPage: "/codebase-4/docs/7-simple-components/cards"
prevButton: "Labels"
nextButton: "Cards"
---

Traditional “media objects” (à la <a href="http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/" target="_blank">Nicole Sullivan</a>) can be built entirely using Codebase utility classes:

<div class="flex flex-gap">
  <a class="square" href="">
    <img class="img-cover" src="/codebase-4/img/placeholder250x250.svg">
  </a>
  <div class="flex-item-grow-1">
    <h4 class="mb-1">Name or Title</h4>
    <p>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>
  </div>  
</div>

```html
<div class="flex flex-gap">
  <a class="square" href="">
    <img src="" alt="">
  </a>
  <div class="flex-item-grow-1">
    <h4 class="mb-1">Name or Title</h4>
    <p>A message or some descriptive text...</p>
  </div>  
</div>
```

Example with image on the right, and some other decoration:

<div class="flex flex-row-reverse mb-3 b-thin rounded-lg p-2">
  <a class="square rounded" href="">
    <img class="img-cover" src="/codebase-4/img/placeholder250x250.svg">    <img class="img-cover" src="/codebase-4/img/placeholder250x250.svg">
  </a>
  <div class="mr-2">
    <h4 class="mb-0">Card Title</h4>
    <p class="mb-0">Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in. Imperdiet evertitur no usu, his te suavitate salutatus. </p>
  </div>
</div>

```html
<div class="flex flex-row-reverse mb-3 b-thin rounded-lg p-2">
  <a class="square rounded" href="">
    <img src="" alt="">
  </a>
  <div class="mr-2">
    <h4 class="mb-0">Card Title</h4>
    <p class="mb-0">Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in. Imperdiet evertitur no usu, his te suavitate salutatus. </p>
  </div>
</div>
```

Media objects can easily be modified as required, and nested. For example:

<div class="flex flex-gap">
  <a class="square-sm" href="">
    <img class="img-cover" src="/codebase-4/img/placeholder250x250.svg">
  </a>
  <div class="flex-item-grow-1">
    <h4 class="m-0">Message 1</h4>
    <div class="mb-3 bg-color-primary-alt rounded-lg unrounded-top-left p-2">Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</div>
    <div class="flex flex-gap">
      <a class="square-sm" href="">
        <img class="img-cover" src="/codebase-4/img/placeholder250x250.svg">
      </a>
      <div class="flex-item-grow-1">
        <h4 class="m-0">Response 1</h4>
        <div class="mb-3 bg-color-primary-alt rounded-lg unrounded-top-left p-2">Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</div>
      </div>
    </div>
    <div class="flex flex-gap">
      <a class="square-sm" href="">
        <img class="img-cover" src="/codebase-4/img/placeholder250x250.svg">
      </a>
      <div class="flex-item-grow-1">
        <h4 class="m-0">Response 2</h4>
        <div class="mb-3 bg-color-primary-alt rounded-lg unrounded-top-left p-2">Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</div>
      </div>
    </div>
  </div>
</div>