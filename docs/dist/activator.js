"use strict";document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll('[data-click-away="true"]'),e=document.querySelectorAll("[class*=-control]"),y=document.querySelectorAll("[class*=-close]");t.forEach(function(t){for(var e=t.getAttribute("aria-controls"),c=t.getAttribute("class").split(" "),a=0;a<c.length;a++)c[a]=c[a].split("-");var s="."+(c=[].concat.apply([],c))[c.indexOf("control")-1]+"-wrapper";t.classList.add("click-away"),document.querySelector("#"+e).classList.add("click-away"),null!=document.querySelector("#"+e).closest(s)&&document.querySelector("#"+e).closest(s).classList.add("click-away")}),e.forEach(function(L){L.addEventListener("click",function(t){t.stopPropagation();for(var e=this.getAttribute("class").split(" "),c=0;c<e.length;c++)e[c]=e[c].split("-");e=[].concat.apply([],e);function a(){document.querySelectorAll(".click-away.active").forEach(function(t){t.classList.remove("active"),t.setAttribute("aria-expanded","false")}),document.body.classList.remove("body-scroll-lock")}var s=this.classList.contains("active"),i=this.getAttribute("aria-controls"),o=document.querySelector("#"+i),l="."+e[e.indexOf("control")-1]+"-wrapper",n=o.closest(l),r=this.dataset.control,d=this.dataset.clickAway,u=this.dataset.scrollLock;a();document.body.addEventListener("click",function(t){d&&a()});function v(){L.classList.remove("active"),L.setAttribute("aria-expanded","false"),o.classList.remove("active"),null!==n&&n.classList.remove("active"),document.body.classList.remove("body-scroll-lock")}var f;f=window.innerWidth,window.addEventListener("resize",function(){window.innerWidth!==f&&"true"===d&&a()});"true"===u&&document.body.classList.toggle("body-scroll-lock"),"toggle"===r&&(s?(L.classList.remove("active"),L.setAttribute("aria-expanded","false"),o.classList.remove("active"),null!==n&&n.classList.remove("active")):(L.classList.add("active"),L.setAttribute("aria-expanded","true"),o.classList.add("active"),null!==n&&n.classList.add("active"),document.onkeydown=function(t){"Escape"!==(t=t||window.event).key&&"Esc"!==evt.key||v()},[].forEach.call(document.querySelectorAll('[class*="-panel"]'),function(t){t.addEventListener("click",function(t){t.stopPropagation()})}),y.forEach(function(t){t.addEventListener("click",function(){v()})}))),"tab"===r&&(this.classList.contains("active")||(a(),function(){for(var t=n.querySelectorAll(".active"),e=0;e<t.length;e++)t[e].classList.remove("active"),t[e].setAttribute("aria-expanded","false")}(),this.classList.add("active"),this.setAttribute("aria-expanded","true"),o.classList.add("active")))})})});
//# sourceMappingURL=activator.js.map