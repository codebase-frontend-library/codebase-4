---
title: "Modals (Activator Component)"
headerTitle: "Modals"
layout: layout.njk
prevPage: "/codebase-4/docs/9-activator-components/activator-dropdowns"
nextPage: "/codebase-4/docs/9-activator-components/activator-offcanvas"
prevButton: "Activator dropdowns"
nextButton: "Activator offcanvas"
---

<p class="t-lg t-thin">Codebase modals are toggle-type Activator components, that you can use for all sorts of things.</p>

<button aria-controls="modal-1a" aria-expanded="false" data-control="toggle" data-scroll-lock="true" class="modal-control btn btn-primary">Modal example 1a</button> – without “click-away”

<div class="modal-wrapper">
  <div class="backdrop backdrop-shaded"></div>
  <div id="modal-1a" class="modal-panel m-3 p-3 b-thin rounded bg-color-background">
    <p>Modal content. Click the “Close” button to dismiss.</p>
    <button class="float-right modal-close">Close</button>
  </div>
</div>

User can only dismiss the modal by clicking the “Close” button.

```html
<button
  aria-controls="modal-1a"
  aria-expanded="false"
  data-control="toggle"
  data-scroll-lock="true"
  class="modal-control btn btn-primary"
>Modal 1a</button>

<div class="modal-wrapper">
  <div class="backdrop backdrop-shaded"></div>
  <div id="modal-1a" class="modal-panel m-3 p-3 b-thin rounded bg-color-background">
    <p>Modal content.</p>
    <button class="float-right modal-close">Close</button>
  </div>
</div>
```

The backdrop element is only there for the purpose of adding a “click-away” to dismiss functionality. Think of the backdrop as a massive, full-screen button behind the modal panel, that a visitor can click on to dismiss the modal.

By default, the `.backdrop` has no background color assigned (it is invisible), but you can add the modifier `.backdrop-shaded` to get the semi-transparent blurred back backdrop that most of these examples are using, or you can add `.backdrop-black` for a full black backdrop, as you can see in the “lightbox” examples.

<p class="bl-heavy b-color-primary p-2 bg-color-primary-alt">The “darkened frosted glass” backdrop, <code>&lt;div class="backdrop backdrop-shaded"&gt;&lt;/div&gt;</code> becomes visible when the modal-wrapper receives its <code>.active</code> class.</p>

<button aria-controls="modal-1b" aria-expanded="false" data-control="toggle" data-click-away="true" data-scroll-lock="true" class="modal-control btn btn-primary">Modal example 1b</button> – with “click-away”

<div class="modal-wrapper">
  <div class="backdrop backdrop-shaded"></div>
  <div id="modal-1b" class="modal-panel m-3 p-3 b-thin rounded bg-color-background">
    <p>Modal content. Click away to dismiss.</p>
  </div>
</div>

(Best practice is to include a “Close” button, but in this example I want you to try the click-away function.)

```html
<button
  aria-controls="modal-1b"
  aria-expanded="false"
  data-control="toggle"
  data-click-away="true" 
  data-scroll-lock="true"
  class="modal-control btn btn-primary"
>Modal 1b</button>

<!-- Modal panel 1b -->
```

## A Modal as a Lightbox

Modals can be made into a lightbox by placing the “close” button within the backdrop instead of within the panel. In these examples I have also used `.backdrop-black` so that the visitor’ more is more drawn to the image. (And I have removed the click-outside.)

<p class="bl-heavy b-color-secondary p-2 bg-color-secondary-alt">Codebase modals have their content width and height and constrained to fit within the viewport (with the max-height further constrained, to account for the iOS Safari browser bar). Therefore, oversized images will be scaled down if necessary.</p>

(The _dismiss_ button is in the top-right corner of the black backdrop.)

<div>
  <button
    aria-controls="modal-2a"
    aria-expanded="false"
    data-control="toggle"
    data-scroll-lock="true"
    class="modal-control btn btn-primary mb-3"
  >Modal example 2a</button> – modal with a tall narrow image
  <div class="modal-wrapper">
    <div class="backdrop backdrop-black flex flex-top flex-end p-2">
      <button class="modal-close btn btn-icon bg-transparent b-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </button>
    </div>
    <div class="modal-panel m-3 t-center" id="modal-2a">
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="500" height="1000" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
      <p class="t-color-ui-text t-center">A tall narrow image (500px &times; 1000px)</p>
    </div>
  </div>
</div>

<div>
  <button
    aria-controls="modal-2b"
    aria-expanded="false"
    data-control="toggle"
    data-scroll-lock="true"
    class="modal-control btn btn-primary mb-3"
  >Modal example 2b</button> – modal with a short wide image
  <div class="modal-wrapper">
    <div class="backdrop backdrop-black flex flex-top flex-end p-2">
      <button class="modal-close btn btn-icon bg-transparent b-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </button>
    </div>
    <div class="modal-panel m-3" id="modal-2b">
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="2000" height="500" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
      <p class="t-color-ui-text t-center">A short wide image (2000px &times; 500px)</p>
    </div>
  </div>
</div>

<div>
  <button
    aria-controls="modal-2c"
    aria-expanded="false"
    data-control="toggle"
    data-scroll-lock="true"
    class="modal-control btn btn-primary mb-3"
  >Modal example 2c</button> – modal with a short wide image
  <div class="modal-wrapper">
    <div class="backdrop backdrop-black flex flex-top flex-end p-2">
      <button class="modal-close btn btn-icon bg-transparent b-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </button>
    </div>
    <div class="modal-panel m-3" id="modal-2c">
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="2000" height="2000" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
      <p class="t-color-ui-text t-center">A tall wide image (2000px &times; 2000px)</p>
    </div>
  </div>
</div>

```html
<div>
  <button
    aria-controls="modal-2a"
    aria-expanded="false"
    data-control="toggle"
    data-scroll-lock="true"
    class="modal-control btn btn-primary mb-3"
  >Modal example</button>
  <div class="modal-wrapper">
    <div class="backdrop backdrop-black flex flex-top flex-end p-2">
      <button class="modal-close btn-icon b-0 t-color-secondary t-lg">
        &times;
      </button>
    </div>
    <div class="modal-panel m-3" id="modal-2a">
      <img src="" alt="">
    </div>
  </div>
</div>
```

## Styling Modal Panels

Codebase modal panels have no styling of their own – you can use utility classes.

<div>
  <button
    aria-controls="modal-3a"
    aria-expanded="false"
    data-control="toggle"
    data-click-away="true"
    data-scroll-lock="true"
    class="modal-control btn btn-primary mb-3"
  >Modal example 3a</button>  – dressed as a card, with “click-away”
  <div class="modal-wrapper">
    <div class="backdrop backdrop-shaded">
    </div>
    <div class="modal-panel w-xs m-3 p-0 b-thin rounded bg-color-background" id="modal-3a">
      <div class="p-block bt-heavy b-color-success bg-color-success-alt">
        <h4 class="m-0">Modal header</h4>
      </div>
      <div class="p-2">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="p-2 flex flex-end">
        <button class="modal-close float-right btn-sm t-sm t-uppercase">Dismiss</button>
      </div>
    </div>
  </div>
</div>

<div>
  <button
    aria-controls="modal-3b"
    aria-expanded="false"
    data-control="toggle"
    data-click-away="true"
    data-scroll-lock="true"
    class="modal-control btn btn-primary mb-3"
  >Modal example 3b</button> – with a grid system, and “click-away”
  <div class="modal-wrapper">
    <div class="backdrop backdrop-shaded">
    </div>
    <div class="modal-panel w-lg m-3 p-0 b-thin rounded bg-color-background" id="modal-3b">
      <div class="bb-thin p-block">
        <button class="modal-close btn-icon btn-sm float-right mt-1 t-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
        <h4 class="my-1">Modal Header</h4>
      </div>
      <div class="p-2 grid grid-md-2-cols grid-gap">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="800" height="600" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
        </div>
        <div>
          <h2>Image Title</h2>
          <p>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>
          <p>
            <button class="btn btn-primary">Activate</button>
            <button class="btn btn-secondary">Delete</button>
          </p>
        </div>
      </div>
      <div class="bt-thin p-2">
        <div class="t-right">
          <button class="modal-close btn-sm">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <button
    aria-controls="modal-3c"
    aria-expanded="false"
    data-control="toggle"
    data-scroll-lock="true"
    class="modal-control btn btn-primary mb-3"
  >Modal example 3c</button> – with scrollable content, and no “click away”
  <div class="modal-wrapper">
    <div class="backdrop backdrop-shaded">
    </div>
    <div class="modal-panel w-xs height-full-vh flex flex-column m-3 p-0 rounded bg-color-background" id="modal-3c">
      <div class="bb-thin p-block">
        <button class="modal-close btn-sm float-right mt-1">Dismiss</button>
        <h4 class="my-1">Header</h4>
      </div>
      <div class="grow-1 overflow-y">
        <p class="m-2">Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim.</p>
        <p class="m-2">Number of tracks: 12</span>
        <table class="table table-borderless bt-thin tracks">
          <tbody>
            <tr class="bb-thin">
              <td>1</td>
              <td>
                <div class="flex">
                  <div class="square-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="200" height="200" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
                  </div>
                  <div class="grow-1 ml-2">
                    <b>Lorem ipsum dolor sit amet</b><br/>
                    <span class="t-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span>
                  </div>
                </div>
              </td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" /><line x1="12" y1="13" x2="12" y2="22" /><polyline points="9 19 12 22 15 19" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="14" y2="13" /></svg></button></td>
            </tr>
            <tr class="bb-thin">
              <td>2</td>
              <td>
                <div class="flex">
                  <div class="square-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="200" height="200" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
                  </div>
                  <div class="grow-1 ml-2">
                    <b>Lorem ipsum dolor sit amet</b><br/>
                    <span class="t-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span>
                  </div>
                </div>
              </td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" /><line x1="12" y1="13" x2="12" y2="22" /><polyline points="9 19 12 22 15 19" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="14" y2="13" /></svg></button></td>
            </tr>
            <tr class="bb-thin">
              <td>3</td>
              <td>
                <div class="flex">
                  <div class="square-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="200" height="200" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
                  </div>
                  <div class="grow-1 ml-2">
                    <b>Lorem ipsum dolor sit amet</b><br/>
                    <span class="t-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span>
                  </div>
                </div>
              </td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" /><line x1="12" y1="13" x2="12" y2="22" /><polyline points="9 19 12 22 15 19" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="14" y2="13" /></svg></button></td>
            </tr>
            <tr class="bb-thin">
              <td>4</td>
              <td>
                <div class="flex">
                  <div class="square-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="200" height="200" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
                  </div>
                  <div class="grow-1 ml-2">
                    <b>Lorem ipsum dolor sit amet</b><br/>
                    <span class="t-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span>
                  </div>
                </div>
              </td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" /><line x1="12" y1="13" x2="12" y2="22" /><polyline points="9 19 12 22 15 19" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="14" y2="13" /></svg></button></td>
            </tr>
            <tr class="bb-thin">
              <td>5</td>
              <td>
                <div class="flex">
                  <div class="square-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="200" height="200" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
                  </div>
                  <div class="grow-1 ml-2">
                    <b>Lorem ipsum dolor sit amet</b><br/>
                    <span class="t-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span>
                  </div>
                </div>
              </td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" /><line x1="12" y1="13" x2="12" y2="22" /><polyline points="9 19 12 22 15 19" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="14" y2="13" /></svg></button></td>
            </tr>
            <tr class="bb-thin">
              <td>6</td>
              <td>
                <div class="flex">
                  <div class="square-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="200" height="200" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
                  </div>
                  <div class="grow-1 ml-2">
                    <b>Lorem ipsum dolor sit amet</b><br/>
                    <span class="t-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span>
                  </div>
                </div>
              </td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" /><line x1="12" y1="13" x2="12" y2="22" /><polyline points="9 19 12 22 15 19" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="14" y2="13" /></svg></button></td>
            </tr>
            <tr class="bb-thin">
              <td>7</td>
              <td>
                <div class="flex">
                  <div class="square-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="200" height="200" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
                  </div>
                  <div class="grow-1 ml-2">
                    <b>Lorem ipsum dolor sit amet</b><br/>
                    <span class="t-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span>
                  </div>
                </div>
              </td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" /><line x1="12" y1="13" x2="12" y2="22" /><polyline points="9 19 12 22 15 19" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="14" y2="13" /></svg></button></td>
            </tr>
            <tr class="bb-thin">
              <td>8</td>
              <td>
                <div class="flex">
                  <div class="square-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="200" height="200" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
                  </div>
                  <div class="grow-1 ml-2">
                    <b>Lorem ipsum dolor sit amet</b><br/>
                    <span class="t-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span>
                  </div>
                </div>
              </td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" /><line x1="12" y1="13" x2="12" y2="22" /><polyline points="9 19 12 22 15 19" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="14" y2="13" /></svg></button></td>
            </tr>
            <tr class="bb-thin">
              <td>9</td>
              <td>
                <div class="flex">
                  <div class="square-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="200" height="200" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
                  </div>
                  <div class="grow-1 ml-2">
                    <b>Lorem ipsum dolor sit amet</b><br/>
                    <span class="t-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span>
                  </div>
                </div>
              </td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" /><line x1="12" y1="13" x2="12" y2="22" /><polyline points="9 19 12 22 15 19" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="14" y2="13" /></svg></button></td>
            </tr>
            <tr class="bb-thin">
              <td>10</td>
              <td>
                <div class="flex">
                  <div class="square-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="200" height="200" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
                  </div>
                  <div class="grow-1 ml-2">
                    <b>Lorem ipsum dolor sit amet</b><br/>
                    <span class="t-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span>
                  </div>
                </div>
              </td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" /><line x1="12" y1="13" x2="12" y2="22" /><polyline points="9 19 12 22 15 19" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="14" y2="13" /></svg></button></td>
            </tr>
            <tr class="bb-thin">
              <td>11</td>
              <td>
                <div class="flex">
                  <div class="square-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="200" height="200" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
                  </div>
                  <div class="grow-1 ml-2">
                    <b>Lorem ipsum dolor sit amet</b><br/>
                    <span class="t-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span>
                  </div>
                </div>
              </td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" /><line x1="12" y1="13" x2="12" y2="22" /><polyline points="9 19 12 22 15 19" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="14" y2="13" /></svg></button></td>
            </tr>
            <tr class="bb-thin">
              <td>12</td>
              <td>
                <div class="flex">
                  <div class="square-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="200" height="200" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
                  </div>
                  <div class="grow-1 ml-2">
                    <b>Lorem ipsum dolor sit amet</b><br/>
                    <span class="t-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span>
                  </div>
                </div>
              </td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" /><line x1="12" y1="13" x2="12" y2="22" /><polyline points="9 19 12 22 15 19" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg></button></td>
              <td><button class="btn-icon btn-sm rounded-full t-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="14" y2="13" /></svg></button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="bt-thin p-2">
        <form class="flex" action="">
          <input type="text" class="unrounded-right" id="site-search" name="site-search" autocomplete="off" aria-label="" placeholder="Search...">
          <button aria-label="Search" class="btn-icon unrounded-left"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="10" cy="10" r="7"></circle><line x1="21" y1="21" x2="15" y2="15"></line></svg></button>
        </form>
      </div>
    </div>
  </div>
</div>

<div>
  <button
    aria-controls="modal-3d"
    aria-expanded="false"
    data-control="toggle"
    data-scroll-lock="true"
    class="modal-control btn btn-primary mb-3"
  >Modal example 3d</button> – with <em>full cover</em> content, no need for a backdrop, and no “click-away”
  <div class="modal-wrapper">
    <div class="modal-panel modal-panel-cover bg-color-background" id="modal-3d">
      <div class="container py-3">
        <div>
          <button class="modal-close btn-icon btn-sm float-right mt-1 t-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
          <h2>Full-Cover Modal</h2>
        </div>
        <hr>
        <div class="grid-md-3-cols grid-gap">
          <div>
            <h4>Department 1
            </h4>
            <ul class="menu mb-3">
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </div>
          <div>
            <h4>Department 2
            </h4>
            <ul class="menu mb-3">
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </div>
          <div>
            <h4>Department 3
            </h4>
            <ul class="menu mb-3">
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </div>
        </div>
        <div class="grid-md-3-cols grid-gap">
          <div>
            <h4>Department 4
            </h4>
            <ul class="menu mb-3">
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </div>
          <div>
            <h4>Department 5
            </h4>
            <ul class="menu mb-3">
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </div>
          <div>
            <h4>Department 6
            </h4>
            <ul class="menu mb-3">
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </div>
        </div>
        <hr/>
        <p class="t-center"><button class="modal-close btn btn-secondary">Close</button></p>
      </div>
    </div>
  </div>
</div>

Design the modal panels any way you want. But you will want to control the width, and control the height for scrollable panels (example 3c). Use `.modal-panel-cover` for full cover modals.

```html
<!-- 3a -->
<div class="modal-panel w-xs m-3 rounded bg-color-background" :class="{ 'active': modal }">...</div>

<!-- 3b -->
<div class="modal-panel w-lg m-3 b-thin rounded bg-color-background" :class="{ 'active': modal }">...</div>

<!-- 3c -->
<div class="modal-panel w-xs height-full-vh flex flex-column rounded bg-color-background" :class="{ 'active': modal }">...</div>

<!-- 3d -->
<div class="modal-panel modal-panel-cover bg-color-background" :class="{ 'active': modal }">...</div>
```