---
title: "Form Elements"
layout: layout.njk
prevPage: "/docs/2-codebase-basics/tables"
nextPage: "/docs/2-codebase-basics/images"
prevButton: "Tables"
nextButton: "Images"
---

<p class="t-lg t-thin">In Codebase, form elements are rendered as block elements, for ease of styling.</p>

If you want to make an input field an inline element, add the layout utility class .inline-block`.

## Input Fields

<label for="text-example">Text:</label>
<input id="text-example" name="examplename" placeholder="Example text input field" type="text">

<label for="email-example">Email:</label>
<input id="email-example" name="examplename" placeholder="Example email input field" type="email">

<label for="tel-example">Tel:</label>
<input id="tel-example" name="examplename" placeholder="Example phone number input field" type="tel">

<label for="search-example">Search:</label>
<input id="search-example" name="examplename" placeholder="Example search input field" type="search">

<label for="number-example">Number:</label>
<input id="number-example" name="examplename" placeholder=" Example number input field" type="number">

<label for="date-example">Date:</label>
<input id="date-example" name="examplename" placeholder="Example date input field" type="date">

<label for="month-example">Month:</label>
<input id="month-example" name="examplename" placeholder="Example month input field" type="month">

<label for="password-example">Password:</label>
<input id="month-example" name="examplename" placeholder="Example password input field" type="password">

```html
<label for="text-example">Text:</label>
<input id="text-example" name="examplename" placeholder="Example text input field" type="text">

<label for="email-example">Email:</label>
<input id="email-example" name="examplename" placeholder="Example email input field" type="email">

<label for="tel-example">Tel:</label>
<input id="tel-example" name="examplename" placeholder="Example phone number input field" type="tel">

<label for="search-example">Search:</label>
<input id="search-example" name="examplename" placeholder="Example search input field" type="search">

<label for="number-example">Number:</label>
<input id="number-example" name="examplename" placeholder=" Example number input field" type="number">

<label for="date-example">Date:</label>
<input id="date-example" name="examplename" placeholder="Example date input field" type="date">

<label for="month-example">Month:</label>
<input id="month-example" name="examplename" placeholder="Example month input field" type="month">

<label for="password-example">Password:</label>
<input id="month-example" name="examplename" placeholder="Example password input field" type="password">
```

## Textareas

<label for="textarea-example">Textarea:</label>
<textarea id="textarea-example" name="examplename" type="textarea" placeholder="Example textarea" rows="4"></textarea>

```html
<label for="textarea-example">Textarea:</label>
<textarea id="textarea-example" name="examplename" type="textarea" placeholder="Example textarea" rows="4"></textarea>
```

## Selects

<label for="single-select-example">Single select:</label>
<select id="single-select-example" name="examplename">
  <option value="first">First option </option>
  <option value="second">Second option </option>
  <option value="third">Third option</option>
</select>

```html
<label for="single-select-example">Single select:</label>
<select id="single-select-example" name="examplename">
  <option value="first">First option </option>
  <option value="second">Second option </option>
  <option value="third">Third option</option>
</select>
```

<label class="mt-3e" for="multi-select-example">Multi-select:</label>
<select id="multi-select-example" name="examplename" multiple size="3">
  <option value="first">First option </option>
  <option value="second">Second option </option>
  <option value="third">Third option</option>
</select>

```html
<label for="multi-select-example">Multi-select:</label>
<select id="multi-select-example" name="examplename" multiple size="3">
  <option value="first">First option </option>
  <option value="second">Second option </option>
  <option value="third">Third option</option>
</select>
```

## Radio Boxes and Checkboxes

<form class="mb-3">
  <input id="radio-1" name="examplename" checked="checked" type="radio">
  <label for="radio-1">Radio 1</label><br>
  <input id="radio-2" name="examplename" type="radio">
  <label for="radio-2">Radio 2</label><br>
  <input id="radio-3" name="examplename" type="radio">
  <label for="radio-3">Radio 3</label>
</form>

```html
<input id="radio-1" name="examplename" checked="checked" type="radio">
<label for="radio-1">Radio 1</label><br>
<input id="radio-2" name="examplename" type="radio">
<label for="radio-2">Radio 2</label><br>
<input id="radio-3" name="examplename" type="radio">
<label for="radio-3">Radio 3</label>
```

<form class="mb-3">
  <input id="checkbox-1" name="examplename" checked="checked" type="checkbox">
  <label for="checkbox-1">Checkbox 1 </label><br>
  <input id="checkbox-2" name="examplename" type="checkbox">
  <label for="checkbox-2">Checkbox 2</label><br>
  <input id="checkbox-3" name="examplename" type="checkbox">
  <label for="checkbox-3">Checkbox 3</label>
</form>

```html
<input id="checkbox-1" name="examplename" checked="checked" type="checkbox">
<label for="checkbox-1">Checkbox 1 </label><br>
<input id="checkbox-2" name="examplename" type="checkbox">
<label for="checkbox-2">Checkbox 2</label><br>
<input id="checkbox-3" name="examplename" type="checkbox">
<label for="checkbox-3">Checkbox 3</label>
```

## Buttons

This is what a Codebase default (classless) button looks like:

<button type="submit">Button</button> – button, i.e. `<button>`

<input value="Submit" type="submit"> – input button `<input type="submit">`

See also the [button component]({{ '/docs/7-simple-components/buttons' " url }}).