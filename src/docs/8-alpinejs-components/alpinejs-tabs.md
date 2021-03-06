---
title: "Tabs (AlpineJS)"
headerTitle: "Tabs"
layout: layout.njk
prevPage: "/docs/8-alpinejs-components/alpinejs-offcanvas"
nextPage: "/docs/8-alpinejs-components/alpinejs-accordions"
prevButton: "AlpineJS offcanvas"
nextButton: "AlpineJS accordions"
---

The Codebase `.tab-control` and `.tab-panel` CSS classes add some minimal styling for horizontal tab systems.

## Example 1

Simple HTML content, and demonstrating a little AlpineJS animation during tab switching.

The tab controls (labels) need to be placed within their own `.flex` block element, so that they appear in a row.

Note: Though labels in this example are numbers from 1 to 3, they are numbered from 0 to 2 in the underlying script.

<div class="tab-wrapper" x-data="{ activeTab:  0 }">
  <div class="flex">
    <label
      @click="activeTab = 0"
      class="tab-control"
      :class="{ 'active': activeTab === 0 }"
    >Tab 1</label>
    <label
      @click="activeTab = 1"
      class="tab-control"
      :class="{ 'active': activeTab === 1 }"
    >Tab 2</label>
    <label
      @click="activeTab = 2"
      class="tab-control"
      :class="{ 'active': activeTab === 2 }"
    >Tab 3</label>
  </div>

  <div class="tab-panel" :class="{ 'active': activeTab === 0 }" x-show.transition.in.opacity.duration.600="activeTab === 0">
    <p>This is the example content of the first tab.</p>
  </div>
  <div class="tab-panel" :class="{ 'active': activeTab === 1 }" x-show.transition.in.opacity.duration.600="activeTab === 1">
    <p>The second tab’s example content.</p>
  </div>
  <div class="tab-panel" :class="{ 'active': activeTab === 2 }" x-show.transition.in.opacity.duration.600="activeTab === 2">
    <p>The content of the third and final tab in this set.</p>
  </div>
</div>

```html
<div class="tab-wrapper" x-data="{ activeTab:  0 }">
  <div class="flex">
    <label
      @click="activeTab = 0"
      class="tab-control"
      :class="{ 'active': activeTab === 0 }"
    >Tab 1</label>
    <label
      @click="activeTab = 1"
      class="tab-control"
      :class="{ 'active': activeTab === 1 }"
    >Tab 2</label>
    <label
      @click="activeTab = 2"
      class="tab-control"
      :class="{ 'active': activeTab === 2 }"
    >Tab 3</label>
  </div>

  <div class="tab-panel" :class="{ 'active': activeTab === 0 }" x-show.transition.in.opacity.duration.600="activeTab === 0">
    <p>This is the example content of the first tab.</p>
  </div>
  <div class="tab-panel" :class="{ 'active': activeTab === 1 }" x-show.transition.in.opacity.duration.600="activeTab === 1">
    <p>The second tab’s example content.</p>
  </div>
  <div class="tab-panel" :class="{ 'active': activeTab === 2 }" x-show.transition.in.opacity.duration.600="activeTab === 2">
    <p>The content of the third and final tab in this set.</p>
  </div>
</div>
```

**Note:** In the Codebase dark theme, front tab labels and panels are lighter set using the `background-alt` color, since this made the front tab more obviously the front tab.

## Example 2

Tab controls and panels are here templated from a JavaScript object (no animation this time).

<div class="tab-wrapper" x-data="tabs()">
  <div class="flex">
    <template x-for="tab in tabs" :key="tab.id">
      <span
        @click="activeTab = tab.id"
        class="tab-control"
        :class="{ 'active': getActiveStatus(tab.id)}"
        x-text="tab.title"
      ></span>
    </template>
  </div>

  <template x-for="tab in tabs" :key="tab.id">
    <div
      class="tab-panel"
      :class="{ 'active': getActiveStatus(tab.id)}">
      <p x-text="tab.text"></p>
    </div>
  </template>
</div>

<script>
  function tabs() {
    return {
      activeTab: 0,
      tabs: [
        {
          id: 0,
          title: 'First tab',
          text: 'This is the example content of the first tab.'
        },
        {
          id: 1,
          title: 'Second tab',
          text: 'The second tab’s example content.'
        },
        {
          id: 2,
          title: 'Third tab',
          text: 'The content of the third and final tab in this set.'
        }
      ],
      getActiveStatus(id) {
        return id === this.activeTab
      }
    }
  }
</script>

```html
<div class="tab-wrapper" x-data="tabs()">
  <div class="flex">
    <template x-for="tab in tabs" :key="tab.id">
      <span
        @click="activeTab = tab.id"
        class="tab-control"
        :class="{ 'active': getActiveStatus(tab.id)}"
        x-text="tab.title"
      ></span>
    </template>
  </div>

  <template x-for="tab in tabs" :key="tab.id">
    <div
      class="tab-panel"
      :class="{ 'active': getActiveStatus(tab.id)}">
      <p x-text="tab.text"></p>
    </div>
  </template>
</div>

<script>
  function tabs() {
    return {
      activeTab: 0,
      tabs: [
        {
          id: 0,
          title: 'First tab',
          text: 'This is the example content of the first tab.'
        },
        {
          id: 1,
          title: 'Second tab',
          text: 'The second tab’s example content.'
        },
        {
          id: 2,
          title: 'Third tab',
          text: 'The content of the third and final tab in this set.'
        }
      ],
      getActiveStatus(id) {
        return id === this.activeTab
      }
    }
  }
</script>
```