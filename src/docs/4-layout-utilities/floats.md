---
title: "Floats"
headerTitle: "Floats and Clearfix"
layout: layout.njk
prevPage: "/docs/4-layout-utilities/blocks"
nextPage: "/docs/4-layout-utilities/positions"
prevButton: "Block"
nextButton: "Positions"
---

<p class="t-lg t-thin">Codebase has a set of responsive float utilities, and a clearfix in case you need it.</p>

* `.float-right` / `.md-float-right` / `.lg-float-right`
* `.float-left` / `.md-float-left` / `.lg-float-left`

<div>
<div class="float-right">
  <div class="b-dashed p-2">This is an example of<br> <code class="b-thin">.float-right</code></div>
</div>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis dolore quis iste fuga molestias necessitatibus. Autem quidem, consequuntur dicta illo rem nobis ratione vel? Cupiditate beatae similique nobis temporibus sequi rerum mollitia, saepe architecto ad, necessitatibus placeat repudiandae commodi laboriosam quos molestiae sed modi dignissimos nisi magni adipisci eligendi.</p>
</div>

<div>
<div class="float-left">
  <div class="b-dashed p-2">This is an example of<br> <code class="b-thin">.float-left</code></div>
</div>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis dolore quis iste fuga molestias necessitatibus. Autem quidem, consequuntur dicta illo rem nobis ratione vel? Cupiditate beatae similique nobis temporibus sequi rerum mollitia, saepe architecto ad, necessitatibus placeat repudiandae commodi laboriosam quos molestiae sed modi dignissimos nisi magni adipisci eligendi.</p>
</div>

There’s also a `.clearfix` utility if you need it. This [This w3schools article](https://www.w3schools.com/howto/howto_css_clearfix.asp) explains why you may need the “clearfix hack” sometmes.

<p class="bl-heavy b-color-primary bg-color-primary-alt p-2">Remember that CSS flexbox and CSS grid control the behavior of their immediate child elements. So, if you are trying to use <code>.float-left</code> or <code>.float-right</code> on an immediate child of <code>.container</code>, <code>.flex</code> or <code>.grid</code>, it won’t work.</p>