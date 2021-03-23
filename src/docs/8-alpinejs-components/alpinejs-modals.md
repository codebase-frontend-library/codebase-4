---
title: "Modals (AlpineJS)"
headerTitle: "Modals"
layout: layout.njk
prevPage: "/docs/8-alpinejs-components/alpinejs-dropdowns"
nextPage: "/docs/8-alpinejs-components/alpinejs-offcanvas"
prevButton: "AlpineJS dropdowns"
nextButton: "AlpineJS offcanvas"
---

<p class="t-lg t-thin">Codebase Alpine modals can be used for all sorts of things.</p>

## The Simplest Modal

<div x-data="{modal: false}">
<button class="btn btn-primary mb-3 scroll-lock" @click="modal = !modal" :aria-expanded="modal ? 'true' : 'false'">Modal example 1a</button> – without “click-away”
  <div class="modal-wrapper" :class="{ 'active': modal }">
    <div class="backdrop backdrop-shaded"></div>
    <div class="modal-panel m-3 p-3 b-thin rounded bg-color-background" :class="{ 'active': modal }">
      <p>Modal content. Click the “Close” button to dismiss.</p>
      <button class="float-right scroll-unlock" @click="modal = false">Close</button>
    </div>
  </div>
</div>

The user can only dismiss the modal above by clicking the “Close” button.

```html
<div x-data="{modal: false}">
<button class="btn btn-primary mb-3 scroll-lock" @click="modal = !modal" :aria-expanded="modal ? 'true' : 'false'">Modal example</button>
  <div class="modal-wrapper" :class="{ 'active': modal }">
    <div class="backdrop backdrop-shaded"></div>
    <div class="modal-panel m-3 p-3 b-thin rounded bg-color-background" :class="{ 'active': modal }">
      <p>Modal content.</p>
      <button class="float-right scroll-unlock" @click="modal = false">Close</button>
    </div>
  </div>
</div>
```

<div x-data="{modal: false}">
  <button class="btn btn-primary mb-3 scroll-lock" @click="modal = !modal" :aria-expanded="modal ? 'true' : 'false'">Modal example 1b</button> – with “click away”
  <div class="modal-wrapper" :class="{ 'active': modal }">
    <div class="backdrop backdrop-shaded scroll-unlock" x-show.transition.opacity.duration.600ms="modal" @click="modal = false"></div>
    <div class="modal-panel p-3 b-thin rounded bg-color-background" :class="{ 'active': modal }">
      <p>Modal content. Click away to dismiss.</p>
    </div>
  </div>
</div>

(Best practice is to include a “Close” button, but in this example I want you to try the click-away function.)

The simplest Alpine modal consists of five units:

* The Alpine modal control button (can be part of the same Alpine component, or in a separate component – see [example 1c](#modal-control-button-as-a-separate-component) below)
* The `.modal-wrapper` element, containing three units:
  * The `.backdrop`
  * The `.modal-panel` element, containing:
    * The Alpine modal-close button

The above elements have minimal styling – just enough to make the modal work. The `.modal-control` and `.modal-close` classes need to be applied to HTML `<button>` elements. Put no other styling on the `.modal-wrapper` – it is used as a hidden “pocket” for your modal backdrop and panel when not activated. Style the `.modal-panel` how you like, e.g. using decoration utilities and/or layouts.

The backdrop element is there to prevent user interaction with anything elsefor the purpose of adding a “click-away” to dismiss functionality. Think of the backdrop as a massive, full-screen button behind the modal panel, that a visitor can click on to dismiss the modal.

By default, the `.backdrop` has no background color assigned (it is invisible), but you can add the modifier `.backdrop-shaded` to get the semi-transparent blurred black backdrop that most of these examples are using, or you can add `.backdrop-black` for a fully black backdrop, as you can see in the “lightbox” examples below.

The backdrop is placed inside the modal wrapper, _before_ the modal panel (so that it appears _behind_ the modal panel):

```html
<div class="backdrop backdrop-shaded scroll-unlock" x-show.transition.opacity.duration.600ms="modal" @click="modal = false"></div>
```

As follows:

```html
<div x-data="{modal: false}">
  <button class="btn btn-primary mb-3 scroll-lock" @click="modal = !modal" :aria-expanded="modal ? 'true' : 'false'">Modal example 1b</button> – with “click away”
  <div class="modal-wrapper" :class="{ 'active': modal }">
    <div class="backdrop backdrop-shaded scroll-unlock" x-show.transition.opacity.duration.600ms="modal" @click="modal = false"></div>
    <div class="modal-panel p-3 b-thin rounded bg-color-background" :class="{ 'active': modal }">
      <p>Modal content.</p>
      <button class="float-right scroll-unlock" @click="modal = false">Close</button>
    </div>
  </div>
</div>
```

### Modal Control Button as a Separate Component

<div x-data="{}" class="mb-3">
  <button class="btn btn-primary scroll-lock" @click="$dispatch('modal-1c')">Modal example 1c</button> – with a button in a separate Alpine component.
</div>

Having a button in a separate Alpine component (using a communication event bus) enables you to have the button and the modal in different parts of a webage (and it enables you to have more than one button per modal).

Idea copied from: [https://codewithhugo.com/alpinejs-component-communication-event-bus/](https://codewithhugo.com/alpinejs-component-communication-event-bus/)

<div x-data="{ modal: false }">
  <div
    class="modal-wrapper"
    :class="{ 'active': modal }"
    x-on:modal-1c.window="modal = !modal"
    >
    <div class="backdrop backdrop-shaded scroll-unlock" x-show.transition.opacity.duration.600ms="modal" @click="modal = false"></div>
    <div class="modal-panel container-sm p-3 b-thin rounded bg-color-background" :class="{ 'active': modal }">
      <p>This modal was triggered from a separate button component outside.</p>
      <button class="float-right scroll-unlock" @click="modal = false">Close</button>
    </div>
  </div>
</div>

```html
<!-- The button component (separate) -->
<div x-data="{}" class="mb-3">
  <button class="btn btn-primary scroll-lock" @click="$dispatch('modal-ex')">Modal example</button>
</div>

<!-- The modal component (without button) -->
<div x-data="{ modal: false }">
  <div
    class="modal-wrapper"
    :class="{ 'active': modal }"
    x-on:modal-ex.window="modal = !modal"
    >
    <div class="backdrop backdrop-shaded scroll-unlock" x-show.transition.opacity.duration.600ms="modal" @click="modal = false"></div>
    <div class="modal-panel container-sm p-3 b-thin rounded bg-color-background" :class="{ 'active': modal }">
      <p>Modal content.</p>
      <button class="float-right scroll-unlock" @click="modal = false">Close</button>
    </div>
  </div>
</div>
```

## Styling Modal Panels

<div x-data="{modal: false}">
  <button class="btn btn-primary mb-3 scroll-lock" @click="modal = !modal" :aria-expanded="modal ? 'true' : 'false'">Modal example 2a</button> – panel is dressed as a card, with “click-away”
  <div class="modal-wrapper" :class="{ 'active': modal }">
    <div class="backdrop backdrop-shaded scroll-unlock" x-show.transition.opacity.duration.600ms="modal" @click="modal = false"></div>
    <div class="modal-panel w-xs m-3 b-thin rounded bg-color-background" :class="{ 'active': modal }">
      <div class="p-block bt-heavy b-color-success bg-color-success-alt">
        <h4 class="m-0">Modal header</h4>
      </div>
      <div class="p-2">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="p-2 flex flex-end">
        <button class="float-right btn-sm t-sm t-uppercase scroll-unlock" @click="modal = false">Dismiss</button>
      </div>
    </div>
  </div>
</div>

<div x-data="{modal: false}">
  <button class="btn btn-primary mb-3 scroll-lock" @click="modal = !modal" :aria-expanded="modal ? 'true' : 'false'">Modal example 2b</button> – with a grid system, with “click-away”
  <div class="modal-wrapper" :class="{ 'active': modal }">
    <div class="backdrop backdrop-shaded scroll-unlock" x-show.transition.opacity.duration.600ms="modal" @click="modal = false"></div>
    <div class="modal-panel w-lg m-3 b-thin rounded flex flex-column bg-color-background" :class="{ 'active': modal }">
      <div class="bb-thin p-block">
        <button class="btn-icon btn-sm float-right mt-1 scroll-unlock" @click="modal = false"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></button>
        <h4 class="my-1">Modal Header</h4>
      </div>
      <div class="flex-item-grow-1 overflow-y p-2 grid grid-md-2-cols grid-gap">
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
          <button class="btn btn-secondary btn-small scroll-unlock" @click="modal = false">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>

<div x-data="{ modal: false, rows: [1,2,3,4,5,6,7,8,9,10,11,12] }">
  <button class="btn btn-primary mb-3 scroll-lock" @click="modal = !modal" :aria-expanded="modal ? 'true' : 'false'">Modal example 2c</button> – with scrollable content, and no “click away”
  <div class="backdrop backdrop-shaded scroll-unlock" x-show.transition.opacity.duration.600ms="modal"></div>
  <div class="modal-wrapper" :class="{ 'active': modal }">
    <div class="modal-panel w-xs height-full-vh flex flex-column rounded bg-color-background" :class="{ 'active': modal }">
      <div class="bb-thin p-block">
        <button class="float-right mt-1 btn-sm scroll-unlock" @click="modal = false">Dismiss</button>
        <h4 class="my-1">Header</h4>
      </div>
      <div class="grow-1 overflow-y">
        <p class="m-2">Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>
        <p class="m-2">Number of items: <span x-text="rows.length"></span>
        <table class="table table-borderless bt-thin tracks">
          <tbody>
          <template x-for="row in rows" :key="row">
            <tr class="bb-thin" x-show="row">
              <td x-text="row"></td>
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
              <td>
                <button class="btn-icon btn-sm rounded-full t-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" /><line x1="12" y1="13" x2="12" y2="22" /><polyline points="9 19 12 22 15 19" /></svg>
                </button>
              </td>
              <td>
                <button class="btn-icon btn-sm rounded-full t-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg>
                </button>
              </td>
              <td>
                <button class="btn-icon btn-sm rounded-full t-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="14" y2="13" /></svg>
                </button>
              </td>
            </tr>
          </template>
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

Use `.modal-panel.modal-panel-cover` for a full cover modal:

<div x-data="{modal: false}">
  <button class="btn btn-primary mb-3 scroll-lock" @click="modal = !modal" :aria-expanded="modal ? 'true' : 'false'">Modal example 2d</button> – with <em>full cover</em> content, no need for a backdrop, and no “click-away”
  <div class="modal-wrapper" :class="{ 'active': modal }">
    <div class="modal-panel modal-panel-cover bg-color-background" :class="{ 'active': modal }">
      <div class="container-grid py-3">
        <div>
          <button class="float-right btn-icon btn-sm scroll-unlock" @click="modal = false">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>
        <h2>Full-Cover Modal</h2>
        <hr>
        <div class="grid-sm-3-cols grid-gap">
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
        <div class="grid-sm-3-cols grid-gap">
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
        <p class="t-center"><button class="btn btn-secondary scroll-unlock" @click="modal = false">Close</button></p>
      </div>
    </div>
  </div>
</div>

Design the modal panels any way you want. But you will want to control the width, and control the height for scrollable panels (example 3c). Use `.modal-panel-cover` for full cover modals.

```html
<!-- Example 2a -->
<div class="modal-panel w-xs" :class="{ 'active': modal }">...</div>

<!-- Example 2b -->
<div class="modal-panel w-lg flex flex-column" :class="{ 'active': modal }">...</div>

<!-- Example 2c -->
<div class="modal-panel w-xs flex flex-column" :class="{ 'active': modal }">...</div>

<!-- Example 2d -->
<div class="modal-panel modal-panel-cover" :class="{ 'active': modal }">...</div>
```

(In addition the the modal and layout classes in the example code above, you will need decorative utility classes for borders, box shadows, background colors, etc.)

## A Modal as a Lightbox

Modals can be made into a lightbox by placing the “close” button within the backdrop instead of within the panel. In these examples I have also used .backdrop-black so that the visitor’ more is more drawn to the image. (And I have removed the click-outside.)

<p class="panel-responsive bl-heavy b-color-secondary bg-color-secondary-alt">Codebase modals have their content width and height and constrained to fit within the viewport (with the max-height further constrained, to account for the iOS Safari browser bar). Therefore, oversized images will be scaled down if necessary.</p>

In these examples, the _close_ (dismiss) button is within the black backdrop’s top-right corner using flex layout.

<div x-data="{modal: false}">
  <button class="btn btn-primary mb-3 scroll-lock" @click="modal = !modal" :aria-expanded="modal ? 'true' : 'false'">Modal example 3a</button> – modal with a tall narrow image
  <div class="modal-wrapper" :class="{ 'active': modal }">
    <div class="backdrop backdrop-black scroll-unlock flex flex-top flex-end p-2">
      <button class="modal-close btn btn-icon bg-transparent b-0" @click="modal = false">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </button>
    </div>
    <div class="modal-panel" :class="{ 'active': modal }">
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="500" height="1000" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
      <p class="p-block t-color-ui-text t-center">A tall narrow image (500px &times; 1000px)</p>
    </div>
  </div>
</div>

<div x-data="{modal: false}">
  <button class="btn btn-primary mb-3 scroll-lock" @click="modal = !modal" :aria-expanded="modal ? 'true' : 'false'">Modal example 3b</button> – modal with a short wide image
  <div class="modal-wrapper" :class="{ 'active': modal }">
    <div class="backdrop backdrop-black scroll-unlock flex flex-top flex-end p-2">
      <button class="modal-close btn btn-icon bg-transparent b-0" @click="modal = false">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </button>
    </div>
    <div class="modal-panel p-3" :class="{ 'active': modal }">
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="2000" height="500" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
      <p class="p-block t-color-ui-text t-center">A short wide image (2000px &times; 500px)</p>
    </div>
  </div>
</div>

<div x-data="{modal: false}">
  <button class="btn btn-primary mb-3 scroll-lock" @click="modal = !modal" :aria-expanded="modal ? 'true' : 'false'">Modal example 3c</button> – modal with a gigantic image
  <div class="modal-wrapper" :class="{ 'active': modal }">
    <div class="backdrop backdrop-black scroll-unlock flex flex-top flex-end p-2">
      <button class="modal-close btn btn-icon bg-transparent b-0" @click="modal = false">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </button>
    </div>
    <div class="modal-panel p-3" :class="{ 'active': modal }">
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="2000" height="2000" style="max-width: 100%; height: auto;"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(255,0,0,.5)" /></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)" /><stop offset="50%" stop-color="rgba(255,255,255,0)" /><stop offset="95%" stop-color="rgba(0,255,0,.5)" /></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')" /><rect width="100%" height="100%" fill="url('#gradient2')" /></svg>
      <p class="p-block t-color-ui-text t-center">A tall wide image (2000px &times; 2000px)</p>
    </div>
  </div>
</div>

```html
<div x-data="{modal: false}">
  <button class="btn btn-primary mb-3 scroll-lock" @click="modal = !modal" :aria-expanded="modal ? 'true' : 'false'">Modal example</button>
  <div class="modal-wrapper" :class="{ 'active': modal }">
    <div class="backdrop backdrop-black scroll-unlock flex flex-top flex-end p-2">
      <button class="modal-close btn btn-transparent btn-icon b-0" @click="modal = false">
        ×
      </button>
    </div>
    <div class="modal-panel p-3" :class="{ 'active': modal }">
      <img src="" alt="">
      <p class="p-block -color-ui-text t-center">Figure legend</p>
    </div>
  </div>
</div>
```

## Scroll-Lock

You can improve the user experience of modals by adding a “scroll lock” – to prevent the page scrolling behind the opened modal.

All you need for this is a tiny JavaScript that looks for some extra CSS classes that you will add to your AlpineJS modal components (`.scroll-lock` on the controller button, and `.scroll-unlock` on the close button and the optional “click away” click event on the backdrop.

The scroll-lock JavaScript is as follows:

```js
const scrLock = Array.from(document.querySelectorAll('.scroll-lock'))
const scrUnlock = Array.from(document.querySelectorAll('.scroll-unlock'))

scrLock.forEach(el => {
  el.addEventListener('click', () => {
    document.querySelector('body').classList.add('body-scroll-lock')
  });
})

scrUnlock.forEach(el => {
  el.addEventListener('click', () => {
    document.querySelector('body').classList.remove('body-scroll-lock')
  });
})
```

The script above just adds or removes the CSS class `.body-scroll-lock` to/from your `<body>` tag.

The Codebase CSS class `.body-scroll-lock` is what actually performs the scroll lock:

```css
.body-scroll-lock {
  touch-action: none;
  overflow: hidden;
}
```