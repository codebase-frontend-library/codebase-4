---
title: "Tables"
layout: layout.njk
prevPage: "/docs/2-codebase-basics/blockquotes"
nextPage: "/docs/2-codebase-basics/form-elements"
prevButton: "Blockquotes"
nextButton: "Form elements"
---

<p class="t-lg t-thin">Classless tabled receive no special styling from Codebase.</p>

This is what a classless table looks like:

<div class="mb-3">
<table>
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
  </tbody>
</table>
</div>

```html
<table>
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
  </tbody>
</table>
```

For special table styling, see the Codebase [table component](/docs/7-simple-components/tables).