---
title: "Lists"
layout: layout.njk
prevPage: "/codebase-4/docs/2-codebase-basics/simple-text-elements"
nextPage: "/codebase-4/docs/2-codebase-basics/horizontal-rules"
prevButton: "Simple test elements"
nextButton: "Horizontal rules"
---

## Ordered Lists (Numbered)

<ol>
<li>List item</li>
<li>List item
<ol>
<li>List item</li>
<li>List item
<ol>
<li>List item</li>
</ol>
</li>
</ol>
</li>
<li>List item</li>
</ol>

```html
<ol>
  <li>List item</li>
  <li>List item
    <ol>
      <li>List item</li>
      <li>List item
        <ol>
          <li>List item</li>
        </ol>
      </li>
    </ol>
  </li>
  <li>List item</li>
</ol>
```

See [https://www.w3schools.com/html/html_lists_ordered.asp](https://www.w3schools.com/html/html_lists_ordered.asp) for more on ordered lists.

## Unordered Lists (Bullet Pointed)

<ul>
<li>List item</li>
<li>List item
<ul>
<li>List item</li>
<li>List item
<ul>
<li>List item</li>
</ul>
</li>
</ul>
</li>
<li>List item</li>
</ul>

```html
<ul>
  <li>List item</li>
  <li>List item
    <ul>
      <li>List item</li>
      <li>List item
        <ul>
          <li>List item</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>List item</li>
</ul>
```

## Definition Lists

<dl>
<dt>Title 1</dt>
<dd>Data 1 Lorem ipsum dolor sit amet</dd>
<dt>Title 2</dt>
<dd>Data 2 Lorem ipsum dolor sit amet</dd>
<dt>Title 3</dt>
<dd>Data 3 Lorem ipsum dolor sit amet</dd>
</dl>

```html
<dl>
  <dt>Title 1</dt>
  <dd>Data 1 Lorem ipsum dolor sit amet</dd>
  <dt>Title 2</dt>
  <dd>Data 2 Lorem ipsum dolor sit amet</dd>
  <dt>Title 3</dt>
  <dd>Data 3 Lorem ipsum dolor sit amet</dd>
</dl>
```