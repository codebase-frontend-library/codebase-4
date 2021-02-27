---
title: "Element Grid"
headerTitle: "The Codebase “Soft” Element Grid"
layout: layout.njk
prevPage: "/codebase-4/docs/1-getting-started/light-and-dark-themes"
nextPage: "/codebase-4/docs/2-codebase-basics/headings"
prevButton: "Light and dark themes"
nextButton: "Headings"
---

<p class="t-lg t-thin">Codebase uses a “soft” 0.5rem element grid for consistently positioning elements relative to each other.</p>

This is similar in principle to various 8px grids out there (also known as 8-point or 8dp [device pixel] grids). For example:

* [SpecFM’s 8-point grid](https://spec.fm/specifics/8-pt-grid)

* [Intro to The 8-Point Grid System](https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632) by Elliot Dahl

In fact, at the Codebase default text size of 1rem = 16px, this means that the Codebase 0.5rem element grid defaults to units of 8px.

The Codebase element grid has been deployed a follows:

1. Element grid increments of 0.5rem have been used for setting all line-heights, margins and paddings throughout Codebase.

2. By default, the base typography vertical rhythm (line-height) is set at 1.5rem (= 3 element grid units). 
 The line heights for headers have also been set using 0.5rem increments.

3. The layout `.flex` and `.grid` gaps have been set at a minimum of 1.5rem, but they also widen responsively for wider viewports.

4. Decoration utilities for margins and paddings have been set using values from the 0.5rem element grid.

<div class="container-grid-full-bleed my-responsive">
<div class="container-grid container-grid-md">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1274.281 771.306"><path d="M97 48.003v48M97 48.003H49.276M49.276 48.003v48M49.276 96.003H97M49.276 96.003v48M49.276 96.003H1.552M1 96.003v48M1.552 144.003h47.724M97 144.003v48M97 144.003H49.276M49.276 144.003v48M49.276 192.003H97M49.276 192.003v48M49.276 192.003H1.552M1 192.003v48M1.552 240.003h47.724M96.448 240.003v48M96.448 240.003H48.724M48.724 240.003v48M48.724 288.003h47.724M48.724 288.003v48M48.724 288.003H1M1 288.003v48M1 336.003h47.724M841.276 48.003H97M841.276 192.003H97M841.276 336.003H48.724" stroke="currentColor" stroke-width="1.562" stroke-dasharray="4.684,4.684" fill="none"/><text transform="matrix(5.67 0 0 5.67 118.898 14.175)"><tspan x="-20.797" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">Default text, paragraphs...</tspan></text><text transform="matrix(5.67 0 0 5.67 466.669 118.869)"><tspan x="-61.188" y="6.5" font-family="ArialMT" font-size="21" fill="currentColor">Lorem ipsum</tspan></text><path d="M865 48.003c17.974 0-5.75 72 24.276 72-29.92 0-6.302 72-24.276 72m0 0M865 192.003c17.974 0-5.75 72 24.276 72-29.92 0-6.302 72-24.276 72m0 0" stroke="currentColor" stroke-width="2" fill="none"/><path d="M145 432.003v240M49 432.003v240M938.224 432.003H49M937.276 624.003H49M938.224 672.003H49" stroke="currentColor" stroke-width="1.562" stroke-dasharray="4.684,4.684" fill="none"/><text transform="matrix(5.67 0 0 5.67 167.813 398.175)"><tspan x="-29.424" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">Padding for menu items, table cells...</tspan></text><text transform="matrix(5.67 0 0 5.67 491.893 550.869)"><tspan x="-61.188" y="6.5" font-family="ArialMT" font-size="21" fill="currentColor">Lorem ipsum</tspan></text><path d="M961 432.003c17.974 0-5.75 24 24.276 24-29.92 0-6.302 24-24.276 24m0 0M961 480.003c17.974 0-5.75 72 24.276 72-29.92 0-6.302 72-24.276 72m0 0" stroke="currentColor" stroke-width="2" fill="none"/><path d="M937.276 480.003H49M938.224 432.003v240M841 432.003v240" stroke="currentColor" stroke-width="1.562" stroke-dasharray="4.684,4.684" fill="none"/><path d="M961 624.003c17.974 0-5.75 24 24.276 24-29.92 0-6.302 24-24.276 24m0 0" stroke="currentColor" stroke-width="2" fill="none"/><text transform="matrix(5.67 0 0 5.67 998.659 110.177)"><tspan x="-15.11" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">line-height: 1.5rem</tspan></text><text transform="matrix(5.67 0 0 5.67 1011.728 132.857)"><tspan x="-17.415" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">= 3 element grid units</tspan></text><text transform="matrix(5.67 0 0 5.67 1016.988 254.177)"><tspan x="-18.342" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">margin-bottom: 1.5rem</tspan></text><text transform="matrix(5.67 0 0 5.67 1011.728 276.857)"><tspan x="-17.415" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">= 3 element grid units</tspan></text><text transform="matrix(5.67 0 0 5.67 1136.63 446.175)"><tspan x="-22.513" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">0.5rem = 1 element grid unit</tspan></text><text transform="matrix(5.67 0 0 5.67 1136.63 638.175)"><tspan x="-22.513" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">0.5rem = 1 element grid unit</tspan></text><text transform="matrix(5.67 0 0 5.67 1141.631 542.177)"><tspan x="-23.395" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">1.5rem = 3 element grid units</tspan></text><text transform="matrix(5.67 0 0 5.67 1067.409 564.857)"><tspan x="-10.304" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">(default text)</tspan></text><path d="M937 696.003c0 17.974-48-5.75-48 24.276 0-29.92-48-6.302-48-24.276m0 0" stroke="currentColor" stroke-width="2" fill="none"/><g><text transform="matrix(5.67 0 0 5.67 891.835 734.451)"><tspan x="-4.519" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">1rem </tspan></text><text transform="matrix(5.67 0 0 5.67 891.839 757.131)"><tspan x="-17.415" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">= 2 element grid units</tspan></text></g><path d="M145 696.003c0 17.974-48-5.75-48 24.276 0-29.92-48-6.302-48-24.276m0 0" stroke="currentColor" stroke-width="2" fill="none"/><g><text transform="matrix(5.67 0 0 5.67 99.835 734.451)"><tspan x="-4.519" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">1rem </tspan></text><text transform="matrix(5.67 0 0 5.67 99.839 757.131)"><tspan x="-17.415" y=".5" font-family="ArialMT" font-size="3.528" fill="currentColor">= 2 element grid units</tspan></text></g></svg></div>
</div>

<div class="mb-3 panel-responsive bl-heavy b-color-primary bg-color-primary-alt">
<strong>Note:</strong> this <code>padding: 0.5rem 1rem;</code> in the illustration above is also available as the padding utility class <code>.p-block</code>. See <a href="/codebase-4/docs/6-decoration-utilities/spacing">spacing</a>.
</div>

The element grid has been used throughout Codebase’s classless (basic) styling. Where element grid units have been used in <a href="/codebase-4/docs/6-decoration-utilities/spacing">spacing</a> utility classes (i.e. margins and paddings), these are provided as follows:

<table class="table">
  <thead>
    <tr>
      <th>Element grid measure</th>
      <th>Utility class suffix</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0.25rem</td>
      <td><code>-half</code></td>
    </tr>
    <tr>
      <td>0.5rem</td>
      <td><code>-1</code></td>
    </tr>
    <tr>
      <td>1rem</td>
      <td><code>-2</code></td>
    </tr>
    <tr>
      <td>1.5rem</td>
      <td><code>-3</code></td>
    </tr>
    <tr>
      <td>2rem</td>
      <td><code>-4</code></td>
    </tr>
    <tr>
      <td>2.5rem</td>
      <td><code>-5</code></td>
    </tr>
    <tr>
      <td>3rem</td>
      <td><code>-6</code></td>
    </tr>
  </tbody>
</table>