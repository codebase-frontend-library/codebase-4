# Codebase and  Internet Explorer 11

Most designers will not have to support Internet Explorer 11 (2013), because it is already down to ~0.6% browser share (as of February 2021). Microsoft stopped supporting IE11 on PCs on 30 Nov 2020, and will stop supporting it Microsoft 365 on 17 August 2021.

References:

* https://www.stetic.com/market-share/browser/
* https://docs.microsoft.com/en-us/lifecycle/announcements/m365-ie11-microsoft-edge-legacy
* https://en.wikipedia.org/wiki/Internet_Explorer_11

“No longer supported” means exactly that. Microsoft will soon cease issuing bug fixes and security patches to IE11. (All previous versions of Internet Explorer have long since stopped being supported.)

## Codebase Does Not _Officially_ Support IE11

Most styles in Codebase will work on IE11. But I have one project ongoing that “needs to work on IE11”, so a few minor modifications had been introduced to make this happen – in v4.0.2. (See [LOG.md](LOG.md).)

There are a few things that will not work on IE11 – because they were added to the CSS language after IE11 came out in 2013. But there are alternatives in Codebase that you can use.

* _CSS grid_ containers `.container-grid` etc. will not work – use traditional containers `.container` etc. instead.
* The real _CSS grid_ system will not – use Codebase flexbox pseudo grids instead.
* Utility classes using responsive units `vw` (e.g. `.mt-responsive` and `vh` (e.g. `.h-full-vh`) now have older unit fallbacks (px and rem) built in - so, you can still use these utility classes. IE11 will get the non-responsive fallback values.

Also, the Codebase Activator JavaScript `activator.js` does not have backwards compatibility that reaches as far back as IE11. However, as of Codebase v.4.0.2, a jQuery-dependant alternative version has been added, named `acivator.jquery.js` – you will find this in the `dist/` folder.

So, to support IE11 using Codebase, you must also switch to `activator.jquery.js` and add an old version of jQuery to your project. (jQuery is not included in the Codebase project repository.)

**Note:** you need to use jQuery 1.x or 2.x — I recommend the last version available: jQuery 2.2.4. This is because from version 3.x jQuery is fully asynchronous, so it doesn’t trigger code inside a `$(document).ready(function(){});`

Add a source link to your jQuery _before_ you link to `activator.jquery.js`, just before the close of your `</body>` tag.

```html
    ...

    <script src="jquery-2.2.4.min.js"></script>
    <script src="activator.jquery.js"></script>
  </body>
</html>
```

Reference:

https://github.com/jquery/jquery/issues/3194