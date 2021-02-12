/* eslint-env browser */
/* jshint browser: true */

// `body.theme-dark` / `body.theme-light` CSS class switcher

(function () {
  'use strict';

  const themeToggle = document.querySelectorAll('.theme-toggle');

  themeToggle.forEach(element => {
    element.addEventListener('click', function() {
      themeSwitcher();
    });
  });

  function themeDark() {
    sessionStorage.setItem("codebase", "dark");
    document.body.classList.remove('theme-light');
    document.body.classList.add('theme-dark');
  }

  function themeLight() {
    sessionStorage.setItem("codebase", "light");
    document.body.classList.remove('theme-dark');
    document.body.classList.add('theme-light');
  }

  function themeSwitcher() {
    if ( sessionStorage.getItem('codebase') === 'dark' ) {
      themeLight();
    } else
    if ( sessionStorage.getItem('codebase') === 'light' ) {
      themeDark();
    }
  }

  function themePref() {
    if ( window.matchMedia('(prefers-color-scheme: dark)').matches ) {
      themeDark();
    } else
    if ( window.matchMedia('(prefers-color-scheme: light)').matches ) {
      themeLight();
    } else {
      // Default is light
      themeLight();
    }
  }

  function themeInit() {
    if ( sessionStorage.getItem('codebase') === 'dark' ) {
      themeDark();
    } else
    if ( sessionStorage.getItem('codebase') === 'light' ) {
      themeLight();
    } else {
      themePref();
    }
  }

  themeInit();

}());
