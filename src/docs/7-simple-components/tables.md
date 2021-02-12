---
title: "Tables"
headerTitle: "Table Components"
layout: layout.njk
prevPage: "/docs/7-simple-components/heros"
nextPage: "/docs/7-simple-components/buttons"
prevButton: "Heros"
nextButton: "Buttons"
---

<p class="t-lg t-thin">The Codebase <code>.table</code> combonent class expands tables to 100% width, aligns everything to the left, and adds some padding and a fine-line border around every table cell.</p>

<table class="table">
  <thead>
    <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1</td>
      <td>Table content 2.1</td>
      <td>Table content 3.1</td>
    </tr>
    <tr>
      <td>Table content 1.2</td>
      <td>Table content 2.2</td>
      <td>Table content 3.2</td>
    </tr>
    <tr>
      <td>Table content 1.3</td>
      <td>Table content 2.3</td>
      <td>Table content 3.3</td>
    </tr>
    <tr>
      <td>Table content 1.4</td>
      <td>Table content 2.4</td>
      <td>Table content 3.4</td>
    </tr>
  </tbody>
</table>

```html
<table class="table">
  <thead>
    <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1</td>
      <td>Table content 2.1</td>
      <td>Table content 3.1</td>
    </tr>
    <tr>
      <td>Table content 1.2</td>
      <td>Table content 2.2</td>
      <td>Table content 3.2</td>
    </tr>
  </tbody>
</table>
```

## Table Variations

`.table.table-brderless` – no borders around table cells

<table class="table table-borderless">
  <thead>
    <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1</td>
      <td>Table content 2.1</td>
      <td>Table content 3.1</td>
    </tr>
    <tr>
      <td>Table content 1.2</td>
      <td>Table content 2.2</td>
      <td>Table content 3.2</td>
    </tr>
    <tr>
      <td>Table content 1.3</td>
      <td>Table content 2.3</td>
      <td>Table content 3.3</td>
    </tr>
    <tr>
      <td>Table content 1.4</td>
      <td>Table content 2.4</td>
      <td>Table content 3.4</td>
    </tr>
  </tbody>
</table>

`.table.table-compact` – less padding

<table class="table table-compact">
  <thead>
    <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1</td>
      <td>Table content 2.1</td>
      <td>Table content 3.1</td>
    </tr>
    <tr>
      <td>Table content 1.2</td>
      <td>Table content 2.2</td>
      <td>Table content 3.2</td>
    </tr>
    <tr>
      <td>Table content 1.3</td>
      <td>Table content 2.3</td>
      <td>Table content 3.3</td>
    </tr>
    <tr>
      <td>Table content 1.4</td>
      <td>Table content 2.4</td>
      <td>Table content 3.4</td>
    </tr>
  </tbody>
</table>

`.table.table-striped` – applies a _transparent white tint_ and a _transparent black tint_ to alterating rows:

<table class="table table-striped">
  <thead>
    <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1</td>
      <td>Table content 2.1</td>
      <td>Table content 3.1</td>
    </tr>
    <tr>
      <td>Table content 1.2</td>
      <td>Table content 2.2</td>
      <td>Table content 3.2</td>
    </tr>
    <tr>
      <td>Table content 1.3</td>
      <td>Table content 2.3</td>
      <td>Table content 3.3</td>
    </tr>
    <tr>
      <td>Table content 1.4</td>
      <td>Table content 2.4</td>
      <td>Table content 3.4</td>
    </tr>
  </tbody>
</table>

## Oversized tables

Tables can often be so wide that they break your page 

For adding horizontal scrolling to a table that is too wide for the available space (especially important on narrow viewports), wrap the table in a `<div>` with the `overflow-x` utility class.

```html
<div class="overflow-x">
  <table class="table">
    ...
  </table>
</div>
```

<div class="overflow-x">
<table class="table">
  <thead>
    <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
      <th>Table Header 4</th>
      <th>Table Header 5</th>
      <th>Table Header 6</th>
      <th>Table Header 7</th>
      <th>Table Header 8</th>
      <th>Table Header 9</th>
      <th>Table Header 10</th>
      <th>Table Header 11</th>
      <th>Table Header 12</th>
      <th>Table Header 13</th>
      <th>Table Header 14</th>
      <th>Table Header 15</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1</td>
      <td>Table content 2.1</td>
      <td>Table content 3.1</td>
      <td>Table content 4.1</td>
      <td>Table content 5.1</td>
      <td>Table content 6.1</td>
      <td>Table content 7.1</td>
      <td>Table content 8.1</td>
      <td>Table content 9.1</td>
      <td>Table content 10.1</td>
      <td>Table content 11.1</td>
      <td>Table content 12.1</td>
      <td>Table content 13.1</td>
      <td>Table content 14.1</td>
      <td>Table content 15.1</td>
    </tr>
    <tr>
      <td>Table content 1.2</td>
      <td>Table content 2.2</td>
      <td>Table content 3.2</td>
      <td>Table content 4.2</td>
      <td>Table content 5.2</td>
      <td>Table content 6.2</td>
      <td>Table content 7.2</td>
      <td>Table content 8.2</td>
      <td>Table content 9.2</td>
      <td>Table content 10.2</td>
      <td>Table content 11.2</td>
      <td>Table content 12.2</td>
      <td>Table content 13.2</td>
      <td>Table content 14.2</td>
      <td>Table content 15.2</td>
    </tr>
    <tr>
      <td>Table content 1.3</td>
      <td>Table content 2.3</td>
      <td>Table content 3.3</td>
      <td>Table content 4.3</td>
      <td>Table content 5.3</td>
      <td>Table content 6.3</td>
      <td>Table content 7.3</td>
      <td>Table content 8.3</td>
      <td>Table content 9.3</td>
      <td>Table content 10.3</td>
      <td>Table content 11.3</td>
      <td>Table content 12.3</td>
      <td>Table content 13.3</td>
      <td>Table content 14.3</td>
      <td>Table content 15.3</td>
    </tr>
  </tbody>
</table>
</div>

Are you have a situation where there is (or is going to be) a lot of oversized, layout-breaking tables?Then you can add some JavaScript to your template, that automatically adds this `overflow-x` wrapper to all tables that have the `.table` class. Here’s one way of doing that:

```html
<script>
  (function () {

    [].forEach.call(document.querySelectorAll('.table'), function(el) {
      var table = el.outerHTML;
      var tableWrapped = '<div class="overflow-x">' + table + '</div>';
      el.outerHTML = tableWrapped;
    });

  }());
</script>
```